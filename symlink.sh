#!/bin/bash
_process() {
    echo "$(date) PROCESSING:  $@" 
    printf "$(tput setaf 6) %s...$(tput sgr0)\n" "$@"
}

_success() {
    local message=$1
    printf "%s✓ Success:%s\n" "$(tput setaf 2)" "$(tput sgr0) $message"
}

link_dotfiles() {
    # Get the absolute path to the script's directory (where the .dotfiles repo is located)
    DOTFILES_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

    _process "→ Symlinking dotfiles in /configs"

    # Set variable for list of files
    files="$DOTFILES_DIR/opt/files"

    if [[ ! -f "$files" ]]; then
        echo "Error: file list not found at $files"
        exit 1
    fi

    # Store IFS separator within a temp variable
    OIFS=$IFS
    # Set the separator to a carriage return & a new line break
    IFS=$'\r\n'
    links=($(cat "${files}"))

    # Loop through array of files
    for index in ${!links[*]}
    do
        link="${links[$index]}"
        _process "→ Linking ${link}"
        # set IFS back to space to split string on
        IFS=$' '
        # create an array of line items
        file=(${link})
        # Create symbolic link, replace "~" with "$HOME" for the destination path
        ln -fs "${DOTFILES_DIR}/${file[0]}" "${file[1]/\~/$HOME}"
    done

    # Reset IFS back
    IFS=$OIFS

    source "${HOME}/.bash_profile"
    [[ $? == 0 ]] && _success "All files have been copied"
}

link_dotfiles