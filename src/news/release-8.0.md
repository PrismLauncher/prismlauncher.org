---
title: "Prism Launcher Release 8.0, now available"
description: Boats FTW
date: 2023-11-07
release_version: "8.0"
minimum_macos_version: 11.0.0
macos_file_extension: tar.gz
macos_signature: RXJXEogVYgN9qjLfuIBtHKT+ehzn7JcV/XxLyGaLUMAnbmtCwkZEFmjI5nW9lZaGKQt6lkO4av/wAKIR6nGMDA==
tags:
  - release
---

Hello there!

The last feature update was quite a while ago, so we hope we can make up for it by delivering some highly requested features!
Some highlights include: an updater for Windows and Linux, CurseForge export, FTB App import, mod dependency resolution and NeoForge support.
Though there is a lot more, so feel free to check the changelog below.
This is probably the most feature-packed update so far, so there might be some rough edges that we hope to iron out over the next few updates.
At least those future updates should now be easier than ever to install!

We are also happy to announce that @getchoo @TheKodeToad and @Trial97 have joined Prism Launcher as maintainers.
As you are able to see in the changelog below, they all have been doing a lot of work improving Prism Launcher!
Of course we are always happy to see new contributors, so if you think you might be able to help, head over to our GitHub project and see if you might be able to help out.

Until next time!

## Changelog

### Added

