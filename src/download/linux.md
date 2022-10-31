---
title: Download Prism Launcher for Linux
eleventyNavigation:
  key: <i class="fa fa-linux" aria-hidden="true"></i>Linux
  order: 3
---

<div class="download-content">
  <div class="row">
    <div class="column">
      <div>
        <h1>Linux Download</h1>
        <br>
        <a class="button size-large type-link" href="https://flathub.org/apps/details/org.prismlauncher.PrismLauncher" target="_blank">Install from FlatHub</a>
        <a class="button size-large" href="https://github.com/PrismLauncher/PrismLauncher/releases/download/{{version.current}}/PrismLauncher-Linux-{{version.current}}-x86_64.AppImage">Download (AppImage)</a>
        <a class="button size-large" href="https://github.com/PrismLauncher/PrismLauncher/releases/download/{{version.current}}/PrismLauncher-Linux-{{version.current}}.tar.gz">Download (tar.gz)</a>
        <a class="button size-large" href="https://github.com/PrismLauncher/PrismLauncher/releases/download/{{version.current}}/PrismLauncher-Linux-portable-{{version.current}}.tar.gz">Download Portable (tar.gz)</a>
        <a class="button size-large" href="https://github.com/PrismLauncher/PrismLauncher/releases/download/{{version.current}}/PrismLauncher-Linux-Qt6-{{version.current}}.tar.gz">Download (Qt 6, tar.gz)</a>
        <a class="button size-large" href="https://github.com/PrismLauncher/PrismLauncher/releases/download/{{version.current}}/PrismLauncher-Linux-Qt6-portable-{{version.current}}.tar.gz">Download Portable (Qt 6, tar.gz)</a>
     </div>
    </div>
    <div class="column">
      {% image "Modpack Installer", "./src/img/screenshots/LauncherLight.png", "./src/img/screenshots/LauncherDark.png" %}
    </div>
  </div>
</div>

<div class="infobox top">

# <img src="https://www.vectorlogo.zone/logos/alpinelinux/alpinelinux-icon.svg" height="20"> Alpine Linux

