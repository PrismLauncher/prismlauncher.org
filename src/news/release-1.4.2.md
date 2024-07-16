---
title: PolyMC Update 1.4.2, now available
description: Not Enough Fixes
date: 2022-09-08
release_version: 1.4.2
minimum_macos_version: 10.14.0
tags:
  - release
---

It has been a while.
With this wonderful new version you get many cool things, like bug fixes and also bug fixes!

If you were building PolyMC yourself, make sure your compiler supports C++17, as it is a requirement from now on.

Thanks to all contributors, who have worked on this release!

## Changelog

### Added

- [OpenBSD] Add root path detection by @Scrumplex in #1019

### Changed

- Bump to C++17 by @Scrumplex and @LennyMcLennington in #941
- Hide 'More news...' button if the news aren't loaded yet by @flowln in #1049
- Make 'About' dialog smaller by @DioEgizio in #1107
- Make Coremods / Mods separation more clear by @Scrumplex in #1035
- Update copyright notices by @DioEgizio in #1073
- [macOS] Downgrade to Qt 6.3.0 by @DioEgizio in #1014

### Fixed

- Allow user to interrupt launch after 3 tries by @Scrumplex in #1018
- Cleanup old mod metadata by @flowln in #1017 #1044
- Disable "Check for Updates" while the game is running or if all mods are removed by @Gingeh in #1007
- Fix crashes in mod updater by @flowln in #965
- Fix errors when extracting some modpacks by @flowln in #1095
- Fix major version filter in mod downloader by @flowln in #997 #1118
- Fix some icon cache problems by @flowln in #920 #1080
- Fix UTF-8 decoding in log by @magneticflux- in #968
- Make world safety nag popup title text match the action by @budak7273 in #1039
- Make URLs in the FTB Legacy browser clickable by @DioEgizio in #1087
- [Linux] Implement workaround for Ubuntu 22.04 OpenSSL issues by @DioEgizio in #1006
- [Linux] Update AppStream info by @DioEgizio in #1058

**Full Changelog**: <https://github.com/PolyMC/PolyMC/compare/1.4.1...1.4.2>

You can [grab the latest download here](/download) for your respective platform.
