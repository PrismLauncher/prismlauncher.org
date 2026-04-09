---
title: "Prism Launcher Release 11.0.0, now available"
description: "Did you expect it this fast?"
date: 2026-04-08
slug: "release-11"
release_version: "11.0.0"
minimum_macos_version: 12.0.0
macos_file_extension: zip
macos_signature: H/WQ/fozhBpViD6utJFGwZxuI80dwemsvJbXSI5P8OpN2BiL73wMJGLe+Lyu/JlkHTXdDPrON7gvl3q20DxVCw==
tags:
  - Release
---

Hello again!

Following a short hibernation ~~and a few unpublished releases~~, the Prism Launcher team is proud to announce **11.0!** 🍾

With it being ~3 months since [10.0](/news/release-10), 11.0 is our fastest major release yet. But not to worry! We've been working on an awesome amount of features - and especially fixes! - for everybody to have some fun with. As always, we also can't thank our [dedicated contributors](/#get-involved) enough for the work they've done in this cycle.

Run to [grab the latest download here](/download), and read on to see all the new stuff!

## Highlights

- **Restored FTB support!**
  - This was previously removed back in 7.0. Now it's back!
- Account List improvements:
  - You can now change the ordering of accounts in the list
  - Accounts now have cool icons next to them
  - Accounts with errors will show an indicator in the top-right dropdown
- Support for downloading versions of [IBM Semeru](https://developer.ibm.com/languages/semeru-runtimes/)
- **Dependency tracking for mods!**
- Logging improvements:
  - All platforms will now more consistently log system information
  - Custom environment variables are logged during game launch
- **Automatic updates enabled by default**
  - We figured this was a more sensible option for most users
  - To opt-out, go to Settings>General, and uncheck "Check for updates automatically"
- Fix potential .zip file path traversal
  - Thanks to [Thinkseal](https://thinkseal.github.io/) for reporting this!
- Developer Changes:
  - Hardened compiler flags and static analysis
    - This is meant to help us avoid more preventable mistake and errors from getting into any regular release
    - The launcher now strictly enforces all compiler warnings during build
    - `clang-tidy` is used in CI to catch more complex errors. Our configuration for it may become stricter in the future
  - Development container for Linux
    - This is meant to give developers on Linux an easier time building and developing for the launcher.
    - See the newly updated [build instructions]() for a guide on how to set it up
  - LLVM-based builds
    - Nix and the above mentioned development container both default to LLVM-based environments
- Endless bug fixes and performance improvements
- [No age verification!](/news/increasing-safety)

## Changelog

And for those who are a bit more curious (or just like reading long lists), here's our full changelog. You can also see the individual changes [here](https://github.com/PrismLauncher/PrismLauncher/compare/10.0.5...11.0.0).

Until next time! 🌈

### Added

- Add CLI option to open main window when launching instance by [@MatthewCash](https://github.com/MatthewCash) in [#5107](https://github.com/PrismLauncher/PrismLauncher/pull/5107)
- Add a development container by [@getchoo](https://github.com/getchoo) in [#5091](https://github.com/PrismLauncher/PrismLauncher/pull/5091)
- Add back FTB modpack support by [@Trial97](https://github.com/Trial97) in [#3559](https://github.com/PrismLauncher/PrismLauncher/pull/3559)
- Add back drag and dropping to screenshots page by [@leia-uwu](https://github.com/leia-uwu) in [#5300](https://github.com/PrismLauncher/PrismLauncher/pull/5300)
- Add configurable option on ScrollMessageBox by [@dsch7705](https://github.com/dsch7705) in [#4335](https://github.com/PrismLauncher/PrismLauncher/pull/4335)
- Add icons in settings account list by [@TheKodeToad](https://github.com/TheKodeToad) in [#4684](https://github.com/PrismLauncher/PrismLauncher/pull/4684)
- Allow moving accounts in list by [@Octol1ttle](https://github.com/Octol1ttle) in [#4647](https://github.com/PrismLauncher/PrismLauncher/pull/4647)
- Allow overriding URL for downloading legacy FML libs by [@Octol1ttle](https://github.com/Octol1ttle) in [#4862](https://github.com/PrismLauncher/PrismLauncher/pull/4862)
- Ask before deleting saves as part of a Modpack update by [@Trial97](https://github.com/Trial97) in [#4622](https://github.com/PrismLauncher/PrismLauncher/pull/4622)
- Highlight resources incompatible with the Minecraft version by [@TheKodeToad](https://github.com/TheKodeToad) in [#5010](https://github.com/PrismLauncher/PrismLauncher/pull/5010)
- Add Javachecker support for ppc64 and ppc64le architectures by [@runlevel5](https://github.com/runlevel5) in [#5212](https://github.com/PrismLauncher/PrismLauncher/pull/5212)
- Log OS, CPU, RAM and GPUs on all systems by [@Octol1ttle](https://github.com/Octol1ttle) in [#5169](https://github.com/PrismLauncher/PrismLauncher/pull/5169)
- Mark accounts with errors in dropdown by [@Octol1ttle](https://github.com/Octol1ttle) in [#5181](https://github.com/PrismLauncher/PrismLauncher/pull/5181)
- Print custom environment variables during instance launch by [@Octol1ttle](https://github.com/Octol1ttle) in [#4832](https://github.com/PrismLauncher/PrismLauncher/pull/4832)
- Track dependencies in Mods page by [@Trial97](https://github.com/Trial97) in [#3738](https://github.com/PrismLauncher/PrismLauncher/pull/3738)
- URL protocol modpack import for any encoded URL by [@Dan4oby](https://github.com/Dan4oby) in [#4990](https://github.com/PrismLauncher/PrismLauncher/pull/4990)
- Updated Resource Pack Formats by [@Trial97](https://github.com/Trial97) in [#5199](https://github.com/PrismLauncher/PrismLauncher/pull/5199)
- Warn user on launch if there is not enough available RAM by [@Octol1ttle](https://github.com/Octol1ttle) in [#5249](https://github.com/PrismLauncher/PrismLauncher/pull/5249)
- Rework modrinth fallback for blocked mods a bit by [@DioEgizio](https://github.com/DioEgizio) in [#4499](https://github.com/PrismLauncher/PrismLauncher/pull/4499)
- Curseforge modpack downloading via binaryname:// uri by [@2lay](https://github.com/2lay) in [#4872](https://github.com/PrismLauncher/PrismLauncher/pull/4872)
- IBM Semeru Runtime Open Edition support (openj9 jvm) by [@ludgie](https://github.com/ludgie) in [#5138](https://github.com/PrismLauncher/PrismLauncher/pull/5138)
- Update local pack by URL by [@Trial97](https://github.com/Trial97) in [#4474](https://github.com/PrismLauncher/PrismLauncher/pull/4474)

### Changed

- Cache news feed by [@Scrumplex](https://github.com/Scrumplex) in [#4964](https://github.com/PrismLauncher/PrismLauncher/pull/4964)
- Don't manually format UUIDs by [@Octol1ttle](https://github.com/Octol1ttle) in [#5045](https://github.com/PrismLauncher/PrismLauncher/pull/5045)
- Download game files during instance creation by [@Octol1ttle](https://github.com/Octol1ttle) in [#4944](https://github.com/PrismLauncher/PrismLauncher/pull/4944)
- Enable automatic update checking by default by [@Octol1ttle](https://github.com/Octol1ttle) in [#5259](https://github.com/PrismLauncher/PrismLauncher/pull/5259)
- Enable warnings as errors by [@Trial97](https://github.com/Trial97) and [@Octol1ttle](https://github.com/Octol1ttle) in [#5101](https://github.com/PrismLauncher/PrismLauncher/pull/5101) and [#5158](https://github.com/PrismLauncher/PrismLauncher/pull/5158)
- Improve NetJob failure dialog by [@TheKodeToad](https://github.com/TheKodeToad) and [@Octol1ttle](https://github.com/Octol1ttle) in [#5260](https://github.com/PrismLauncher/PrismLauncher/pull/5260)
- Make Minecraft resource URL override consistent with other overrides by [@Octol1ttle](https://github.com/Octol1ttle) in [#4860](https://github.com/PrismLauncher/PrismLauncher/pull/4860)
- Modrith API optional changelog by [@Ryex](https://github.com/Ryex) in [#5197](https://github.com/PrismLauncher/PrismLauncher/pull/5197)
- Refactor global C/CXX flags in CMake by [@getchoo](https://github.com/getchoo) in [#5133](https://github.com/PrismLauncher/PrismLauncher/pull/5133)
- Use LLVM-based stdenv for Nix build/shell by [@getchoo](https://github.com/getchoo) in [#5155](https://github.com/PrismLauncher/PrismLauncher/pull/5155)
- Use `Launcher_ENVName` for launcher environment variable names by [@DioEgizio](https://github.com/DioEgizio) in [#5226](https://github.com/PrismLauncher/PrismLauncher/pull/5226)
- Handle mod formatting codes by [@Trial97](https://github.com/Trial97) in [#4550](https://github.com/PrismLauncher/PrismLauncher/pull/4550)
- Mod versions now list in newest first order by [@Trial97](https://github.com/Trial97) in [#5194](https://github.com/PrismLauncher/PrismLauncher/pull/5194) and [#5213](https://github.com/PrismLauncher/PrismLauncher/pull/5213)
- Make trackpad scrolling smoother across all listing views by [@peenutdev](https://github.com/peenutdev) in [#5029](https://github.com/PrismLauncher/PrismLauncher/pull/5029)

### Fixed

- Actually check for updates on launch by [@Octol1ttle](https://github.com/Octol1ttle) in [#5076](https://github.com/PrismLauncher/PrismLauncher/pull/5076)
- Allow -Duser.language to be overriden by [@TheKodeToad](https://github.com/TheKodeToad) in [#5017](https://github.com/PrismLauncher/PrismLauncher/pull/5017)
- Do not delete LaunchController before we're done using it by [@Octol1ttle](https://github.com/Octol1ttle) in [#4822](https://github.com/PrismLauncher/PrismLauncher/pull/4822)
- Don't show progress dialog when automatically checking for updates by [@Octol1ttle](https://github.com/Octol1ttle) in [#5075](https://github.com/PrismLauncher/PrismLauncher/pull/5075)
- Update java path label and tooltip by [@metehanCekci](https://github.com/metehanCekci) in [#5198](https://github.com/PrismLauncher/PrismLauncher/pull/5198)
- Fix CurseForge recommended RAM check by [@f-schnabel](https://github.com/f-schnabel) in [#5310](https://github.com/PrismLauncher/PrismLauncher/pull/5310)
- Fix backface culling re-enabling with elytra preview on by [@Octol1ttle](https://github.com/Octol1ttle) in [#5093](https://github.com/PrismLauncher/PrismLauncher/pull/5093)
- Fix infinite update by [@Trial97](https://github.com/Trial97) in [#5187](https://github.com/PrismLauncher/PrismLauncher/pull/5187)
- Fix weird utf archive by [@Trial97](https://github.com/Trial97) in [#5186](https://github.com/PrismLauncher/PrismLauncher/pull/5186)
- LaunchController: fix double task finish by [@Octol1ttle](https://github.com/Octol1ttle) in [#5301](https://github.com/PrismLauncher/PrismLauncher/pull/5301)
- NewsDialog: Save and restore geometry by [@Octol1ttle](https://github.com/Octol1ttle) in [#5077](https://github.com/PrismLauncher/PrismLauncher/pull/5077)
- Open correct wiki URL when opened from main window by [@Octol1ttle](https://github.com/Octol1ttle) in [#5130](https://github.com/PrismLauncher/PrismLauncher/pull/5130)
- OtherLogsPage: Fix some strings not being translatable by [@Octol1ttle](https://github.com/Octol1ttle) in [#5074](https://github.com/PrismLauncher/PrismLauncher/pull/5074)
- OtherLogsPage: Remove CR when removing LF by [@Octol1ttle](https://github.com/Octol1ttle) in [#5073](https://github.com/PrismLauncher/PrismLauncher/pull/5073)
- Overwrite component update task when it has different network mode by [@Octol1ttle](https://github.com/Octol1ttle) in [#5216](https://github.com/PrismLauncher/PrismLauncher/pull/5216)
- Skin renderer: Do not enable backface culling by [@Octol1ttle](https://github.com/Octol1ttle) in [#5078](https://github.com/PrismLauncher/PrismLauncher/pull/5078)
- Stop showing a star on the oldest java by [@TheKodeToad](https://github.com/TheKodeToad) in [#5056](https://github.com/PrismLauncher/PrismLauncher/pull/5056)
- Use an owning QByteArray in ByteArraySink by [@TheKodeToad](https://github.com/TheKodeToad) in [#5050](https://github.com/PrismLauncher/PrismLauncher/pull/5050)
- fix %INST_JAVA% incorrect path format on windows by [@deiseil](https://github.com/deiseil) in [#5072](https://github.com/PrismLauncher/PrismLauncher/pull/5072)
- fix crash with skin format by [@Trial97](https://github.com/Trial97) in [#5000](https://github.com/PrismLauncher/PrismLauncher/pull/5000)
- fix incorrect mod side beeing saved by [@Trial97](https://github.com/Trial97) in [#5283](https://github.com/PrismLauncher/PrismLauncher/pull/5283)
- fix no name instances by [@Trial97](https://github.com/Trial97) in [#5055](https://github.com/PrismLauncher/PrismLauncher/pull/5055)
- fix tweakers by [@Trial97](https://github.com/Trial97) in [#4913](https://github.com/PrismLauncher/PrismLauncher/pull/4913)
- fix world import by [@Trial97](https://github.com/Trial97) in [#5282](https://github.com/PrismLauncher/PrismLauncher/pull/5282)
- fix zip path traversal by [@Trial97](https://github.com/Trial97) in [#5034](https://github.com/PrismLauncher/PrismLauncher/pull/5034)
- fix(flame): avoid double-fail assert in file resolving by [@m0nstrum](https://github.com/m0nstrum) in [#5043](https://github.com/PrismLauncher/PrismLauncher/pull/5043)
- fix: URL import fix for Linux by [@Dan4oby](https://github.com/Dan4oby) in [#5141](https://github.com/PrismLauncher/PrismLauncher/pull/5141)
- fix: allow disabling gl and vulkan features with an envvar and disable it by default on appimage/portable by [@DioEgizio](https://github.com/DioEgizio) in [#5224](https://github.com/PrismLauncher/PrismLauncher/pull/5224)
- fix: also export LIBGL_KOPPER_DRI2=1 on zink by [@DioEgizio](https://github.com/DioEgizio) in [#5222](https://github.com/PrismLauncher/PrismLauncher/pull/5222)
- fix: parse world_gen_settings.dat for seed by [@Trial97](https://github.com/Trial97) in [#5071](https://github.com/PrismLauncher/PrismLauncher/pull/5071)
- fixes crash on servers with invalid packet by [@Trial97](https://github.com/Trial97) in [#5289](https://github.com/PrismLauncher/PrismLauncher/pull/5289)
- launcher/minecract/auth/AccountList.cpp: add missing QIcon include by [@parona-source](https://github.com/parona-source) in [#4956](https://github.com/PrismLauncher/PrismLauncher/pull/4956)

### Removed

- Remove XboxProfileStep by [@Octol1ttle](https://github.com/Octol1ttle) in [#4957](https://github.com/PrismLauncher/PrismLauncher/pull/4957)
- Remove retrieving Xbox API token for gamertag by [@Octol1ttle](https://github.com/Octol1ttle) in [#4958](https://github.com/PrismLauncher/PrismLauncher/pull/4958)
