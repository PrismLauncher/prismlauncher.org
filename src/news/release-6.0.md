---
title: Prism Launcher Release 6.0, now available
description: Bees, bees, bees, bees!
date: 2022-12-12
release_version: "6.0"
minimum_macos_version: 10.15.0
macos_file_extension: tar.gz
macos_signature: QY1DCk7gQrngyD8qLdLY3a3GOO27NpktQo8EsJDkAV5M1RoB3krnonYL30rFJihIlNDszOvPopPRNGYJKIeADQ==
tags:
  - release
---

Hello!

This new release brings a lot of new features and improvements to the launcher. Some highlights include a modpack update page, a migration dialog for migrating from other MultiMC-based launchers, an improved blocked mods workaround on CurseForge, redesigned instance icons, integrated shortcut creation, 3 new icon packs including Flat (White), Breeze Dark and Breeze Light and more! This release also includes a few bug fixes of course.
Thanks to all contributors, who have worked on this release!

## Changelog

### Added

- Add agents button to instance settings by [@TheKodeToad](http://github.com/TheKodeToad) in [#423](http://github.com/PrismLauncher/PrismLauncher/pull/423)
- Add breeze icons by [@TayouVR](http://github.com/TayouVR) and [@DioEgizio](http://github.com/DioEgizio) in [#487](http://github.com/PrismLauncher/PrismLauncher/pull/487) [#572](http://github.com/PrismLauncher/PrismLauncher/pull/572) [#584](http://github.com/PrismLauncher/PrismLauncher/pull/584)
- Add shortcut creation button by [@Leo40Git](http://github.com/Leo40Git), [@Scrumplex](http://github.com/Scrumplex) and [@DioEgizio](http://github.com/DioEgizio) in [#227](http://github.com/PrismLauncher/PrismLauncher/pull/227) [#521](http://github.com/PrismLauncher/PrismLauncher/pull/521) [#565](http://github.com/PrismLauncher/PrismLauncher/pull/565) [#568](http://github.com/PrismLauncher/PrismLauncher/pull/568)
- Add new cats by [@santiagocezar](http://github.com/santiagocezar) in [#372](http://github.com/PrismLauncher/PrismLauncher/pull/372)
- Add an option to lock the toolbars by [@leo78913](http://github.com/leo78913) in [#383](http://github.com/PrismLauncher/PrismLauncher/pull/383)
- Add commit hash to `--version` by [@FayneAldan](http://github.com/FayneAldan) in [#431](http://github.com/PrismLauncher/PrismLauncher/pull/431)
- Add flat white icons by [@he3als](http://github.com/he3als), [@Protrikk](http://github.com/Protrikk) and [@Scrumplex](http://github.com/Scrumplex) in [#65](http://github.com/PrismLauncher/PrismLauncher/pull/65) [#506](http://github.com/PrismLauncher/PrismLauncher/pull/506)
- Add icons to the instance context menu and toolbar by [@leo78913](http://github.com/leo78913) in [#187](http://github.com/PrismLauncher/PrismLauncher/pull/187) [#267](http://github.com/PrismLauncher/PrismLauncher/pull/267)
- Add migration dialog by [@Scrumplex](http://github.com/Scrumplex) in [#243](http://github.com/PrismLauncher/PrismLauncher/pull/243) [#498](http://github.com/PrismLauncher/PrismLauncher/pull/498)
- Add modpack update page in instance settings by [@flowln](http://github.com/flowln) in [#32](http://github.com/PrismLauncher/PrismLauncher/pull/32)
- Add more options to copy instance dialog by [@marcelohdez](http://github.com/marcelohdez) in [#242](http://github.com/PrismLauncher/PrismLauncher/pull/242)
- Add missing icons to the legacy icon theme by [@leo78913](http://github.com/leo78913) in [#412](http://github.com/PrismLauncher/PrismLauncher/pull/412)
- Add new default instance icons by [@santiagocezar](http://github.com/santiagocezar) [@Scrumplex](http://github.com/Scrumplex) and [@DioEgizio](http://github.com/DioEgizio) in [#238](http://github.com/PrismLauncher/PrismLauncher/pull/238) [#556](http://github.com/PrismLauncher/PrismLauncher/pull/556)
- Add proper server icon by [@DioEgizio](http://github.com/DioEgizio) in [#546](http://github.com/PrismLauncher/PrismLauncher/pull/546)
- Add smart resource pack parsing for dropping/opening files with Prism Launcher by [@ryanccn](http://github.com/ryanccn), [@flowln](http://github.com/flowln) and [@Scrumplex](http://github.com/Scrumplex) in [#481](http://github.com/PrismLauncher/PrismLauncher/pull/481)
- Add spooky kitty for halloween by [@leozamboni](http://github.com/leozamboni), [@AshtakaOOf](http://github.com/AshtakaOOf) and [@Scrumplex](http://github.com/Scrumplex) in [#396](http://github.com/PrismLauncher/PrismLauncher/pull/396) [#405](http://github.com/PrismLauncher/PrismLauncher/pull/405)
- Add support for multiple custom themes by [@TayouVR](http://github.com/TayouVR) in [#149](http://github.com/PrismLauncher/PrismLauncher/pull/149)
- Add theme switcher to menu bar by [@RedsonBr140](http://github.com/RedsonBr140) and [@leo78913](http://github.com/leo78913) in [#454](http://github.com/PrismLauncher/PrismLauncher/pull/454)
- Add Windows on ARM builds by [@DioEgizio](http://github.com/DioEgizio) and [@TheLastRar](http://github.com/TheLastRar) in [#524](http://github.com/PrismLauncher/PrismLauncher/pull/524)
- Allow Prism to open an instance's window from command line by [@Hibiii](http://github.com/Hibiii) in [#211](http://github.com/PrismLauncher/PrismLauncher/pull/211)
- Allow hiding buttons in instance pages by [@flowln](http://github.com/flowln) in [#486](http://github.com/PrismLauncher/PrismLauncher/pull/486)
- Allow "Open with" for .zip/.mrpack files by [@ryanccn](http://github.com/ryanccn), [@Scrumplex](http://github.com/Scrumplex) and [@Ryex](http://github.com/Ryex) in [#229](http://github.com/PrismLauncher/PrismLauncher/pull/229) [#266](http://github.com/PrismLauncher/PrismLauncher/pull/266)
- Handle links to other mods inside the mod browser by [@TheKodeToad](http://github.com/TheKodeToad) in [#367](http://github.com/PrismLauncher/PrismLauncher/pull/367)
- [Linux] Add automated Flatpak builds for nightly builds by [@DioEgizio](http://github.com/DioEgizio) in [#456](http://github.com/PrismLauncher/PrismLauncher/pull/456)
- [Linux] Add Nix build and Cachix bucket by [@Scrumplex](http://github.com/Scrumplex) in [#493](http://github.com/PrismLauncher/PrismLauncher/pull/493)
- [Linux] Add support for Snap builds by [@piperswe](http://github.com/piperswe) and [@Scrumplex](http://github.com/Scrumplex) in [#294](http://github.com/PrismLauncher/PrismLauncher/pull/294)
- [macOS] Add button to add Prism Launcher to PATH by [@ryanccn](http://github.com/ryanccn) and [@Scrumplex](http://github.com/Scrumplex) in [#112](http://github.com/PrismLauncher/PrismLauncher/pull/112)
- [Windows] Add builds using MSVC by [@TheLastRar](http://github.com/TheLastRar) and [@DioEgizio](http://github.com/DioEgizio) in [#366](http://github.com/PrismLauncher/PrismLauncher/pull/366) [#411](http://github.com/PrismLauncher/PrismLauncher/pull/411) [#448](http://github.com/PrismLauncher/PrismLauncher/pull/448) [#464](http://github.com/PrismLauncher/PrismLauncher/pull/464) [#508](http://github.com/PrismLauncher/PrismLauncher/pull/508) [#514](http://github.com/PrismLauncher/PrismLauncher/pull/514) [#527](http://github.com/PrismLauncher/PrismLauncher/pull/527)

### Changed

- Correct wording on libraries download task by [@unascribed](http://github.com/unascribed) in [#587](http://github.com/PrismLauncher/PrismLauncher/pull/587)
- Choose default maximum memory allocation based on system memory by [@txtsd](http://github.com/txtsd) in [#392](http://github.com/PrismLauncher/PrismLauncher/pull/392)
- Improve Blocked Mods Dialog and detect manually downloaded mods automatically by [@Ryex](http://github.com/Ryex) and [@Scrumplex](http://github.com/Scrumplex) in [#304](http://github.com/PrismLauncher/PrismLauncher/pull/304) [#439](http://github.com/PrismLauncher/PrismLauncher/pull/439) [#511](http://github.com/PrismLauncher/PrismLauncher/pull/511) [#557](http://github.com/PrismLauncher/PrismLauncher/pull/557) [#571](http://github.com/PrismLauncher/PrismLauncher/pull/571) [#575](http://github.com/PrismLauncher/PrismLauncher/pull/575)
- Improve CurseForge modpack browser by [@forkiesassds](http://github.com/forkiesassds) in [#215](http://github.com/PrismLauncher/PrismLauncher/pull/215)
- Major refactor to Java launcher library by [@TheKodeToad](http://github.com/TheKodeToad) and [@solonovamax](http://github.com/solonovamax) in [#291](http://github.com/PrismLauncher/PrismLauncher/pull/291)
- Make resource buttons work when instance is running by [@Scrumplex](http://github.com/Scrumplex) and [@flowln](http://github.com/flowln) in [#528](http://github.com/PrismLauncher/PrismLauncher/pull/528)
- Update tomlplusplus by [@Scrumplex](http://github.com/Scrumplex) in [#459](http://github.com/PrismLauncher/PrismLauncher/pull/459)
- Validate maximum memory allocation by [@Scrumplex](http://github.com/Scrumplex) in [#436](http://github.com/PrismLauncher/PrismLauncher/pull/436)
- Warn before trashing instances by [@ryanccn](http://github.com/ryanccn) in [#541](http://github.com/PrismLauncher/PrismLauncher/pull/541)
- [Linux] Improve detection of MangoHud by [@Jan200101](http://github.com/Jan200101) in [#569](http://github.com/PrismLauncher/PrismLauncher/pull/569)
- [Linux] Update Flake to match Nixpkgs by [@Scrumplex](http://github.com/Scrumplex) in [#492](http://github.com/PrismLauncher/PrismLauncher/pull/492)

### Fixed

- Fix crash when copying instances by [@flowln](http://github.com/flowln) in [#547](http://github.com/PrismLauncher/PrismLauncher/pull/547)
- Fix CurseForge instance import issues by [@flowln](http://github.com/flowln) in [#538](http://github.com/PrismLauncher/PrismLauncher/pull/538)
- Fix infinite loop when parsing big resource pack images by [@flowln](http://github.com/flowln) in [#461](http://github.com/PrismLauncher/PrismLauncher/pull/461)
- Fix menubar issues by [@leo78913](http://github.com/leo78913) in [#455](http://github.com/PrismLauncher/PrismLauncher/pull/455)
- Fix minutes unit in play time by [@edgarogh](http://github.com/edgarogh) in [#560](http://github.com/PrismLauncher/PrismLauncher/pull/560)
- Fix display names of more languages by [@Scrumplex](http://github.com/Scrumplex) and [@jopejoe1](http://github.com/jopejoe1) in [#474](http://github.com/PrismLauncher/PrismLauncher/pull/474) [#483](http://github.com/PrismLauncher/PrismLauncher/pull/483)
- Fix customizing components with custom metadata by [@Scrumplex](http://github.com/Scrumplex) in [#467](http://github.com/PrismLauncher/PrismLauncher/pull/467)

### Removed

- Remove leftover TODOs in source code by [@DioEgizio](http://github.com/DioEgizio) in [#585](http://github.com/PrismLauncher/PrismLauncher/pull/585)

Full Changelog: <https://github.com/PrismLauncher/PrismLauncher/compare/5.2...6.0>

You can [grab the latest download here](https://prismlauncher.org/download/) for your respective platform.
