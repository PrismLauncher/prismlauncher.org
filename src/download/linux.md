---
title: Download Prism Launcher for Linux
permalink: /download/
eleventyNavigation:
  key: <i class="fa fa-linux" aria-hidden="true"></i>Linux
  order: 1
---

<div class="download-content">
  <div class="row">
    <div class="column">
      <div>
        <h1>Linux Download</h1>
        <p>Flathub supports both x86_64 and ARM64</p>
        <br>
        <a class="button size-large type-link" href="https://flathub.org/apps/details/org.prismlauncher.PrismLauncher" target="_blank">Install from Flathub</a>
        <p>x86_64 ONLY</p>
        <br>
        <a class="button size-large" href="https://github.com/PrismLauncher/PrismLauncher/releases/download/{{version.current}}/PrismLauncher-Linux-x86_64.AppImage">Download (AppImage)</a>
        <a class="button size-large" href="https://github.com/PrismLauncher/PrismLauncher/releases/download/{{version.current}}/PrismLauncher-Linux-Qt6-Portable-{{version.current}}.tar.gz">Download Portable (tar.gz)</a>
        <a class="button size-large" href="https://github.com/PrismLauncher/PrismLauncher/releases/download/{{version.current}}/PrismLauncher-Linux-Qt5-Portable-{{version.current}}.tar.gz">Download Portable (Qt 5, tar.gz)</a>
       <br />
       <div class="center notification type-info">
         <h2>Qt 5 packages will be going away soon 😔</h2>
         <p>Support will be removed after 9.x. Users are encouraged to update to Qt 6 builds where available</p>
       </div>
     </div>
    </div>
    <div class="column">
      {% image "Modpack Installer", "./src/img/screenshots/LauncherLight.png", "./src/img/screenshots/LauncherDark.png" %}
    </div>
  </div>
</div>

<div class="infobox top">

# Official Packages

## <img src="https://www.vectorlogo.zone/logos/flathub/flathub-icon.svg" height="20" alt="Flathub Logo" /> Flathub

