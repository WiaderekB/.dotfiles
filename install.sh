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
            /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
            brew install git
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

# Function to install packages
install_packages() {
    local package_manager=$1
    while IFS= read -r package; do
        log "Installing $package"
        case $package_manager in
            brew)
                brew install $package
                ;;
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
        ln -fs "$DOTFILES_DIR/$src" "${dest/\~/$HOME}"
        log "Linked $src to $dest"
    done < "$FILES_FILE"
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

    log "Cloning repository"
    git clone $REPO_URL $DOTFILES_DIR
    cd $DOTFILES_DIR

    log "Choose your package manager (brew/dnf/apt):"
    read package_manager

    log "Installing packages"
    install_packages $package_manager

    log "Creating symlinks"
    link_dotfiles

    log "Setting up cron job"
    setup_cron

    log "Setup complete"
}

main