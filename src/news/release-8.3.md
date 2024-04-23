---
title: "Prism Launcher Release 8.3, now available"
description: Also try Terraria
date: 2024-03-03
release_version: "8.3"
minimum_macos_version: 11.0.0
macos_file_extension: zip
macos_signature: u4nVbCdMLaPkIYma3VBONC9Nxwb+Nsad4fBqJ8Un9HcBCYSrRjrsja7A+cdWO/mrP8JUt6EyhGgLpGYDT2vZAA==
tags:
  - release
---

Hello there!

We have accumulated a few changes and fixes in the past few weeks.
This release fixes problems with some non-latin instance names.
Let's hope this makes your Prism Launcher experience even better than before!

Until next time!

## Added

- Add Gradle Toolchains to java scan list by [@wagyourtail](https://github.com/wagyourtail) in [#2327](https://github.com/PrismLauncher/PrismLauncher/pull/2327)
- Add more microsoft login error codes by [@Trial97](https://github.com/Trial97) in [#1769](https://github.com/PrismLauncher/PrismLauncher/pull/1769)
- Added all supported files filter to modpack import by [@Trial97](https://github.com/Trial97) in [#1866](https://github.com/PrismLauncher/PrismLauncher/pull/1866)
- Support mod info for NeoForge 20.5 by [@TheKodeToad](https://github.com/TheKodeToad) in [#2319](https://github.com/PrismLauncher/PrismLauncher/pull/2319)

## Changed

- Update to Qt 6.6.3 by [@DioEgizio](https://github.com/DioEgizio) in [#2286](https://github.com/PrismLauncher/PrismLauncher/pull/2286)

## Fixed

- Add jdk21 to Nix packages by [@Scrumplex](https://github.com/Scrumplex) in [#2268](https://github.com/PrismLauncher/PrismLauncher/pull/2268)
- Fix Minecraft Launcher runtime detection on Windows and macOS by [@Trial97](https://github.com/Trial97) in [#2333](https://github.com/PrismLauncher/PrismLauncher/pull/2333)
- Fixed application close with file dialog by [@Trial97](https://github.com/Trial97) in [#2294](https://github.com/PrismLauncher/PrismLauncher/pull/2294)
- Fixed crash on invalid curseforge link on import by [@Trial97](https://github.com/Trial97) in [#2291](https://github.com/PrismLauncher/PrismLauncher/pull/2291)
- Fixed crash on non-latin instance name by [@Trial97](https://github.com/Trial97) in [#2247](https://github.com/PrismLauncher/PrismLauncher/pull/2247)
- Fixed portable builds on fedora  by [@DioEgizio](https://github.com/DioEgizio) in [#2231](https://github.com/PrismLauncher/PrismLauncher/pull/2231)
- Replace invalid characters when extracting ZIP by [@TheKodeToad](https://github.com/TheKodeToad) in [#2275](https://github.com/PrismLauncher/PrismLauncher/pull/2275) and [#2277](https://github.com/PrismLauncher/PrismLauncher/pull/2277)
- Set Forge version correctly when exporting to CurseForge by [@Trial97](https://github.com/Trial97) in [#2221](https://github.com/PrismLauncher/PrismLauncher/pull/2221)
- Use UTF-8 for ZIP creation by [@TheKodeToad](https://github.com/TheKodeToad) in [#2225](https://github.com/PrismLauncher/PrismLauncher/pull/2225)

## Removed

- Removed java from appimage by [@Trial97](https://github.com/Trial97) in [#2328](https://github.com/PrismLauncher/PrismLauncher/pull/2328)

Full Changelog: <https://github.com/PrismLauncher/PrismLauncher/compare/8.2...8.3>

You can [grab the latest download here](https://prismlauncher.org/download/) for your respective platform.
