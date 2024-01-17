---
title: Prism Launcher Release 5.1, now available
description: Too Many Fixes
date: 2022-11-01
release_version: "5.1"
minimum_macos_version: 10.14.0
macos_file_extension: tar.gz
macos_signature: zhCyEPFNlcFExp/OSulGn4HXU6fv66vQ/gWDUN+99mqyMJ1HiPcVpJ2/u4e8hyaPGn8hU/jTHHOrRqxC5xIVDg==
tags:
  - release
---

Hi there!

We are bringing you Prism Launcher 5.1!
This is our first patch release after the _thing_.
While we promised to bring you a blog article about the _thing_, it seems like interest has died down and there are many good write-ups/explanations of the situation on the internet.
We did update [our FAQ](../../wiki/overview/faq) though, so feel free to read that.

Now to the update.
This mainly consists of bug fixes, nothing too exciting.
Other than that Windows users might like our new 64-bit builds.
We are already hyped for our next feature release though, which will bring some UI improvements.

## Changelog

### Added

- Add support for _certain_ languages by @Scrumplex in #354

### Changed

- Abort ATLauncher pack install if optional mods dialog is closed by @jamierocks in #224
- Better dark theme selection contrast by @Protrikk in #274
- Code quality improvements by @bensuperpc in #228
- Change Profiles to Accounts for consistency by @FayneAldan in #353
- Hide the ProgressDialog when failing and succeeding jobs by @flowln and @Scrumplex in #185 #225
- Remove duplicate Java entries from Auto-detect by @AliceDTRH in #234
- Renamed inappropriate instances of "PrismLauncher" to "Prism Launcher" by @ZombieNub in #148
- Retry mod search job after aborting it by @flowln in #283
- Update credits by @Scrumplex in #338
- Update dependencies by @renovate[bot] in #197 #198
- [Linux] Resolve filesystem conflicts with other MultiMC forks by @getchoo in #218
- [Linux] Update metainfo by @TheEvilSkeleton in #100
- [Linux] Update Nix derivation and instructions by @Minion3665 in #147
- [Windows] Use Clang for building on Windows by @DioEgizio and @Scrumplex in #301 #322

### Fixed

- Avoid crash for unexpected Modrinth API response by @Scrumplex in #319
- Fix ATLauncher pack installation by @jamierocks and @flowln in #233 #333
- Fix contributors in About dialog by @Chrono-byte in #184
- Fix hardcoded icon by @fn2006 in #342
- Fix incorrect release titles by @MMK21Hub in #123
- Fix mod list text clipping by @Sebbl0508 and @flowln in #39
- Fix Modrinth download of blocked mods by @flowln in #329
- Fix trailing space in APIPage by @Chrono-byte in #359
- Fix Trash issues by @Scrumplex in #351
- Fix typo by @Heath123 in #202
- Fix version labels width by @jn64 in #240
- Use static height for changelogs in the mod updater dialog by @flowln in #206
- [macOS] Update application metadata by @tobimori in #231
- [Windows] Fix crash on Windows 7/8.1 by @TheLastRar in #352
- [Windows] Fix low-resolution icon by @Scrumplex in #173
- [Windows] Fix x86_64 builds by @TheLastRar in #318
- [Windows] Use "Prism Launcher" in installer by @Scrumplex in #281

Full Changelog: <https://github.com/PrismLauncher/PrismLauncher/compare/5.0...5.1>

You can [grab the latest download here](https://prismlauncher.org/download/) for your respective platform.
