---
title: "Prism Launcher Release 10.0.0, now available"
description: "New year, new Prism!"
date: 2026-01-05
slug: "release-10"
release_version: "10.0.0"
minimum_macos_version: 12.0.0
macos_file_extension: zip
macos_signature: jsSTAym6sGlFPPfz42UdvEv0Q3AV5Z2z5jw9f6xInUv1oo+LsqWFEKGUqf1uV8Tro7fO628O0UdxMvhCHT2mDA==
tags:
  - Release
---

Hi again — it's been a while!

After celebrating the holidays and the new year, the Prism Launcher team has finally decided to make a new release. And this time? It's so big we had to add a whole new number: **welcome to 10.0.0!**

We aren't kidding either. With [over 350 changes](https://github.com/PrismLauncher/PrismLauncher/pulls?q=is%3Apr+milestone%3A10.0.0+is%3Amerged) since 9.0, this is by far the most work that has gone into a release. We can't thank our [amazing contributors](/#get-involved) from the past year enough, and we hope you enjoy this launch as much as we have enjoyed getting it ready.

Run (don't walk!) to [grab the latest download here](/download), and then read on to see what we've been cooking up 🤠

## New Website

Before we get into all the changes for this release, you might have noticed something a bit different. **We redesigned our website!**

This has been a few months in the making, led by the amazing [Devin (@integrav)](https://github.com/intergrav). Aside from a generally nicer looking experience everywhere, we also have a much more navigable [News section](/news), and a new [dedicated wiki](/wiki) for help with the launcher, build instructions, and more.

Feedback on this new look is welcome and greatly appreciated on [our website's GitHub repository](https://github.com/PrismLauncher/prismlauncher.org/issues/new). Contributing to this site should also be a bit easier now, thanks to [Astro](https://astro.build) and [Tailwind](https://tailwindcss.com/).

## Highlights

As mentioned already, this is our biggest release! So as a TL;DR, here's some of the cooler things to be on the look out for:

- **Support for data packs!**
- **Support for updating resource and shader packs!**
- "Manage Skins" can now show a 3D preview of your skins on the player
- A few nice UI revamps (especially in Settings!)
- Better support for providers like CurseForge/Modrinth/FTB App
- Expanded desktop shortcut support
  - **This includes creating shortcuts for specific worlds and servers!**
- Easier and more reliable authentication with Microsoft
  - You no longer need to type the one-time code when scanning the QR code or clicking the link to sign in
  - The launcher will automatically prompt you to re-authenticate expired accounts
- CatPacks can now include GIFs
- **Improved platform support!**
  - Windows builds are once again signed! This should avoid issues with Defender and avoid any spooky prompts when installing Prism
  - ARM builds for Linux are now available
  - ARM MinGW-based builds for Windows are now available. This prevents Windows on ARM (WoA) users from needing the Visual C++ Redistributable on portable installs
  - Our AppImage and Linux portable builds should now work on almost any system (new and old, even without FUSE!)
- **Dropping support for legacy options**
  - The launcher can no longer be built with Qt 5
  - macOS 11 support has been dropped, making macOS 12 the new minimum
  - Please see [the new section](/wiki/overview/troubleshooting/#-legacy-operating-systems) of our troubleshooting guide for more information
- Endless bug fixes and performance improvements

## Changelog

And for those who are a bit more curious (or just like reading long lists), here's our full changelog. You can also see the individual changes [here](https://github.com/PrismLauncher/PrismLauncher/compare/9.4...10.0.0).

Until next time! 🌈

### Added

- Add "Babric" and "BTA (Babric)" filters as shown on Modrinth by [@matthewperiut](https://github.com/matthewperiut) in [#3961](https://github.com/PrismLauncher/PrismLauncher/pull/3961)
- Add Ornithe, LegacyFabric and Rift mod loader filters by [@moehreag](https://github.com/moehreag) in [#4041](https://github.com/PrismLauncher/PrismLauncher/pull/4041)
- Add Popup for metacache clear failures by [@Soup-64](https://github.com/Soup-64) in [#3586](https://github.com/PrismLauncher/PrismLauncher/pull/3586)
- Add a notice in FTB App Import telling users most FTB modpacks are also available on CurseForge by [@DioEgizio](https://github.com/DioEgizio) in [#4597](https://github.com/PrismLauncher/PrismLauncher/pull/4597)
- Add a page to view launcher logs by [@Mick235711](https://github.com/Mick235711) in [#3831](https://github.com/PrismLauncher/PrismLauncher/pull/3831)
- Add ability to change assets download server by [@clague](https://github.com/clague) in [#3875](https://github.com/PrismLauncher/PrismLauncher/pull/3875)
- Add gif support to catpacks by [@Trial97](https://github.com/Trial97) in [#3315](https://github.com/PrismLauncher/PrismLauncher/pull/3315)
- Add search and support for subdirectories to icon picker by [@QazCetelic](https://github.com/QazCetelic) in [#2800](https://github.com/PrismLauncher/PrismLauncher/pull/2800)
- Add settings to control the if prism should move the downloaded mods by [@Trial97](https://github.com/Trial97) in [#3228](https://github.com/PrismLauncher/PrismLauncher/pull/3228)
- Add skin preview by [@Trial97](https://github.com/Trial97) in [#3283](https://github.com/PrismLauncher/PrismLauncher/pull/3283)
- Allow creating shortcuts to individual worlds and servers with Quick Play by
  [@Trial97](https://github.com/Trial97),
  [@Scrumplex](https://github.com/Scrumplex) and [@Mick235711](https://github.com/Mick235711) in [#3767](https://github.com/PrismLauncher/PrismLauncher/pull/3767)
- Auto reauthenticate account if expired by [@Trial97](https://github.com/Trial97) in [#1953](https://github.com/PrismLauncher/PrismLauncher/pull/1953)
- Build Linux binaries for ARM64 by [@getchoo](https://github.com/getchoo) in [#3304](https://github.com/PrismLauncher/PrismLauncher/pull/3304)
- Build MinGW binaries for ARM64 by [@getchoo](https://github.com/getchoo) in [#3724](https://github.com/PrismLauncher/PrismLauncher/pull/3724)
- Console colors and log invocation location by [@TheKodeToad](https://github.com/TheKodeToad) and [@Ryex](https://github.com/Ryex) in [#3654](https://github.com/PrismLauncher/PrismLauncher/pull/3654)
- Data pack management by [@TheKodeToad](https://github.com/TheKodeToad) and [@Trial97](https://github.com/Trial97) in [#1905](https://github.com/PrismLauncher/PrismLauncher/pull/1905) and [#3843](https://github.com/PrismLauncher/PrismLauncher/pull/3843)
- Delete associated shortcuts when deleting instance by [@Mick235711](https://github.com/Mick235711) in [#3819](https://github.com/PrismLauncher/PrismLauncher/pull/3819)
- Expand variables in JVM args and add library_dir variable by [@TheKodeToad](https://github.com/TheKodeToad) in [#4427](https://github.com/PrismLauncher/PrismLauncher/pull/4427)
- Harmonizing "Other Log" page with "Minecraft Log" by [@Trial97](https://github.com/Trial97) and [@Mick235711](https://github.com/Mick235711) in [#3638](https://github.com/PrismLauncher/PrismLauncher/pull/3638) and [#3645](https://github.com/PrismLauncher/PrismLauncher/pull/3645)
- Implement find wrapping in LogView by [@TheKodeToad](https://github.com/TheKodeToad) in [#4392](https://github.com/PrismLauncher/PrismLauncher/pull/4392)
- Implement tracking and updates for files other than mods by [@TheKodeToad](https://github.com/TheKodeToad) in [#1588](https://github.com/PrismLauncher/PrismLauncher/pull/1588) and [#4454](https://github.com/PrismLauncher/PrismLauncher/pull/4454)
- Improvements to modlist export by [@HanlieChina](https://github.com/HanlieChina) in [#3512](https://github.com/PrismLauncher/PrismLauncher/pull/3512)
- Improvements to upload logs by [@Trial97](https://github.com/Trial97) in [#1872](https://github.com/PrismLauncher/PrismLauncher/pull/1872)
- Include one-time code in login QR by [@Trial97](https://github.com/Trial97) in [#3257](https://github.com/PrismLauncher/PrismLauncher/pull/3257)
- Make column visibility global by [@TheKodeToad](https://github.com/TheKodeToad) and [@Trial97](https://github.com/Trial97) in [#3748](https://github.com/PrismLauncher/PrismLauncher/pull/3748)
- Parse log4j xml events in logs by [@TheKodeToad](https://github.com/TheKodeToad) and [@Ryex](https://github.com/Ryex) in [#3642](https://github.com/PrismLauncher/PrismLauncher/pull/3642)
- Pass mainclass and gameargs to the main game via system properties by [@isXander](https://github.com/isXander) in [#3692](https://github.com/PrismLauncher/PrismLauncher/pull/3692)
- Rename instance's physical dir when renaming instances by [@Mick235711](https://github.com/Mick235711) in [#3550](https://github.com/PrismLauncher/PrismLauncher/pull/3550)
- Show online players on servers screen by [@iTrooz](https://github.com/iTrooz) and [@TayouVR](https://github.com/TayouVR) in [#3112](https://github.com/PrismLauncher/PrismLauncher/pull/3112) and [#4512](https://github.com/PrismLauncher/PrismLauncher/pull/4512)
- Sign Windows builds again by [@getchoo](https://github.com/getchoo) in [#4348](https://github.com/PrismLauncher/PrismLauncher/pull/4348) and [#4605](https://github.com/PrismLauncher/PrismLauncher/pull/4605)
- Support for CurseForge recommended memory by [@TheKodeToad](https://github.com/TheKodeToad) in [#3711](https://github.com/PrismLauncher/PrismLauncher/pull/3711)
- Support for launching from command line in offline mode by [@michaeltyson](https://github.com/michaeltyson) in [#2331](https://github.com/PrismLauncher/PrismLauncher/pull/2331)
- [Linux] Integrate switcheroo-control for discrete GPU support by [@Jan200101](https://github.com/Jan200101) in [#2875](https://github.com/PrismLauncher/PrismLauncher/pull/2875)
- Add open source filter by [@Trial97](https://github.com/Trial97) in [#3007](https://github.com/PrismLauncher/PrismLauncher/pull/3007)
- Add options to change the cat scaling by [@Trial97](https://github.com/Trial97) in [#3380](https://github.com/PrismLauncher/PrismLauncher/pull/3380)
- Add release_type filer for mod/modpacks by [@Trial97](https://github.com/Trial97) in [#3006](https://github.com/PrismLauncher/PrismLauncher/pull/3006)
- Improve log display by [@Trial97](https://github.com/Trial97) in [#3658](https://github.com/PrismLauncher/PrismLauncher/pull/3658) and [#3667](https://github.com/PrismLauncher/PrismLauncher/pull/3667)
- Add Elytra preview to Skin Manager by [@TheKodeToad](https://github.com/TheKodeToad) and [@Trial97](https://github.com/Trial97) in [#3761](https://github.com/PrismLauncher/PrismLauncher/pull/3761)
- Add setting to control the loaders for mod search by [@TheKodeToad](https://github.com/TheKodeToad) and [@Trial97](https://github.com/Trial97) in [#3659](https://github.com/PrismLauncher/PrismLauncher/pull/3659) and [#3827](https://github.com/PrismLauncher/PrismLauncher/pull/3827)
- Prevent deletion of running instances by [@Trial97](https://github.com/Trial97) in [#3754](https://github.com/PrismLauncher/PrismLauncher/pull/3754)
- Search for pack icon in the actual file by [@Trial97](https://github.com/Trial97) in [#3752](https://github.com/PrismLauncher/PrismLauncher/pull/3752)
- Implement packignore for curseforge/modrinth export by [@Trial97](https://github.com/Trial97) in [#3295](https://github.com/PrismLauncher/PrismLauncher/pull/3295)
- Add a filter for detecting Java paths on AOSC OS by [@OriginCode](https://github.com/OriginCode) in [#2962](https://github.com/PrismLauncher/PrismLauncher/pull/2962)

### Changed

- Add checkboxes to resource downloader by [@TheKodeToad](https://github.com/TheKodeToad) in [#3516](https://github.com/PrismLauncher/PrismLauncher/pull/3516), [#4466](https://github.com/PrismLauncher/PrismLauncher/pull/4466) and [#3820](https://github.com/PrismLauncher/PrismLauncher/pull/3820)
- Allow the user to create a shortcut on the desktop and/or application folder by [@sshcrack](https://github.com/sshcrack) in [#2966](https://github.com/PrismLauncher/PrismLauncher/pull/2966)
- Create a unified dialog to ask user for offline name by [@Octol1ttle](https://github.com/Octol1ttle) in [#4209](https://github.com/PrismLauncher/PrismLauncher/pull/4209)
- Deploy PDBs with Windows MSVC debug builds by [@getchoo](https://github.com/getchoo) in [#3923](https://github.com/PrismLauncher/PrismLauncher/pull/3923)
- Improve no loader dialog by [@Pagwin2](https://github.com/Pagwin2) in [#4374](https://github.com/PrismLauncher/PrismLauncher/pull/4374)
- Improve the message when component metadata fails to download by [@TheKodeToad](https://github.com/TheKodeToad) in [#3884](https://github.com/PrismLauncher/PrismLauncher/pull/3884)
- Lossless image asset compression by [@txtsd](https://github.com/txtsd) and [@Awqre](https://github.com/Awqre) in [#3091](https://github.com/PrismLauncher/PrismLauncher/pull/3091)
- Modernize launcher bundling by [@getchoo](https://github.com/getchoo) in [#3741](https://github.com/PrismLauncher/PrismLauncher/pull/3741)
- More intuitive version changing for modpacks by [@Mick235711](https://github.com/Mick235711) in [#3841](https://github.com/PrismLauncher/PrismLauncher/pull/3841)
- Override Ctrl+C functionality for ReviewMessageBox items by [@dsch7705](https://github.com/dsch7705) in [#4313](https://github.com/PrismLauncher/PrismLauncher/pull/4313)
- Refactor ReviewMessageBox::appendResource by [@dsch7705](https://github.com/dsch7705) in [#4320](https://github.com/PrismLauncher/PrismLauncher/pull/4320)
- Remove reference to deprecated Q_OS_OSX macro by [@Mick235711](https://github.com/Mick235711) in [#3824](https://github.com/PrismLauncher/PrismLauncher/pull/3824)
- Remove unnecessary hardened runtime exceptions on macOS by [@kthchew](https://github.com/kthchew) in [#3150](https://github.com/PrismLauncher/PrismLauncher/pull/3150)
- Replace QuaZip (and other archiving operations) with libarchive by [@getchoo](https://github.com/getchoo) and [@Trial97](https://github.com/Trial97) in [#3959](https://github.com/PrismLauncher/PrismLauncher/pull/3959), [#4487](https://github.com/PrismLauncher/PrismLauncher/pull/4487), [#4486](https://github.com/PrismLauncher/PrismLauncher/pull/4486) and [#4459](https://github.com/PrismLauncher/PrismLauncher/pull/4459)
- Rework the settings user interface by [@TheKodeToad](https://github.com/TheKodeToad) in [#3534](https://github.com/PrismLauncher/PrismLauncher/pull/3534), [#4303](https://github.com/PrismLauncher/PrismLauncher/pull/4303) and [#4033](https://github.com/PrismLauncher/PrismLauncher/pull/4033)
- Shallow search and lazy loading for Other Logs page by [@TheKodeToad](https://github.com/TheKodeToad) in [#3664](https://github.com/PrismLauncher/PrismLauncher/pull/3664)
- Start using patch versioning for launcher by [@Ryex](https://github.com/Ryex) in [#3605](https://github.com/PrismLauncher/PrismLauncher/pull/3605)
- Update Modrinth Client/Server Filters to match Modrinth website & launcher. by [@eff3ry](https://github.com/eff3ry) in [#3332](https://github.com/PrismLauncher/PrismLauncher/pull/3332)
- Use Qt 6.10.1 on Linux and Windows by
  [@DioEgizio](https://github.com/DioEgizio) in [#4599](https://github.com/PrismLauncher/PrismLauncher/pull/4599)
- Update in-tree flatpak to use KDE Platform 6.10 by [@DioEgizio](https://github.com/DioEgizio) in [#4452](https://github.com/PrismLauncher/PrismLauncher/pull/4452)
- Updated App icon for macOS 26 by [@ShadowPaint-SP](https://github.com/ShadowPaint-SP) in [#4160](https://github.com/PrismLauncher/PrismLauncher/pull/4160)
- Use C++20 by [@Trial97](https://github.com/Trial97) in [#3957](https://github.com/PrismLauncher/PrismLauncher/pull/3957)
- Use `go-appimage` to create AppImages by [@getchoo](https://github.com/getchoo) in [#4314](https://github.com/PrismLauncher/PrismLauncher/pull/4314)
- Use `libqrencode` for MSA QR codes by [@getchoo](https://github.com/getchoo) in [#3956](https://github.com/PrismLauncher/PrismLauncher/pull/3956)
- Use `sharun` to bundle AppImage by [@getchoo](https://github.com/getchoo) in [#4515](https://github.com/PrismLauncher/PrismLauncher/pull/4515)
- Use `sharun` to bundle Linux portable builds by [@DioEgizio](https://github.com/DioEgizio) in [#4599](https://github.com/PrismLauncher/PrismLauncher/pull/4599)
- Update to latest version of Sparkle framework by [@DioEgizio](https://github.com/DioEgizio) in [#4325](https://github.com/PrismLauncher/PrismLauncher/pull/4325)
- Propagate Sink error handling by [@Trial97](https://github.com/Trial97) in [#2631](https://github.com/PrismLauncher/PrismLauncher/pull/2631)
- Updated flame mod resolution by [@Trial97](https://github.com/Trial97) in [#1413](https://github.com/PrismLauncher/PrismLauncher/pull/1413)
- Use new Mojang API endpoint for Username->UUID resolution by [@Octol1ttle](https://github.com/Octol1ttle) in [#4012](https://github.com/PrismLauncher/PrismLauncher/pull/4012)
- Improve blocked mods dialog by [@Trial97](https://github.com/Trial97) in [#3378](https://github.com/PrismLauncher/PrismLauncher/pull/3378)
- Disable deprecated Nix PIE flags by [@Scrumplex](https://github.com/Scrumplex) in [#4365](https://github.com/PrismLauncher/PrismLauncher/pull/4365)
- Fix macOS icon generation, use AppID in desktop file template by [@Octol1ttle](https://github.com/Octol1ttle) in [#4164](https://github.com/PrismLauncher/PrismLauncher/pull/4164)

### Fixed

- Add `qtimageformats` to Nix wrapper by [@getchoo](https://github.com/getchoo) in [#4606](https://github.com/PrismLauncher/PrismLauncher/pull/4606)
- Add checkbox for LiteLoader in mod filter by [@Mick235711](https://github.com/Mick235711) in [#3572](https://github.com/PrismLauncher/PrismLauncher/pull/3572)
- Allow `http://localhost` for meta by [@TheKodeToad](https://github.com/TheKodeToad) in [#4477](https://github.com/PrismLauncher/PrismLauncher/pull/4477)
- Apply selected style to NSWindow elements (e.g. title bar) on macOS by [@kthchew](https://github.com/kthchew) in [#3986](https://github.com/PrismLauncher/PrismLauncher/pull/3986)
- Auth abort fixes by [@TheKodeToad](https://github.com/TheKodeToad) in [#3851](https://github.com/PrismLauncher/PrismLauncher/pull/3851)
- Check for mouse button before applying skin rotation by [@dsch7705](https://github.com/dsch7705) in [#4279](https://github.com/PrismLauncher/PrismLauncher/pull/4279)
- Don't always enable optional mods manually downloaded from CurseForge by [@Trial97](https://github.com/Trial97) in [#3864](https://github.com/PrismLauncher/PrismLauncher/pull/3864)
- Don't re-define structs for newer MinGW versions by [@getchoo](https://github.com/getchoo) in [#3756](https://github.com/PrismLauncher/PrismLauncher/pull/3756)
- Ensure correct image format when importing skin files by [@Trial97](https://github.com/Trial97) in [#4053](https://github.com/PrismLauncher/PrismLauncher/pull/4053)
- Fix sdkman search, add asdf search by [@Octol1ttle](https://github.com/Octol1ttle) in [#4163](https://github.com/PrismLauncher/PrismLauncher/pull/4163)
- Fix a crash that could happen installing an ATLauncher modpack by [@Trial97](https://github.com/Trial97) in [#3868](https://github.com/PrismLauncher/PrismLauncher/pull/3868)
- Fix fractional scaling issues on skin preview by [@dsch7705](https://github.com/dsch7705) in [#4310](https://github.com/PrismLauncher/PrismLauncher/pull/4310)
- Fix issues with log level handling by [@TheKodeToad](https://github.com/TheKodeToad) in [#4254](https://github.com/PrismLauncher/PrismLauncher/pull/4254)
- Fix minor annoyances by [@TheKodeToad](https://github.com/TheKodeToad) in [#4086](https://github.com/PrismLauncher/PrismLauncher/pull/4086)
- Fix modpack search abort crash by [@TheKodeToad](https://github.com/TheKodeToad) in [#4327](https://github.com/PrismLauncher/PrismLauncher/pull/4327)
- Fix resourcepack parsing by [@Trial97](https://github.com/Trial97) in [#4084](https://github.com/PrismLauncher/PrismLauncher/pull/4084)
- Fix use after free collecting tasks from ResourceDownloadDialogs by [@Ryex](https://github.com/Ryex) in [#3670](https://github.com/PrismLauncher/PrismLauncher/pull/3670)
- Fixed the maximized option on the newer Minecraft versions by [@Trial97](https://github.com/Trial97) in [#1894](https://github.com/PrismLauncher/PrismLauncher/pull/1894)
- Force disable xrandr if it is unavailable by [@PeakKS](https://github.com/PeakKS) in [#4578](https://github.com/PrismLauncher/PrismLauncher/pull/4578)
- Implement Reverse Z projection matrix for skin model by [@dsch7705](https://github.com/dsch7705) in [#4283](https://github.com/PrismLauncher/PrismLauncher/pull/4283)
- Fix offline launches always failing by [@Octol1ttle](https://github.com/Octol1ttle) in [#4436](https://github.com/PrismLauncher/PrismLauncher/pull/4436)
- Make page sidebar look less disjointed on breeze by [@TheKodeToad](https://github.com/TheKodeToad) in [#4465](https://github.com/PrismLauncher/PrismLauncher/pull/4465)
- Only continue log level if line starts with whitespace by [@TheKodeToad](https://github.com/TheKodeToad) in [#4430](https://github.com/PrismLauncher/PrismLauncher/pull/4430)
- Properly refresh modpack search upon changing filters by [@TheKodeToad](https://github.com/TheKodeToad) in [#4043](https://github.com/PrismLauncher/PrismLauncher/pull/4043)
- Shorten LocalPeer socket names to fix CLI not working if an instance of the launcher is already running by [@kthchew](https://github.com/kthchew) in [#3630](https://github.com/PrismLauncher/PrismLauncher/pull/3630)
- Trim unexpected info from pack.mcmeta by [@dsch7705](https://github.com/dsch7705) in [#4522](https://github.com/PrismLauncher/PrismLauncher/pull/4522)
- Add support for neoforge in atl packs by [@Trial97](https://github.com/Trial97) in [#4383](https://github.com/PrismLauncher/PrismLauncher/pull/4383)
- Change java on modpack update by [@Trial97](https://github.com/Trial97) in [#3379](https://github.com/PrismLauncher/PrismLauncher/pull/3379)
- Ensure that both cape and skin are downloaded via https by [@Trial97](https://github.com/Trial97) in [#4006](https://github.com/PrismLauncher/PrismLauncher/pull/4006)
- Fix FTBA instance loading by [@Bryntet](https://github.com/Bryntet) in [#4347](https://github.com/PrismLauncher/PrismLauncher/pull/4347)
- Fix Pre-release filter by [@Trial97](https://github.com/Trial97) in [#4563](https://github.com/PrismLauncher/PrismLauncher/pull/4563)
- Fix accounts crash by [@Trial97](https://github.com/Trial97) in [#4543](https://github.com/PrismLauncher/PrismLauncher/pull/4543)
- Fix crash when failing to download file by [@Trial97](https://github.com/Trial97) in [#4249](https://github.com/PrismLauncher/PrismLauncher/pull/4249)
- Fix curseforge icon not working on newer versions of Qt on macOS by [@DioEgizio](https://github.com/DioEgizio) in [#4326](https://github.com/PrismLauncher/PrismLauncher/pull/4326)
- Fix duplicate optional mods dialog appearing when updating a modpack by [@Trial97](https://github.com/Trial97) in [#3475](https://github.com/PrismLauncher/PrismLauncher/pull/3475)
- Fix mod update remaining disabled on second open by [@Trial97](https://github.com/Trial97) in [#4573](https://github.com/PrismLauncher/PrismLauncher/pull/4573)
- Fix no cape select by [@Trial97](https://github.com/Trial97) in [#3511](https://github.com/PrismLauncher/PrismLauncher/pull/3511)
- Fix partial java download by [@Trial97](https://github.com/Trial97) in [#4472](https://github.com/PrismLauncher/PrismLauncher/pull/4472)
- Fix typo in APIPage.ui by [@NotAnonymous33](https://github.com/NotAnonymous33) in [#3916](https://github.com/PrismLauncher/PrismLauncher/pull/3916)
- Set Modrinth logo names correctly by [@Octol1ttle](https://github.com/Octol1ttle) in [#4356](https://github.com/PrismLauncher/PrismLauncher/pull/4356)
- Accept skin files with same name by [@Trial97](https://github.com/Trial97) in [#3755](https://github.com/PrismLauncher/PrismLauncher/pull/3755)
- Prevent beginResetModel from being called before endResetModel by [@Trial97](https://github.com/Trial97) in [#3657](https://github.com/PrismLauncher/PrismLauncher/pull/3657)
- Fix a crash when task was canceled and abort signal was fired early by [@Trial97](https://github.com/Trial97) in [#3712](https://github.com/PrismLauncher/PrismLauncher/pull/3712)
- Fix a crash when the instance window is closed before download dialog is open by [@Trial97](https://github.com/Trial97) in [#3614](https://github.com/PrismLauncher/PrismLauncher/pull/3614)
- Escape quotes in shortcut creation arguments by [@Trial97](https://github.com/Trial97) in [#3909](https://github.com/PrismLauncher/PrismLauncher/pull/3909)
- Fix file filtering on modpack export by [@Trial97](https://github.com/Trial97) in [#3710](https://github.com/PrismLauncher/PrismLauncher/pull/3710)
- Fix icon import with dot in name by [@Trial97](https://github.com/Trial97) in [#3919](https://github.com/PrismLauncher/PrismLauncher/pull/3919)
- Load world sizes asynchronously by [@Trial97](https://github.com/Trial97) in [#3651](https://github.com/PrismLauncher/PrismLauncher/pull/3651)
- Fix Modrinth modpacks icon importing by [@Trial97](https://github.com/Trial97) in [#4171](https://github.com/PrismLauncher/PrismLauncher/pull/4171)
- Fix a nullptr access by [@Ryex](https://github.com/Ryex) in [#3690](https://github.com/PrismLauncher/PrismLauncher/pull/3690)
- Prioritize .ftbapp/version.json in FTB App import by [@CodingMarco](https://github.com/CodingMarco) in [#4207](https://github.com/PrismLauncher/PrismLauncher/pull/4207)
- Fix QR code overlapping with text when adding account by [@Trial97](https://github.com/Trial97) in [#3753](https://github.com/PrismLauncher/PrismLauncher/pull/3753)
- Warn before double-click toggling resource while game is running by [@Gingeh](https://github.com/Gingeh) in [#4232](https://github.com/PrismLauncher/PrismLauncher/pull/4232)
- Match disabled mods on uninstall by [@Trial97](https://github.com/Trial97) in [#4544](https://github.com/PrismLauncher/PrismLauncher/pull/4544)
- Preserve original file extension when importing modpack icon by [@Trial97](https://github.com/Trial97) in [#4565](https://github.com/PrismLauncher/PrismLauncher/pull/4565)
- Update FTB import to consider meta folder by [@Trial97](https://github.com/Trial97) in [#4017](https://github.com/PrismLauncher/PrismLauncher/pull/4017)

### Removed

- De-vendor Qt and ECM CMake files by [@getchoo](https://github.com/getchoo) in [#4404](https://github.com/PrismLauncher/PrismLauncher/pull/4404)
- Drop Qt5Compat by [@Trial97](https://github.com/Trial97) in [#4176](https://github.com/PrismLauncher/PrismLauncher/pull/4176)
- Drop ghc_filesystem by [@Trial97](https://github.com/Trial97) in [#3608](https://github.com/PrismLauncher/PrismLauncher/pull/3608)
- Remove icon from PageContainer header by [@TheKodeToad](https://github.com/TheKodeToad) in [#4332](https://github.com/PrismLauncher/PrismLauncher/pull/4332)
- Remove in-tree third party dependencies by [@getchoo](https://github.com/getchoo) in [#4405](https://github.com/PrismLauncher/PrismLauncher/pull/4405)
- Remove macOS Legacy build by [@Trial97](https://github.com/Trial97) in [#3607](https://github.com/PrismLauncher/PrismLauncher/pull/3607) and [#3619](https://github.com/PrismLauncher/PrismLauncher/pull/3619)
- Remove support for Qt 5 by [@Trial97](https://github.com/Trial97) in [#2174](https://github.com/PrismLauncher/PrismLauncher/pull/2174)
- [macOS] Remove support for macOS 11 by [@Trial97](https://github.com/Trial97) in [#3611](https://github.com/PrismLauncher/PrismLauncher/pull/3611)
