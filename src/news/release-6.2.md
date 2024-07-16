---
title: Prism Launcher Release 6.2, now available
description: 90% bug free!
date: 2023-02-03
release_version: "6.2"
minimum_macos_version: 10.15.0
macos_file_extension: tar.gz
macos_signature: KdRk6KaEtFauy1Rz4oF6zEUsGgYgUAreWHS4pDcXFF1NhsNdOXqti65Khsmf7iM1idXc4GvuerxWiL/vaIQ/Dw==
tags:
  - release
---

Hello!

This is a small update that fixes some issues, most notably a nasty issue when importing .mrpack file.
Thanks to all contributors!

## Changelog

### Added

- Make use of logging categories for authentication data logging by [@Scrumplex](https://github.com/Scrumplex) in [#684](https://github.com/PrismLauncher/PrismLauncher/pull/684)

### Changed

- Detect jars from within build folder for development builds by [@Ryex](https://github.com/Ryex) in [#781](https://github.com/PrismLauncher/PrismLauncher/pull/781)
- Improve the reliability of the Task's stack overflow test by [@flowln](https://github.com/flowln) in [#804](https://github.com/PrismLauncher/PrismLauncher/pull/804)
- Correctly parse metadata from some misbehaving Forge mods by [@flowln](https://github.com/flowln) in [#743](https://github.com/PrismLauncher/PrismLauncher/pull/743)
- Remove commit hash from builds where git wasn't installed at build time by [@getchoo](https://github.com/getchoo) in [#666](https://github.com/PrismLauncher/PrismLauncher/pull/666)
- Skip some HTML in markdown rendering by [@redstrate](https://github.com/redstrate) in [#713](https://github.com/PrismLauncher/PrismLauncher/pull/713)
- Update application metadata by [@AshtakaOOf](https://github.com/AshtakaOOf) in [#680](https://github.com/PrismLauncher/PrismLauncher/pull/680)
- Update copyright notice by [@RaptaG](https://github.com/RaptaG) in [#746](https://github.com/PrismLauncher/PrismLauncher/pull/746)
- Use Qt logging facilities instead of our own by [@flowln](https://github.com/flowln) in [#665](https://github.com/PrismLauncher/PrismLauncher/pull/665)
- [Windows] Let Qt handle dark mode titlebar by [@TheLastRar](https://github.com/TheLastRar) in [#726](https://github.com/PrismLauncher/PrismLauncher/pull/726)
- [Windows] Update MSVC builds to Qt 6.4.2 by [@DioEgizio](https://github.com/DioEgizio) in [#716](https://github.com/PrismLauncher/PrismLauncher/pull/716)

### Fixed

- Better check file paths in .mrpack import and json components by [@flowln](https://github.com/flowln) and [@Scrumplex](https://github.com/Scrumplex) in [#810](https://github.com/PrismLauncher/PrismLauncher/pull/810)
- Fix crashes when running a lot of concurrent tasks by [@flowln](https://github.com/flowln) in [#758](https://github.com/PrismLauncher/PrismLauncher/pull/758) [#784](https://github.com/PrismLauncher/PrismLauncher/pull/784)
- Fix importing 1.16+ Forge Technic Launcher packs by [@byquanton](https://github.com/byquanton) in [#710](https://github.com/PrismLauncher/PrismLauncher/pull/710)
- Improve handing of ZLib submodule by [@TheLastRar](https://github.com/TheLastRar) in [#772](https://github.com/PrismLauncher/PrismLauncher/pull/772) [#779](https://github.com/PrismLauncher/PrismLauncher/pull/779)
- [Windows] Fix random ResourceFolderModel test failures on some Windows builds by [@flowln](https://github.com/flowln) in [#731](https://github.com/PrismLauncher/PrismLauncher/pull/731)

Full Changelog: <https://github.com/PrismLauncher/PrismLauncher/compare/6.1...6.2>

You can [grab the latest download here](https://prismlauncher.org/download/) for your respective platform.
