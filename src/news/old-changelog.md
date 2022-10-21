---
title: Old Changelog
description: This contains every changelog prior to 5.0
date: 2022-10-18
release_version: 1.4.2
minimum_macos_version: 10.14.0
mac_signature: dU+pOB6d8WvEROprt/tx3Fx3bda8NjbRAEBbpIhvM3es9BPGtfJTv/9hiXDDKBRBvNPtoCbWvuBnFAKmtMJKDA==
tags:
  - release
---

Here are all the changelogs prior to version 5.0

## 1.4.2
It has been a while. With this wonderful new version you get many cool things, like bug fixes and also bug fixes!
If you were building PolyMC yourself, make sure your compiler supports C++17, as it is a requirement from now on.
Thanks to all contributors, who have worked on this release!
### Added
- [OpenBSD] Add root path detection by @Scrumplex in #1019

#### Changed
- Bump to C++17 by @Scrumplex and @LennyMcLennington in #941
- Hide 'More news...' button if the news aren't loaded yet by @flowln in #1049
- Make 'About' dialog smaller by @DioEgizio in #1107
- Make Coremods / Mods seperation more clear by @Scrumplex in #1035
- Update copyright notices by @DioEgizio in #1073
- [macOS] Downgrade to Qt 6.3.0 by @DioEgizio in #1014

#### Fixed
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

## 1.4.1
We have noticed that some things from our recent 1.4.0 release weren't working quite well. 
This update should fix some of the issues you might have faced with 1.4.0.
Thanks to all contributors, who have worked on this release!
#### Changed
- Hide empty "Performance" settings on non-Linux builds by @flowln in #951
- 
#### Fixed

- Fix crash when JAR-mods are applied by @flowln in #956
- Fix filter on resources pages (e.g. Mods page) by @flowln in #961
- Fix variables in pre launch/post exit hooks by @Scrumplex in #952
- Make adding multiple accounts possible again by @flowln in #974
- Resolve CurseForge mods for FTB modpacks by @flowln and @Scrumplex in #699

# 1.4.0
Major new features include the new mod updater and Qt 6 support.
Don't worry, Qt 5 will still be supported and packages using it will still be available for some time.
#### Added
- Add concurrent tasks by @flowln in #786
- Add more links to mod and modpack descriptions by @flowln and @DioEgizio in #634 #799
- Add news reader in the launcher by @flowln in #845
- Add on-disk mod metadata information by @flowln and @Scrumplex in #426 #714 #716 #759
- Implement mod updater by @flowln in #588
- Preliminary work for modpack updates by @jamierocks in #665
- Qt 6 support by @Scrumplex and @DioEgizio in #575 #902 #911 #922 #936
- [Linux] Add Performance settings (MangoHud, GameMode and PRIME) by @Jan200101 in #707
- [Linux] Add more metadata to Nix package by @TheOPtimal in #930
- [macOS] Implement updater using Sparkle by @kthchew and @Scrumplex in #479
- [OpenBSD] Readd support for OpenBSD by @Technous285 in #694

#### Changed
- Allow the cape to be changed without changing the skin by @Gingeh in #913
- Cleanup Java code by @Scrumplex and @icelimetea in #778 #785 #800 #863
- Hide channel from version for tagged commits by @Scrumplex in #810
- Improve handling of environment variables by @Scrumplex in #893
- Improve resolving of JARs by @Scrumplex in #794
- Improve the account selection window by @Gingeh and @Scrumplex in #855 #870
- Improve UX in the mod downloader by @flowln in #505
- Improvements for Modrinth/CurseForge modpacks by @flowln in #839
- Improvements around APIs page by @Scrumplex in #678
- Improvements to Windows installer by @kthchew in #788 #797
- Make version labels in About dialog selectable by @jn64 in #812
- Make FTB Classic layout the same as other platforms by @jopejoe1 in #884
- Refactor instance resources pages by @flowln and @Scrumplex in #652
- Refactor tests by @Scrumplex and @DarkKirb in #784 #869
- Replace old reference to launchermeta.mojang.com by @Scrumplex in #830
- Reword CurseForge warning by @DioEgizio in #834
- Separate launch and kill instance actions by @kthchew in #826
- Update license information by @DioEgizio in #905
- [Linux] Cleanup flake.nix by @gytis-ivaskevicius in #881
- [Linux] Rewrite polymc.6 in scdoc by @EliteTK in #847 #901
- [macOS] Build on macOS 12 in CI by @DioEgizio in #787

