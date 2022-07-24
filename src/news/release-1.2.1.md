---
title: PolyMC Update 1.2.1, now available
description: It's Wednesday my dudes.
date: 2022-04-20
tags:
  - release
---
We have found some bugs in our last release on Sunday, which is why we are bringing you a truckload of bug fixes.
Also check our friends' launch of the Quilt Beta over at [quiltmc.org](https://quiltmc.org)!

## Changelog

### Added

- Specify build platform for about page by @DioEgizio in #449
- [macOS] Enable hardened runtime by @kthchew in #454

### Fixed

- Fix typos and capitalization by @kthchew in #442
- Fix placeholder translations for mod downloader by @flowln in #443
- Fix missing files in release workflow by @Scrumplex in #444
- Fix Modrinth search if Quilt is used by @Scrumplex in #450
- Fix crashes when creating a new instance by @Scrumplex in #451
- Fix crash when mod downloader has network issues by @Scrumplex in #452
- Fix sort-by-size in world list by @Scrumplex in #462
- Fix crash when trying to create an instance without a Minecraft version by @kthchew in #470
- Fix crash when opening the mod downloader with snapshots by @Scrumplex in #472
- [macOS] Fix version string by @kthchew in #455
- [macOS] Fix instance rename using return-key @txtsd in #463

### Removed

- [FreeBSD] Revert "Force system LWJGL natives" by @Scrumplex in #467

**Full Changelog**: <https://github.com/PolyMC/PolyMC/compare/1.2.0...1.2.1>

You can [grab the latest download here](/download) for your respective platform.
