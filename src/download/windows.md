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
        <p>Windows 10/11 64bit</p>
        <p>Requires <a href="https://aka.ms/vs/17/release/vc_redist.x64.exe">Microsoft Visual C++ Redistributable 2022 x64</a> to run</p>
        <a class="button size-large" href="https://github.com/PrismLauncher/PrismLauncher/releases/download/{{version.current}}/PrismLauncher-Windows-MSVC-Setup-{{version.current}}.exe">Installer (.exe)</a>
        <a class="button size-large" href="https://github.com/PrismLauncher/PrismLauncher/releases/download/{{version.current}}/PrismLauncher-Windows-MSVC-Portable-{{version.current}}.zip">Portable (.zip)</a>
        <p>Windows 10/11 ARM64</p>
        <p>Requires <a href="https://aka.ms/vs/17/release/vc_redist.arm64.exe">Microsoft Visual C++ Redistributable 2022 arm64</a> to run</p>
        <a class="button size-large" href="https://github.com/PrismLauncher/PrismLauncher/releases/download/{{version.current}}/PrismLauncher-Windows-MSVC-arm64-Setup-{{version.current}}.exe">Installer (ARM64) (.exe)</a>
        <a class="button size-large" href="https://github.com/PrismLauncher/PrismLauncher/releases/download/{{version.current}}/PrismLauncher-Windows-MSVC-arm64-Portable-{{version.current}}.zip">Portable (ARM64) (.zip)</a>
      </div>
    </div>
    <div class="column">
      {% image "Modpack Installer", "./src/img/screenshots/windows/LauncherLight.png", "./src/img/screenshots/windows/LauncherDark.png" %}
    </div>
  </div>
</div>

<div class="infobox top">

## Advanced Windows install options

- [System Install (64bit) (.zip)](https://github.com/PrismLauncher/PrismLauncher/releases/download/{{version.current}}/PrismLauncher-Windows-MSVC-{{version.current}}.zip)
- [System Install (ARM64) (.zip)](https://github.com/PrismLauncher/PrismLauncher/releases/download/{{version.current}}/PrismLauncher-Windows-MSVC-arm64-{{version.current}}.zip)

### CLI (community-maintained)

#### Winget Package

```powershell
winget install -e PrismLauncher.PrismLauncher
```

#### Stable Scoop Package

```powershell
scoop bucket add games
scoop install prismlauncher 
```

#### Unstable Scoop Package

Same as above, but it's an unstable git [development build](/wiki/development/development-builds) rather than a stable build.

```powershell
scoop bucket add versions
scoop install prismlauncher-git
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

A community maintained portable installer for Prism Launcher can be found [here](https://RuiNtD.github.io/PrismLauncherPortable/).

</div>
