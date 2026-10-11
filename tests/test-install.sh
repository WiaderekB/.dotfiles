#!/usr/bin/env bash

set -Eeuo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd -P)"
TEST_HOME="$(mktemp -d "${TMPDIR:-/tmp}/dotfiles-test.XXXXXX")"
trap 'rm -rf "$TEST_HOME"' EXIT

mkdir -p "$TEST_HOME/.config/karabiner"
printf 'old zsh config\n' > "$TEST_HOME/.zshrc"
printf 'old karabiner config\n' > "$TEST_HOME/.config/karabiner/old.json"

run_installer() {
  HOME="$TEST_HOME" \
  DOTFILES_DIR="$REPO_DIR" \
  PATH="/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin" \
    "$REPO_DIR/install.sh" --skip-packages
}

run_installer

[[ -L "$TEST_HOME/.zprofile" ]]
[[ -L "$TEST_HOME/.zshrc" ]]
[[ -L "$TEST_HOME/.gitconfig" ]]
[[ -L "$TEST_HOME/.config/starship.toml" ]]
[[ -L "$TEST_HOME/.config/tmux/tmux.conf" ]]
[[ -L "$TEST_HOME/.config/ghostty/config.ghostty" ]]
[[ -L "$TEST_HOME/.config/zed/settings.json" ]]
[[ -L "$TEST_HOME/.config/karabiner" ]]
[[ ! -e "$TEST_HOME/.config/nvim" ]]
[[ ! -e "$TEST_HOME/.ssh/id_rsa.pub" ]]

backup_count_before="$(find "$TEST_HOME/.dotfiles-backup" -mindepth 1 -maxdepth 1 -type d | wc -l | tr -d ' ')"
run_installer
backup_count_after="$(find "$TEST_HOME/.dotfiles-backup" -mindepth 1 -maxdepth 1 -type d | wc -l | tr -d ' ')"
[[ "$backup_count_before" == "$backup_count_after" ]]

plutil -convert xml1 -o /dev/null -- "$REPO_DIR/configs/zed/settings.json"
plutil -convert xml1 -o /dev/null -- "$REPO_DIR/configs/karabiner/karabiner.json"

printf 'installer test: ok\n'
