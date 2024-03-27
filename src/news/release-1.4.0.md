---
title: PolyMC Update 1.4.0, now available
description: Just Enough Changes
date: 2022-07-23
release_version: 1.4.0
minimum_macos_version: 10.14.0
tags:
  - release
---

Whoa! There have been a few things since our last feature release almost two months ago!

Major new features include the new mod updater and Qt 6 support.
Don't worry, Qt 5 will still be supported and packages using it will still be available for some time.

If you are a macOS user, you might be delighted to hear, that this will be the first version that ships with an updater!

As a Linux user, you should definitely take a look at the new `Performance` tab in the settings.
No longer should you need to deal with wrapper commands to enable [MangoHud](https://github.com/flightlessmango/MangoHud), [GameMode](https://github.com/FeralInteractive/gamemode) or to utilize your dedicated GPU in a hybrid GPU setup.

Thanks to all contributors, who have worked on this release!

## Changelog

### Added

- Add concurrent tasks by @flowln in #786
- Add more links to mod and modpack descriptions by @flowln and @DioEgizio in #634 #799
- Add news reader in the launcher by @flowln in #845
- Add on-disk mod metadata information by @flowln and @Scrumplex in #426 #714 #716 #759
- Implement mod updater by @flowln in #588
- Preliminary work for modpack updates by @jamierocks in #665
- Qt 6 support by @Scrumplex and @DioEgizio in #575 #902 #911 #922 #936
- [Linux] Add Performance settings (MangoHud, GameMode and PRIME) by @Jan200101 in #707
- [Linux] Add more metadata to Nix package by @TheOPtimal in #930
- [macOS] Implement updater using Sparkle by @kthchew and @Scrumplex in #479
- [OpenBSD] Readd support for OpenBSD by @Technous285 in #694

### Changed

- Allow the cape to be changed without changing the skin by @Gingeh in #913
- Cleanup Java code by @Scrumplex and @icelimetea in #778 #785 #800 #863
- Hide channel from version for tagged commits by @Scrumplex in #810
- Improve handling of environment variables by @Scrumplex in #893
- Improve resolving of JARs by @Scrumplex in #794
- Improve the account selection window by @Gingeh and @Scrumplex in #855 #870
- Improve UX in the mod downloader by @flowln in #505
- Improvements for Modrinth/CurseForge modpacks by @flowln in #839
- Improvements around APIs page by @Scrumplex in #678
- Improvements to Windows installer by @kthchew in #788 #797
- Make version labels in About dialog selectable by @jn64 in #812
- Make FTB Classic layout the same as other platforms by @jopejoe1 in #884
- Refactor instance resources pages by @flowln and @Scrumplex in #652
- Refactor tests by @Scrumplex and @DarkKirb in #784 #869
- Replace old reference to launchermeta.mojang.com by @Scrumplex in #830
- Reword CurseForge warning by @DioEgizio in #834
- Separate launch and kill instance actions by @kthchew in #826
- Update license information by @DioEgizio in #905
- [Linux] Cleanup flake.nix by @gytis-ivaskevicius in #881
- [Linux] Rewrite polymc.6 in scdoc by @EliteTK in #847 #901
- [macOS] Build on macOS 12 in CI by @DioEgizio in #787

### Fixed

- Always scale mod icons to the right size by @flowln in #818
- Don't censor offline access token by @ivanpu in #864
- Don't create unnecessary folders when extracting ZIPs by @flowln in #817
- Fix broken output in mod list by @flowln in #947
- Fix contrast of placeholder text with dark theme by @flowln in #929
- Fix duplicate name in window title by @jn64 in #811
- Fix hangs when aborting some tasks by @flowln in #831
- Fix missing instance version in status bar by @kthchew in #860
- Fix permanent mod-loaders for some modpacks by @Scrumplex in #880
- Fix "Play Offline" not working when auth servers are partially offline by @Scrumplex in #877
- Fix sorting for Modrinth resources by @DioEgizio in #837
- Fix Technic instances using Forge by @Scrumplex in #890
- Fix translations by @Scrumplex in #917 #938
- Fix warnings reported by LGTM.com by @Scrumplex in #808
- [Linux] Fix mods relying on `libstdc++` on Nix by @virchau13 in #904 #934
- [Linux] Use our fork of libnbtplusplus on Nix by @Scrumplex in #932
- [macOS] Workaround Qt bug to fix menu bar separators by @kthchew in #827

**Full Changelog**: <https://github.com/PolyMC/PolyMC/compare/1.3.2...1.4.0>

You can [grab the latest download here](/download) for your respective platform.
