---
title: Prism Launcher Release 5.0, now available
description: Your game has crashed!
date: 2022-10-19
release_version: "5.0"
minimum_macos_version: 10.14.0
macos_file_extension: tar.gz
macos_signature: tTJSqjcCl47ih9LxrsMQLhcFjerfeVxW4rWXfEZ60wuR0Z0if1ZyHIEHrd26pYrL5/WyihgJbN1FLFQKyl/lCg==
tags:
  - release
---

Hi there!

We are bringing you ~~PolyMC~~ Prism Launcher 5.0!
This major release not only comes with a new versioning system, but also a new name!
But why you ask?
Well, stuff happened and we are going to talk about everything that went down in a future blog post.
For now, we want you to regain access to the best Minecraft launcher out there.

Let's go over the major changes since the last _PolyMC_ release back in September.
Our macOS users on Apple M1/M2 processors as well as our Nintendo Switch Linuxers can rejoice, as you can finally run all Minecraft versions on those platforms without needing to make any changes on your end.
We have to thank [some](https://github.com/r58playz/) [community](https://github.com/theofficialgman/) [members](https://github.com/ViRb3) as well as the folks over at [MinecraftMachina](https://github.com/MinecraftMachina/) for helping out with this feature!

Apart from support for ARM64/ARM32 processors we are also bringing you our new modpack updater!
For now this feature is limited to Modrinth and CurseForge modpacks.
The process is a bit convoluted currently, but we hope to make it easier in the future with some upcoming UI changes.
Please make a backup of your files before updating a modpack, as it is still a very early feature and we don't want you to lose anything you might want to keep.

As always we need to thank EVERYONE who contributed to PolyMC as well as Prism Launcher.
Special thanks to our community members [Boba](https://cmdplusv.neocities.org/), [Davi Rafael](https://auti.one/), @elyrodso, [Fulmine](https://www.fulmine.xyz), @gonsawa, Pankakes and @tobimori who collaborated on our gorgeous logo.

## Changelog

### Added

- Add arm64 and arm32 support by @Scrumplex, @r58playz and @theofficialgman in #26 PolyMC/PolyMC#1033
- Add basic resource/texture pack parsing and fix issues by @flowln and @Scrumplex in PolyMC/PolyMC#1105 PolyMC/PolyMC#1108 PolyMC/PolyMC#1150 PolyMC/PolyMC#1154
- Add clear metadata action by @Scrumplex in #29
- Add early modpack updating system by @flowln and @timoreo22 in PolyMC/PolyMC#894
- Add image support for mod/modpack pages by @flowln in #31
- Add Launch Demo button by @jopejoe1 and @flowln in PolyMC/PolyMC#903
- Add Open All button to blocked mods dialog by @kumquat-ir in PolyMC/PolyMC#919
- Detect GameMode and MangoHud, disable if not present by @Scrumplex in PolyMC/PolyMC#1034
- Enable dark titlebar on Windows 10 by @DavidoTek in PolyMC/PolyMC#982
- Preliminary work towards ATLauncher pack updates by @jamierocks in PolyMC/PolyMC#897
- Trash instances instead of deleting by @ryanccn in PolyMC/PolyMC#549
- [Windows] Find Java installs from PATH by @TayouVR in PolyMC/PolyMC#1068

### Changed

- Allow double clicking to mark mods for download by @ErogigGit in PolyMC/PolyMC#1165
- Allow modifying some resource while the instance is running by @CutestNekoAqua in #59
- Improve language model by @Scrumplex in PolyMC/PolyMC#1164
- Improve loading speed of the application by @flowln in PolyMC/PolyMC#878
- Merge Launch Buttons by @TayouVR in PolyMC/PolyMC#1190
- Support new Prism Launcher data path by @Scrumplex, @flowln and @FayneAldan in #25 #55 #82 #88
- Reduce code duplication in tasks, fix some bugs and add some tests by @flowln in PolyMC/PolyMC#966
- Refactor resource models by @flowln in PolyMC/PolyMC#1052 PolyMC/PolyMC#1094
- Restructure Instance sidebar by @DioEgizio in #33
- Restructure tests by @Scrumplex in PolyMC/PolyMC#1133
- Switch to new API keys by @Scrumplex in #23
- Switch to new branding by @Scrumplex, @NotNite in #13 #45 #54 #60 #92 #110
- Switch to new versioning scheme by @Scrumplex in PolyMC/PolyMC#992
- Switch to QCommandLineParser by @Scrumplex in PolyMC/PolyMC#1167
- Switch to QSharedPointer by @flowln in PolyMC/PolyMC#1023
- Switch to std::filesystem where possible by @flowln in PolyMC/PolyMC#1142
- UI / UX improvements to the mod downloader by @flowln in PolyMC/PolyMC#939

### Fixed

- Add missing includes to fix Qt 6.4 build by @Scrumplex in PolyMC/PolyMC#1172
- Allow adding MSA account on first start by @Scrumplex in PolyMC/PolyMC#1183
- Allow starting rd- versions by @Scrumplex in PolyMC/PolyMC#1146
- Fix aborting network jobs by @flowln in PolyMC/PolyMC#1123
- Fix and improve FTB modpack installation by @flowln in #27
- Fix hosted weblate translation website URL by @nightsnowlinouo in #68
- Fix instance copy on Linux and macOS by @flowln in #25
- Fix mod icon issues and change delegate for Modrinth Modpacks by @flowln in PolyMC/PolyMC#1163
- Fix version filter in mod downloader by @flowln in PolyMC/PolyMC#997
- Remove opted out versions from the download selector when using the 'Any' filter by @flowln in PolyMC/PolyMC#1194
- Update libnbtplusplus submodule's URL by @flowln and @Scrumplex in #48
- Update licensing information by @DioEgizio in #36
- Update login message box by @Ozynt in PolyMC/PolyMC#1175
- Use system gamemode client if possible by @Scrumplex in PolyMC/PolyMC#1210

### Removed

- Remove outdated information about "upcoming" mod updater by @DioEgizio in PolyMC/PolyMC#1185
- Remove unused libraries by @DioEgizio in PolyMC/PolyMC#1208

Full Changelog: <https://github.com/PrismLauncher/PrismLauncher/compare/1.4.2...5.0>

You can [grab the latest download here](https://prismlauncher.org/download/) for your respective platform.
