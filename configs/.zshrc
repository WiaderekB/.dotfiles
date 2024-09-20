# General PATH configurations
export PATH="$HOME/bin:/usr/local/bin:$PATH"
export PATH="$PATH:/Applications/Docker.app/Contents/Resources/bin"
export PATH="/usr/local/sbin:$PATH"

# Set GOPATH and add it to PATH
export GOPATH="$HOME/go"
export PATH=$PATH:$GOPATH/bin

# Aliases
alias cat="bat"
alias ni="nvim"
alias ls="eza --icons"
alias la="eza -la --icons"
alias grep="grep --color"
alias nmap="grc nmap"
alias "##"="sudo su"

# Starship prompt initialization
eval "$(starship init zsh)"

# Custom VM options for JetBrains tools
___MY_VMOPTIONS_SHELL_FILE="${HOME}/.jetbrains.vmoptions.sh"
if [ -f "${___MY_VMOPTIONS_SHELL_FILE}" ]; then . "${___MY_VMOPTIONS_SHELL_FILE}"; fi

# sudo-command-line function
sudo-command-line() {
  [[ -z $BUFFER ]] && LBUFFER="$(fc -ln -1)"
  local WHITESPACE=""
  if [[ ${LBUFFER:0:1} = " " ]]; then
    WHITESPACE=" "
    LBUFFER="${LBUFFER:1}"
  fi

  {
    local EDITOR=${SUDO_EDITOR:-${VISUAL:-$EDITOR}}
    if [[ -z "$EDITOR" ]]; then
      case "$BUFFER" in
        sudo\ -e\ *) __sudo-replace-buffer "sudo -e" "" ;;
        sudo\ *) __sudo-replace-buffer "sudo" "" ;;
        *) LBUFFER="sudo $LBUFFER" ;;
      esac
      return
    fi
    local cmd="${${(Az)BUFFER}[1]}"
    local realcmd="${${(Az)aliases[$cmd]}[1]:-$cmd}"
    local editorcmd="${${(Az)EDITOR}[1]}"
    if [[ "$realcmd" = (\$EDITOR|$editorcmd|${editorcmd:c}) \
      || "${realcmd:c}" = ($editorcmd|${editorcmd:c}) ]] \
      || builtin which -a "$realcmd" | command grep -Fx -q "$editorcmd"; then
      __sudo-replace-buffer "$cmd" "sudo -e"
      return
    fi
    case "$BUFFER" in
      $editorcmd\ *) __sudo-replace-buffer "$editorcmd" "sudo -e" ;;
      \$EDITOR\ *) __sudo-replace-buffer '$EDITOR' "sudo -e" ;;
      sudo\ -e\ *) __sudo-replace-buffer "sudo -e" "$EDITOR" ;;
      sudo\ *) __sudo-replace-buffer "sudo" "" ;;
      *) LBUFFER="sudo $LBUFFER" ;;
    esac
  } always {
    LBUFFER="${WHITESPACE}${LBUFFER}"
    zle && zle redisplay # only run redisplay if zle is enabled
  }
}

zle -N sudo-command-line

# Custom projects function
p() {
  proj=$(find ~/Projects -maxdepth 1 -mindepth 1 -type d |fzf)
  cd $proj
  source .source
}
# Function for fzf integration
fzfm(){
  alias cd='cd $(find -type d -print \( -name "^[^.]"\)|fzf)'
  alias vi='nvim $(find -maxdepth 1 -type d -print|fzf)'
}

# Terminal clearing and file listing functions
fm () {
  clear
  precmd  (){ eza -lah}
  preexec(){ clear}
}

mf () {
  precmd () {}
  preexec () {}
}
mf

# Extra configurations
[[ -s "/etc/grc.zsh" ]] && source /etc/grc.zsh
[ "$(tty)" = "/dev/tty1" ] && ! pgrep -x Xorg >/dev/null && exec startxexport PATH="/usr/local/opt/postgresql@15/bin:$PATH"