[Flathub](https://flathub.org/) is our primary method of distribution on Linux

### App Center

It may already be setup on your system, but if not, [see here how to enable it for your distribution](https://flathub.org/setup).
After setup, Prism Launcher should now be available in your app center (i.e., GNOME Software, Discover)

### Flatpak CLI

You can also enable Flathub and install the launcher with the following commands:

```bash
flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
flatpak install flathub org.prismlauncher.PrismLauncher
```

## <img src="https://www.vectorlogo.zone/logos/nixos/nixos-icon.svg" alt="NixOS Logo" height="20" /> Nix / NixOS

An [official Nix Flake](https://github.com/PrismLauncher/PrismLauncher/blob/develop/nix/README.md) is available for development and release builds.

## <img src="https://github.com/loganmarchione/homelab-svg-assets/raw/745e5d9249f2c847d58de5f1fd7ba4de2f63918e/assets/appimage.svg" alt="AppImage Logo" height="20" /> AppImage

AppImages allow you to take a single file and run Prism anywhere*

<div class="notification type-warn">
AppImage builds only support x86_64
</div>

### With AppImageLauncher (Recommended)

Follow AppImageLauncher's [installation instructions](https://github.com/TheAssassin/AppImageLauncher/wiki#installation). Once installed, you will be prompted to integrate the launcher's AppImage with your desktop when you open it for the first time.

### Making the AppImage Executable

After downloading the AppImage, open your file manager and make it [executable](https://docs.appimage.org/introduction/quickstart.html#using-the-gui). You should now be able to run it with a click!

### Command Line

```bash
curl -LO https://github.com/PrismLauncher/PrismLauncher/releases/download/{{version.current}}/PrismLauncher-Linux-x86_64.AppImage
chmod +x ./PrismLauncher-Linux-x86_64.AppImage
./PrismLauncher-Linux-x86_64.AppImage
```

</div>

<div class="infobox top">

# Community Packages

## <img src="https://www.vectorlogo.zone/logos/alpinelinux/alpinelinux-icon.svg" alt="Alpine Linux Logo" height="20"> Alpine Linux

[APK Packages](https://pkgs.alpinelinux.org/packages?name=prismlauncher) are available on Alpine Linux Edge for multiple architectures

```bash
apk add prismlauncher
```

## <img src="https://www.vectorlogo.zone/logos/archlinux/archlinux-icon.svg" alt="Arch Linux Logo" height="20"/> Arch Linux / <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Manjaro-logo.svg" alt="Manjaro Linux Logo" height="20"/> Manjaro

Packages are available in the official Arch Linux/Manjaro repositories and the AUR (Development Builds)

[![prismlauncher](https://img.shields.io/badge/Arch%20Linux-prismlauncher-blue?logo=archlinux&logoColor=white)](https://archlinux.org/packages/extra/x86_64/prismlauncher/)
[![prismlauncher-git](https://img.shields.io/badge/AUR-prismlauncher--git-blue?logo=archlinux&logoColor=white)](https://aur.archlinux.org/packages/prismlauncher-git/)


### Installing

```bash
# Latest release (binary)
sudo pacman -S prismlauncher
```

### Installing Dev Build (AUR)
```bash
# Newest Git commit (compiled from source)
yay -S prismlauncher-git
```

## <img src="https://www.vectorlogo.zone/logos/centos/centos-icon.svg" alt="CentOS Logo" height="20"> CentOS Stream / <img src="https://www.vectorlogo.zone/logos/getfedora/getfedora-icon.svg" alt="Fedora Logo" height="20"> Fedora / <img src="https://www.vectorlogo.zone/logos/redhat/redhat-icon.svg" alt="RedHat Logo" height="20"> Red Hat Enterprise Linux

RPM packages are available on [Copr](https://copr.fedorainfracloud.org/coprs/g3tchoo/prismlauncher/) for x86_64 and aarch64

If you are on an Enterprise Linux distribution (RHEL, CentOS, Rocky, etc.) and do not have the EPEL repositories enabled, please [enable them here](https://docs.fedoraproject.org/en-US/epel/#_el9)

```bash
# Enables the copr repo
sudo dnf copr enable g3tchoo/prismlauncher
# Install the latest release
sudo dnf install prismlauncher
```

## <img src="https://www.vectorlogo.zone/logos/debian/debian-icon.svg" alt="Debian Logo" height="20" /> Debian / <img src="https://www.vectorlogo.zone/logos/ubuntu/ubuntu-icon.svg" alt="Ubuntu Logo" height="20" /> Ubuntu (x86_64, ARM64)

Packages are made available for Ubuntu, Debian, and Linux Mint through the [*Prism Launcher for Debian* repository](https://github.com/Prism-Launcher-for-Debian/repo).

```bash
sudo wget https://prism-launcher-for-debian.github.io/repo/prismlauncher.gpg -O /usr/share/keyrings/prismlauncher-archive-keyring.gpg \
  && echo "deb [signed-by=/usr/share/keyrings/prismlauncher-archive-keyring.gpg] https://prism-launcher-for-debian.github.io/repo $(. /etc/os-release; echo "${UBUNTU_CODENAME:-${DEBIAN_CODENAME:-${VERSION_CODENAME}}}") main" | sudo tee /etc/apt/sources.list.d/prismlauncher.list \
  && sudo apt update \
  && sudo apt install prismlauncher
```

## <img src="https://www.vectorlogo.zone/logos/debian/debian-icon.svg" alt="Debian Logo" height="20" /> Debian / <img src="https://www.vectorlogo.zone/logos/raspberrypi/raspberrypi-icon.svg" alt="Raspberry Pi Logo" height="20" /> Pi OS / <img src="https://www.vectorlogo.zone/logos/ubuntu/ubuntu-icon.svg" alt="Ubuntu Logo" height="20" /> Ubuntu (ARM32/64)

Prism Launcher is available in the [pi-apps](https://github.com/Botspot/pi-apps) store

[![pi-apps-badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FBotspot%2Fpi-apps-analytics%2Fmain%2Fpackage_data_v2.json&query=%24.Minecraft%20Java%20Prism%20Launcher.Version&label=Pi-Apps&color=c51a4a)](https://github.com/Botspot/pi-apps)

<div class="notification type-info">
Only Debian/Raspbian/Pi OS Buster and newer and Ubuntu 18.04 and newer are supported.
</div>

## <img src="https://www.gentoo.org/assets/img/logo/gentoo-signet.svg" alt="Gentoo Logo" height="20" /> Gentoo

Ebuilds are available in the official Gentoo repository, under [`games-action/prismlauncher`](https://packages.gentoo.org/packages/games-action/prismlauncher)

<div class="notification type-info">
For the time being, newer versions of the package are not stabilized, so they are masked for `~amd64` and `~arm64` only.
</div>

```bash
sudo emaint sync -a

# If you need to unmask the package, and considering `package.accept_keywords` to be a folder.
echo ">=games-action/prismlauncher-5.0" | sudo tee -a /etc/portage/package.accept_keywords/prismlauncher
# Or do this if you want to build from the latest commit instead of a release
echo "=games-action/prismlauncher-9999 **" | sudo tee -a /etc/portage/package.accept_keywords/prismlauncher

emerge games-action/prismlauncher
```

Have fun! :)

## <img src="https://www.vectorlogo.zone/logos/nixos/nixos-icon.svg" alt="NixOS Logo" height="20" /> Nixpkgs

Installation instructions for stable releases are available on the [NixOS Wiki](https://wiki.nixos.org/wiki/Prism_Launcher).

[![prismlauncher](https://img.shields.io/badge/nixpkgs-prismlauncher-blue)](https://search.nixos.org/packages?query=prismlauncher)

## <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/OpenSUSE_Logo.svg" alt="OpenSUSE Logo" height="20"> openSUSE

An RPM package is available on the [Open Build Service](https://build.opensuse.org/package/show/home:getchoo/prismlauncher)

```bash
# Add repository (if on Leap, replace 'openSUSE_Tumbleweed' with your release version)
zypper addrepo https://download.opensuse.org/repositories/home:getchoo/openSUSE_Tumbleweed/home:getchoo.repo
# Refresh the repository cache
zypper refresh
# Install the latest release
zypper install prismlauncher
```

## <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/Slackware_logo.svg"  alt="Slackware Logo" height="20"> Slackware

Prism Launcher is available on [SlackBuilds](https://slackbuilds.org/repository/15.0/games/PrismLauncher/) (maintained by Samuel Young)

<div class="notification type-warn">
The package is currently only available for Slackware version 15.0!
</div>

<div class="notification type-info">
You may need to edit the `PrismLauncher.SlackBuild` file and change the VERSION variable to reflect that of the source code -- although it is better if you wait for the maintainer to do so.
</div>

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

## <img src="https://bitcu.co/en/wp-content/uploads/2020/07/Void_Linux_logo.svg_.png" alt="Void Linux Logo" height="20"> Void Linux

Prism Launcher is available in the official Void repository

```bash
sudo xbps-install PrismLauncher
```

</div>
