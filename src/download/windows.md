---
title: Download PolyMC for Windows
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
        <br>
        <a class="button is-big" href="https://github.com/PolyMC/PolyMC/releases/download/{{version.current}}/PolyMC-Windows-Setup-{{version.current}}.exe">Installer (.exe)</a>
        <a class="button is-big" href="https://github.com/PolyMC/PolyMC/releases/download/{{version.current}}/PolyMC-Windows-Portable-{{version.current}}.zip">Portable (.zip)</a>
      </div>
    </div>
    <div class="column">
      {% image "Modpack Installer", "./src/img/screenshots/windows/LauncherLight.png", "./src/img/screenshots/windows/LauncherDark.png" %}
    </div>
  </div>
</div>

<div class="infobox top">

## Legacy version

There is a legacy version of PolyMC, primarily for older versions of Windows like Windows 7 or Windows 8.1.
You can download it here:

- [Legacy installer (.exe)](https://github.com/PolyMC/PolyMC/releases/download/{{version.current}}/PolyMC-Windows-Legacy-Setup-{{version.current}}.exe)
- [Legacy portable (.zip)](https://github.com/PolyMC/PolyMC/releases/download/{{version.current}}/PolyMC-Windows-Legacy-Portable-{{version.current}}.zip)

## Advanced Windows install options

- [System Install (.zip)](https://github.com/PolyMC/PolyMC/releases/download/{{version.current}}/PolyMC-Windows-{{version.current}}.zip)
- [Legacy system install (.zip)](https://github.com/PolyMC/PolyMC/releases/download/{{version.current}}/PolyMC-Windows-Legacy-{{version.current}}.zip)

### CLI (community-maintained)

#### Winget Package

```powershell
winget install -e PolyMC.PolyMC
```

#### Scoop Package

```powershell
scoop bucket add games
scoop install polymc 
scoop install polymc-qt5 #if you want Windows-Legacy instead
```

#### Chocolatey Package

```powershell
# Install standard version
choco install polymc
# Install legacy version
choco install polymc --params='/legacy'
```

*Chocolatey and Scoop packages are community-maintained, PolyMC is not responsible for outdated versions.*

#### [PortableApps.com](https://portableapps.com) Installer

A community maintained portable installer for PolyMC can be found [here](https://FayneAldan.github.io/PolyMCPortable/).
</div>
