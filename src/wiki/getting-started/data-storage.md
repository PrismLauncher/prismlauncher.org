---
eleventyNavigation:
  key: Data storage
  parent: Getting Started
  order: 11
--- 
# Data Location

Prism Launcher stores your data in your OS's standard application data folder. Below is a table containing the default locations:

| OS               | Folder                                                          |
| ---------------- | --------------------------------------------------------------- |
| Windows          | `%APPDATA%/PrismLauncher`                                       |
| macOS            | `~/Library/Application Support/PrismLauncher`                   |
| Linux (Standard) | `~/.local/share/PrismLauncher`                                  |
| Linux (Flatpak)  | `~/.var/app/org.prismlauncher.PrismLauncher/data/PrismLauncher` |

## Internal folder structure

| Folder       | Purpose                        |
|--------------|--------------------------------|
| icons        | Stores instance icons. (default) |
| instances    | Stores user instances. (default) |
| libraries    | Stores libraries used by Java. |
| themes       | Stores themes.                 |
| translations | Stores GUI translations.        |
| cache        | Contains cached downloads.     |
