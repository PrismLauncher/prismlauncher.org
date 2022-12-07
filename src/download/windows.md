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
        <h1>Windows Download</h1>
        <p>Windows 10/11 64bit ONLY</p>
        <br>
        <a class="button size-large" href="https://github.com/PrismLauncher/PrismLauncher/releases/download/{{version.current}}/PrismLauncher-Windows-Setup-{{version.current}}.exe">Installer (.exe)</a>
        <a class="button size-large" href="https://github.com/PrismLauncher/PrismLauncher/releases/download/{{version.current}}/PrismLauncher-Windows-Portable-{{version.current}}.zip">Portable (.zip)</a>
        <p>Windows 7/8.1 32/64 bit and Windows 10 32 bit</p>
        <br>
        <a class="button size-large" href="https://github.com/PrismLauncher/PrismLauncher/releases/download/{{version.current}}/PrismLauncher-Windows-Legacy-Setup-{{version.current}}.exe">Legacy Installer (.exe)</a>
        <a class="button size-large" href="https://github.com/PrismLauncher/PrismLauncher/releases/download/{{version.current}}/PrismLauncher-Windows-Legacy-Portable-{{version.current}}.zip">Legacy Portable (.zip)</a>
      </div>
    </div>
    <div class="column">
      {% image "Modpack Installer", "./src/img/screenshots/windows/LauncherLight.png", "./src/img/screenshots/windows/LauncherDark.png" %}
    </div>
  </div>
</div>

<div class="infobox top">

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
choco install prismlauncher
# Install legacy version
choco install prismlauncher --package-parameters="'/legacy'"
```

*Chocolatey and Scoop packages are community-maintained, Prism Launcher is not responsible for outdated versions.*

#### [PortableApps.com](https://portableapps.com) Installer

A community maintained portable installer for Prism Launcher can be found [here](https://FayneAldan.github.io/PrismLauncherPortable/).

</div>
