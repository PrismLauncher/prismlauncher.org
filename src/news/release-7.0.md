---
title: "Prism Launcher Release 7.0, now available"
description: The bee's knees! 
date: 2023-06-08
release_version: "7.0"
minimum_macos_version: 11.0.0
mac_signature: nZkz4u7KJsOrH9kQjSMdyzwGnBa8A9q9Dz9RBkNb0/hcUtKG92N4iog905uxb4hdpk4zAYeEbYbbrVHXsfTgAg==
tags:
  - release
---

Hello!

It has been a while, but we are finally ready to ship version 7.0. This one comes with a lot of new features, although we sadly also have to say goodbye to some features, namely support for Feed-the-Beast modpacks.

Notable features in this release are advanced copy options, a downloader for resource packs, texturepacks and shaderpacks, a new improved progress dialog and support for exporting instances as Modrinth modpacks (.mrpack). This means that modpack authors can finally use Prism Launcher directly for making Modrinth modpacks.
On the other hand we had to remove support for Feed-the-Beast modpacks as requested by the FTB team. Though a FTB App importer might replace this missing feature in a future release. For more information, you can read [our other blog post](../ftb-removal/).
Finally, we want to remind users to be more cautious when downloading mods and modpacks as the [*fractureiser* malware has been discovered](../cf-compromised-alert/). While both Modrinth and CurseForge have checked and removed the infected mods if necessary, stay on guard for external websites and for the possibility of future Minecraft malware.