- Acknowledge version release types from mod platforms by [@Trial97](https://github.com/Trial97) and [@Ryex](https://github.com/Ryex) in [#1090](https://github.com/PrismLauncher/PrismLauncher/pull/1090) and [#1676](https://github.com/PrismLauncher/PrismLauncher/pull/1676)
- Add CurseForge modpack export by [@TheKodeToad](https://github.com/TheKodeToad) and [@Trial97](https://github.com/Trial97) in [#1249](https://github.com/PrismLauncher/PrismLauncher/pull/1249)
- Add FTB App import by [@Trial97](https://github.com/Trial97) in [#1359](https://github.com/PrismLauncher/PrismLauncher/pull/1359)
- Add NeoForge support by [@Scrumplex](https://github.com/Scrumplex) and [@Trial97](https://github.com/Trial97) in [#1498](https://github.com/PrismLauncher/PrismLauncher/pull/1498) and [#1541](https://github.com/PrismLauncher/PrismLauncher/pull/1541)
- Add a search bar to version lists by [@TheKodeToad](https://github.com/TheKodeToad) in [#1110](https://github.com/PrismLauncher/PrismLauncher/pull/1110)
- Add button to remove mod metadata by [@Trial97](https://github.com/Trial97) in [#1530](https://github.com/PrismLauncher/PrismLauncher/pull/1530)
- Add customizable background cats using cat packs by [@Trial97](https://github.com/Trial97) in [#1253](https://github.com/PrismLauncher/PrismLauncher/pull/1253) and [#1572](https://github.com/PrismLauncher/PrismLauncher/pull/1572)
- Add exporting mod lists to text files by [@Trial97](https://github.com/Trial97) in [#1246](https://github.com/PrismLauncher/PrismLauncher/pull/1246) and [#1783](https://github.com/PrismLauncher/PrismLauncher/pull/1783)
- Add image column to resource pages by [@Ryex](https://github.com/Ryex) in [#1058](https://github.com/PrismLauncher/PrismLauncher/pull/1058)
- Add link to mods' websites by [@TheKodeToad](https://github.com/TheKodeToad) and [@Trial97](https://github.com/Trial97) in [#1120](https://github.com/PrismLauncher/PrismLauncher/pull/1120) and [#1332](https://github.com/PrismLauncher/PrismLauncher/pull/1332)
- Add mod count to mods page by [@Trial97](https://github.com/Trial97) in [#1119](https://github.com/PrismLauncher/PrismLauncher/pull/1119) and [#1272](https://github.com/PrismLauncher/PrismLauncher/pull/1272)
- Add optional fixes for loading skins in legacy versions by [@TheKodeToad](https://github.com/TheKodeToad) in [#443](https://github.com/PrismLauncher/PrismLauncher/pull/443)
- Add warning when removing an account by [@Trial97](https://github.com/Trial97) in [#1782](https://github.com/PrismLauncher/PrismLauncher/pull/1782)
- Added Global Dependenicies toggle by [@TheKodeToad](https://github.com/TheKodeToad) and [@Trial97](https://github.com/Trial97) in [#1796](https://github.com/PrismLauncher/PrismLauncher/pull/1796)
- Added welcome screen by [@Trial97](https://github.com/Trial97) in [#1374](https://github.com/PrismLauncher/PrismLauncher/pull/1374)
- Allow configuring amount of concurrent tasks by [@Trial97](https://github.com/Trial97) in [#1363](https://github.com/PrismLauncher/PrismLauncher/pull/1363)
- Allow showing playtime in hours by [@Trial97](https://github.com/Trial97) in [#1536](https://github.com/PrismLauncher/PrismLauncher/pull/1536)
- Allow updating managed packs from local file by [@Trial97](https://github.com/Trial97) in [#1405](https://github.com/PrismLauncher/PrismLauncher/pull/1405)
- Autodetect Java bundled with official launcher by [@Trial97](https://github.com/Trial97) in [#1685](https://github.com/PrismLauncher/PrismLauncher/pull/1685)
- Automatically download mod dependencies by [@TheKodeToad](https://github.com/TheKodeToad) and [@Trial97](https://github.com/Trial97) in [#986](https://github.com/PrismLauncher/PrismLauncher/pull/986) and [#1270](https://github.com/PrismLauncher/PrismLauncher/pull/1270)
- CurseForge URL handling by [@Scrumplex](https://github.com/Scrumplex), [@Trial97](https://github.com/Trial97), [@Ryex](https://github.com/Ryex), [@kumquat-ir](https://github.com/kumquat-ir) and [@timoreo22](https://github.com/timoreo22) in [#981](https://github.com/PrismLauncher/PrismLauncher/pull/981), [#1592](https://github.com/PrismLauncher/PrismLauncher/pull/1592), [#1557](https://github.com/PrismLauncher/PrismLauncher/pull/1557) and [#1532](https://github.com/PrismLauncher/PrismLauncher/pull/1532)
- Custom environment variables by [@TheKodeToad](https://github.com/TheKodeToad) and [@Trial97](https://github.com/Trial97) in [#1355](https://github.com/PrismLauncher/PrismLauncher/pull/1355)
- Implement installing shaders from CurseForge by [@TheKodeToad](https://github.com/TheKodeToad) in [#1605](https://github.com/PrismLauncher/PrismLauncher/pull/1605)
- Implement updater for Windows and Linux by [@Trial97](https://github.com/Trial97), [@TheKodeToad](https://github.com/TheKodeToad), [@flowln](https://github.com/flowln) and [@Ryex](https://github.com/Ryex) in [#1268](https://github.com/PrismLauncher/PrismLauncher/pull/1268) and [#1721](https://github.com/PrismLauncher/PrismLauncher/pull/1721)
- More system properties by [@Scrumplex](https://github.com/Scrumplex) and [@TheKodeToad](https://github.com/TheKodeToad) in [#1515](https://github.com/PrismLauncher/PrismLauncher/pull/1515)
- Prevent custom commands from using colored output by [@Trial97](https://github.com/Trial97) in [#1691](https://github.com/PrismLauncher/PrismLauncher/pull/1691)
- Renaming instance groups by [@TheKodeToad](https://github.com/TheKodeToad) in [#1383](https://github.com/PrismLauncher/PrismLauncher/pull/1383)
- Resolve dependencies when updating mods by [@Trial97](https://github.com/Trial97) in [#1263](https://github.com/PrismLauncher/PrismLauncher/pull/1263) and [#1678](https://github.com/PrismLauncher/PrismLauncher/pull/1678)
- Show progress bar when exporting instances by [@Trial97](https://github.com/Trial97) in [#1378](https://github.com/PrismLauncher/PrismLauncher/pull/1378)
- [Linux] Add more Java installation directories by [@nea89o](https://github.com/nea89o) in [#1682](https://github.com/PrismLauncher/PrismLauncher/pull/1682)
- [Linux] Add support for Snap packaging by [@ashuntu](https://github.com/ashuntu) in [#1294](https://github.com/PrismLauncher/PrismLauncher/pull/1294)
- [Linux] Filter source in Nix Flake & add controller support by [@getchoo](https://github.com/getchoo) in [#1618](https://github.com/PrismLauncher/PrismLauncher/pull/1618)
- [macOS] Add macOS support to Nix by [@getchoo](https://github.com/getchoo) in [#1485](https://github.com/PrismLauncher/PrismLauncher/pull/1485)

### Changed

- Add suport for ATLauncher browser download by [@Trial97](https://github.com/Trial97) in [#1549](https://github.com/PrismLauncher/PrismLauncher/pull/1549)
- Add support for multiple custom icon themes and improve UX around themes by [@Scrumplex](https://github.com/Scrumplex), [@TheKodeToad](https://github.com/TheKodeToad) and [@TayouVR](https://github.com/TayouVR) in [#1407](https://github.com/PrismLauncher/PrismLauncher/pull/1407)
- Add support for multiple mod loader filters for CurseForge by [@Trial97](https://github.com/Trial97) in [#1560](https://github.com/PrismLauncher/PrismLauncher/pull/1560)
- Added version check for neoforge filter by [@Trial97](https://github.com/Trial97) in [#1658](https://github.com/PrismLauncher/PrismLauncher/pull/1658)
- Allow disabling bundling and Sparkle updater when building by [@getchoo](https://github.com/getchoo) and [@Scrumplex](https://github.com/Scrumplex) in [#1452](https://github.com/PrismLauncher/PrismLauncher/pull/1452)
- Allow editing of running instances by [@Trial97](https://github.com/Trial97) in [#1241](https://github.com/PrismLauncher/PrismLauncher/pull/1241) and [#1338](https://github.com/PrismLauncher/PrismLauncher/pull/1338)
- Better instance shortcuts on macOS by [@iivusly](https://github.com/iivusly) in [#1081](https://github.com/PrismLauncher/PrismLauncher/pull/1081)
- Bump Qt to Qt 6.6.0 by [@DioEgizio](https://github.com/DioEgizio) and [@TayouVR](https://github.com/TayouVR) in [#1717](https://github.com/PrismLauncher/PrismLauncher/pull/1717)
- Combine launch buttons in instance window, persist profiler by [@Scrumplex](https://github.com/Scrumplex) and [@TheKodeToad](https://github.com/TheKodeToad) in [#1320](https://github.com/PrismLauncher/PrismLauncher/pull/1320)
- Don't enable address sanitizer in debug builds by default by [@Scrumplex](https://github.com/Scrumplex) and [@Trial97](https://github.com/Trial97) in [#1517](https://github.com/PrismLauncher/PrismLauncher/pull/1517) and [#1518](https://github.com/PrismLauncher/PrismLauncher/pull/1518)
- Don't instantiate nixpkgs in Flake by [@getchoo](https://github.com/getchoo) and [@Scrumplex](https://github.com/Scrumplex) in [#1574](https://github.com/PrismLauncher/PrismLauncher/pull/1574)
- Don't update Java minimum memory based on maximum memory allocation by [@Trial97](https://github.com/Trial97) in [#1552](https://github.com/PrismLauncher/PrismLauncher/pull/1552)
- Fix links and add images to modpack changelogs by [@Trial97](https://github.com/Trial97) in [#1370](https://github.com/PrismLauncher/PrismLauncher/pull/1370)
- Generate predictable UUIDs for offline accounts by [@Scrumplex](https://github.com/Scrumplex) in [#1399](https://github.com/PrismLauncher/PrismLauncher/pull/1399)
- Implement GLFW/OpenAL override by defining and auto-detecting paths to library files by [@Scrumplex](https://github.com/Scrumplex) in [#1392](https://github.com/PrismLauncher/PrismLauncher/pull/1392)
- Improve design of instance group header by [@TayouVR](https://github.com/TayouVR) in [#1286](https://github.com/PrismLauncher/PrismLauncher/pull/1286)
- Improvements and refinements to pack export by [@TheKodeToad](https://github.com/TheKodeToad) in [#1519](https://github.com/PrismLauncher/PrismLauncher/pull/1519)
- Improvements to modpack UX by [@Trial97](https://github.com/Trial97) in [#1539](https://github.com/PrismLauncher/PrismLauncher/pull/1539)
- Introduce more strict compiler warnings and fix them by [@getchoo](https://github.com/getchoo), [@Scrumplex](https://github.com/Scrumplex), [@Trial97](https://github.com/Trial97) and [@Ryex](https://github.com/Ryex) in [#1107](https://github.com/PrismLauncher/PrismLauncher/pull/1107), [#1581](https://github.com/PrismLauncher/PrismLauncher/pull/1581) and [#1537](https://github.com/PrismLauncher/PrismLauncher/pull/1537)
- Refactor mod metadata write by [@Trial97](https://github.com/Trial97) in [#1543](https://github.com/PrismLauncher/PrismLauncher/pull/1543)
- Reformat codebase by [@TheKodeToad](https://github.com/TheKodeToad) and [@Scrumplex](https://github.com/Scrumplex) in [#1459](https://github.com/PrismLauncher/PrismLauncher/pull/1459)
- Replace `typedef` with `using` by [@LocalSpook](https://github.com/LocalSpook) in [#1748](https://github.com/PrismLauncher/PrismLauncher/pull/1748)
- Resolve Forge versions for CurseForge modpacks using meta by [@Trial97](https://github.com/Trial97) in [#1402](https://github.com/PrismLauncher/PrismLauncher/pull/1402)
- Revamp loader installation UI by [@Scrumplex](https://github.com/Scrumplex) and [@TheKodeToad](https://github.com/TheKodeToad) in [#1230](https://github.com/PrismLauncher/PrismLauncher/pull/1230)
- Simplify flame and modrinth exports by [@Trial97](https://github.com/Trial97) in [#1391](https://github.com/PrismLauncher/PrismLauncher/pull/1391)
- Skip folders when updating mods by [@bolli24](https://github.com/bolli24) in [#1643](https://github.com/PrismLauncher/PrismLauncher/pull/1643)
- Various UI tweaks by [@Scrumplex](https://github.com/Scrumplex) and [@leia-uwu](https://github.com/leia-uwu) in [#1324](https://github.com/PrismLauncher/PrismLauncher/pull/1324) and [#1535](https://github.com/PrismLauncher/PrismLauncher/pull/1535)
- [Linux] Switch to garnix for Nix builds by [@getchoo](https://github.com/getchoo) and [@Scrumplex](https://github.com/Scrumplex) in [#1434](https://github.com/PrismLauncher/PrismLauncher/pull/1434), [#1467](https://github.com/PrismLauncher/PrismLauncher/pull/1467) and [#1446](https://github.com/PrismLauncher/PrismLauncher/pull/1446)
- [Linux] Use addOpenGLRunpath.driverLink in Nix wrapper by [@getchoo](https://github.com/getchoo) in [#1666](https://github.com/PrismLauncher/PrismLauncher/pull/1666)
- [macOS,Windows] Update to Qt 6.5.2 by [@DioEgizio](https://github.com/DioEgizio) in [#1483](https://github.com/PrismLauncher/PrismLauncher/pull/1483)

### Fixed

- Add some missing strings to translations by [@tjw123hh](https://github.com/tjw123hh) and [@TheKodeToad](https://github.com/TheKodeToad) in [#1427](https://github.com/PrismLauncher/PrismLauncher/pull/1427)
- Allow loading themes with missing resources folder by [@Scrumplex](https://github.com/Scrumplex) in [#1722](https://github.com/PrismLauncher/PrismLauncher/pull/1722)
- Don't display invalid shaders by [@Trial97](https://github.com/Trial97) in [#1657](https://github.com/PrismLauncher/PrismLauncher/pull/1657)
- Don't omit empty lines in log output by [@comp500](https://github.com/comp500) in [#1508](https://github.com/PrismLauncher/PrismLauncher/pull/1508)
- Don't reset meta URL on launch by [@Scrumplex](https://github.com/Scrumplex) in [#1476](https://github.com/PrismLauncher/PrismLauncher/pull/1476)
- Don't update mods if no mod loader is installed by [@Trial97](https://github.com/Trial97) in [#1670](https://github.com/PrismLauncher/PrismLauncher/pull/1670)
- Enable antialiasing for mod and pack icons by [@TheKodeToad](https://github.com/TheKodeToad) in [#1578](https://github.com/PrismLauncher/PrismLauncher/pull/1578)
- Fix crash when hiding columns on resource packs page by [@leia-uwu](https://github.com/leia-uwu) in [#1258](https://github.com/PrismLauncher/PrismLauncher/pull/1258)
- Fix crash when installing some ATLauncher packs by [@Trial97](https://github.com/Trial97) in [#1523](https://github.com/PrismLauncher/PrismLauncher/pull/1523)
- Fix crash with mod icon caching by [@Trial97](https://github.com/Trial97) in [#1772](https://github.com/PrismLauncher/PrismLauncher/pull/1772)
- Fix filtering in instance export by [@TheKodeToad](https://github.com/TheKodeToad) in [#1575](https://github.com/PrismLauncher/PrismLauncher/pull/1575)
- Fix importing Quilt/Fabric packs from CurseForge by [@Trial97](https://github.com/Trial97) in [#1512](https://github.com/PrismLauncher/PrismLauncher/pull/1512)
- Fix Java memory bein unset on initial setup by [@Trial97](https://github.com/Trial97) in [#1747](https://github.com/PrismLauncher/PrismLauncher/pull/1747)
- Fix parsing of resource packs by [@TayouVR](https://github.com/TayouVR) in [#1742](https://github.com/PrismLauncher/PrismLauncher/pull/1742)
- Fix save location of FTB packs by [@Trial97](https://github.com/Trial97) in [#1591](https://github.com/PrismLauncher/PrismLauncher/pull/1591)
- Fix several issues around instance groups by [@TheKodeToad](https://github.com/TheKodeToad) in [#1766](https://github.com/PrismLauncher/PrismLauncher/pull/1766)
- Fix squished mod icons by [@Trial97](https://github.com/Trial97) in [#1739](https://github.com/PrismLauncher/PrismLauncher/pull/1739)
- Fix task progress being stuck if a task is aborted by [@Trial97](https://github.com/Trial97) in [#1516](https://github.com/PrismLauncher/PrismLauncher/pull/1516)
- Fix transparency in skin icon by [@Scrumplex](https://github.com/Scrumplex) and [@lumiscosity](https://github.com/lumiscosity) in [#1513](https://github.com/PrismLauncher/PrismLauncher/pull/1513)
- Fix typo in Task code by [@getchoo](https://github.com/getchoo) in [#1447](https://github.com/PrismLauncher/PrismLauncher/pull/1447)
- Fix various list interactions by [@TheKodeToad](https://github.com/TheKodeToad) in [#1553](https://github.com/PrismLauncher/PrismLauncher/pull/1553)
- Fix wrong account selection by [@Trial97](https://github.com/Trial97) in [#1692](https://github.com/PrismLauncher/PrismLauncher/pull/1692)
- Gracefully handle invalid cache metadata by [@Trial97](https://github.com/Trial97) in [#1556](https://github.com/PrismLauncher/PrismLauncher/pull/1556)
- Ignore cache files by default when exporting instances by [@LostLuma](https://github.com/LostLuma) in [#1437](https://github.com/PrismLauncher/PrismLauncher/pull/1437)
- Localize sorting options for resource and shader packs by [@LocalSpook](https://github.com/LocalSpook) in [#1760](https://github.com/PrismLauncher/PrismLauncher/pull/1760)
- Only build updater when correct conditions are met by [@getchoo](https://github.com/getchoo) in [#1724](https://github.com/PrismLauncher/PrismLauncher/pull/1724)
- Pack import fixes and improvements by [@TheKodeToad](https://github.com/TheKodeToad) and [@Trial97](https://github.com/Trial97) in [#1563](https://github.com/PrismLauncher/PrismLauncher/pull/1563) and [#1737](https://github.com/PrismLauncher/PrismLauncher/pull/1737)
- Preserve file extension of instance icon when importing by [@Trial97](https://github.com/Trial97) in [#1456](https://github.com/PrismLauncher/PrismLauncher/pull/1456)
- Refactor ImgurUpload by [@Trial97](https://github.com/Trial97) in [#1290](https://github.com/PrismLauncher/PrismLauncher/pull/1290)
- Reintroduce parsing of INI files by [@Trial97](https://github.com/Trial97) in [#1449](https://github.com/PrismLauncher/PrismLauncher/pull/1449)
- Replace references to "Minecraft account" by [@dannydorazio](https://github.com/dannydorazio) in [#1551](https://github.com/PrismLauncher/PrismLauncher/pull/1551)
- Reset status label when deleting instance by [@Trial97](https://github.com/Trial97) in [#1548](https://github.com/PrismLauncher/PrismLauncher/pull/1548)
- Update copyright year by [@apix0n](https://github.com/apix0n) in [#1474](https://github.com/PrismLauncher/PrismLauncher/pull/1474)
- Update default account when accounts change by [@Trial97](https://github.com/Trial97) in [#1672](https://github.com/PrismLauncher/PrismLauncher/pull/1672)
- [Linux] Fix build on Arch Linux with Qt 6.6 by [@Trial97](https://github.com/Trial97) in [#1709](https://github.com/PrismLauncher/PrismLauncher/pull/1709)
- [Linux] Fix loading MangoHud by [@Trial97](https://github.com/Trial97) in [#1797](https://github.com/PrismLauncher/PrismLauncher/pull/1797)
- [Windows] Fix attaching logs to console by [@Ryex](https://github.com/Ryex) in [#1464](https://github.com/PrismLauncher/PrismLauncher/pull/1464)
- [Windows] Fix copying folder attributes by [@Trial97](https://github.com/Trial97) in [#1673](https://github.com/PrismLauncher/PrismLauncher/pull/1673)

### Removed

- Drop "DirectJava" launch method by [@TheKodeToad](https://github.com/TheKodeToad) in [#1339](https://github.com/PrismLauncher/PrismLauncher/pull/1339)
- Drop support for Mojang accounts by [@getchoo](https://github.com/getchoo), [@Edgars-Cirulis](https://github.com/Edgars-Cirulis) and [@Trial97](https://github.com/Trial97) in [#1656](https://github.com/PrismLauncher/PrismLauncher/pull/1656) and [#1793](https://github.com/PrismLauncher/PrismLauncher/pull/1793)
- Remove Quilt Beacon toggle by [@Scrumplex](https://github.com/Scrumplex) in [#1547](https://github.com/PrismLauncher/PrismLauncher/pull/1547)
- Remove warning about Quilt being unsupported with CurseForge modpacks by [@Trial97](https://github.com/Trial97) in [#1445](https://github.com/PrismLauncher/PrismLauncher/pull/1445)
- [Windows] Remove Windows 7/8 support from app manifest by [@IThundxr](https://github.com/IThundxr) in [#1758](https://github.com/PrismLauncher/PrismLauncher/pull/1758)

Full Changelog: <https://github.com/PrismLauncher/PrismLauncher/compare/7.2...8.0>

You can [grab the latest download here](https://prismlauncher.org/download/) for your respective platform.
