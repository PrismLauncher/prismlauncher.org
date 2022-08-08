---
title: PolyMC Update 1.2.0, now available
description: A lot of refinement!
date: 2022-04-17
tags:
  - release
---
Hey! It's update-time again. We have added lots of new things in this one and improved a few things as well.

## Changelog

### Added

- Allow components to specify Java agents and JVM arguments by @unascribed in #175
- Add support for Quilt loader by @Scrumplex in #185 #431
- Add buttons to Matrix space and Reddit by @dada513 in #243 and @ZekeSmith in #390
- Allow moving toolbars by @flowln in #305
- Add Quit after game stop option by @dada513 in #341
- Block game launch if Java is incompatible by @Scrumplex in #345
- Add grayscale icon for monochrome icon themes by @embeddedt in #370
- Track and display game world sizes by @Scrumplex in #373 #387
- Add more detailed progress dialog for mod-downloader by @flowln in #380 #409
- Add version selector for Technic modpacks by @jamierocks in #384
- Add basic filtering to mod downloader by @flowln in #392
- Lay groundwork for ARM64 support by @DioEgizio in #397
- Add mod loader selection to instance creation by @kthchew in #398
- Save custom offline player name by @vlaetansky & @DioEgizio in #407
- Add optional menu-bar and keyboard navigation by @kthchew in #411
- [Linux] Provide portable builds by @DioEgizio in #351
- [Windows] Add support for POLYMC_JAVA_PATHS by @FayneAldan in #357 #360

### Changed

- Improve mod downloader by @flowln in #220 #356 and @dada513 in #375 and @HarryPeach in #395
- Switch logo font to Josefin Sans by @Scrumplex in #250
- Updated Nix Flake by @Kranzes in #272
- Combine portable and system builds by @Scrumplex in #336
- Build script improvements by @oynqr in #333 #344 and @txtsd in #349 and @DioEgizio in #389
- Update credits and branding by @Scrumplex in #352
- Update license for logos by @ZekeSmith in #383 #385
- Change path of help pages by @DioEgizio in #430
- Use system libraries if possible by @flowln in #436
- [macOS] Switch to Qt 5.15.3 by @DioEgizio in #439

### Fixed

- Fix and improve translatable strings by @Scrumplex in #364
- Switch to newer Discord logo by @Regular-Baf in #413
- [Linux] Flatpak fixes by @dada513 in #355
- [Linux] Install missing manpage by @Scrumplex in #417
- [FreeBSD] Force system LWJGL natives by @Irgendwer01 in #429

### Removed

- Remove unused notification system by @binex-dsk in #188

**Full Changelog**: <https://github.com/PolyMC/PolyMC/compare/1.1.1...1.2.0>

You can [grab the latest download here](/download) for your respective platform.
