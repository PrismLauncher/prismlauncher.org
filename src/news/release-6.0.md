---
title: Prism Launcher Release 6.0, now available
description: Bees, bees, bees, bees!
date: 2022-12-12
release_version: 6.0
minimum_macos_version: 10.15.0
mac_signature: lol
tags:
  - release
---

Hello!

This new release brings a lot of new features and improvements to the launcher. Some highlights include a modpack update page, a migration dialog for migrating from other MultiMC-based launchers, an improved blocked mods workaround on CurseForge, redesigned instance icons, integrated shortcut creation, 3 new icon packs including Flat (White), Breeze Dark and Breeze Light and more! This release also includes a few bug fixes of course.
Thanks to all contributors, who have worked on this release!

## Changelog

### Added

- Add Add agents button to instance settings by @TheKodeToad in #423
- add Breeze icons by @TayouVR and @DioEgizio in #487 #572 #584
- Add Create shortcut button by @Leo40Git, @Scrumplex and @DioEgizio in #227 #521 #565 #568
- Add new cats by @santiagocezar in #372
- Add an option to lock the toolbars by @leo78913 in #383
- Add commit hash to `--version` by @FayneAldan in #431
- Add flat white icons by @he3als, @Protrikk and @Scrumplex in #65 #506
- Add icons to the instance context menu and toolbar by @leo78913 in #187 #267
- Add migration dialog by @Scrumplex in #243 #498
- Add modpack update page in instance settings by @flowln in #32
- Add more options to copy instance dialog by @marcelohdez in #242
- Add missing icons to the legacy icon theme by @leo78913 in #412
- Add new default instance icons by @santiagocezar @Scrumplex and @DioEgizio in #238 #556
- Add proper server icon by @DioEgizio in #546
- Add smart resource pack parsing for dropping/opening files with Prism Launcher by @ryanccn, @flowln and @Scrumplex in #481
- Add spooky kitty for halloween by @leozamboni, @AshtakaOOf and @Scrumplex in #396 #405
- Add support for multiple custom themes by @TayouVR in #149
- Add theme switcher to menu bar by @RedsonBr140 and @leo78913 in #454
- Add Windows on ARM builds by @DioEgizio and @TheLastRar in #524
- Allow Prism to open an instance's window from command line by @Hibiii in #211
- Allow hiding buttons in instance pages by @flowln in #486
- Allow "Open with" for .zip/.mrpack files by @ryanccn, @Scrumplex and @Ryex in #229 #266
- Handle links to other mods inside the mod browser by @TheKodeToad in #367
- [Linux] Add automated Flatpak builds for nightly builds by @DioEgizio in #456
- [Linux] Add Nix build and Cachix bucket by @Scrumplex in #493
- [Linux] Add support for Snap builds by @piperswe and @Scrumplex in #294
- [macOS] Add button to add Prism Launcher to PATH by @ryanccn and @Scrumplex in #112
- [Windows] Add builds using MSVC by @TheLastRar and @DioEgizio in #366 #411 #448 #464 #508 #514 #527

### Changed

- Correct wording on libraries download task by @unascribed in #587
- Choose default maximum memory allocation based on system memory by @txtsd in #392
- Improve Blocked Mods Dialog and detect manually downloaded mods automatically by @Ryex and @Scrumplex in #304 #439 #511 #557 #571 #575
- Improve CurseForge modpack browser by @forkiesassds in #215
- Major refactor to Java launcher library by @TheKodeToad and @solonovamax in #291
- Make resource buttons work when instance is running by @Scrumplex and @flowln in #528
- Update tomlplusplus by @Scrumplex in #459
- Validate maximum memory allocation by @Scrumplex in #436
- Warn before trashing instances by @ryanccn in #541
- [Linux] Improve detection of MangoHud by @Jan200101 in #569
- [Linux] Update Flake to match Nixpkgs by @Scrumplex in #492

### Fixed

- Fix crash when copying instances by @flowln in #547
- Fix CurseForge instance import issues by @flowln in #538
- Fix infinite loop when parsing big resource pack images by @flowln in #461
- Fix menubar issues by @leo78913 in #455
- Fix minutes unit in play time by @edgarogh in #560
- Fix display names of more languages by @Scrumplex and @jopejoe1 in #474 #483
- Fix customizing components with custom metadata by @Scrumplex in #467

### Removed

- Remove leftover TODOs in source code by @DioEgizio in #585

Full Changelog: <https://github.com/PrismLauncher/PrismLauncher/compare/5.2...6.0>

You can [grab the latest download here](https://prismlauncher.org/download/) for your respective platform.
