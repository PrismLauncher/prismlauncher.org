---
title: PolyMC Update 1.1.0, now available
description: Our first feature release!
date: 2022-03-12
tags:
  - release
---
We are pleased to announce, that PolyMC version 1.1.0 is now available!
This is a major milestone, as this marks the first release since deciding to move on from our origins as a MultiMC fork.
You can [read more about that here](/news/moving-on).

## Changelog

### Added

- New option to close PolyMC after launch by @binex-dsk in #79
- Now detects Java from environment by @muscaln in #46
- New `Open page & copy code` button in MSA login dialog by @Scrumplex  in #88
- Added StartupWMClass to .desktop file so DEs can behave by @danielhuang in #95
- Added PolyMC news by @dada513 in #151
- Added CurseForge and Modrinth mod downloader by @timoreo22 in #64 #129 #183 #205 #207 and @flowln in #193 #221
- New CC BY-NC-SA 4.0 license for PolyMC logos and branding by @ZekeSmith in #149
- Added MSA-Client-ID override in UI by @Scrumplex in #161
- Added missing tooltip for instance export in #176
- Added MSA Client ID change detection and prompt by @Scrumplex in #180
- Added Matrix space link by @dada513 in #243

### Changed

- Default to the system locale on first startup by @oynqr in #52
- Replaced `paste.ee` with `0x0.st` and `paste.polymc.org` by @binex-dsk in #67
- Updated information in the About dialog by @redstrate in #108
- Migrated to upstream QuaZip 1.2 by @Scrumplex in #92
- QuaZip is now linked statically by @Scrumplex in #126
- Internal libraries are now linked statically by @Scrumplex in #143
- PolyMC specific translations now hosted on weblate by @Scrumplex in #152 #199
- Update metadata by @dada513 in #145
- Version string now shows the branch that PolyMC was built from by @Scrumplex in #160
- New MSA Client ID by @Scrumplex in #172
- Replace old build layout system with new `Launcher_PORTABLE` cmake flag by @txtsd in #163
- Reorganized icon themes by @Scrumplex in #230
- [Windows] Now runs on WSL by @TheGlitch76 in #186
- [macOS] Move app data to `Application Support` by @dada513 in #146

### Fixed

- Add some logging to profile fetching failures in #96
- Ignore invalid lines altogether in java checker in #96
- Correctly set http status code in auth reply in #96
- Log server response when failing to fetch profile in #96
- Fix error message in #96
- Fixed inconsistent behavior of icons when exiting the settings screen by @redstrate in #107
- Fixed freedesktop icons by @dada513 in #150
- [macOS] Fixed GUI identifier by @DioEgizio in #171

### Removed

- Removed MultiMC news by @Scrumplex in #105
- Removed legacy instance support by @Scrumplex in #192 #201

**Full Changelog**: <https://github.com/PolyMC/PolyMC/compare/1.0.6...1.1.0>

You can [grab the latest download here](/download) for your respective platform.
