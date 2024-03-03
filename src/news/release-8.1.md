---
title: "Prism Launcher Release 8.1, now available"
description: Also try Terraria
date: 2024-03-03
release_version: "8.1"
minimum_macos_version: 11.0.0
macos_file_extension: zip
macos_signature: zFoxCVY0tzAJXwTnSylsjSp+qt9XfD+vhMrXdUAIhLbq2vjQrDQEp0WidD8anqO8zZsiY1S/GiiHpkMoeGhxDg==
tags:
  - release
---

Hello there!

We have accumulated a few changes and fixes in the past few weeks and months.
This release fixes problems with some newer modpacks (notably ATM) where some mods would be missing.
Let's hope this makes your Prism Launcher experience even better than before!

Until next time!

## Changelog

## Added

- Add Modpack-page to instances that were created from files by [@Trial97](https://github.com/Trial97) in [#1732](https://github.com/PrismLauncher/PrismLauncher/pull/1732)
- Add button to disable resolving dependencies when installing mods by [@Trial97](https://github.com/Trial97) in [#1768](https://github.com/PrismLauncher/PrismLauncher/pull/1768)
- Add button to select the FTB App instances directory by [@Trial97](https://github.com/Trial97) in [#1825](https://github.com/PrismLauncher/PrismLauncher/pull/1825)
- Add custom environment variables to Pre-launch/Post-exit commands by [@Trial97](https://github.com/Trial97) in [#1860](https://github.com/PrismLauncher/PrismLauncher/pull/1860)
- Add more "Open Folder" actions by [@Trial97](https://github.com/Trial97) in [#1869](https://github.com/PrismLauncher/PrismLauncher/pull/1869)
- Add warning when updating mods while the game is running by [@TheKodeToad](https://github.com/TheKodeToad) and [@Trial97](https://github.com/Trial97) in [#1852](https://github.com/PrismLauncher/PrismLauncher/pull/1852)
- Allow resizing columns of mod and other resource pages by [@Trial97](https://github.com/Trial97) in [#1849](https://github.com/PrismLauncher/PrismLauncher/pull/1849)
- [Linux] Add `game` category to instance shortcuts by [@leafeling](https://github.com/leafeling) in [#1704](https://github.com/PrismLauncher/PrismLauncher/pull/1704)
- [Linux] Added warning when /tmp directory is mounted with noexec by [@bit69tream](https://github.com/bit69tream) in [#1882](https://github.com/PrismLauncher/PrismLauncher/pull/1882)
- [Windows] Autodetect Java from the Microsoft Store version of the official launcher by [@Trial97](https://github.com/Trial97) in [#1798](https://github.com/PrismLauncher/PrismLauncher/pull/1798)
- [macOS] Add code signing and notarization by [@Scrumplex](https://github.com/Scrumplex) and [@DioEgizio](https://github.com/DioEgizio) in [#2034](https://github.com/PrismLauncher/PrismLauncher/pull/2034) and [#2150](https://github.com/PrismLauncher/PrismLauncher/pull/2150)

## Changed

- Add subtle line to instance group separator by [@TayouVR](https://github.com/TayouVR) in [#1923](https://github.com/PrismLauncher/PrismLauncher/pull/1923)
- Decouple dependency check from updating mods by [@Trial97](https://github.com/Trial97) in [#1746](https://github.com/PrismLauncher/PrismLauncher/pull/1746)
- Improve Microsoft login flow by [@Trial97](https://github.com/Trial97) in [#1799](https://github.com/PrismLauncher/PrismLauncher/pull/1799)
- Improve Minecraft log performance by [@TheKodeToad](https://github.com/TheKodeToad) in [#2112](https://github.com/PrismLauncher/PrismLauncher/pull/2112)
- Improve empty instance list label by [@crpz1](https://github.com/crpz1) in [#2141](https://github.com/PrismLauncher/PrismLauncher/pull/2141)
- Improvements to concurrent tasks by [@Trial97](https://github.com/Trial97) in [#1694](https://github.com/PrismLauncher/PrismLauncher/pull/1694)
- Localize account type in account list by [@LocalSpook](https://github.com/LocalSpook) in [#1751](https://github.com/PrismLauncher/PrismLauncher/pull/1751)
- Mod downloader page improvements by [@lumiscosity](https://github.com/lumiscosity) in [#1979](https://github.com/PrismLauncher/PrismLauncher/pull/1979)
- Reduce minimum memory amounts by [@HyperSoop](https://github.com/HyperSoop) in [#1347](https://github.com/PrismLauncher/PrismLauncher/pull/1347)
- Remove alpha notice for Modrinth packs by [@DioEgizio](https://github.com/DioEgizio) in [#2063](https://github.com/PrismLauncher/PrismLauncher/pull/2063)
- Try refreshing account on launch if needed by [@Trial97](https://github.com/Trial97) in [#1771](https://github.com/PrismLauncher/PrismLauncher/pull/1771)
- Update Prism Launcher anniversary date by [@Trial97](https://github.com/Trial97) in [#1871](https://github.com/PrismLauncher/PrismLauncher/pull/1871)
- Update libraries by [@DioEgizio](https://github.com/DioEgizio) in [#2130](https://github.com/PrismLauncher/PrismLauncher/pull/2130)
- [Linux] Improve NixOS packaging by [@getchoo](https://github.com/getchoo) in [#2024](https://github.com/PrismLauncher/PrismLauncher/pull/2024)
- [macOS,Windows] Update to Qt 6.6.1 by [@DioEgizio](https://github.com/DioEgizio) in [#1908](https://github.com/PrismLauncher/PrismLauncher/pull/1908)

## Fixed

- Don't log Microsoft refresh tokens by [@Scrumplex](https://github.com/Scrumplex) in [#1964](https://github.com/PrismLauncher/PrismLauncher/pull/1964)
- Ensure total play time is not negative by [@Trial97](https://github.com/Trial97) in [#1712](https://github.com/PrismLauncher/PrismLauncher/pull/1712)
- Fix "Sort by" options for Modrinth by [@Trial97](https://github.com/Trial97) in [#1828](https://github.com/PrismLauncher/PrismLauncher/pull/1828)
- Fix URLs for some resource types by [@Trial97](https://github.com/Trial97) in [#1978](https://github.com/PrismLauncher/PrismLauncher/pull/1978)
- Fix a few use-after-free bugs by [@TheKodeToad](https://github.com/TheKodeToad) in [#2116](https://github.com/PrismLauncher/PrismLauncher/pull/2116)
- Fix importing NeoForge 1.20.1 modpacks from CurseForge by [@Trial97](https://github.com/Trial97) in [#2110](https://github.com/PrismLauncher/PrismLauncher/pull/2110)
- Fix online mode in legacy versions by [@TheKodeToad](https://github.com/TheKodeToad) in [#1999](https://github.com/PrismLauncher/PrismLauncher/pull/1999)
- Fix placeholder text for OpenAL override by [@Trial97](https://github.com/Trial97) in [#2012](https://github.com/PrismLauncher/PrismLauncher/pull/2012)
- Fix resetting settings when saving by [@Trial97](https://github.com/Trial97) in [#1857](https://github.com/PrismLauncher/PrismLauncher/pull/1857)
- Fix unclickable link in Modrinth API settings by [@Trial97](https://github.com/Trial97) in [#1880](https://github.com/PrismLauncher/PrismLauncher/pull/1880)
- Fully reload the instance list once the folder is changed by [@Trial97](https://github.com/Trial97) in [#1589](https://github.com/PrismLauncher/PrismLauncher/pull/1589)
- Ignore dependencies that can not be found by [@Trial97](https://github.com/Trial97) in [#1843](https://github.com/PrismLauncher/PrismLauncher/pull/1843)
- Improve name and tooltip of mod dependency management option by [@Desoroxxx](https://github.com/Desoroxxx) in [#1819](https://github.com/PrismLauncher/PrismLauncher/pull/1819)
- Make sure MangoHud libs are present by [@Trial97](https://github.com/Trial97) in [#1815](https://github.com/PrismLauncher/PrismLauncher/pull/1815)
- Minor spelling fixes by [@lumiscosity](https://github.com/lumiscosity) in [#1960](https://github.com/PrismLauncher/PrismLauncher/pull/1960)
- Only open/close groups using primary mouse button by [@TheKodeToad](https://github.com/TheKodeToad) in [#1821](https://github.com/PrismLauncher/PrismLauncher/pull/1821)
- Reformat Java code by [@Trial97](https://github.com/Trial97) in [#2005](https://github.com/PrismLauncher/PrismLauncher/pull/2005)
- Remove top-level `const` qualifiers in function declarations by [@Scrumplex](https://github.com/Scrumplex) and [@LocalSpook](https://github.com/LocalSpook) in [#1762](https://github.com/PrismLauncher/PrismLauncher/pull/1762)
- Several Modrinth export fixes by [@TheKodeToad](https://github.com/TheKodeToad) in [#2178](https://github.com/PrismLauncher/PrismLauncher/pull/2178)
- Several fixes for staging instances by [@TheKodeToad](https://github.com/TheKodeToad) and [@Trial97](https://github.com/Trial97) in [#2160](https://github.com/PrismLauncher/PrismLauncher/pull/2160)
- [Linux] Fix opening files in external apps by [@Scrumplex](https://github.com/Scrumplex) and [@Trial97](https://github.com/Trial97) in [#1954](https://github.com/PrismLauncher/PrismLauncher/pull/1954) and [#2053](https://github.com/PrismLauncher/PrismLauncher/pull/2053)
- [Linux] Sync nightly Flatpak manifest with Flathub by [@guihkx](https://github.com/guihkx) in [#1873](https://github.com/PrismLauncher/PrismLauncher/pull/1873)
- [Linux] Use absolute path to load MangoHud library by [@TheComputerGuy96](https://github.com/TheComputerGuy96) in [#2126](https://github.com/PrismLauncher/PrismLauncher/pull/2126)
- [macOS,Windows] Fix hidden minimized windows by [@TheKodeToad](https://github.com/TheKodeToad) and [@theMackabu](https://github.com/theMackabu) in [#1947](https://github.com/PrismLauncher/PrismLauncher/pull/1947)
- [macOS] Fix instance update dialog by [@Trial97](https://github.com/Trial97) in [#1913](https://github.com/PrismLauncher/PrismLauncher/pull/1913)

## Removed

- Remove hardcoded legacy game parameters by [@tildejustin](https://github.com/tildejustin) in [#1983](https://github.com/PrismLauncher/PrismLauncher/pull/1983)
- Remove unused code by [@Trial97](https://github.com/Trial97) in [#1738](https://github.com/PrismLauncher/PrismLauncher/pull/1738)

Full Changelog: <https://github.com/PrismLauncher/PrismLauncher/compare/8.0...8.1>

You can [grab the latest download here](https://prismlauncher.org/download/) for your respective platform.
