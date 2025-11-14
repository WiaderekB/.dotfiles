
# Aliases
alias cat="bat --color always"
alias ls="eza --icons"
alias la="eza -la --icons"
alias tree="eza --tree --level=2 --icons"
alias grep="grep --color"
alias ni="nvim"
alias f="fzf --preview 'bat --color=always {}' --height 40% --layout=reverse --border"
alias c="clear"
alias copy="pbcopy <"

fh() {
  eval $( ([ -n "$ZSH_NAME" ] && fc -l 1 || history) | fzf +s --tac | sed 's/ *[0-9]* *//')
}

fd() {
  local dir
  dir=$(find ${1:-.} -path '*/\.*' -prune \
                  -o -type d -print 2> /dev/null | fzf +m) &&
  cd "$dir"
}

# Starship prompt initialization
eval "$(starship init zsh)"

source <(fzf --zsh)

# Vi mode
bindkey -v
export KEYTIMEOUT=1

# Function for clearing and file listing (optional, lightweight version)
fm() {
  clear;
  precmd() { eza -lah; };
  preexec() { clear; };
}

mf() { precmd() {}; preexec() {}; } # Disable `fm` functionality
mf  source /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source /usr/local/share/zsh-autosuggestions/zsh-autosuggestions.zsh
