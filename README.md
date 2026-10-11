# macOS dotfiles

Clean, repeatable setup for a new Mac. The installer:

- installs Homebrew when it is missing;
- installs the apps and command-line tools declared in `Brewfile`;
- creates symlinks for the managed configuration files;
- backs up existing files instead of deleting them;
- verifies Zsh, Git, Starship and tmux configuration.

## Install

On a new Mac, open Terminal and run:

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/WiaderekB/.dotfiles/main/install.sh)"
```

If macOS first asks to install Command Line Tools, finish that installation and run the command again.

The script is idempotent. Existing files that need to be replaced are moved to
`~/.dotfiles-backup/<timestamp>/`.

## What is managed

- Zsh, Starship and a small tmux configuration
- Git and a global ignore file
- SSH host aliases (private keys are never committed)
- Ghostty, Zed and Karabiner settings
- Homebrew packages and applications from `Brewfile`

## After installation

1. Copy private SSH keys through a secure channel and set their permissions to `600`.
2. Open Karabiner-Elements once and grant the permissions requested by macOS.
3. Sign in to Raycast, Zed and GitHub where needed.

Neovim and VS Code are intentionally not part of this setup.
