---
title: "Prism Launcher Release 7.2, now available"
description: Absolutely no memes!
date: 2023-07-26
release_version: "7.2"
minimum_macos_version: 11.0.0
macos_file_extension: tar.gz
macos_signature: oSJkIb6qFA7YUCyCKxY8YHtungtYgDii/pCw9BBRkWSn2SRUO1qWz0spuhW3N4bpsE54p7H0LOYW0iHWqBleBg==
tags:
  - release
---

Hello!

This is a smaller release, with mostly bug fixes. We fixed lots of bugs (old and new) in this one as well as adding some new smaller features.

Until next time!

## Changelog

### Added

- Add Git Blame ignore file by [@Scrumplex](https://github.com/Scrumplex) in [#1275](https://github.com/PrismLauncher/PrismLauncher/pull/1275)
- Add LiteMod support to mod browser by [@TheKodeToad](https://github.com/TheKodeToad) in [#1334](https://github.com/PrismLauncher/PrismLauncher/pull/1334)
- Add option to always use system locale by [@Trial97](https://github.com/Trial97) in [#1345](https://github.com/PrismLauncher/PrismLauncher/pull/1345)
- Add 'Suggest a Feature' to help menu by [@getchoo](https://github.com/getchoo) in [#1251](https://github.com/PrismLauncher/PrismLauncher/pull/1251)
- Add toggle for quilt beacon by [@getchoo](https://github.com/getchoo) and [@Scrumplex](https://github.com/Scrumplex) in [#1357](https://github.com/PrismLauncher/PrismLauncher/pull/1357) [#1387](https://github.com/PrismLauncher/PrismLauncher/pull/1387)
- Add validation for metadata URL by [@Scrumplex](https://github.com/Scrumplex) in [#1325](https://github.com/PrismLauncher/PrismLauncher/pull/1325)
- Automatically focus search bar when opening resource browser by [@Trial97](https://github.com/Trial97) in [#1369](https://github.com/PrismLauncher/PrismLauncher/pull/1369)
- Enable address sanitizer in debug builds by [@Ryex](https://github.com/Ryex) and [@flowln](https://github.com/flowln) in [#1306](https://github.com/PrismLauncher/PrismLauncher/pull/1306)
- Optional mods in .mrpack export by [@TheKodeToad](https://github.com/TheKodeToad) in [#1321](https://github.com/PrismLauncher/PrismLauncher/pull/1321)
- [Linux] Add close button to the main toolbar when running on Gamescope by [@leia-uwu](https://github.com/leia-uwu) in [#1065](https://github.com/PrismLauncher/PrismLauncher/pull/1065)

### Changed

- Added more information to the screenshot upload warning by [@Trial97](https://github.com/Trial97) in [#1281](https://github.com/PrismLauncher/PrismLauncher/pull/1281)
- Exclude .DS_Store and Thumbs.db in .mrpack export by [@Trial97](https://github.com/Trial97) in [#1243](https://github.com/PrismLauncher/PrismLauncher/pull/1243) [#1255](https://github.com/PrismLauncher/PrismLauncher/pull/1255)
- Exclude logs from instance export by [@Trial97](https://github.com/Trial97) in [#1292](https://github.com/PrismLauncher/PrismLauncher/pull/1292)
- Don't trash outdated mods when updating by [@TheKodeToad](https://github.com/TheKodeToad) in [#1331](https://github.com/PrismLauncher/PrismLauncher/pull/1331)
- Hide the Git commit entry on the About dialog if unsupported by [@flowln](https://github.com/flowln) in [#1218](https://github.com/PrismLauncher/PrismLauncher/pull/1218)
- Improve wording on instance import page by [@getchoo](https://github.com/getchoo) in [#1252](https://github.com/PrismLauncher/PrismLauncher/pull/1252)
- Keep track of failed file copies and clones by [@Ryex](https://github.com/Ryex) in [#1284](https://github.com/PrismLauncher/PrismLauncher/pull/1284)
- Made cat scalable by [@Trial97](https://github.com/Trial97) in [#1127](https://github.com/PrismLauncher/PrismLauncher/pull/1127)
- Match behavior of vanilla launcher when launching offline by [@Gaming32](https://github.com/Gaming32) and [@TheKodeToad](https://github.com/TheKodeToad) in [#1397](https://github.com/PrismLauncher/PrismLauncher/pull/1397) [#1426](https://github.com/PrismLauncher/PrismLauncher/pull/1426)
- Print build platform on launch by [@Scrumplex](https://github.com/Scrumplex) in [#1276](https://github.com/PrismLauncher/PrismLauncher/pull/1276)
- Update developer credits by [@TheKodeToad](https://github.com/TheKodeToad) in [#1259](https://github.com/PrismLauncher/PrismLauncher/pull/1259)
- Use default icon for unmanaged Modrinth packs by [@telans](https://github.com/telans) in [#1231](https://github.com/PrismLauncher/PrismLauncher/pull/1231)
- [Linux] Update Nix lock by [@renovate[bot]](https://github.com/renovate[bot]), [@Scrumplex](https://github.com/Scrumplex), [@getchoo](https://github.com/getchoo) and [@github-actions[bot]](https://github.com/github-actions[bot]) in [#1214](https://github.com/PrismLauncher/PrismLauncher/pull/1214) [#1304](https://github.com/PrismLauncher/PrismLauncher/pull/1304) [#1310](https://github.com/PrismLauncher/PrismLauncher/pull/1310) [#1337](https://github.com/PrismLauncher/PrismLauncher/pull/1337) [#1372](https://github.com/PrismLauncher/PrismLauncher/pull/1372)

### Fixed

- Add missing space in java checker debug message by [@ChrisLane](https://github.com/ChrisLane) in [#1235](https://github.com/PrismLauncher/PrismLauncher/pull/1235)
- Allow installation of CurseForge modpacks that don't have any mods by [@Trial97](https://github.com/Trial97) in [#1368](https://github.com/PrismLauncher/PrismLauncher/pull/1368)
- Prevent crash when trying to edit invalid instances by [@Ryex](https://github.com/Ryex) in [#1333](https://github.com/PrismLauncher/PrismLauncher/pull/1333)
- Fix a crash when updating mods by [@Trial97](https://github.com/Trial97) in [#1352](https://github.com/PrismLauncher/PrismLauncher/pull/1352)
- Fix broken URLs in Modrinth export by [@telans](https://github.com/telans) in [#1261](https://github.com/PrismLauncher/PrismLauncher/pull/1261)
- Fix compiler warnings by [@Trial97](https://github.com/Trial97) in [#1362](https://github.com/PrismLauncher/PrismLauncher/pull/1362)
- Fix crash if no version is loaded on modpack page by [@Trial97](https://github.com/Trial97) in [#1350](https://github.com/PrismLauncher/PrismLauncher/pull/1350)
- Fix crash in mod browser by [@Trial97](https://github.com/Trial97) in [#1228](https://github.com/PrismLauncher/PrismLauncher/pull/1228)
- Fix crash when downloading mods by [@Trial97](https://github.com/Trial97) in [#1200](https://github.com/PrismLauncher/PrismLauncher/pull/1200) [#1256](https://github.com/PrismLauncher/PrismLauncher/pull/1256)
- Fix CurseForge modpack updater issues by [@clickdevin](https://github.com/clickdevin) in [#1184](https://github.com/PrismLauncher/PrismLauncher/pull/1184)
- Fix illegal characters in shortcuts name by [@Trial97](https://github.com/Trial97) in [#1280](https://github.com/PrismLauncher/PrismLauncher/pull/1280)
- Fix implicit fallthrough issues in codebase by [@pandaninjas](https://github.com/pandaninjas) in [#1128](https://github.com/PrismLauncher/PrismLauncher/pull/1128)
- Fix installation of .zip mods from CurseForge by [@Ryex](https://github.com/Ryex) in [#1335](https://github.com/PrismLauncher/PrismLauncher/pull/1335)
- Fix Java version not being re-checked in some cases by [@TheKodeToad](https://github.com/TheKodeToad) in [#1274](https://github.com/PrismLauncher/PrismLauncher/pull/1274)
- Fix progress dialog issues by [@Ryex](https://github.com/Ryex) and [@Trial97](https://github.com/Trial97) in [#1302](https://github.com/PrismLauncher/PrismLauncher/pull/1302) [#1329](https://github.com/PrismLauncher/PrismLauncher/pull/1329) [#1351](https://github.com/PrismLauncher/PrismLauncher/pull/1351)
- General fixes to screenshots page by [@telans](https://github.com/telans) in [#1232](https://github.com/PrismLauncher/PrismLauncher/pull/1232)
- General tweaks and fixes by [@TheKodeToad](https://github.com/TheKodeToad) and [@Scrumplex](https://github.com/Scrumplex) in [#1266](https://github.com/PrismLauncher/PrismLauncher/pull/1266)
- [FreeBSD] Fix compilation failure by [@Szowisz](https://github.com/Szowisz) in [#1234](https://github.com/PrismLauncher/PrismLauncher/pull/1234)
- [Linux] Bundle generic OpenGL library in AppImage by [@getchoo](https://github.com/getchoo) in [#1210](https://github.com/PrismLauncher/PrismLauncher/pull/1210)
- [Linux] Fix duplicate share directories by [@Ryex](https://github.com/Ryex) in [#1336](https://github.com/PrismLauncher/PrismLauncher/pull/1336)
- [Linux] Install appstream metadata in AppImage by [@DioEgizio](https://github.com/DioEgizio) in [#1224](https://github.com/PrismLauncher/PrismLauncher/pull/1224)
- [OpenBSD] Fix compilation failure by [@TurboWafflz](https://github.com/TurboWafflz) in [#1298](https://github.com/PrismLauncher/PrismLauncher/pull/1298)

### Removed

- Remove inconsistent/unneeded question marks in UI by [@p2js](https://github.com/p2js) in [#1233](https://github.com/PrismLauncher/PrismLauncher/pull/1233)
- Removed unused code by [@Trial97](https://github.com/Trial97) in [#1277](https://github.com/PrismLauncher/PrismLauncher/pull/1277)

Full Changelog: <https://github.com/PrismLauncher/PrismLauncher/compare/7.1...7.2>

You can [grab the latest download here](https://prismlauncher.org/download/) for your respective platform.
