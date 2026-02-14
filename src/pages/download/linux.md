---
layout: ../../layouts/DownloadLayout.astro
title: Linux Download
platform: linux
description: Download Prism Launcher for Linux
screenshotLight: /img/screenshots/landing/linux_light.png
screenshotDark: /img/screenshots/landing/linux_dark.png
screenshotAlt: Prism Launcher screenshot on Linux showing off various different modpacks and instances
---

## Official Packages

### Flathub

[Flathub](https://flathub.org/) is our primary method of distribution on Linux.

#### App Center

It may already be setup on your system, but if not, see how to enable it for your distribution [here](https://flathub.org/setup).
After setup, Prism Launcher should now be available in your app center (i.e., GNOME Software, Discover)

#### CLI

You can also enable Flathub and install the launcher with the following commands:

```bash
flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
flatpak install flathub org.prismlauncher.PrismLauncher
```

### Nix / NixOS

An [official Nix Flake](https://github.com/PrismLauncher/PrismLauncher/blob/develop/nix/README.md) is available for development and release builds.

### AppImage

AppImages allow you to take a single file and run Prism anywhere. AppImage builds only support x86_64 and ARM64.

#### With Gear Lever (Recommended)

Download [Gear Lever](https://flathub.org/en/apps/it.mijorus.gearlever) from flathub. Once installed, you will be prompted to integrate the launcher's AppImage with your desktop when you open it for the first time.

#### Making the AppImage Executable

After downloading the AppImage, open your file manager and make it [executable](https://docs.appimage.org/introduction/quickstart.html#using-the-gui). You should now be able to run it with a click!

#### CLI

on x86-64:

```bash
curl -LO https://github.com/PrismLauncher/PrismLauncher/releases/download/10.0.5/PrismLauncher-Linux-x86_64.AppImage
chmod +x ./PrismLauncher-Linux-x86_64.AppImage
./PrismLauncher-Linux-x86_64.AppImage
```

on ARM64:

```bash
curl -LO https://github.com/PrismLauncher/PrismLauncher/releases/download/10.0.5/PrismLauncher-Linux-aarch64.AppImage
chmod +x ./PrismLauncher-Linux-aarch64.AppImage
./PrismLauncher-Linux-aarch64.AppImage
```

## Community Packages

### Alpine Linux

[APK Packages](https://pkgs.alpinelinux.org/packages?name=prismlauncher) are available on Alpine Linux Edge for multiple architectures

```bash
apk add prismlauncher
```

### Arch Linux / Manjaro

Packages are available in both the official Arch Linux/Manjaro repositories and the AUR (Development Builds)

[![prismlauncher](https://img.shields.io/badge/Arch%20Linux-prismlauncher-blue?logo=archlinux&logoColor=white)](https://archlinux.org/packages/extra/x86_64/prismlauncher/)
[![prismlauncher-git](https://img.shields.io/badge/AUR-prismlauncher--git-blue?logo=archlinux&logoColor=white)](https://aur.archlinux.org/packages/prismlauncher-git/)

#### Installing Prism

```bash
# Latest release (binary)
sudo pacman -S prismlauncher
```

#### Installing Dev Builds (AUR)

```bash
# Newest Git commit (compiled from source)
yay -S prismlauncher-git
```

### CentOS Stream / Fedora / Red Hat Enterprise Linux

RPM packages are available on [Copr](https://copr.fedorainfracloud.org/coprs/g3tchoo/prismlauncher/) for x86_64 and aarch64

If you are on an Enterprise Linux distribution (RHEL, CentOS, Rocky, etc.) and do not have the EPEL repositories enabled, please enable them [here](https://docs.fedoraproject.org/en-US/epel/#_el9)

```bash
# Enables the copr repo
sudo dnf copr enable g3tchoo/prismlauncher
# Install the latest release
sudo dnf install prismlauncher
```

As an alternative, RPM packages for Fedora are also available from [Terra](https://terra.fyralabs.com/):

```bash
# Install the terra repository
sudo dnf install --nogpgcheck --repofrompath 'terra,https://repos.fyralabs.com/terra$releasever' terra-release
# Install the latest release
sudo dnf install prismlauncher
```

### Debian / Ubuntu (x86_64, ARM64)

Packages are made available for Ubuntu, Debian, and Linux Mint through the [_Prism Launcher for Debian_ repository](https://github.com/Prism-Launcher-for-Debian/repo).

```bash
sudo wget https://prism-launcher-for-debian.github.io/repo/prismlauncher.gpg -O /usr/share/keyrings/prismlauncher-archive-keyring.gpg \
  && echo "deb [signed-by=/usr/share/keyrings/prismlauncher-archive-keyring.gpg] https://prism-launcher-for-debian.github.io/repo $(. /etc/os-release; echo "${UBUNTU_CODENAME:-${DEBIAN_CODENAME:-${VERSION_CODENAME}}}") main" | sudo tee /etc/apt/sources.list.d/prismlauncher.list \
  && sudo apt update \
  && sudo apt install prismlauncher
```

### Debian / Pi OS / Ubuntu (ARM32/64)

Prism Launcher is available in the [pi-apps](https://github.com/Botspot/pi-apps) store

[![pi-apps-badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FBotspot%2Fpi-apps-analytics%2Fmain%2Fpackage_data_v2.json&query=%24.Minecraft%20Java%20Prism%20Launcher.Version&label=Pi-Apps&color=c51a4a)](https://github.com/Botspot/pi-apps)

Only Debian/Raspbian/Pi OS Buster and newer and Ubuntu 18.04 and newer are supported.

### Gentoo

Ebuilds are available in the official Gentoo repository, under [`games-action/prismlauncher`](https://packages.gentoo.org/packages/games-action/prismlauncher)

For the time being, newer versions of the package are not stabilized, so they are masked for `~amd64` and `~arm64` only.

```bash
sudo emaint sync -a

# If you need to unmask the package, and considering `package.accept_keywords` to be a folder.
echo ">=games-action/prismlauncher-5.0" | sudo tee -a /etc/portage/package.accept_keywords/prismlauncher
# Or do this if you want to build from the latest commit instead of a release
echo "=games-action/prismlauncher-9999 **" | sudo tee -a /etc/portage/package.accept_keywords/prismlauncher

emerge games-action/prismlauncher
```

Have fun! :)

### Nixpkgs

Installation instructions for stable releases are available on the [NixOS Wiki](https://wiki.nixos.org/wiki/Prism_Launcher).

[![prismlauncher](https://img.shields.io/badge/nixpkgs-prismlauncher-blue)](https://search.nixos.org/packages?query=prismlauncher)

### openSUSE

An RPM package is available on the [Open Build Service](https://build.opensuse.org/package/show/home:getchoo/prismlauncher)

```bash
# Add repository (if on Leap, replace 'openSUSE_Tumbleweed' with your release version)
zypper addrepo https://download.opensuse.org/repositories/home:getchoo/openSUSE_Tumbleweed/home:getchoo.repo
# Refresh the repository cache
zypper refresh
# Install the latest release
zypper install prismlauncher
```

### Slackware

Prism Launcher is available on [SlackBuilds](https://slackbuilds.org/repository/15.0/games/PrismLauncher/) (maintained by Samuel Young)

The package is currently only available for Slackware version 15.0!

You may need to edit the `PrismLauncher.SlackBuild` file and change the VERSION variable to reflect that of the source code -- although it is better if you wait for the maintainer to do so.

```bash
# Download slackbuild archive
wget https://slackbuilds.org/slackbuilds/15.0/games/PrismLauncher.tar.gz
# Extract archive
tar -xpvf PrismLauncher.tar.gz; cd PrismLauncher-*
# Download source specified in PrismLauncher.info. For example for version 7.1:
wget https://github.com/PrismLauncher/PrismLauncher/releases/download/7.1/PrismLauncher-7.1.tar.gz
# Verify integrity
md5sum PrismLauncher-*.tar.gz # Compare the result with the MD5 in PrismLauncher.info
# Enter root environment and grant permissions
su -l; chmod +x PrismLauncher.SlackBuild
# Build package
./PrismLauncher.SlackBuild
# Install package (name dependent on version, cpu arch)
cd /tmp; installpkg PrismLauncher-*.tgz
```

### Void Linux

Prism Launcher is available in the official Void repository

```bash
sudo xbps-install PrismLauncher
```
