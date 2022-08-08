---
title: PolyMC Update 1.3.0, now available
description: A lot of new things to check out!
date: 2022-05-22
tags:
  - release
---

Hey!
It's update-time again. This time we bring you some highlights, like Modrinth modpack support, a Windows installer, more paste services and improvements around our ATLauncher support.
There is also a breaking change affecting older platforms.
We have bumped our Qt dependency requirement to version 5.12.
If you user an older platform, you might still be able to run PolyMC through our existing distribution methods (AppImage, Flatpak on Linux).

Initially this release should have included a workaround for download issues with CurseForge mods and modpacks, but we were contacted by CurseForge to remove our workaround.

## Changelog

### Added

- Support ATLauncher share codes by @jamierocks in #408
- Allow changing metadata-server settings by @dada513 in #425
- Add PolyMC icon as instance icon by @ryanccn in #498
- Add option to always hide Java setup wizard by @dada513 in #511
- Add support for paste.gg, hastebin and mclo.gs paste services by @LennyMcLennington in #554
- Add instance overrides for miscellaneous settings by @kthchew in #560
- Modrinth modpack support by @flowln and @Scrumplex in #565
- Quilt mod metadata support by @Scrumplex in #567 and @DioEgizio in #590
- Support Mojang's new split natives by @Scrumplex in #594
- Allow changing CurseForge api key settings by @dada513 in #607
- [macOS] Add Big Sur-style icon by @ryanccn in #495
- [Windows] Add Windows installer by @kthchew in #576

### Changed

- Bump Qt requirement to 5.12 by @Scrumplex in #127
- Refactor launcher code by @icelimetea in #486 #520
- Refactor network code by @flowln in #500
- Speedup automatic builds by @txtsd in #510 #614
- Make profile selection menu scrollable by @kthchew in #546
- Switch to new CurseForge API Key by @ZekeSmith in #557
- Improve behavior when multiple mod loaders are in use by @Scrumplex in #597
- Various improvements to ATLauncher support by @jamierocks in #605
- Switch to a better CurseForge icon by @DioEgizio in #612
- Improve compile parameters by @Scrumplex in #616 #620

### Fixed

- Always build iconfix as static library by @flowln in #477
- Added and fixed mnemonics by @dschemp in #480 and @txtsd in #503
- Fix selection of .zip files by @flowln in #528
- Fix graphical issue when moving toolbars by @flowln in #529
- Fix missing translations when switching languages by @kthchew in #539
- Fix missing screenshots in screenshot manager by @kthchew in #540
- Fix website link in CurseForge modpacks by @DioEgizio in #545
- Hide temporary directory inside instances directory by @kthchew in #547
- Fix icons not showing in some FTB modpacks by @flowln in #564
- Fix toolbar disappearing in a certain circumstance by @LennyMcLennington in #577
- Fix issue with [Solder.cf Technic packs](https://solder.io/) by @flowln in #592
- [macOS] Fix Steam overlay on macOS by @kthchew in #568

### Removed

- Remove unneeded build files by @Scrumplex in #519
- Remove references to legacy Minecraft accounts by @Ozynt in #531
- Remove self-promotion from game client to reduce fingerprinting by @jamierocks in #606
- [macOS] Remove old macOS migration code by @kthchew in #489

**Full Changelog**: <https://github.com/PolyMC/PolyMC/compare/1.2.2...1.3.0>

You can [grab the latest download here](/download) for your respective platform.
