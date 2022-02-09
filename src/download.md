---
layout: layouts/main.njk
permalink: /download/
title: Download
---
<div class="center">
    <h1> Download </h1>
    <ul class="download-links">
        <li><a class="button" href="https://packages.polymc.org/latest/win32/win32.zip">Windows (Zip)</a></li>
        <li><a class="button" href="#mac">Mac</a></li>
        <li><a class="button" href="#linux">Linux</a></li>
    </ul>
</div>
<br>

<div class="infobox">

## <img src="https://www.vectorlogo.zone/logos/apple/apple-tile.svg" height="20" /> MacOS

MacOS currently does not have any packages. We are still working on setting up MacOS packaging. Meanwhile, you can [build](https://github.com/PolyMC/PolyMC/blob/develop/BUILD.md#macos) it for yourself.

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
</div>
