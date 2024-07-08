---
title: "Prism Launcher Release 7.1, now available"
description: Who let the frogs out?
date: 2023-06-16
release_version: "7.1"
minimum_macos_version: 11.0.0
macos_file_extension: tar.gz
macos_signature: p/dAE2u/10ZzTfuRgHrbKGdIiqgb+YZBVcACU3luduEcM4D4lbtt6+0otqN4HpqaXMZAV9P0CscxtBEn21tTCA==
tags:
  - release
---

Hello!

This is a smaller release, with mostly bug fixes. There are also some minor improvements, like an easier way to open the launcher's data directory, and allowing users to edit instance settings even while an instance is running.

There is also an important fix for the .mrpack export on Windows. Previously, the launcher would bundle all mods into the final modpack ZIP. Now the launcher will correctly bundle the metadata instead. This bug caused trouble at Modrinth as people started uploading these modpacks there. We are very sorry for this bug and hope to catch these kinds of issues through our testing initiative on our Discord server.

Until next time!

## Changelog

### Added

- Add icons to export menu items by [@leo78913](https://github.com/leo78913) in [#1162](https://github.com/PrismLauncher/PrismLauncher/pull/1162)
- Add the launcher root folder to the Folders menu by [@RedsonBr140](https://github.com/RedsonBr140) and [@Scrumplex](https://github.com/Scrumplex) in [#1063](https://github.com/PrismLauncher/PrismLauncher/pull/1063)
- Higlight installed mods in download dialog by [@Trial97](https://github.com/Trial97) in [#1135](https://github.com/PrismLauncher/PrismLauncher/pull/1135)

### Changed

- Don't hide the settings tab when an instance is running by [@RedsonBr140](https://github.com/RedsonBr140) and [@TheKodeToad](https://github.com/TheKodeToad) in [#1067](https://github.com/PrismLauncher/PrismLauncher/pull/1067)
- Exclude `.git` directory from the source code tarball by [@guihkx](https://github.com/guihkx) in [#1140](https://github.com/PrismLauncher/PrismLauncher/pull/1140)
- Make Konami Code a _bit_ more obvious by [@TayouVR](https://github.com/TayouVR) in [#1151](https://github.com/PrismLauncher/PrismLauncher/pull/1151)
- Store logs in seperate directory by [@Trial97](https://github.com/Trial97) and [@chmodsayshello](https://github.com/chmodsayshello) in [#1099](https://github.com/PrismLauncher/PrismLauncher/pull/1099)

### Fixed

- Fix error message about JavaVendor by [@Scrumplex](https://github.com/Scrumplex) in [#1195](https://github.com/PrismLauncher/PrismLauncher/pull/1195)
- Fix parsing of settings file by [@Trial97](https://github.com/Trial97) in [#1174](https://github.com/PrismLauncher/PrismLauncher/pull/1174) [#1192](https://github.com/PrismLauncher/PrismLauncher/pull/1192)
- Fix some crashes regarding high network usage by [@Trial97](https://github.com/Trial97) in [#1145](https://github.com/PrismLauncher/PrismLauncher/pull/1145)
- Fix trailing space in instance name by [@TheKodeToad](https://github.com/TheKodeToad) in [#1198](https://github.com/PrismLauncher/PrismLauncher/pull/1198)
- [Linux] Fix devShell for Nix users by [@getchoo](https://github.com/getchoo) in [#1159](https://github.com/PrismLauncher/PrismLauncher/pull/1159)
- [Windows] Fix mrpack export bundling all mods by [@TheKodeToad](https://github.com/TheKodeToad) in [#1166](https://github.com/PrismLauncher/PrismLauncher/pull/1166)

Full Changelog: <https://github.com/PrismLauncher/PrismLauncher/compare/7.0...7.1>

You can [grab the latest download here](https://prismlauncher.org/download/) for your respective platform.
