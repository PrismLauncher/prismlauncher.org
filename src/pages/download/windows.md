---
layout: ../../layouts/DownloadLayout.astro
title: Windows Download
platform: windows
description: Download Prism Launcher for Windows
screenshotLight: /img/screenshots/windows/LauncherLight.png
screenshotDark: /img/screenshots/windows/LauncherDark.png
screenshotAlt: Prism Launcher screenshot on Windows showing off various different modpacks and instances
---

## Advanced Windows Install Options

### WinGet Package

Prism Launcher is available on WinGet. You can install it using the following command:

```cmd
winget install --exact PrismLauncher.PrismLauncher
```

### MinGW-w64

These builds are built with MinGW and do not require the Visual C++ Redistributable to be installed on your system. They require Windows 10/11 64bit. **These builds are less tested than the MSVC builds.**

- [Installer (64-bit) (.exe)](https://github.com/PrismLauncher/PrismLauncher/releases/download/9.4/PrismLauncher-Windows-MinGW-w64-Setup-9.4.exe)

## Community Packages

### Scoop Package

```cmd
scoop bucket add games
scoop install prismlauncher
```

Unstable development builds are also available in the `versions` bucket.

```cmd
scoop bucket add versions
scoop install prismlauncher-git
```

### Chocolatey Package

```cmd
choco install prismlauncher
```

### [PortableApps.com](https://portableapps.com) Installer

A portable installer for Prism Launcher can be found [here](https://ruintd.github.io/PrismLauncherPortable).
