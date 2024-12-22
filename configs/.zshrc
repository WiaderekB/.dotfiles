# General PATH configurations
export PATH="$HOME/bin:/usr/local/bin:/usr/local/sbin:/Applications/Docker.app/Contents/Resources/bin:$PATH"

# Set GOPATH and add it to PATH
export GOPATH="$HOME/go"
export PATH="$PATH:$GOPATH/bin"

# Aliases
alias cat="bat"
alias ls="eza --icons"
alias la="eza -la --icons"
alias tree="eza --tree --level=2 --icons"
alias grep="grep --color"
alias ni="nvim"

# Starship prompt initialization
eval "$(starship init zsh)"

# Vi mode
bindkey -v
export KEYTIMEOUT=1

# Function for clearing and file listing (optional, lightweight version)
fm() {
  clear
  precmd() { eza -lah }
  preexec() { clear }
}
mf() { precmd() {}; preexec() {}; } # Disable `fm` functionality
mf  