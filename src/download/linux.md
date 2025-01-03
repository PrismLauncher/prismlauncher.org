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
        <p>FlatHub supports both x86_64 and ARM64</p>
        <br>
        <a class="button size-large type-link" href="https://flathub.org/apps/details/org.prismlauncher.PrismLauncher" target="_blank">Install from FlatHub</a>
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

## <img src="https://www.vectorlogo.zone/logos/flathub/flathub-icon.svg" height="20" /> Flathub

[Flathub](https://flathub.org/) is our primary method of distribution on Linux

### App Center

It may already be setup on your system, but if not, see how to enable it for your distribution [here](https://flathub.org/setup).
After setup, Prism Launcher should now be available in your app center (i.e., GNOME Software, Discover)

### CLI

You can also enable Flathub and install the launcher with the following commands:

```bash
flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
flatpak install flathub org.prismlauncher.PrismLauncher
````

## <img src="https://www.vectorlogo.zone/logos/nixos/nixos-icon.svg" height="20" /> Nix / NixOS

An [official Nix Flake](https://github.com/PrismLauncher/PrismLauncher/blob/develop/nix/README.md) is available for development and release builds.

## <img src="https://github.com/loganmarchione/homelab-svg-assets/raw/745e5d9249f2c847d58de5f1fd7ba4de2f63918e/assets/appimage.svg" height="20" /> AppImage

AppImages allow you to take a single file and run Prism anywhere*

<div class="notification type-warn">
AppImage builds only support x86_64
</div>

### With AppImageLauncher (Recommended)

Follow AppImageLauncher's [installation instructions](https://github.com/TheAssassin/AppImageLauncher/wiki#installation). Once installed, you will be prompted to integrate the launcher's AppImage with your desktop when you open it for the first time.

### Making the AppImage Executable

After downloading the AppImage, open your file manager and make it [executable](https://docs.appimage.org/introduction/quickstart.html#using-the-gui). You should now be able to run it with a click!

### CLI

```bash
curl -fsSLo PrismLauncher.AppImage https://github.com/PrismLauncher/PrismLauncher/releases/download/{{version.current}}/PrismLauncher-Linux-x86_64.AppImage
chmod +x ./PrismLauncher.AppImage
./PrismLauncher.AppImage
```

</div>

<div class="infobox top">

# Community Packages

## <img src="https://www.vectorlogo.zone/logos/alpinelinux/alpinelinux-icon.svg" height="20"> Alpine Linux

[APK Packages](https://pkgs.alpinelinux.org/packages?name=prismlauncher) are available on Alpine Linux Edge for multiple architectures

```bash
apk add prismlauncher
```

## <img src="https://www.vectorlogo.zone/logos/archlinux/archlinux-icon.svg" height="20"/> Arch Linux / <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Manjaro-logo.svg" height="20"/> Manjaro

Packages are available in both the official Arch Linux/Manjaro repositories and the AUR

[![prismlauncher](https://img.shields.io/badge/Arch%20Linux-prismlauncher-blue?logo=archlinux&logoColor=white)](https://archlinux.org/packages/extra/x86_64/prismlauncher/)
[![prismlauncher-git](https://img.shields.io/badge/AUR-prismlauncher--git-blue?logo=archlinux&logoColor=white)](https://aur.archlinux.org/packages/prismlauncher-git/)

### Installing

```bash
# Latest release (binary)
sudo pacman -S prismlauncher
# Newest Git commit (compiled from source)
yay -S prismlauncher-git
```

You can replace `yay -S` with your preferred [AUR helper's](https://wiki.archlinux.org/title/AUR_helpers) install command.

### Installation using Chaotic-AUR

If you would like to use `prismlauncher-git` without compiling from source, the Chaotic-AUR offers pre-built binaries.

See their instructions on <https://aur.chaotic.cx/> to enable the repository, then run:

```bash
sudo pacman -S prismlauncher-git
```

## <img src="https://www.vectorlogo.zone/logos/centos/centos-icon.svg" height="20"> CentOS Stream / <img src="https://www.vectorlogo.zone/logos/getfedora/getfedora-icon.svg" height="20"> Fedora / <img src="https://www.vectorlogo.zone/logos/redhat/redhat-icon.svg" height="20"> Red Hat Enterprise Linux

RPM packages are available on [Copr](https://copr.fedorainfracloud.org/coprs/g3tchoo/prismlauncher/) for x86_64 and aarch64

If you are on an Enterprise Linux distribution (RHEL, CentOS, Rocky, etc.) and do not have the EPEL repositories enabled, please enable them [here](https://docs.fedoraproject.org/en-US/epel/#_el9)

```bash
# Enables the copr repo
sudo dnf copr enable g3tchoo/prismlauncher
# Install the latest release
sudo dnf install prismlauncher
```

## <img src="https://www.vectorlogo.zone/logos/debian/debian-icon.svg" height="20" /> Debian / <img src="https://www.vectorlogo.zone/logos/ubuntu/ubuntu-icon.svg" height="20" /> Ubuntu (x86_64, ARM64)

Several packages are available through [makedeb](https://makedeb.org/)'s [MPR](https://mpr.makedeb.org/)

[![prismlauncher](https://img.shields.io/badge/mpr-prismlauncher-orange)](https://mpr.makedeb.org/packages/prismlauncher)  
[![prismlauncher-bin](https://img.shields.io/badge/mpr-prismlauncher--bin-orange)](https://mpr.makedeb.org/packages/prismlauncher-bin)  
[![prismlauncher-git](https://img.shields.io/badge/mpr-prismlauncher--git-orange)](https://mpr.makedeb.org/packages/prismlauncher-git)

### Installation using Prebuilt-MPR (recommended)

Add the Prebuilt-MPR repository as described [here](https://docs.makedeb.org/prebuilt-mpr/getting-started/), then run:

```bash
# Latest stable release
sudo apt install prismlauncher
# Newest Git commit
yay -S prismlauncher-git
```

Prebuilt MPR supports Debian 11, 12, and Ubuntu 20.04, 22.04, 22.10, and 23.04.

### Installing with mist, the MPR CLI

Install `mist` by following the [upostream instructions](https://docs.makedeb.org/using-the-mpr/mist-the-mpr-cli/#installing-mist).

```bash
# Latest stable release (compiled from source)
mist install prismlauncher
# Latest stable release (binary)
mist install prismlauncher-bin
# Newest Git commit (compiled from source)
mist install prismlauncher-git
```

### Installing with Pacstall

Install [`pacstall`](https://pacstall.dev/), then run:

```bash
# Latest stable release (compiled from source)
pacstall -I prismlauncher
# Latest stable release (binary)
pacstall -I prismlauncher-bin
# Newest Git commit (compiled from source)
pacstall -I prismlauncher-git
```

## <img src="https://www.vectorlogo.zone/logos/debian/debian-icon.svg" height="20" /> Debian / <img src="https://www.vectorlogo.zone/logos/raspberrypi/raspberrypi-icon.svg" height="20" /> Pi OS / <img src="https://www.vectorlogo.zone/logos/ubuntu/ubuntu-icon.svg" height="20" /> Ubuntu (ARM32/64)

Prism Launcher is available in the [pi-apps](https://github.com/Botspot/pi-apps) store

[![pi-apps-badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FBotspot%2Fpi-apps-analytics%2Fmain%2Fpackage_data_v2.json&query=%24.Minecraft%20Java%20Prism%20Launcher.Version&label=Pi-Apps&color=c51a4a)](https://github.com/Botspot/pi-apps)

<div class="notification type-info">
Only Debian/Raspbian/Pi OS Buster and newer and Ubuntu 18.04 and newer are supported.
</div>

## <img src="https://www.gentoo.org/assets/img/logo/gentoo-signet.svg" height="20" /> Gentoo

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

## <img src="https://www.vectorlogo.zone/logos/nixos/nixos-icon.svg" height="20" /> Nixpkgs

Installation instructions for stable releases are available on the [NixOS Wiki](https://wiki.nixos.org/wiki/Prism_Launcher).

[![prismlauncher](https://img.shields.io/badge/nixpkgs-prismlauncher-blue)](https://search.nixos.org/packages?query=prismlauncher)

## <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/OpenSUSE_Logo.svg" height="20"> openSUSE

An RPM package is available on the [Open Build Service](https://build.opensuse.org/package/show/home:getchoo/prismlauncher)

```bash
# Add repository (if on Leap, replace 'openSUSE_Tumbleweed' with your release version)
zypper addrepo https://download.opensuse.org/repositories/home:getchoo/openSUSE_Tumbleweed/home:getchoo.repo
# Refresh the repository cache
zypper refresh
# Install the latest release
zypper install prismlauncher
```

## <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/Slackware_logo.svg" height="20"> Slackware

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

## <img src="https://bitcu.co/en/wp-content/uploads/2020/07/Void_Linux_logo.svg_.png" height="20"> Void Linux

Prism Launcher is available in the official Void repository

```bash
sudo xbps-install PrismLauncher
```

</div>
