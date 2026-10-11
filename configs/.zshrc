# Interactive shell configuration.
[[ -o interactive ]] || return

if (( $+commands[bat] )); then
  alias cat='bat --color=always'
fi

if (( $+commands[eza] )); then
  alias ls='eza --icons'
  alias la='eza -la --icons'
  alias tree='eza --tree --level=2 --icons'
fi

alias grep='grep --color=auto'

if (( $+commands[fzf] )); then
  source <(fzf --zsh)
fi

if (( $+commands[starship] )); then
  eval "$(starship init zsh)"
fi

bindkey -v
export KEYTIMEOUT=1

homebrew_prefix="${HOMEBREW_PREFIX:-}"
if [[ -n "$homebrew_prefix" ]]; then
  [[ -r "$homebrew_prefix/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh" ]] && \
    source "$homebrew_prefix/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh"
  [[ -r "$homebrew_prefix/share/zsh-autosuggestions/zsh-autosuggestions.zsh" ]] && \
    source "$homebrew_prefix/share/zsh-autosuggestions/zsh-autosuggestions.zsh"
fi
unset homebrew_prefix