[APK Packages](https://pkgs.alpinelinux.org/packages?name=prismlauncher) are avalible on Alpine Linux Edge for multiple architectures

```bash
apk add prismlauncher
```

</div>

<div class="infobox top">

# <img src="https://www.vectorlogo.zone/logos/archlinux/archlinux-icon.svg" height="20"/> Arch Linux / <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Manjaro-logo.svg" height="20"/> Manjaro

There are several AUR packages available:  
[![prismlauncher](https://img.shields.io/badge/aur-prismlauncher-blue)](https://aur.archlinux.org/packages/prismlauncher/)  
[![prismlauncher-bin](https://img.shields.io/badge/aur-prismlauncher--bin-blue)](https://aur.archlinux.org/packages/prismlauncher-bin/)  
[![prismlauncher-git](https://img.shields.io/badge/aur-prismlauncher--git-blue)](https://aur.archlinux.org/packages/prismlauncher-git/)

```bash
# stable source package:
yay -S prismlauncher
# stable binary package:
yay -S prismlauncher-bin
# latest git package:
yay -S prismlauncher-git
```

If you want to use Qt 5 to build the packages instead:

```bash
# stable Qt 5 source package:
yay -S prismlauncher-qt5
# stable Qt 5 binary package:
yay -S prismlauncher-qt5-bin
# latest Qt 5 git package:
yay -S prismlauncher-qt5-git
```

You can replace yay -S with your preferred [AUR helper's](https://wiki.archlinux.org/title/AUR_helpers) install command.
</div>

<div class="infobox top">

# <img src="https://www.vectorlogo.zone/logos/centos/centos-icon.svg" height="20"> CentOS Stream / <img src="https://www.vectorlogo.zone/logos/redhat/redhat-icon.svg" height="20"> Red Hat Enterprise Linux

RPM packages are available on [Copr](https://copr.fedorainfracloud.org/coprs/g3tchoo/prismlauncher/). <br />
If you do not have the EPEL repositories enabled, please enable them [here](https://www.redhat.com/sysadmin/install-epel-linux).

```bash
# enables the copr repo
sudo dnf copr enable g3tchoo/prismlauncher
# stable releases
sudo dnf install prismlauncher
# latest builds
sudo dnf install prismlauncher-nightly
# stable Qt 5 releases
sudo dnf install prismlauncher-qt5
# latest Qt 5 builds
sudo dnf install prismlauncher-qt5-nightly
```

</div>

<div class="infobox top">

# <img src="https://www.vectorlogo.zone/logos/debian/debian-icon.svg" height="20" /> Debian / <img src="https://www.vectorlogo.zone/logos/ubuntu/ubuntu-icon.svg" height="20" /> Ubuntu (x86_64)

We use [makedeb](https://docs.makedeb.org/) for our Debian packages.  
Several MPR packages are available:

[![prismlauncher](https://img.shields.io/badge/mpr-prismlauncher-orange)](https://mpr.makedeb.org/packages/prismlauncher)  
[![prismlauncher-bin](https://img.shields.io/badge/mpr-prismlauncher--bin-orange)](https://mpr.makedeb.org/packages/prismlauncher-bin)  
[![prismlauncher-git](https://img.shields.io/badge/mpr-prismlauncher--git-orange)](https://mpr.makedeb.org/packages/prismlauncher-git)

## Installation using Prebuilt MPR (recommended)

```bash
curl -q 'https://proget.makedeb.org/debian-feeds/prebuilt-mpr.pub' | gpg --dearmor | sudo tee /usr/share/keyrings/prebuilt-mpr-archive-keyring.gpg 1> /dev/null
echo "deb [signed-by=/usr/share/keyrings/prebuilt-mpr-archive-keyring.gpg] https://proget.makedeb.org prebuilt-mpr $(lsb_release -cs)" | sudo tee /etc/apt/sources.list.d/prebuilt-mpr.list
sudo apt update
sudo apt install prismlauncher
```

NOTE: Prebuilt MPR only officially supports Debian 11, Ubuntu 20.04 and Ubuntu 22.04.

## Installing with an MPR helper

Installing UNA

```bash
bash <(curl -fsL https://github.com/AFK-OS/una/raw/main/install.sh)

una update
```

Installing Prism Launcher

```bash
# stable source package:
una install prismlauncher
# stable binary package:
una install prismlauncher-bin
# latest git package:
una install prismlauncher-git
```

You can replace una install with your preferred [MPR helper's](https://docs.makedeb.org/using-the-mpr/list-of-mpr-helpers/) install command.
  
</div>
  
<div class="infobox top">

# <img src="https://www.vectorlogo.zone/logos/debian/debian-icon.svg" height="20" /> Debian / <img src="https://www.vectorlogo.zone/logos/raspberrypi/raspberrypi-icon.svg" height="20" /> Pi OS / <img src="https://www.vectorlogo.zone/logos/ubuntu/ubuntu-icon.svg" height="20" /> Ubuntu (ARM32/64)

Prism Launcher is available in the [pi-apps](https://github.com/Botspot/pi-apps) store as a deb install:

[![pi-apps-badge](https://img.shields.io/badge/dynamic/json?color=c51a4a&label=Pi-Apps&prefix=Prism%20Launcher%20&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAiXpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjadY7LDcNACETvVOES+MzCUk5k2VI6SPlmvRslOeQdYAahATpez5O2gTAILbqnOxdIpD5KdJ4YsyjL6FUnq5uU0rLLk+kUnj0Yn0WAf2jm3c9AhDfffddK18PsrmKge2uEjVfy6+I7wf7MF3QB9Rgs3dXA1EgAAAoCaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA0LjQuMC1FeGl2MiI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICBleGlmOlBpeGVsWERpbWVuc2lvbj0iNDgiCiAgIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSI0OCIKICAgdGlmZjpJbWFnZVdpZHRoPSI0OCIKICAgdGlmZjpJbWFnZUhlaWdodD0iNDgiCiAgIHRpZmY6T3JpZW50YXRpb249IjEiLz4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg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&query=%24..%5B%3F%28%40.Name%3D%3D%22Minecraft%20Java%20Prism%20Launcher%22%29%5D.Version&url=https%3A%2F%2Fraw.githubusercontent.com%2FBotspot%2Fpi-apps-analytics%2Fmain%2Fpackage_data.json)](https://github.com/Botspot/pi-apps)

NOTE: Only supports Debian/Raspbian/Pi OS Buster and newer and Ubuntu 18.04 and newer.
*Debian-based ARM packages are community-maintained, Prism Launcher is not responsible for outdated versions.*

</div>

<div class="infobox top">

# <img src="https://www.vectorlogo.zone/logos/getfedora/getfedora-icon.svg" height="20"> Fedora

## Copr
  
RPM packages are available on [Copr](https://copr.fedorainfracloud.org/coprs/g3tchoo/prismlauncher/).

```bash
# enables the copr repo
sudo dnf copr enable g3tchoo/prismlauncher
# stable releases
sudo dnf install prismlauncher
# latest builds
sudo dnf install prismlauncher-nightly
# stable Qt 5 releases
sudo dnf install prismlauncher-qt5
# latest Qt 5 builds
sudo dnf install prismlauncher-qt5-nightly
```

## Terra

Only available for users running Fedora 37 and up.
  
```bash
# enables the terra repository
sudo dnf config-manager --add-repo https://github.com/terrapkg/subatomic-repos/raw/main/terra.repo
# stable releases
sudo dnf install prismlauncher
# latest builds
sudo dnf install prismlauncher-nightly
# stable Qt 5 releases
sudo dnf install prismlauncher-qt5
# latest Qt 5 builds
sudo dnf install prismlauncher-qt5-nightly
```

</div>

<div class="infobox top">

# <img src="https://www.gentoo.org/assets/img/logo/gentoo-signet.svg" height="20" /> Gentoo

Ebuilds are available in the official Gentoo repository, under [`games-action/prismlauncher`](https://packages.gentoo.org/packages/games-action/prismlauncher).
Note that, for the time being, it is not stabilized, so it's masked for `~amd64` and `~arm64` only.

```bash
sudo emaint sync -a

# If you need to unmask the package, and considering `package.accept_keywords` to be a folder.
echo ">=games-action/prismlauncher-5.0" | sudo tee -a /etc/portage/package.accept_keywords/prismlauncher
# Or do this if you want to build from the latest commit instead of a release
echo "=games-action/prismlauncher-9999 **" | sudo tee -a /etc/portage/package.accept_keywords/prismlauncher

emerge games-action/prismlauncher
```

Have fun! :)
</div>
  
<div class="infobox top">

# <img src="https://www.vectorlogo.zone/logos/nixos/nixos-icon.svg" height="20" /> Nix

A [Nix derivation](https://github.com/PrismLauncher/PrismLauncher/blob/develop/nix/NIX.md) is available.

Packages are available on `nixos-small-unstable`, `nixos-unstable`, and on `nixpkgs-unstable`. Packages will be available soon on `nix-22.05`.

</div>
  
<div class="infobox top">

# <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/OpenSUSE_Logo.svg" height="20"> openSUSE

RPM packages are available on the [Open Build Service](https://download.opensuse.org/repositories/home:/getchoo/).
  
```bash
# add repository (if on leap, replace 'openSUSE_Tumbleweed' with '15.4')
zypper addrepo https://download.opensuse.org/repositories/home:getchoo/openSUSE_Tumbleweed/home:getchoo.repo
# refresh repository cache
zypper refresh
# stable releases (Qt6 version, only for Tumbleweed)
zypper install prismlauncher
# stable releases (Qt5 version, available for Leap and Tumbleweed)
zypper install prismlauncher-qt5
```
  
</div>

<div class="infobox top">

# <img src="https://bitcu.co/en/wp-content/uploads/2020/07/Void_Linux_logo.svg_.png" height="20"> Void Linux

Prism Launcher is available on the official Void repository.

```bash
sudo xbps-install PrismLauncher
```

</div>
