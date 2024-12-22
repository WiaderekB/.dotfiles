#!/bin/bash

# Variables
REPO_URL="https://github.com/wiaderekb/.dotfiles.git"
DOTFILES_DIR="$HOME/.dotfiles"
PACKAGES_FILE="$DOTFILES_DIR/opt/packages"
FILES_FILE="$DOTFILES_DIR/opt/files"
LOG_FILE="$HOME/dotfiles_install.log"

# Function to log messages
log() {
    echo "$(date) - $1" | tee -a "$LOG_FILE"
}

# Function to install Git
install_git() {
    if ! command -v git &> /dev/null; then
        log "Git not found. Installing Git..."
        if [[ "$OSTYPE" == "darwin"* ]]; then
            xcode-select --install
        elif [[ -f /etc/fedora-release ]]; then
            sudo dnf install -y git
        elif [[ -f /etc/debian_version ]]; then
            sudo apt-get update
            sudo apt-get install -y git
        else
            log "Unsupported OS. Please install Git manually."
            exit 1
        fi
    else
        log "Git is already installed."
    fi
}

# Function to install Zsh
install_zsh() {
    if ! command -v zsh &> /dev/null; then
        log "Zsh not found. Installing Zsh..."
        if [[ -f /etc/fedora-release ]]; then
            sudo dnf install -y zsh
        elif [[ -f /etc/debian_version ]]; then
            sudo apt-get install -y zsh
        else
            log "Unsupported OS. Please install Zsh manually."
            exit 1
        fi
    else
        log "Zsh is already installed."
    fi
}

# Function to install Starship
install_starship() {
    if ! command -v starship &> /dev/null; then
        log "Installing Starship..."
        curl -sS https://starship.rs/install.sh | sh -s -- --yes
    else
        log "Starship is already installed."
    fi
}

# Function to install packages
install_packages() {
    local package_manager=$1
    while IFS= read -r package; do
        log "Installing $package"
        case $package_manager in
            dnf)
                sudo dnf install -y $package
                ;;
            apt)
                sudo apt-get install -y $package
                ;;
            *)
                log "Unsupported package manager: $package_manager"
                exit 1
                ;;
        esac
    done < "$PACKAGES_FILE"
}

# Function to create symlinks
link_dotfiles() {
    log "Creating symlinks"
    if [[ ! -f "$FILES_FILE" ]]; then
        log "Error: file list not found at $FILES_FILE"
        exit 1
    fi

    while IFS= read -r line; do
        src=$(echo $line | awk '{print $1}')
        dest=$(echo $line | awk '{print $2}')
        mkdir -p "$(dirname "${dest/\~/$HOME}")"
        ln -fs "$DOTFILES_DIR/$src" "${dest/\~/$HOME}"
        log "Linked $src to $dest"
    done < "$FILES_FILE"
}

# Function to source .zshrc
source_zshrc() {
    if [[ -f "$HOME/.zshrc" ]]; then
        log "Sourcing .zshrc"
        source "$HOME/.zshrc"
    else
        log ".zshrc not found"
    fi
}

# Function to set up cron job for updates
setup_cron() {
    (crontab -l 2>/dev/null; echo "0 0 * * * cd $DOTFILES_DIR && git pull && $DOTFILES_DIR/install.sh") | crontab -
    log "Cron job set up for daily updates"
}

# Main script execution
main() {
    log "Installing Git"
    install_git

    log "Installing Zsh"
    install_zsh

    log "Installing Starship"
    install_starship

    if [[ -d "$DOTFILES_DIR" ]]; then
        log "Updating repository"
        cd $DOTFILES_DIR && git pull
    else
        log "Cloning repository"
        git clone $REPO_URL $DOTFILES_DIR
        cd $DOTFILES_DIR
    fi

    log "Choose your package manager (dnf/apt):"
    read package_manager

    log "Installing packages"
    install_packages $package_manager

    log "Creating symlinks"
    link_dotfiles

    log "Sourcing .zshrc"
    source_zshrc

    log "Setting up cron job"
    setup_cron

    log "Changing default shell to Zsh"
    chsh -s $(which zsh)  

    log "Setup complete"
}

main