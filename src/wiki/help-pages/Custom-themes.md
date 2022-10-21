---
eleventyNavigation:
  key: Custom Themes
  parent: Help pages
--- 

# Custom themes

Custom themes are a work in progress, so these instructions are subject to change in the future.

## Installing a custom theme

To install a custom theme, navigate to your local Prism Launcher directory.

- Windows: `%APPDATA%\Prism Launcher`
- Mac: `~/Library/Application Support/PrismLauncher`
- Linux: `~/.local/share/PrismLauncher`
  - Flatpak: `~/.var/app/org.prismlauncher.PrismLauncher/data/PrismLauncher`
- Portable: In the PrismLauncher folder

Once you're in the PrismLauncher folder, enter the `themes` folder, then enter the `custom` folder. Inside this folder, replace `theme.json` and `themeStyle.css` with the custom theme files of your choice.

**Note:** This will overwrite the pre-existing files!

After you've replaced the files, restart Prism Launcher and open settings. In the Launcher section, navigate to the 'User Interface' tab. In the 'Colors' dropdown, select `Custom`. Click close, and you should see the launcher's colors change to those of the new theme.
