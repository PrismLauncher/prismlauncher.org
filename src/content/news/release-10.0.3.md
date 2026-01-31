---
title: "Prism Launcher Release 10.0.3, now available"
description: "May contain nuts!"
date: 2026-01-31
slug: "release-10.0.3"
release_version: "10.0.3"
minimum_macos_version: 12.0.0
macos_file_extension: zip
macos_signature: =====changeme=====
tags:
  - Release
---

Hi again!

This is another small release to sort out more bugs!

As always, you can [grab the latest download here](/download). Until next time!

## Added

- MSAStep: Log server errors by [@Octol1ttle](https://github.com/Octol1ttle) in [#4895](https://github.com/PrismLauncher/PrismLauncher/pull/4895)
- add more loaders to override setting by [@Trial97](https://github.com/Trial97) in [#4701](https://github.com/PrismLauncher/PrismLauncher/pull/4701)

## Changed

- Abort launch when there are libraries missing by [@Octol1ttle](https://github.com/Octol1ttle) in [#4899](https://github.com/PrismLauncher/PrismLauncher/pull/4899)
- Mention nightly Flatpak in docs by [@getchoo](https://github.com/getchoo) in [#4887](https://github.com/PrismLauncher/PrismLauncher/pull/4887)
- Take $GRADLE_USER_HOME into account when looking for JDKs by [@SandaruKasa](https://github.com/SandaruKasa) in [#4790](https://github.com/PrismLauncher/PrismLauncher/pull/4790)
- auth: improve status messages by [@Octol1ttle](https://github.com/Octol1ttle) in [#4750](https://github.com/PrismLauncher/PrismLauncher/pull/4750)
- chore: make appimage use portals for file picking by [@DioEgizio](https://github.com/DioEgizio) in [#4759](https://github.com/PrismLauncher/PrismLauncher/pull/4759)
- fix: improve we couldn't launch after 3 tries message by [@DioEgizio](https://github.com/DioEgizio) in [#4805](https://github.com/PrismLauncher/PrismLauncher/pull/4805)

## Fixed

- Add missing returns after task signal activation by [@Octol1ttle](https://github.com/Octol1ttle) in [#4836](https://github.com/PrismLauncher/PrismLauncher/pull/4836)
- Fix auto-join getting stuck disabled by [@TheKodeToad](https://github.com/TheKodeToad) in [#4711](https://github.com/PrismLauncher/PrismLauncher/pull/4711)
- Fix for Prism failing to recognize some shader pack ZIP archives added manually by the user by [@SwitchAxe](https://github.com/SwitchAxe) in [#4745](https://github.com/PrismLauncher/PrismLauncher/pull/4745)
- Fix instance and settings window minimum size by [@TheKodeToad](https://github.com/TheKodeToad) in [#4769](https://github.com/PrismLauncher/PrismLauncher/pull/4769)
- Free up disk space on Flatpak builds so they don't crash by [@Octol1ttle](https://github.com/Octol1ttle) in [#4755](https://github.com/PrismLauncher/PrismLauncher/pull/4755)
- IconList: Make sure we always set new path by [@Octol1ttle](https://github.com/Octol1ttle) in [#4753](https://github.com/PrismLauncher/PrismLauncher/pull/4753)
- MSAStep: Tighten isSchemeHandlerRegistered check by [@Octol1ttle](https://github.com/Octol1ttle) in [#4841](https://github.com/PrismLauncher/PrismLauncher/pull/4841)
- MinecraftSettingsWidget: Swap window width/height spinboxes by [@Octol1ttle](https://github.com/Octol1ttle) in [#4853](https://github.com/PrismLauncher/PrismLauncher/pull/4853)
- ModrinthCheckUpdate: Don't send a request that is doomed to fail by [@Octol1ttle](https://github.com/Octol1ttle) in [#4840](https://github.com/PrismLauncher/PrismLauncher/pull/4840)
- PackProfile: don't reset dirty if component list saving failed by [@Octol1ttle](https://github.com/Octol1ttle) in [#4870](https://github.com/PrismLauncher/PrismLauncher/pull/4870)
- Set current auth step description in correct method by [@Octol1ttle](https://github.com/Octol1ttle) in [#4733](https://github.com/PrismLauncher/PrismLauncher/pull/4733)
- Trim whitespace from path values in settings by [@getchoo](https://github.com/getchoo) in [#4886](https://github.com/PrismLauncher/PrismLauncher/pull/4886)
- accept libarchive warning result by [@Trial97](https://github.com/Trial97) in [#4761](https://github.com/PrismLauncher/PrismLauncher/pull/4761)
- fix ftb import for old packs by [@Trial97](https://github.com/Trial97) in [#4787](https://github.com/PrismLauncher/PrismLauncher/pull/4787)
- hack: resolve dependencies for imageformats on mingw by [@DioEgizio](https://github.com/DioEgizio) in [#4739](https://github.com/PrismLauncher/PrismLauncher/pull/4739)
- initilize world size by [@Trial97](https://github.com/Trial97) in [#4784](https://github.com/PrismLauncher/PrismLauncher/pull/4784)
- properly redraw viewport when scroll happens by [@Trial97](https://github.com/Trial97) in [#4857](https://github.com/PrismLauncher/PrismLauncher/pull/4857)

## Removed

- Remove in-tree flatpak by [@getchoo](https://github.com/getchoo) in [#4856](https://github.com/PrismLauncher/PrismLauncher/pull/4856)
