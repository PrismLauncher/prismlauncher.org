---
title: Download Prism Launcher for Windows
permalink: /download/
eleventyNavigation:
  key: <i class="fa fa-windows" aria-hidden="true"></i> Windows
  order: 1
---

<div class="download-content">
  <div class="row">
    <div class="column">
      <div>
        <h1>Windows sdnload</h1>
        <br>
        <a class="button size-large" href="https://github.com/PrismLauncher/PrismLauncher/releases/download/{{version.current}}/PrismLauncher-Windows-Setup-{{version.current}}.exe">Installer (.exe)</a>
        <a class="button size-large" href="https://github.com/PrismLauncher/PrismLauncher/releases/download/{{version.current}}/PrismLauncher-Windows-Portable-{{version.current}}.zip">Portable (.zip)</a>
      </div>
    </div>
    <div class="column">
      {% image "Modpack Installer", "./src/img/screenshots/windows/LauncherLight.png", "./src/img/screenshots/windows/LauncherDark.png" %}
    </div>
  </div>
</div>

<div class="infobox top">

## Legacy version

There is a legacy version of Prism Launcher, primarily for older versions of Windows like Windows 7 or Windows 8.1.
You can download it here:

- [Legacy installer (.exe)](https://github.com/PrismLauncher/PrismLauncher/releases/download/{{version.current}}/PrismLauncher-Windows-Legacy-Setup-{{version.current}}.exe)
- [Legacy portable (.zip)](https://github.com/PrismLauncher/PrismLauncher/releases/download/{{version.current}}/PrismLauncher-Windows-Legacy-Portable-{{version.current}}.zip)

## Advanced Windows install options

- [System Install (.zip)](https://github.com/PrismLauncher/PrismLauncher/releases/download/{{version.current}}/PrismLauncher-Windows-{{version.current}}.zip)
- [Legacy system install (.zip)](https://github.com/PrismLauncher/PrismLauncher/releases/download/{{version.current}}/PrismLauncher-Windows-Legacy-{{version.current}}.zip)

### CLI (community-maintained)

#### Winget Package

```powershell
winget install -e PrismLauncher.PrismLauncher
```

#### Scoop Package

```powershell
scoop bucket add games
scoop install prismlauncher 
scoop install prismlauncher-qt5 #if you want Windows-Legacy instead
```

#### Chocolatey Package

```powershell
# Install standard version
choco install prismlauncher --version 5.0
# Install legacy version
choco install prismlauncher --version 5.0 --params='/legacy'
```

*Chocolatey and Scoop packages are community-maintained, Prism Launcher is not responsible for outdated versions.*

#### [PortableApps.com](https://portableapps.com) Installer

A community maintained portable installer for Prism Launcher can be found [here](https://FayneAldan.github.io/PrismLauncherPortable/).

</div>
