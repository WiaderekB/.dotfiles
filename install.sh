#!/usr/bin/env bash

set -Eeuo pipefail

REPO_URL="https://github.com/WiaderekB/.dotfiles.git"
DOTFILES_DIR="${DOTFILES_DIR:-$HOME/.dotfiles}"
SCRIPT_PATH="${BASH_SOURCE[0]:-}"
SCRIPT_DIR=""
if [[ -n "$SCRIPT_PATH" ]]; then
  SCRIPT_DIR="$(cd "$(dirname "$SCRIPT_PATH")" 2>/dev/null && pwd -P || true)"
fi
SKIP_PACKAGES=false
BACKUP_ROOT=""

usage() {
  cat <<'EOF'
Usage: ./install.sh [--skip-packages]

  --skip-packages  Skip Homebrew and Brewfile installation (useful for tests).
EOF
}

log() {
  printf '[dotfiles] %s\n' "$*"
}

fail() {
  printf '[dotfiles] ERROR: %s\n' "$*" >&2
  exit 1
}

for arg in "$@"; do
  case "$arg" in
    --skip-packages) SKIP_PACKAGES=true ;;
    -h|--help) usage; exit 0 ;;
    *) fail "Unknown option: $arg" ;;
  esac
done

[[ "$(uname -s)" == "Darwin" ]] || fail "This setup supports macOS only."

ensure_command_line_tools() {
  if xcode-select -p >/dev/null 2>&1; then
    return
  fi

  log "Requesting installation of Apple's Command Line Tools."
  xcode-select --install
  fail "Finish the Command Line Tools installation, then run this script again."
}

load_homebrew() {
  if [[ -x /opt/homebrew/bin/brew ]]; then
    eval "$(/opt/homebrew/bin/brew shellenv)"
  elif [[ -x /usr/local/bin/brew ]]; then
    eval "$(/usr/local/bin/brew shellenv)"
  fi
}

install_homebrew() {
  load_homebrew
  if command -v brew >/dev/null 2>&1; then
    return
  fi

  log "Installing Homebrew."
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  load_homebrew
  command -v brew >/dev/null 2>&1 || fail "Homebrew installation did not finish correctly."
}

prepare_repository() {
  if [[ -d "$DOTFILES_DIR/.git" ]]; then
    if [[ "$SCRIPT_DIR" != "$(cd "$DOTFILES_DIR" && pwd -P)" ]]; then
      log "Updating the existing repository (fast-forward only)."
      git -C "$DOTFILES_DIR" pull --ff-only
    fi
    return
  fi

  if [[ -e "$DOTFILES_DIR" ]]; then
    local old_dir="${DOTFILES_DIR}.pre-git.$(date +%Y%m%d-%H%M%S)"
    log "Moving the existing non-Git directory to $old_dir"
    mv "$DOTFILES_DIR" "$old_dir"
  fi

  log "Cloning dotfiles into $DOTFILES_DIR"
  git clone "$REPO_URL" "$DOTFILES_DIR"
}

backup_path() {
  local destination="$1"
  local relative="${destination#"$HOME"/}"

  if [[ -z "$BACKUP_ROOT" ]]; then
    BACKUP_ROOT="$HOME/.dotfiles-backup/$(date +%Y%m%d-%H%M%S)"
  fi

  mkdir -p "$BACKUP_ROOT/$(dirname "$relative")"
  mv "$destination" "$BACKUP_ROOT/$relative"
  log "Backed up $destination"
}

link_path() {
  local source="$DOTFILES_DIR/$1"
  local destination="$HOME/$2"

  [[ -e "$source" ]] || fail "Missing source: $source"

  if [[ -L "$destination" && "$(readlink "$destination")" == "$source" ]]; then
    log "Already linked: $destination"
    return
  fi

  if [[ -e "$destination" || -L "$destination" ]]; then
    backup_path "$destination"
  fi

  mkdir -p "$(dirname "$destination")"
  ln -s "$source" "$destination"
  log "Linked $destination"
}

install_packages() {
  log "Installing the Brewfile."
  brew bundle --file="$DOTFILES_DIR/Brewfile" --no-upgrade
}

install_links() {
  link_path "configs/.zprofile" ".zprofile"
  link_path "configs/.zshrc" ".zshrc"
  link_path "configs/.gitconfig" ".gitconfig"
  link_path "configs/gitignore_global" ".config/git/ignore"
  link_path "configs/ssh_config" ".ssh/config"
  link_path "configs/starship.toml" ".config/starship.toml"
  link_path "configs/tmux.conf" ".config/tmux/tmux.conf"
  link_path "configs/ghostty/config.ghostty" ".config/ghostty/config.ghostty"
  link_path "configs/zed/settings.json" ".config/zed/settings.json"

  # Karabiner watches the directory and does not reliably reload a symlinked file.
  link_path "configs/karabiner" ".config/karabiner"

  chmod 700 "$HOME/.ssh"
  chmod 600 "$DOTFILES_DIR/configs/ssh_config"
}

verify_installation() {
  log "Verifying configuration."
  zsh -n "$HOME/.zshrc"
  git config --global --list >/dev/null

  if command -v starship >/dev/null 2>&1; then
    local starship_errors
    starship_errors="$(STARSHIP_CONFIG="$HOME/.config/starship.toml" starship print-config 2>&1 >/dev/null)" || \
      fail "Starship rejected its configuration."
    [[ "$starship_errors" != *"Unable to parse"* ]] || \
      fail "Starship could not parse ~/.config/starship.toml."
  fi

  if command -v tmux >/dev/null 2>&1; then
    tmux -L dotfiles-check -f "$HOME/.config/tmux/tmux.conf" \
      start-server \; show-options -gv prefix \; kill-server >/dev/null
  fi
}

main() {
  ensure_command_line_tools
  prepare_repository

  if [[ "$SKIP_PACKAGES" == false ]]; then
    install_homebrew
    install_packages
  else
    log "Skipping package installation."
  fi

  install_links
  verify_installation

  log "Setup complete. Open a new terminal window."
  if [[ -n "$BACKUP_ROOT" ]]; then
    log "Previous files are preserved in $BACKUP_ROOT"
  fi
  log "Copy private SSH keys separately; they are intentionally not stored in this repository."
}

main
