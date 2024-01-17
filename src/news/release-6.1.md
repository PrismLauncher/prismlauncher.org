---
title: Prism Launcher Release 6.1, now available
description: More addictive than lemonade!
date: 2022-12-19
release_version: "6.1"
minimum_macos_version: 10.15.0
macos_file_extension: tar.gz
macos_signature: 76S99OXja/WJbqYQvV9BoEAlTV4khWeZWCjcXKFHnXkgkZD18yXcBXAdY/BK0dhQrX1IbHZu3JKhEVyjFwKmCA==
tags:
  - release
---

Hello!

This is a small update that fixes some issues, most of which were introduced by our previous 6.0 release.
Thanks to all contributors!

## Changelog

### Changed

- Move cat to the bottom right by [@DioEgizio](https://github.com/DioEgizio) in [#612](https://github.com/PrismLauncher/PrismLauncher/pull/612)
- Only show scrollbars when needed by [@leo78913](https://github.com/leo78913) in [#630](https://github.com/PrismLauncher/PrismLauncher/pull/630)
- [Linux] Update Nix packaging by [@Scrumplex](https://github.com/Scrumplex) in [#647](https://github.com/PrismLauncher/PrismLauncher/pull/647)
- [Windows] Improve MSVC build flags by [@getchoo](https://github.com/getchoo) in [#631](https://github.com/PrismLauncher/PrismLauncher/pull/631)

### Fixed

- Avoid deadlock when there are a lot of resource packs in an instance by [@flowln](https://github.com/flowln) in [#628](https://github.com/PrismLauncher/PrismLauncher/pull/628)
- Correctly set component versions in Modrinth pack updating by [@flowln](https://github.com/flowln) and [@Scrumplex](https://github.com/Scrumplex) in [#636](https://github.com/PrismLauncher/PrismLauncher/pull/636)
- Fix crash when changing styles by [@TheLastRar](https://github.com/TheLastRar) in [#600](https://github.com/PrismLauncher/PrismLauncher/pull/600)
- Fix importing modpacks using ZIP files by [@flowln](https://github.com/flowln) in [#607](https://github.com/PrismLauncher/PrismLauncher/pull/607)
- Fix possible crash in mod and modpack downloaders with images by [@flowln](https://github.com/flowln) in [#605](https://github.com/PrismLauncher/PrismLauncher/pull/605)
- Fix wordings in modpack updater by [@Scrumplex](https://github.com/Scrumplex) in [#601](https://github.com/PrismLauncher/PrismLauncher/pull/601)
- Fix warning about QMap by [@Edgars-Cirulis](https://github.com/Edgars-Cirulis) in [#625](https://github.com/PrismLauncher/PrismLauncher/pull/625)
- [Linux] Fix crash when using Qt GTK2 style by [@flowln](https://github.com/flowln) in [#604](https://github.com/PrismLauncher/PrismLauncher/pull/604)
- [Windows] Fix automated WinGet releases by [@Scrumplex](https://github.com/Scrumplex) in [#593](https://github.com/PrismLauncher/PrismLauncher/pull/593) [#649](https://github.com/PrismLauncher/PrismLauncher/pull/649)

### Removed

- Remove unused DLLs/dylibs from builds by [@DioEgizio](https://github.com/DioEgizio) in [#642](https://github.com/PrismLauncher/PrismLauncher/pull/642)

Full Changelog: <https://github.com/PrismLauncher/PrismLauncher/compare/6.0...6.1>

You can [grab the latest download here](https://prismlauncher.org/download/) for your respective platform.
