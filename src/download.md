---
layout: layouts/main.njk
permalink: /download/
title: Download
---
<div class="center">
    <h1>Download</h1>
    <div>
        <a class="button" href="https://packages.polymc.org/latest/win32/win32.zip">Windows (.zip)</a>
        <a class="button" href="#mac">Mac</a>
        <a class="button" href="#linux">Linux</a>
        <a class="button" href="#freebsd">FreeBSD</a>
        <a class="button" href="#openbsd">OpenBSD</a>
    </div>
</div>
<br>

<div class="infobox">

## <img src="https://www.vectorlogo.zone/logos/apple/apple-tile.svg" height="20" /> MacOS

MacOS has experimental development builds available [here](https://github.com/PolyMC/PolyMC/actions)

</div>

<br>

<div class="infobox">

# 🐧 Linux

### <img src="https://www.vectorlogo.zone/logos/linuxfoundation/linuxfoundation-icon.svg" height="20" alt=""/> Cross-distro packages

<a href='https://flathub.org/apps/details/org.polymc.PolyMC'><img width='240' alt='Download on Flathub' src='https://flathub.org/assets/badges/flathub-badge-en.png'/></a>

<a href="https://packages.polymc.org/latest/appimage/PolyMC-latest-x86_64.AppImage"><img src="https://docs.appimage.org/_images/download-appimage-banner.svg" width="240" alt="Download as AppImage" /></a>

- [AppImage SHA256](https://packages.polymc.org/latest/appimage/PolyMC-latest-x86_64.AppImage.sha256)
- All packages (archived by version) can be found [here](https://packages.polymc.org/) ([latest](https://packages.polymc.org/latest)).
- Last build status: https://jenkins.polymc.org/job/PolyMC/lastBuild/
### <img src="https://www.vectorlogo.zone/logos/archlinux/archlinux-icon.svg" height="20"/> Arch Linux

There are several AUR packages available:  
[![polymc](https://img.shields.io/badge/aur-polymc-blue)](https://aur.archlinux.org/packages/polymc/)  
[![polymc-bin](https://img.shields.io/badge/aur-polymc--bin-blue)](https://aur.archlinux.org/packages/polymc-bin/)  
[![polymc-git](https://img.shields.io/badge/aur-polymc--git-blue)](https://aur.archlinux.org/packages/polymc-git/)

```
# stable source package:
yay -S polymc
# stable binary package:
yay -S polymc-bin
# latest git package:
yay -S polymc-git
```

### <img src="https://www.vectorlogo.zone/logos/debian/debian-icon.svg" height="20" /> Debian

We use [makedeb](https://docs.makedeb.org/) for our Debian packages.  
Several MPR packages are available:

[![polymc](https://img.shields.io/badge/mpr-polymc-orange)](https://mpr.makedeb.org/packages/polymc)  
[![polymc-bin](https://img.shields.io/badge/mpr-polymc--bin-orange)](https://mpr.makedeb.org/packages/polymc-bin)  
[![polymc-git](https://img.shields.io/badge/mpr-polymc--git-orange)](https://mpr.makedeb.org/packages/polymc-git)

```
# stable source package:
sudo tap install polymc
# stable binary package:
sudo tap install polymc-bin
# latest git package:
sudo tap install polymc-git
```

### <img src="https://www.vectorlogo.zone/logos/nixos/nixos-icon.svg" height="20" /> Nix

A [Nix derivation](packages/nix/NIX.md) is available.

### <img src="https://www.gentoo.org/assets/img/logo/gentoo-signet.svg" height="20" /> Gentoo

A Gentoo ebuild is available in the [swirl](https://git.swurl.xyz/swirl/ebuilds) overlay, named `games-action/polymc`.

```
# as root:
emerge --oneshot eselect-repository
eselect-repository enable swirl
emaint sync -r swirl
emerge polymc
# to use latest git version:
sudo tee -a /etc/portage/package.accept_keywords <<< "=games-action/polymc-9999 **"
```

### <img src="https://www.vectorlogo.zone/logos/getfedora/getfedora-icon.svg" height="20"> Fedora

An RPM package is available on [COPR](https://copr.fedorainfracloud.org/coprs/sentry/polymc/)

```
sudo dnf copr enable sentry/polymc
sudo dnf install polymc
```
### <img src="https://lotar.altervista.org/wiki/_media/news/slackware-logo.png" height="20" /> Slackware

[A SlackBuild](https://codeberg.org/glowiak/SlackBuilds/src/branch/master/repository/polymc.md) is available. You will need [qt5](http://slackbuilds.org/repository/14.2/libraries/qt5/) (on 15.0 installed by default), [a JDK](https://codeberg.org/glowiak/SlackBuilds/src/branch/master/repository/adoptium-jdk8.md), and if you're on 14.2, you need to compile newer CMake version manually. To build, type in extracted directory with all dependiences met:

    sudo ./polymc.SlackBuild
    sudo installpkg /tmp/polymc-version-arch-1_SBo.tgz

You can also download a community-maintained [prebuilt x86_64 package](http://glowiak.github.io/file/polymc-latest-slackware) and install it with /sbin/installpkg:

    sudo /sbin/installpkg ~/Downloads/polymc-version-x86_64-1_SBo.tgz
# <img src="https://www.vectorlogo.zone/logos/freebsd/freebsd-icon.svg" height="20" /> FreeBSD

There are community-maintained binary packages available:

- [AppBSD Image](http://glowiak.github.io/file/polymc-latest-fbsd64-appbsd) - a portable application, requires [AppBSD](https://codeberg.org/glowiak/appbsd/) (0.4.9 or newer) to be installed.

- [Gzipped binaries](http://glowiak.github.io/file/polymc-latest-fbsd64-raw) - traditional way to distribute, unpack and run.

In both cases you need X11, Qt5 and Java installed. Both files are 64bit only.  
You can build from source - see [BUILD.md](https://github.com/PolyMC/PolyMC/blob/develop/BUILD.md)

## <img src="https://raw.githubusercontent.com/AliasIO/wappalyzer/master/src/drivers/webextension/images/icons/OpenBSD%20httpd.svg" height="20" /> OpenBSD

There are community-maintained binary packages available:

- [gzipped 32-bit binaries](http://glowiak.github.io/file/polymc-latest-obsd32-raw), download, unpack and run.

You need X11, Qt5 and Java installed.  
You can build from source - see [BUILD.md](https://github.com/PolyMC/PolyMC/blob/develop/BUILD.md)

# Development Builds

There are per-commit development builds available [here](https://github.com/PolyMC/PolyMC/actions). These have debug information in the binaries, so their file sizes are relatively larger.
Portable builds are provided for AppImage on Linux, Windows, and macOS.

For Debian and Arch, you can use these packages for the latest development versions:  
[![polymc-git](https://img.shields.io/badge/aur-polymc--git-blue)](https://aur.archlinux.org/packages/polymc-git/)
[![polymc-git](https://img.shields.io/badge/mpr-polymc--git-orange)](https://mpr.makedeb.org/packages/polymc-git)  
For flatpak, you can use [flathub-beta](https://discourse.flathub.org/t/how-to-use-flathub-beta/2111)
</div>