#### Fixed
- Always scale mod icons to the right size by @flowln in #818
- Don't censor offline access token by @ivanpu in #864
- Don't create unnecessary folders when extracting ZIPs by @flowln in #817
- Fix broken output in mod list by @flowln in #947
- Fix contrast of placeholder text with dark theme by @flowln in #929
- Fix duplicate name in window title by @jn64 in #811
- Fix hangs when aborting some tasks by @flowln in #831
- Fix missing instance version in status bar by @kthchew in #860
- Fix permanent mod-loaders for some modpacks by @Scrumplex in #880
- Fix "Play Offline" not working when auth servers are partially offline by @Scrumplex in #877
- Fix sorting for Modrinth resources by @DioEgizio in #837
- Fix Technic instances using Forge by @Scrumplex in #890
- Fix translations by @Scrumplex in #917 #938
- Fix warnings reported by LGTM.com by @Scrumplex in #808
- [Linux] Fix mods relying on `libstdc++` on Nix by @virchau13 in #904 #934
- [Linux] Use our fork of libnbtplusplus on Nix by @Scrumplex in #932
- [macOS] Workaround Qt bug to fix menu bar separators by @kthchew in #827

## 1.3.2
Yet again we have some fixes for you!
#### Added
- Add support for Quilt modpacks on Technic by @kthchew in #685
- [Linux] Added support for Nix 2.7 by @TheOPtimal in #286
- [Windows] Add version information to setup executable by @kthchew in #679

#### Changed
- Change build flags by @Scrumplex in #764
- Do not enforce fractional scaling by @DioEgizio in #718
- Sort icons in icon-selector alphabetically by @MrMelon54 in #732
- [Linux] Allow adding more JDKs to Nix package by @babbaj in #734

#### Fixed
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

#### Removed
- [OpenBSD] Drop support for OpenBSD by @glowiak in #692

## 1.3.1
Hey, it's that time again! This time you only get some small tweaks and fixes. 
With this release downloading CurseForge packs should be a better experience, as now the launcher will tell you what mods could not be downloaded. 
Please make sure to download all those mods, otherwise you won't have the full modpack.
#### Added
- Add code style configuration by @ryanccn in #623
- Add modpack version in the name for FTB legacy packs by @Scrumplex in #672
- [Windows] Add desktop shortcut in the installer by @kthchew in #629

#### Changed
- Clarify T&C for API keys by @Scrumplex in #659
- Improve download speed when using the CurseForge API by @timoreo22 in #611
- Improve whitelisted hosts filtering code by @LennyMcLennington in #661
- Make JVM arguments text-field multi-line by @ryanccn in #624
- Remove CurseForge API workaround on modpacks by @Scrumplex in #645
- Show metaserver URL instead of `(default)` by @ryanccn in #642
- Update Nix support by @muscaln in #653 and #675
- Warn the user of non-whitelisted hosts in mrpacks by @flowln in #661
- [macOS] Switch background of icon to white by @ryanccn in #625

