---
title: PolyMC Update 1.3.2, now available
description: Another load of fixes
date: 2022-06-12
tags:
  - release
---

Yet again we have some fixes for you!

## Changelog

### Added

- Add support for Quilt modpacks on Technic by @kthchew in #685
- [Linux] Added support for Nix 2.7 by @TheOPtimal in #286
- [Windows] Add version information to the setup executable by @kthchew in #679

### Changed

- Change build flags by @Scrumplex in #764
- Do not enforce fractional scaling by @DioEgizio in #718
- Sort icons in icon-selector alphabetically by @MrMelon54 in #732
- [Linux] Allow adding more JDKs to Nix package by @babbaj in #734

### Fixed

- Allow importing .mrpack files on non-latin languages by @flowln and @Scrumplex in #780
- Always store type of instance to allow compatibility with MultiMC by @Scrumplex in #709 #783
- Fix crash with very old Forge versions by @icelimetea in #720
- Fix multiple issues when importing Modrinth packs by @flowln in #771
- Fix website-url for Technic modpacks by @flowln in #770
- Hide profile-section dialog if the user refused to add an account by @istudyatuni in #682
- Update instance toolbar when instance state changes by @vancez in #773
- [Linux] Add `mc` keyword to .desktop file by @jn64 in #701
- [Linux] Update Nix Flake lockfile by @muscaln in #762
- [macOS] Fix lingering PolyMC icon in Dock by @ryanccn in #632

### Removed

- [OpenBSD] Drop support for OpenBSD by @glowiak in #692

**Full Changelog**: <https://github.com/PolyMC/PolyMC/compare/1.3.1...1.3.2>

You can [grab the latest download here](/download) for your respective platform.
