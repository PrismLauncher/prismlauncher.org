---
title: Download Prism Launcher for macOS
eleventyNavigation:
  key: <i class="fa fa-apple" aria-hidden="true"></i> macOS 
  order: 2
---

<div class="download-content">
    <div class="row">
    <div class="column">
      <div>
        <h1>macOS Download</h1>
        <p>Universal supports both Apple Silicon and Intel Macs</p>
        <br>
        <a class="button size-large" href="https://github.com/PrismLauncher/PrismLauncher/releases/download/{{ version.current }}/PrismLauncher-macOS-{{ version.current }}.zip">Download (Universal)</a>
        <a class="button size-large" href="https://github.com/PrismLauncher/PrismLauncher/releases/download/{{ version.current }}/PrismLauncher-macOS-Legacy-{{ version.current }}.zip">Download Legacy (from High Sierra to Catalina)</a>
      </div>
    </div>
    <div class="column">
      {% image "Modpack Installer", "./src/img/screenshots/mac/LauncherLight.png", "./src/img/screenshots/mac/LauncherDark.png" %}
    </div>
  </div>
</div>

<div class="infobox top">

# Advanced macOS install options

## Nix

See [the Linux section](/download#nix)

</div>

<div class="infobox top">

# Community Packages

## Homebrew Package

```bash
brew install --cask --no-quarantine prismlauncher
```

## MacPorts Package

```bash
sudo port install PrismLauncher
```

</div>
