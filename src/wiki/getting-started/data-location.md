---
eleventyNavigation:
  key: Data storage
  parent: Getting Started
  order: 13
--- 
# Data Location

Prism Launcher stores your data in your OS's standard application data folder. For the portable version, data is stored within its own directory. Below is a table containing the default locations for each OS:

| OS                         | Folder                                                          |
| -------------------------- | --------------------------------------------------------------- |
| Portable (Windows / Linux) | In the PrismLauncher folder                                     |
| Windows                    | `%APPDATA%/PrismLauncher`                                       |
| Scoop                      | `%HOMEPATH%\scoop\persist\prismlauncher`                        |
| macOS                      | `~/Library/Application Support/PrismLauncher`                   |
| Linux                      | `~/.local/share/PrismLauncher`                                  |
| Flatpak                    | `~/.var/app/org.prismlauncher.PrismLauncher/data/PrismLauncher` |

## Internal folder structure

| Folder       | Purpose                                                        |
| ------------ | -------------------------------------------------------------- |
| assets       | Stores the game files.                                         |
| cache        | Stores cached downloads.                                       |
| catpacks     | Stores the [catpacks](../catpacks).                            |
| icons        | Stores instance icons. (default)                               |
| iconthemes   | Stores launcher [icons themes](../change-themes#icons-pack).   |
| instances    | Stores user instances. (default)                               |
| java         | Stores the java instalations managed by the launcher.          |
| libraries    | Stores libraries used to run Minecraft and Mod Loaders.        |
| logs         | Stores the logs.                                               |
| meta         | Stores the cached metadata information.                        |
| skins        | Stores the player skins.                                       |
| themes       | Stores [themes](../change-themes).                             |
| translations | Stores GUI translations.                                       |
