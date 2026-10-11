# Homebrew uses /opt/homebrew on Apple Silicon and /usr/local on Intel Macs.
if [[ -x /opt/homebrew/bin/brew ]]; then
  eval "$(/opt/homebrew/bin/brew shellenv)"
elif [[ -x /usr/local/bin/brew ]]; then
  eval "$(/usr/local/bin/brew shellenv)"
fi

# User-installed tools. Zsh keeps only directories that actually exist.
typeset -U path PATH
[[ -d "$HOME/.local/bin" ]] && path=("$HOME/.local/bin" $path)
[[ -d "$HOME/go/bin" ]] && path=("$HOME/go/bin" $path)