We are also happy to have two new maintainers on board! [@Ryex](https://github.com/Ryex) and [@TayouVR](https://github.com/TayouVR) will be helping out with the development of the launcher. We hope we can get more releases out the door with more hands helping out. Of course we are always happy to see new contributors, so if you think you might be able to help, head over to our GitHub project and see if you might be able to help out.

Until next time!

## Changelog

### Added

- Add advanced copy options for cloning instances by [@Ryex](https://github.com/Ryex) in [#833](https://github.com/PrismLauncher/PrismLauncher/pull/833) [#1103](https://github.com/PrismLauncher/PrismLauncher/pull/1103) [#1125](https://github.com/PrismLauncher/PrismLauncher/pull/1125)
- Add and improve warnings to destructive actions by [@TheKodeToad](https://github.com/TheKodeToad) in [#618](https://github.com/PrismLauncher/PrismLauncher/pull/618)
- Add button to import component JSONs by [@Scrumplex](https://github.com/Scrumplex) in [#735](https://github.com/PrismLauncher/PrismLauncher/pull/735) [#895](https://github.com/PrismLauncher/PrismLauncher/pull/895)
- Add file manifest for portable installations by [@Ryex](https://github.com/Ryex) in [#1101](https://github.com/PrismLauncher/PrismLauncher/pull/1101)
- Add mrpack export by [@TheKodeToad](https://github.com/TheKodeToad) in [#904](https://github.com/PrismLauncher/PrismLauncher/pull/904) [#1109](https://github.com/PrismLauncher/PrismLauncher/pull/1109)
- Add NilLoader mod metadata support by [@kumquat-ir](https://github.com/kumquat-ir) in [#853](https://github.com/PrismLauncher/PrismLauncher/pull/853)
- Add provider column to the mods page by [@leo78913](https://github.com/leo78913) and [@flowln](https://github.com/flowln) in [#626](https://github.com/PrismLauncher/PrismLauncher/pull/626)
- Add resource pack, texture pack and shader pack downloaders by [@flowln](https://github.com/flowln) and [@Scrumplex](https://github.com/Scrumplex) in [#788](https://github.com/PrismLauncher/PrismLauncher/pull/788)
- Add setting for downloads directory by [@Janrupf](https://github.com/Janrupf) and [@Scrumplex](https://github.com/Scrumplex) in [#931](https://github.com/PrismLauncher/PrismLauncher/pull/931)
- Add Teawie as an alternative cat (rat?) by [@getchoo](https://github.com/getchoo) in [#715](https://github.com/PrismLauncher/PrismLauncher/pull/715)
- Add theme selection to setup wizard by [@TayouVR](https://github.com/TayouVR) and [@Scrumplex](https://github.com/Scrumplex) in [#249](https://github.com/PrismLauncher/PrismLauncher/pull/249)
- Allow custom Modrinth API token by [@TheKodeToad](https://github.com/TheKodeToad) in [#896](https://github.com/PrismLauncher/PrismLauncher/pull/896)
- Allow importing instance resources by [@Ryex](https://github.com/Ryex) in [#696](https://github.com/PrismLauncher/PrismLauncher/pull/696)
- Allow selecting a default account to use with an instance by [@byteduck](https://github.com/byteduck) and [@leo78913](https://github.com/leo78913) in [#685](https://github.com/PrismLauncher/PrismLauncher/pull/685) [#1073](https://github.com/PrismLauncher/PrismLauncher/pull/1073)
- Display last launch date in instance description by [@japa4551](https://github.com/japa4551) in [#1025](https://github.com/PrismLauncher/PrismLauncher/pull/1025)
- [Windows] Add code signing by [@Scrumplex](https://github.com/Scrumplex) in [#865](https://github.com/PrismLauncher/PrismLauncher/pull/865)

### Changed

- Divide Minecraft settings page into tabs by [@DioEgizio](https://github.com/DioEgizio) in [#950](https://github.com/PrismLauncher/PrismLauncher/pull/950)
- Generalize Mod models / pages and APIs to Resources by [@flowln](https://github.com/flowln) in [#675](https://github.com/PrismLauncher/PrismLauncher/pull/675)
- Improve detection of blocked mods by [@Ryex](https://github.com/Ryex) in [#946](https://github.com/PrismLauncher/PrismLauncher/pull/946) [#1054](https://github.com/PrismLauncher/PrismLauncher/pull/1054)
- Improve resource type detection by [@Ryex](https://github.com/Ryex) in [#576](https://github.com/PrismLauncher/PrismLauncher/pull/576)
- Improve tasks and progress dialog by [@Ryex](https://github.com/Ryex) in [#961](https://github.com/PrismLauncher/PrismLauncher/pull/961)
- Improve version parsing by [@Edgars-Cirulis](https://github.com/Edgars-Cirulis), [@Ryex](https://github.com/Ryex) and [@flowln](https://github.com/flowln) in [#751](https://github.com/PrismLauncher/PrismLauncher/pull/751)
- Port the MainWindow ui to a .ui file by [@leo78913](https://github.com/leo78913) in [#724](https://github.com/PrismLauncher/PrismLauncher/pull/724)
- Refactor `shared_qobject_ptr` usage by [@flowln](https://github.com/flowln) in [#787](https://github.com/PrismLauncher/PrismLauncher/pull/787)
- Switch to Qt 6 by default by [@Scrumplex](https://github.com/Scrumplex) in [#918](https://github.com/PrismLauncher/PrismLauncher/pull/918)
- Trash instance icons instead of deleting by [@leo78913](https://github.com/leo78913) in [#561](https://github.com/PrismLauncher/PrismLauncher/pull/561)
- Update resource and data pack versions by [@leo78913](https://github.com/leo78913) in [#1117](https://github.com/PrismLauncher/PrismLauncher/pull/1117)
- Update social links by [@Scrumplex](https://github.com/Scrumplex) in [#1080](https://github.com/PrismLauncher/PrismLauncher/pull/1080)
- [Linux] Improve Nix tooling by [@Scrumplex](https://github.com/Scrumplex) and [@getchoo](https://github.com/getchoo) in [#888](https://github.com/PrismLauncher/PrismLauncher/pull/888) [#966](https://github.com/PrismLauncher/PrismLauncher/pull/966) [#968](https://github.com/PrismLauncher/PrismLauncher/pull/968) [#1093](https://github.com/PrismLauncher/PrismLauncher/pull/1093)
- [macOS] Bump minimum macOS version to 11 by [@DioEgizio](https://github.com/DioEgizio) in [#1133](https://github.com/PrismLauncher/PrismLauncher/pull/1133)
- [macOS,Windows] Update to Qt 6.5.x by [@DioEgizio](https://github.com/DioEgizio) in [#937](https://github.com/PrismLauncher/PrismLauncher/pull/937) [#972](https://github.com/PrismLauncher/PrismLauncher/pull/972) [#983](https://github.com/PrismLauncher/PrismLauncher/pull/983) [#1088](https://github.com/PrismLauncher/PrismLauncher/pull/1088) [#1131](https://github.com/PrismLauncher/PrismLauncher/pull/1131)
- [Windows] Improve MinGW ccache by [@TheLastRar](https://github.com/TheLastRar) in [#803](https://github.com/PrismLauncher/PrismLauncher/pull/803)
- [Windows] Uninstall before installing when using setup by [@Ryex](https://github.com/Ryex) in [#1100](https://github.com/PrismLauncher/PrismLauncher/pull/1100)

### Fixed

- Add Visual Studio files to gitignore by [@heftymouse](https://github.com/heftymouse) in [#934](https://github.com/PrismLauncher/PrismLauncher/pull/934)
- Bump ghc-filesystem by [@Scrumplex](https://github.com/Scrumplex) in [#912](https://github.com/PrismLauncher/PrismLauncher/pull/912)
- Do not apply system theme on launch by [@Scrumplex](https://github.com/Scrumplex) in [#982](https://github.com/PrismLauncher/PrismLauncher/pull/982)
- Fix compiler warnings by [@Trial97](https://github.com/Trial97) in [#1111](https://github.com/PrismLauncher/PrismLauncher/pull/1111)
- Fix crash when selecting resource/texture/shader packs by [@leo78913](https://github.com/leo78913) in [#1115](https://github.com/PrismLauncher/PrismLauncher/pull/1115)
- Fix crash when selecting same mod from different providers by [@Trial97](https://github.com/Trial97) in [#1029](https://github.com/PrismLauncher/PrismLauncher/pull/1029)
- Fix failing zip extractions by [@flowln](https://github.com/flowln) in [#889](https://github.com/PrismLauncher/PrismLauncher/pull/889)
- Fix memory leaks by [@Ryex](https://github.com/Ryex) in [#1083](https://github.com/PrismLauncher/PrismLauncher/pull/1083) [#1108](https://github.com/PrismLauncher/PrismLauncher/pull/1108)
- Fix some regressions in the main window by [@leo78913](https://github.com/leo78913) in [#795](https://github.com/PrismLauncher/PrismLauncher/pull/795)
- Fix storing custom meta server URL by [@TayouVR](https://github.com/TayouVR) in [#1114](https://github.com/PrismLauncher/PrismLauncher/pull/1114)
- Fix windows default apps by [@Ryex](https://github.com/Ryex) in [#857](https://github.com/PrismLauncher/PrismLauncher/pull/857)
- Fix Qt event plumbing and networking by [@Ryex](https://github.com/Ryex) in [#1007](https://github.com/PrismLauncher/PrismLauncher/pull/1007)
- Handle partial lines in LoggedProcess by [@Scrumplex](https://github.com/Scrumplex) in [#945](https://github.com/PrismLauncher/PrismLauncher/pull/945)
- Make the logger thread-safe by [@KosmX](https://github.com/KosmX) in [#802](https://github.com/PrismLauncher/PrismLauncher/pull/802)
- Replace hoedown markdown parser with CMark by [@redstrate](https://github.com/redstrate), [@Scrumplex](https://github.com/Scrumplex) and [@DioEgizio](https://github.com/DioEgizio) in [#714](https://github.com/PrismLauncher/PrismLauncher/pull/714) [#783](https://github.com/PrismLauncher/PrismLauncher/pull/783)
- Replace potentially ReDOSable regex by [@pandaninjas](https://github.com/pandaninjas) in [#834](https://github.com/PrismLauncher/PrismLauncher/pull/834)
- Update cat immediately by [@TayouVR](https://github.com/TayouVR) in [#766](https://github.com/PrismLauncher/PrismLauncher/pull/766)
- Use native path separators for environment variables by [@Ryex](https://github.com/Ryex) in [#825](https://github.com/PrismLauncher/PrismLauncher/pull/825)
- [Linux] Fix build failure on KISS Linux by [@Ryex](https://github.com/Ryex) in [#859](https://github.com/PrismLauncher/PrismLauncher/pull/859)
- [Linux] Fix Java installation detection by [@BalkanMadman](https://github.com/BalkanMadman) in [#823](https://github.com/PrismLauncher/PrismLauncher/pull/823)
- [Linux] Fix MangoHud detection by [@getchoo](https://github.com/getchoo) in [#965](https://github.com/PrismLauncher/PrismLauncher/pull/965)
- [Linux] Fix portable launch script shebang by [@Scrumplex](https://github.com/Scrumplex) in [#819](https://github.com/PrismLauncher/PrismLauncher/pull/819)
- [Windows] Fix build failure on MinGW by [@kthchew](https://github.com/kthchew) in [#927](https://github.com/PrismLauncher/PrismLauncher/pull/927)
- [Windows] Fix Qt 6.5 system theme colors by [@TayouVR](https://github.com/TayouVR) in [#1086](https://github.com/PrismLauncher/PrismLauncher/pull/1086)
- [Windows] Fix zip extraction by [@flowln](https://github.com/flowln) in [#911](https://github.com/PrismLauncher/PrismLauncher/pull/911)

### Removed

- Remove FTB modpack support by [@Scrumplex](https://github.com/Scrumplex) in [#1040](https://github.com/PrismLauncher/PrismLauncher/pull/1040)
- Remove old updater code by [@Scrumplex](https://github.com/Scrumplex) in [#458](https://github.com/PrismLauncher/PrismLauncher/pull/458)
- [Linux] Drop Snap packaging by [@Scrumplex](https://github.com/Scrumplex) in [#929](https://github.com/PrismLauncher/PrismLauncher/pull/929)
- [Linux] Remove references to other launchers from desktop file by [@kerichdev](https://github.com/kerichdev) in [#1034](https://github.com/PrismLauncher/PrismLauncher/pull/1034)

Full Changelog: <https://github.com/PrismLauncher/PrismLauncher/compare/6.3...7.0>

You can [grab the latest download here](https://prismlauncher.org/download/) for your respective platform.