#### Fixed
- Correctly handle ATL packs when `mainClass` has a `depends` field by @jamierocks in #630
- Fix crash when aborting instance import by @JJL772 in #657
- Fix icon importing when using non-standard icon paths by @flowln in #650
- Fix missing mnemonics in the API page by @Scrumplex in #651
- Fix modpack's type inference when importing by @Scrumplex in #639 and #671
- Fix search filters for Modrinth by @timoreo22 in #677
- Properly fix CurseForge modpack installation by @timoreo22 in #611 and @Scrumplex in #674
- Silence unimportant build warnings by @kthchew in #631
- [Linux] Add missing image-format libraries for the AppImage by @DioEgizio in #618
- [Linux] Fix image sizes in Flathub by @byquanton in #637
- [Windows] Correctly set PolyMC's version for binaries by @Scrumplex in #669

#### Removed
- [Windows] Remove explicit Vista support by @DioEgizio in #667

# 1.3.0
It's update-time again. This time we bring you some highlights, like Modrinth modpack support, a Windows installer, more paste services and improvements around our ATLauncher support.
There is also a breaking change affecting older platforms.
We have bumped our Qt dependency requirement to version 5.12.
If you user an older platform, you might still be able to run PolyMC through our existing distribution methods (AppImage, Flatpak on Linux).
#### Added
- Support ATLauncher share codes by @jamierocks in #408
- Allow changing metadata-server settings by @dada513 in #425
- Add PolyMC icon as instance icon by @ryanccn in #498
- Add option to always hide Java setup wizard by @dada513 in #511
- Add support for paste.gg, hastebin and mclo.gs paste services by @LennyMcLennington in #554
- Add instance overrides for miscellaneous settings by @kthchew in #560
- Modrinth modpack support by @flowln and @Scrumplex in #565
- Quilt mod metadata support by @Scrumplex in #567 and @DioEgizio in #590
- Support Mojang's new split natives by @Scrumplex in #594
- Allow changing CurseForge api key settings by @dada513 in #607
- [macOS] Add Big Sur-style icon by @ryanccn in #495
- [Windows] Add Windows installer by @kthchew in #576

#### Changed
- Bump Qt requirement to 5.12 by @Scrumplex in #127
- Refactor launcher code by @icelimetea in #486 #520
- Refactor network code by @flowln in #500
- Speedup automatic builds by @txtsd in #510 #614
- Make profile selection menu scrollable by @kthchew in #546
- Switch to new CurseForge API Key by @ZekeSmith in #557
- Improve behavior when multiple mod loaders are in use by @Scrumplex in #597
- Various improvements to ATLauncher support by @jamierocks in #605
- Switch to a better CurseForge icon by @DioEgizio in #612
- Improve compile parameters by @Scrumplex in #616 #620

