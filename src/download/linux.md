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

# <img src="https://www.vectorlogo.zone/logos/archlinux/archlinux-icon.svg" height="20"/> Arch Linux / Manjaro

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
<!--
<div class="infobox top">

# <img src="https://www.vectorlogo.zone/logos/centos/centos-icon.svg" height="20"> CentOS Stream / Red Hat Enterprise Linux

One RPM package is available on [Copr](https://copr.fedorainfracloud.org/coprs/sentry/prismlauncher/).

```bash
# load in system information
source /etc/os-release
# enables the copr repo
sudo dnf copr enable sentry/prismlauncher epel-${VERSION}-$(uname -m)
# stable releases
sudo dnf install prismlauncher
# nightly releases (git master)
sudo dnf install prismlauncher-nightly
```

</div>
  -->
<div class="infobox top">

# <img src="https://www.vectorlogo.zone/logos/debian/debian-icon.svg" height="20" /> Debian / Ubuntu

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

# <img src="https://www.vectorlogo.zone/logos/getfedora/getfedora-icon.svg" height="20"> Fedora

RPM packages are available on [Copr](https://copr.fedorainfracloud.org/coprs/g3tchoo/prismlauncher/).

```bash
# enables the copr repo
sudo dnf copr enable g3tchoo/prismlauncher
# stable releases
sudo dnf install prismlauncher
```
<!-- 
  # nightly releases (git master)
sudo dnf install prismlauncher-nightly 
  -->

</div>

<div class="infobox top">

# <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/OpenSUSE_Logo.svg" height="20"> openSUSE

RPM packages are available on the [openSUSE Build Service](https://download.opensuse.org/repositories/home:/getchoo/).
  
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
  
<!--
Prism Launcher is available on the [game:tools](https://software.opensuse.org/download.html?project=games%3Atools&package=prismlauncher) community repository.
-->
  
</div>
  
<div class="infobox top">

# <img src="https://www.vectorlogo.zone/logos/centos/centos-icon.svg" height="20"> CentOS Stream / Red Hat Enterprise Linux

RPM packages are available on [Copr](https://copr.fedorainfracloud.org/coprs/g3tchoo/prismlauncher/). <br />
If you do not have the EPEL repositories enabled, please enable them [here](https://www.redhat.com/sysadmin/install-epel-linux).

```bash
# enables the copr repo
sudo dnf copr enable g3tchoo/prismlauncher
# stable releases
sudo dnf install prismlauncher
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

A package is available on `nixos-unstable-small` and will soon be available on `nixos-unstable`.

</div>

<div class="infobox top">

# <img src="https://bitcu.co/en/wp-content/uploads/2020/07/Void_Linux_logo.svg_.png" height="20"> Void Linux

Prism Launcher is available on the official Void repository.

```bash
sudo xbps-install PrismLauncher
```

</div>

<div class="infobox top">

# <img src="https://www.vectorlogo.zone/logos/alpinelinux/alpinelinux-icon.svg" height="20"> Alpine Linux

[APK Packages](https://pkgs.alpinelinux.org/packages?name=prismlauncher) are avalible on Alpine Linux Edge for multiple architectures

```bash
apk add prismlauncher
```

</div>

<div class="infobox top">

# <img src="https://www.vectorlogo.zone/logos/raspberrypi/raspberrypi-icon.svg" height="20"> Raspberry Pi

Prism Launcher is avalible in [pi-apps](https://github.com/Botspot/pi-apps) repository.

</div>
