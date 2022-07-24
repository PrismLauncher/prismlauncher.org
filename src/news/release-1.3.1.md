---
title: PolyMC Update 1.3.1, now available
description: Fixing up the oopsies!
date: 2022-05-29
tags:
  - release
---

Hey, it's that time again!
This time you only get some small tweaks and fixes.
With this release downloading CurseForge packs should be a better experience, as now the launcher will tell you what mods could not be downloaded.
Please make sure to download all those mods, otherwise you won't have the full modpack.

## Changelog

### Added

- Add code style configuration by @ryanccn in #623
- Add modpack version in the name for FTB legacy packs by @Scrumplex in #672
- [Windows] Add desktop shortcut in the installer by @kthchew in #629

### Changed

- Clarify T&C for API keys by @Scrumplex in #659
- Improve download speed when using the CurseForge API by @timoreo22 in #611
- Improve whitelisted hosts filtering code by @LennyMcLennington in #661
- Make JVM arguments text-field multi-line by @ryanccn in #624
- Remove CurseForge API workaround on modpacks by @Scrumplex in #645
- Show metaserver URL instead of `(default)` by @ryanccn in #642
- Update Nix support by @muscaln in #653 and #675
- Warn the user of non-whitelisted hosts in mrpacks by @flowln in #661
- [macOS] Switch background of icon to white by @ryanccn in #625

### Fixed

- Correctly handle ATL packs when `mainClass` has a `depends` field by @jamierocks in #630
- Fix crash when aborting instance import by @JJL772 in #657
- Fix icon importing when using non-standard icon paths by @flowln in #650
- Fix missing mnemonics in the API page by @Scrumplex in #651
- Fix modpack's type inference when importing by @Scrumplex in #639 and #671
- Fix search filters for Modrinth by @timoreo22 in #677
- Properly fix CurseForge modpack installation by @timoreo22 in #611 and @Scrumplex in #674
- Silence unimportant build warnings by @kthchew in #631
- [Linux] Add missing image-format libraries for the AppImage by @DioEgizio in #618
- [Linux] Fix image sizes in Flathub by @byquanton in #637
- [Windows] Correctly set PolyMC's version for binaries by @Scrumplex in #669

### Removed

- [Windows] Remove explicit Vista support by @DioEgizio in #667

**Full Changelog**: <https://github.com/PolyMC/PolyMC/compare/1.3.0...1.3.1>

You can [grab the latest download here](/download) for your respective platform.
