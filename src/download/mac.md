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
        <p>Universal supports both arm and intel macs</p>
        <br>
        <button class="button size-large" href="https://github.com/PrismLauncher/PrismLauncher/releases/download/{{ version.current }}/PrismLauncher-macOS-{{ version.current }}.tar.gz">Download (Universal)</button>
        <button class="button size-large" href="https://github.com/PrismLauncher/PrismLauncher/releases/download/{{ version.current }}/PrismLauncher-macOS-Legacy-{{ version.current }}.tar.gz">Download Legacy (Mojave or older)</button>
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
brew install --cask prism
```

<!--
### MacPorts Package (community-maintained)

#### Installation instructions

```bash
sudo port install PrismLauncher
```
  
</div>
-->
