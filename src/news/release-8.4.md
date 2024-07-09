---
title: "Prism Launcher Release 8.4, now available"
description: Now with extra TNT!
date: 2024-06-23
release_version: "8.4"
minimum_macos_version: 11.0.0
macos_file_extension: zip
macos_signature: e0YNKK9AF6oW/sLsya8nNF0fWwn9XaRQQDgcV3r7OH4r1sGCong3ysHJpn4yoCShhIBQbs+eskY7+3hl/TtsBg==
tags:
  - release
---

Hello there!

The latest Prism Launcher update brings enhanced support for NeoForge and ATLauncher modpacks, along with significant improvements to user experience on macOS and critical bug fixes, including better CurseForge export and stability improvements. Enjoy the new features and smoother operations with this release!

Until next time!

## Added

- Add NeoForge support for Technic packs and ATLauncher packs by [@Trial97](https://github.com/Trial97) in [#2382](https://github.com/PrismLauncher/PrismLauncher/pull/2382)
- [Linux] Add support for bcachefs for Copy-on-Write instance copies by [@KernelFreeze](https://github.com/KernelFreeze) in [#2438](https://github.com/PrismLauncher/PrismLauncher/pull/2438)
- [macOS] Add sdkman to java search paths  by [@dqfan2012](https://github.com/dqfan2012) in [#2377](https://github.com/PrismLauncher/PrismLauncher/pull/2377)

## Changed

- Enhance the process of removing invalid characters from a path by [@Trial97](https://github.com/Trial97) in [#2425](https://github.com/PrismLauncher/PrismLauncher/pull/2425) and [#2531](https://github.com/PrismLauncher/PrismLauncher/pull/2531)
- Update the auth server domain to the correct one to use for pinging in logs by [@Trial97](https://github.com/Trial97) in [#2471](https://github.com/PrismLauncher/PrismLauncher/pull/2471)
- [Linux] Shorten desktop entry comment field by [@deadmeu](https://github.com/deadmeu) in [#1032](https://github.com/PrismLauncher/PrismLauncher/pull/1032)
- [macOS] Improve blocked mods dialog by [@kthchew](https://github.com/kthchew) in [#2379](https://github.com/PrismLauncher/PrismLauncher/pull/2379)

## Fixed

- Ensure markdown images have a line break when following a list by [@SabrePenguin](https://github.com/SabrePenguin) and [@TheKodeToad](https://github.com/TheKodeToad) in [#2346](https://github.com/PrismLauncher/PrismLauncher/pull/2346)
- Fix CurseForge export caused by UTF-8 issues by [@Trial97](https://github.com/Trial97) in [#2353](https://github.com/PrismLauncher/PrismLauncher/pull/2353)
- Fix downloading packs with invalid characters by [@Trial97](https://github.com/Trial97) in [#2366](https://github.com/PrismLauncher/PrismLauncher/pull/2366)
- Fix image width in project description by [@Trial97](https://github.com/Trial97) in [#2341](https://github.com/PrismLauncher/PrismLauncher/pull/2341)
- Fix importing of vanilla technic modpacks by [@Trial97](https://github.com/Trial97) in [#2439](https://github.com/PrismLauncher/PrismLauncher/pull/2439)
- Fix incorrect launch time by [@Trial97](https://github.com/Trial97) in [#2423](https://github.com/PrismLauncher/PrismLauncher/pull/2423)
- Fix portable if manifest is missing by [@Trial97](https://github.com/Trial97) in [#2405](https://github.com/PrismLauncher/PrismLauncher/pull/2405)
- Fix resizing too small causing an index out of range crash by [@coolguy1842](https://github.com/coolguy1842) in [#2474](https://github.com/PrismLauncher/PrismLauncher/pull/2474)
- Fix: update datapack and resourcepack versions by [@DioEgizio](https://github.com/DioEgizio) in [#2534](https://github.com/PrismLauncher/PrismLauncher/pull/2534)
- Force single click to select UX by [@TheKodeToad](https://github.com/TheKodeToad) in [#2348](https://github.com/PrismLauncher/PrismLauncher/pull/2348)
- Made Custom New Instance scrollable by [@Trial97](https://github.com/Trial97) in [#2383](https://github.com/PrismLauncher/PrismLauncher/pull/2383)
- Update FTB App import instance path detection by [@Trial97](https://github.com/Trial97) in [#2166](https://github.com/PrismLauncher/PrismLauncher/pull/2166)
- Update Imgur upload by [@Trial97](https://github.com/Trial97) in [#2499](https://github.com/PrismLauncher/PrismLauncher/pull/2499)
- [Windows] Fix detecting Mojang JREs by [@Trial97](https://github.com/Trial97) in [#2337](https://github.com/PrismLauncher/PrismLauncher/pull/2337)

## Removed

- Remove old version variants in instance creation by [@ColonelGerdauf](https://github.com/ColonelGerdauf) in [#2292](https://github.com/PrismLauncher/PrismLauncher/pull/2292)

Full Changelog: <https://github.com/PrismLauncher/PrismLauncher/compare/8.3...8.4>

You can [grab the latest download here](https://prismlauncher.org/download/) for your respective platform.