#### Fixed
- Always build iconfix as static library by @flowln in #477
- Added and fixed mnemonics by @dschemp in #480 and @txtsd in #503
- Fix selection of .zip files by @flowln in #528
- Fix graphical issue when moving toolbars by @flowln in #529
- Fix missing translations when switching languages by @kthchew in #539
- Fix missing screenshots in screenshot manager by @kthchew in #540
- Fix website link in CurseForge modpacks by @DioEgizio in #545
- Hide temporary directory inside instances directory by @kthchew in #547
- Fix icons not showing in some FTB modpacks by @flowln in #564
- Fix toolbar disappearing in a certain circumstance by @LennyMcLennington in #577
- Fix issue with [Solder.cf Technic packs](https://solder.io/) by @flowln in #592
- [macOS] Fix Steam overlay on macOS by @kthchew in #568

#### Removed
- Remove unneeded build files by @Scrumplex in #519
- Remove references to legacy Minecraft accounts by @Ozynt in #531
- Remove self-promotion from game client to reduce fingerprinting by @jamierocks in #606
- [macOS] Remove old macOS migration code by @kthchew in #489

## 1.2.2
The old API we used for CurseForge will stop working soon.
This update switches to the new CurseForge Core API to keep modpacks and mod downloads working.
#### Fixed
- Hide sensitive tokens from logs by @Scrumplex in #475
- Implemented a workaround to allow Mojang logins by @TheCodex6824 in #482
- Move to new CurseForge Core API by @ryanccn in #530
- [Linux] Fix AppImage scaling issues by @DioEgizio in #492

## 1.2.1
We have found some bugs in our last release on Sunday, which is why we are bringing you a truckload of bug fixes.
Also check our friends' launch of the Quilt Beta over at [quiltmc.org](https://quiltmc.org)!
#### Added
- Specify build platform for about page by @DioEgizio in #449
- [macOS] Enable hardened runtime by @kthchew in #454

#### Fixed
- Fix typos and capitalization by @kthchew in #442
- Fix placeholder translations for mod downloader by @flowln in #443
- Fix missing files in release workflow by @Scrumplex in #444
- Fix Modrinth search if Quilt is used by @Scrumplex in #450
- Fix crashes when creating a new instance by @Scrumplex in #451
- Fix crash when mod downloader has network issues by @Scrumplex in #452
- Fix sort-by-size in world list by @Scrumplex in #462
- Fix crash when trying to create an instance without a Minecraft version by @kthchew in #470
- Fix crash when opening the mod downloader with snapshots by @Scrumplex in #472
- [macOS] Fix version string by @kthchew in #455
- [macOS] Fix instance rename using return-key @txtsd in #463

#### Removed
- [FreeBSD] Revert "Force system LWJGL natives" by @Scrumplex in #467

# 1.2.0
Hey! It's update-time again. We have added lots of new things in this one and improved a few things as well.
#### Added
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

#### Changed
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

#### Fixed
- Fix and improve translatable strings by @Scrumplex in #364
- Switch to newer Discord logo by @Regular-Baf in #413
- [Linux] Flatpak fixes by @dada513 in #355
- [Linux] Install missing manpage by @Scrumplex in #417
- [FreeBSD] Force system LWJGL natives by @Irgendwer01 in #429

#### Removed
- Remove unused notification system by @binex-dsk in #188

## 1.1.1
We are pleased to annouce, that PolyMC version 1.1.1 is now available. 
This release mainly contains bug fixes.
#### Added
- Support builds without Git by @oynqr in #280
- Limit offline username to 16 characters by @lack in #292
- [Windows] Support 64-Bit builds by @oynqr in #294
- Allow fractional DPI scaling by @txtsd in #315
- [Windows] Provide portable and system builds by @DioEgizio in #330
- Improve release workflow by @oynqr in #337

#### Changed
- Add license headers by @Scrumplex in #200
- Improve mod downloads by @flowln in #270 #296 #334
- Bundle JRE 8u312 for AppImage by @DioEgizio in #297

#### Fixed
- [Linux] Update metainfo URLs by @Scrumplex in #254
- [Linux] Fix JavaCheck for AppImage by @Scrumplex in #265
- [macOS] Fix branding by @DioEgizio in #273
- Clarify license by @Scrumplex in #278
- [Windows] Fix portable builds by @Scrumplex in #295
- Improve translations by @Scrumplex in #298 #323
- Limit instance names' length by @Scrumplex in #306
- [macOS] Fix loading of WebP images by @DioEgizio in #311
- Fix buttons on mods page when instance is running by @Scrumplex in #316
- Statically link remaining internal libraries by @oynqr in #322

#### Removed
- Remove paste.polymc.org by @flowln in #299

# 1.1.0
We are pleased to annouce, that PolyMC version 1.1.0 is now available!
This is a major milestone, as this marks the first release since deciding to move on from our origins as a MultiMC fork.
#### Added
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

#### Changed
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

#### Fixed
- Add some logging to profile fetching failures in #96
- Ignore invalid lines altogether in java checker in #96
- Correctly set http status code in auth reply in #96
- Log server response when failing to fetch profile in #96
- Fix error message in #96
- Fixed inconsistent behavior of icons when exiting the settings screen by @redstrate in #107
- Fixed freedesktop icons by @dada513 in #150
- [macOS] Fixed GUI identifier by @DioEgizio in #171

#### Removed
- Removed MultiMC news by @Scrumplex in #105
- Removed legacy instance support by @Scrumplex in #192 #201
