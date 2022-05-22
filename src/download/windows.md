---
title: Download Windows
permalink: /download/
eleventyNavigation:
  key: <i class="fa fa-windows" aria-hidden="true"></i> Windows 
---

<div class="download-content">
    <div class="row">
    <div class="column">
      <div>
        <h1>Windows Download</h1>
        <br>
        <a class="button is-big" href="https://github.com/PolyMC/PolyMC/releases/download/{{version.current}}/PolyMC-Windows-x86_64-setup-{{version.current}}.zip">Installer (.exe)</a>
        <a class="button is-big" href="https://github.com/PolyMC/PolyMC/releases/download/{{version.current}}/PolyMC-Windows-x86_64-portable-{{version.current}}.zip">Portable (.zip)</a>
      </div>
    </div>
    <div class="column">
      {% image "Modpack Installer", "./src/img/screenshots/windows/LauncherLight.png", "./src/img/screenshots/windows/LauncherDark.png" %}
    </div>
  </div>
</div>

<div class="infobox top">

## Advanced Windows install options

[System Install (.zip)](https://github.com/PolyMC/PolyMC/releases/download/{{version.current}}/PolyMC-Windows-x86_64-{{version.current}}.zip)


### CLI (community-maintained)

#### Scoop Package

```
scoop bucket add games
install polymc
```

#### Chocolatey Package

```
choco install polymc
```

*Chocolatey and Scoop packages are community-maintained, PolyMC is not responsible for outdated versions.*

### PortableApps.com Installer

A community maintained portable installer for PolyMC can be found [here](https://FayneAldan.github.io/PolyMCPortable/).
</div>