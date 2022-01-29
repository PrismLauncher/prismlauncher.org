---
layout: layouts/page.njk
permalink: /downloads/
---
## Packages
Several source build packages are available, along with experimental pre-built generic packages.

<a href='https://flathub.org/apps/details/org.polymc.PolyMC'><img width='240' alt='Download on Flathub' src='https://flathub.org/assets/badges/flathub-badge-en.png'/></a>
[![AUR package](https://img.shields.io/aur/version/polymc-git)](https://aur.archlinux.org/packages/polymc-git/)
- A [Nix](packages/nix/NIX.md) derivation is available in repo.
- A Gentoo ebuild is available in the [swirl](https://git.swurl.xyz/swirl/ebuilds) overlay, named `games-action/polymc`. Check the README for instructions on how to add the overlay.
- The Flatpak can be built using [this source](https://github.com/flathub/org.polymc.PolyMC).
- An RPM package is available on [COPR](https://copr.fedorainfracloud.org/coprs/sentry/polymc/), or can be built by going to the `packages/rpm` directory and running `rpmbuild -bb polymc.spec`.
- Generic, prebuilt packages (archived by version) can be found [here](https://packages.polymc.org/) ([latest](https://packages.polymc.org/latest)).
- Last build status: https://jenkins.polymc.org/job/PolyMC/lastBuild/
- [Linux (AMD64) System](https://packages.polymc.org/latest/lin64-system/lin64-system.tar.zst) ([SHA256](https://packages.polymc.org/latest/lin64-system/lin64-system.tar.zst.sha256)) - this is a generic system package intended to be used as a base for making distro-specific packages.
- [Windows (32-bit)](https://packages.polymc.org/latest/win32/win32.zip) ([SHA256](https://packages.polymc.org/latest/win32/win32.zip.sha256)) - this is a portable package, you can extract it anywhere and run it. This package needs testing.
- [Debian (AMD64)](https://packages.polymc.org/latest/deb/polymc-amd64.deb) ([SHA256](https://packages.polymc.org/latest/deb/polymc-amd64.deb.sha256)) - this is intended to be installed with `dpkg -i`. Alternatively, you may build the `.deb` yourself, by going to `packages/debian` and running `./makedeb.sh`.
- [AppImage (AMD64)](https://packages.polymc.org/latest/appimage/PolyMC-latest-x86_64.AppImage) ([SHA256](https://packages.polymc.org/latest/appimage/PolyMC-latest-x86_64.AppImage.sha256)) - `chmod +x` must be run on this file before usage. This should work on any distribution.
- [Arch Linux (AMD64)](https://packages.polymc.org/latest/arch/polymc-bin-latest-1-x86_64.pkg.tar.zst) ([SHA256](https://packages.polymc.org/latest/arch/polymc-bin-latest-1-x86_64.pkg.tar.zst.sha256)) - this is intended to be installed with `pacman -U`. This is an alternative if building the AUR package is not desired.
- MacOS currently does not have any packages. We are still working on setting up MacOS packaging.