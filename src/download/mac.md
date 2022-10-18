---
title: Download PrismLauncher for macOS
eleventyNavigation:
  key: <i class="fa fa-apple" aria-hidden="true"></i> macOS 
  order: 2
---

<div class="download-content">
    <div class="row">
    <div class="column">
      <div>
        <h1>macOS Download</h1>
        <br>
        <p><strong>Note:</strong> Although the PrismLauncher binary is universal, old versions of Minecraft still run on Rosetta.</p>
        <a class="button is-big" href="https://github.com/placeholdermc/PrismLauncher/releases/download/{{ version.current }}/PrismLauncher-macOS-{{ version.current }}.tar.gz">Download (Universal)</a>
      </div>
    </div>
    <div class="column">
      {% image "Modpack Installer", "./src/img/screenshots/mac/LauncherLight.png", "./src/img/screenshots/mac/LauncherDark.png" %}
    </div>
  </div>
</div>

<div class="infobox top">

## Advanced MacOS install options

### Homebrew Package (community-maintained)

#### Installation instructions

```bash
brew install --cask prismlauncher
```

### MacPorts Package (community-maintained)

#### Installation instructions

```bash
sudo port install PrismLauncher
```
  
</div>
