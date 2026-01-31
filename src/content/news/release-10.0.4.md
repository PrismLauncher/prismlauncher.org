---
title: "Prism Launcher Release 10.0.4, now available"
description: "May contain nuts2!"
date: 2026-01-31
slug: "release-10.0.4"
release_version: "10.0.4"
minimum_macos_version: 12.0.0
macos_file_extension: zip
macos_signature: 26CjqZkh9RKBDszMpsofZPNqZlb9GI0CY1o4amAPcbg8C0/PrYgXcUCsqOEfuxLEt4tr2d8HK6+cNlvyffL9Bg==
tags:
  - Release
---

Hi again!

This is another small release to sort out more bugs!
AppImage updating is fixed. Updates were previously blocked due to a signing failure, which is now resolved.
In 10.0.3 we accidentally forget to change the version number, so we have immediately released 10.0.4 to fix that.

As always, you can [grab the latest download here](/download). Until next time!

## Added

- MSAStep: Log server errors by [@Octol1ttle](https://github.com/Octol1ttle) in [#4895](https://github.com/PrismLauncher/PrismLauncher/pull/4895)
- add more loaders to override setting by [@Trial97](https://github.com/Trial97) in [#4701](https://github.com/PrismLauncher/PrismLauncher/pull/4701)

## Changed

- Abort launch when there are libraries missing by [@Octol1ttle](https://github.com/Octol1ttle) in [#4899](https://github.com/PrismLauncher/PrismLauncher/pull/4899)
- Mention nightly Flatpak in docs by [@getchoo](https://github.com/getchoo) in [#4887](https://github.com/PrismLauncher/PrismLauncher/pull/4887)
- Take $GRADLE_USER_HOME into account when looking for JDKs by [@SandaruKasa](https://github.com/SandaruKasa) in [#4790](https://github.com/PrismLauncher/PrismLauncher/pull/4790)
- [AppImage] use portals for file picking by [@DioEgizio](https://github.com/DioEgizio) in [#4759](https://github.com/PrismLauncher/PrismLauncher/pull/4759)
- auth: improve status messages by [@Octol1ttle](https://github.com/Octol1ttle) in [#4750](https://github.com/PrismLauncher/PrismLauncher/pull/4750)
- improve we couldn't launch after 3 tries message by [@DioEgizio](https://github.com/DioEgizio) in [#4805](https://github.com/PrismLauncher/PrismLauncher/pull/4805)
- update to qt 6.10.2, build codeql on the qt version we still want to support, sign DLLs on windows by [@DioEgizio](https://github.com/DioEgizio) in [#4909](https://github.com/PrismLauncher/PrismLauncher/pull/4909)

## Fixed

- Add missing returns after task signal activation by [@Octol1ttle](https://github.com/Octol1ttle) in [#4836](https://github.com/PrismLauncher/PrismLauncher/pull/4836)
- Fix auto-join getting stuck disabled by [@TheKodeToad](https://github.com/TheKodeToad) in [#4711](https://github.com/PrismLauncher/PrismLauncher/pull/4711)
- Fix for Prism failing to recognize some shader pack ZIP archives added manually by the user by [@SwitchAxe](https://github.com/SwitchAxe) in [#4745](https://github.com/PrismLauncher/PrismLauncher/pull/4745)
- Fix instance and settings window minimum size by [@TheKodeToad](https://github.com/TheKodeToad) in [#4769](https://github.com/PrismLauncher/PrismLauncher/pull/4769)
- Fix some modpacks not importing by [@Trial97](https://github.com/Trial97) in [#4761](https://github.com/PrismLauncher/PrismLauncher/pull/4761)
- Fix world size being wrong by [@Trial97](https://github.com/Trial97) in [#4784](https://github.com/PrismLauncher/PrismLauncher/pull/4784)
- Free up disk space on Flatpak builds so they don't crash by [@Octol1ttle](https://github.com/Octol1ttle) in [#4755](https://github.com/PrismLauncher/PrismLauncher/pull/4755)
- IconList: Make sure we always set new path by [@Octol1ttle](https://github.com/Octol1ttle) in [#4753](https://github.com/PrismLauncher/PrismLauncher/pull/4753)
- MSAStep: Tighten isSchemeHandlerRegistered check by [@Octol1ttle](https://github.com/Octol1ttle) in [#4841](https://github.com/PrismLauncher/PrismLauncher/pull/4841)
- MinecraftSettingsWidget: Swap window width/height spinboxes by [@Octol1ttle](https://github.com/Octol1ttle) in [#4853](https://github.com/PrismLauncher/PrismLauncher/pull/4853)
- ModrinthCheckUpdate: Don't send a request that is doomed to fail by [@Octol1ttle](https://github.com/Octol1ttle) in [#4840](https://github.com/PrismLauncher/PrismLauncher/pull/4840)
- PackProfile: don't reset dirty if component list saving failed by [@Octol1ttle](https://github.com/Octol1ttle) in [#4870](https://github.com/PrismLauncher/PrismLauncher/pull/4870)
- Set current auth step description in correct method by [@Octol1ttle](https://github.com/Octol1ttle) in [#4733](https://github.com/PrismLauncher/PrismLauncher/pull/4733)
- Trim whitespace from path values in settings by [@getchoo](https://github.com/getchoo) in [#4886](https://github.com/PrismLauncher/PrismLauncher/pull/4886)
- [Windows] Fix JPEG and WEBP in MinGW builds by [@DioEgizio](https://github.com/DioEgizio) in [#4739](https://github.com/PrismLauncher/PrismLauncher/pull/4739)
- fix ftb import for old packs by [@Trial97](https://github.com/Trial97) in [#4787](https://github.com/PrismLauncher/PrismLauncher/pull/4787)

## Removed

- Remove in-tree flatpak by [@getchoo](https://github.com/getchoo) in [#4856](https://github.com/PrismLauncher/PrismLauncher/pull/4856)
