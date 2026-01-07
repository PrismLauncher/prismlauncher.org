---
layout: ../../layouts/DownloadLayout.astro
title: Windows Download
platform: windows
description: Download Prism Launcher for Windows
screenshotLight: /img/screenshots/landing/windows_light.png
screenshotDark: /img/screenshots/landing/windows_dark.png
screenshotAlt: Prism Launcher screenshot on Windows showing off various different modpacks and instances
---

## Advanced Windows Install Options

### WinGet Package

Prism Launcher is available on WinGet. You can install it using the following command:

```cmd
winget install --exact PrismLauncher.PrismLauncher
```

### MinGW

These builds are built with MinGW and do not require the Visual C++ Redistributable to be installed on your system. They require Windows 10/11 64bit. **These builds are less tested than the MSVC builds.**

- [Installer (x86-64) (.exe)](https://github.com/PrismLauncher/PrismLauncher/releases/download/10.0.1/PrismLauncher-Windows-MinGW-w64-Setup-10.0.1.exe)
- [Installer (ARM64) (.exe)](https://github.com/PrismLauncher/PrismLauncher/releases/download/10.0.1/PrismLauncher-Windows-MinGW-arm64-Setup-10.0.1.exe)

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
