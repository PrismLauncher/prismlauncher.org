---
title: "Prism Launcher Release 11.1.0"
description: "Almost C++23!"
date: 2026-09-03
slug: "release-11.1.0"
release_version: "11.1.0"
minimum_macos_version: 12.0.0
macos_file_extension: zip
macos_signature: 2irN7XYKaSupHxwh863vBpOOvr1nKfB9AqjNO5Cvu/QFYdAwqzUH/GirNPOO4hgyXzj2PcXJTL3gb6OHhVPaAw==
tags:
  - Release
---

Greetings! This release includes a fairly small update - the main change being some extra safety with a warning for embedded mods when manually importing Modrinth or CurseForge modpacks.

Some issues with excessive disk activity should also be fixed now - you might find this especially reduces freezing when closing the launcher settings or launching an instance.

Apart from that, there are a few minor bug fixes which can be seen below.

## Added

- Add warning for untrusted mods in imported modpacks by [@TheKodeToad](https://github.com/TheKodeToad) in [#5886](https://github.com/PrismLauncher/PrismLauncher/pull/5886)

## Fixed

- Added missing tab stops and/or fixed their order by [@D00NIK](https://github.com/D00NIK) in [#5662](https://github.com/PrismLauncher/PrismLauncher/pull/5662)
- Avoid excessive config writes (less freezing especially on HDD!) by [@TheKodeToad](https://github.com/TheKodeToad) and [@Octol1ttle](https://github.com/Octol1ttle) in [#5858](https://github.com/PrismLauncher/PrismLauncher/pull/5858), [#5945](https://github.com/PrismLauncher/PrismLauncher/pull/5945) and [#5913](https://github.com/PrismLauncher/PrismLauncher/pull/5913)
- Cache resource hard link count by [@TheKodeToad](https://github.com/TheKodeToad) in [#5860](https://github.com/PrismLauncher/PrismLauncher/pull/5860)
- Fix existing instance shortcuts not being detected by [@Octol1ttle](https://github.com/Octol1ttle) in [#5818](https://github.com/PrismLauncher/PrismLauncher/pull/5818)
- Fix hard to read menu bar colors on MacOS by [@frigtear](https://github.com/frigtear) in [#4997](https://github.com/PrismLauncher/PrismLauncher/pull/4997)
- Fix instance shortcuts breaking when the instance is renamed by [@Vishrut2403](https://github.com/Vishrut2403) and [@TheKodeToad](https://github.com/TheKodeToad) in [#5816](https://github.com/PrismLauncher/PrismLauncher/pull/5816), [#5930](https://github.com/PrismLauncher/PrismLauncher/pull/5930) and [#5887](https://github.com/PrismLauncher/PrismLauncher/pull/5887)
- Prevent renaming instance folder while instance is running by [@Vishrut2403](https://github.com/Vishrut2403) in [#5822](https://github.com/PrismLauncher/PrismLauncher/pull/5822)
- fix: crash when trying to install a disabled modloader by [@Trial97](https://github.com/Trial97) in [#5779](https://github.com/PrismLauncher/PrismLauncher/pull/5779)
