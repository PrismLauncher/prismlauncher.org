---
title: "Prism Launcher Release 9.0, now available"
description: Do it all, everything!
date: 2024-10-20
release_version: "9.0"
minimum_macos_version: 11.0.0
macos_file_extension: zip
macos_signature: sX4NPzf7KNNotmy5AAYL3XuLadYStbDhMhc0qNB3CojlJt9Ye49DrNzXCBQ1zSwS22NGoJkt8vNRnOLuJFwlDg==
tags:
  - release
---

Hello everyone!

It's been a while since the last update. Today is our second birthday and we are happy to celebrate it with you by releasing Prism Launcher 9.0, packed with features we've been working hard on! We hope you'll love playing around with these much-anticipated additions:

- Automatic Java Management – No more manual Java setups! Everything is streamlined and handled for you.
- Automatic Component Version Resolution – Managing component versions just got easier, with automatic updates for things like Fabric mappings.
- Skin Management – A simple and intuitive way to manage your Minecraft skins right in the launcher.
- Updated Login System – Introduced direct login and QR code for a smoother experience.
- More Filters in the Download Mods/Modpacks Dialog – Find your favorite mods/modpack faster with new filtering options.

There's plenty more to explore, so feel free to dive in and check the changelog for the full list of updates!

As always, your feedback is invaluable. Let us know how it goes, and if you'd like to contribute to the project, head over to our GitHub and see how you can get involved.

Until next time!

## Changelog

## Added

- Add "use zink" button by [@DioEgizio](https://github.com/DioEgizio) in [#2137](https://github.com/PrismLauncher/PrismLauncher/pull/2137)
- Add Java downloader by [@TheKodeToad](https://github.com/TheKodeToad), [@timoreo22](https://github.com/timoreo22) and [@Trial97](https://github.com/Trial97) in [#2069](https://github.com/PrismLauncher/PrismLauncher/pull/2069), [#2813](https://github.com/PrismLauncher/PrismLauncher/pull/2813), [#2811](https://github.com/PrismLauncher/PrismLauncher/pull/2811), [#2808](https://github.com/PrismLauncher/PrismLauncher/pull/2808), [#2795](https://github.com/PrismLauncher/PrismLauncher/pull/2795) and [#2755](https://github.com/PrismLauncher/PrismLauncher/pull/2755)
- Add SkipModpackUpdatePrompt setting by [@Kationor](https://github.com/Kationor) in [#2607](https://github.com/PrismLauncher/PrismLauncher/pull/2607)
- Add UserData as another posible path for portable builds by [@Trial97](https://github.com/Trial97) in [#1529](https://github.com/PrismLauncher/PrismLauncher/pull/1529)
- Add a cat opacity option by [@lumiscosity](https://github.com/lumiscosity) in [#1972](https://github.com/PrismLauncher/PrismLauncher/pull/1972)
- Add button to refresh themes and catpacks by [@Trial97](https://github.com/Trial97) and [@theMackabu](https://github.com/theMackabu) in [#1823](https://github.com/PrismLauncher/PrismLauncher/pull/1823)
- Add checksum validator to resource download by [@Trial97](https://github.com/Trial97) in [#2757](https://github.com/PrismLauncher/PrismLauncher/pull/2757)
- Add config for transfer timeout by [@Edgars-Cirulis](https://github.com/Edgars-Cirulis) and [@Trial97](https://github.com/Trial97) in [#2415](https://github.com/PrismLauncher/PrismLauncher/pull/2415) and [#2662](https://github.com/PrismLauncher/PrismLauncher/pull/2662)
- Add filters for modpack search by [@Trial97](https://github.com/Trial97) in [#2887](https://github.com/PrismLauncher/PrismLauncher/pull/2887)
- Add functionality for components in resource pack descriptions. by [@Trial97](https://github.com/Trial97) and [@cullvox](https://github.com/cullvox) in [#1617](https://github.com/PrismLauncher/PrismLauncher/pull/1617)
- Add mod reinstall dialog by [@Trial97](https://github.com/Trial97) in [#1892](https://github.com/PrismLauncher/PrismLauncher/pull/1892)
- Add more filters to the mod download dialog by [@Cartrigger](https://github.com/Cartrigger), [@TheKodeToad](https://github.com/TheKodeToad), [@Trial97](https://github.com/Trial97) and [@TayouVR](https://github.com/TayouVR) in [#1728](https://github.com/PrismLauncher/PrismLauncher/pull/1728) and [#2533](https://github.com/PrismLauncher/PrismLauncher/pull/2533)
- Add random and slideshow modes to Catpacks by [@Trial97](https://github.com/Trial97) in [#1822](https://github.com/PrismLauncher/PrismLauncher/pull/1822)
- Add retry for auth steps on fail by [@Trial97](https://github.com/Trial97) in [#2416](https://github.com/PrismLauncher/PrismLauncher/pull/2416)
- Add setting for quickplay singleplayer by [@Trial97](https://github.com/Trial97) in [#2716](https://github.com/PrismLauncher/PrismLauncher/pull/2716)
- Add size column for resources by [@Trial97](https://github.com/Trial97) in [#1776](https://github.com/PrismLauncher/PrismLauncher/pull/1776)
- Add support for custom Technic client IDs by [@Trial97](https://github.com/Trial97) in [#2806](https://github.com/PrismLauncher/PrismLauncher/pull/2806)
- Add wait profiler by [@Trial97](https://github.com/Trial97) in [#1525](https://github.com/PrismLauncher/PrismLauncher/pull/1525)
- Add warnning when user closes the resource download dialog with selec… by [@Trial97](https://github.com/Trial97) in [#2566](https://github.com/PrismLauncher/PrismLauncher/pull/2566)
- Add webp to validIconExtensions by [@Kurumi78](https://github.com/Kurumi78) in [#2771](https://github.com/PrismLauncher/PrismLauncher/pull/2771)
- Add ~/Library/Java/JavaVirtualMachines/* to java installation detection by [@porterporter](https://github.com/porterporter) in [#2570](https://github.com/PrismLauncher/PrismLauncher/pull/2570)
- Allow themes to modify log colours by [@TheKodeToad](https://github.com/TheKodeToad) in [#2740](https://github.com/PrismLauncher/PrismLauncher/pull/2740)
- Always load Java list on autodetect by [@Trial97](https://github.com/Trial97) in [#2735](https://github.com/PrismLauncher/PrismLauncher/pull/2735)
- Delete instances tmp diectory on startup by [@Trial97](https://github.com/Trial97) in [#2390](https://github.com/PrismLauncher/PrismLauncher/pull/2390)
- Display minecraft version if not mentioned for modrinth/curse packs by [@Trial97](https://github.com/Trial97) in [#2055](https://github.com/PrismLauncher/PrismLauncher/pull/2055)
- Fix JavaUtils to properly autodetect JVM paths on BSDs by [@Izder456](https://github.com/Izder456) in [#2635](https://github.com/PrismLauncher/PrismLauncher/pull/2635)
- Generate updater metadata for mods added/updated using modpack updater/installer by [@Trial97](https://github.com/Trial97) in [#2583](https://github.com/PrismLauncher/PrismLauncher/pull/2583)
- Improve left and right cursor navigation in Instances by [@Edgars-Cirulis](https://github.com/Edgars-Cirulis) in [#2758](https://github.com/PrismLauncher/PrismLauncher/pull/2758)
- Improvements to modlist export by [@Trial97](https://github.com/Trial97) in [#1847](https://github.com/PrismLauncher/PrismLauncher/pull/1847)
- Made updater interval configurable by [@Trial97](https://github.com/Trial97) in [#2054](https://github.com/PrismLauncher/PrismLauncher/pull/2054)
- Make dependency checking more lax by [@Trial97](https://github.com/Trial97) in [#1786](https://github.com/PrismLauncher/PrismLauncher/pull/1786)
- Skin management by [@LaoshuBaby](https://github.com/LaoshuBaby) and [@Trial97](https://github.com/Trial97) in [#1609](https://github.com/PrismLauncher/PrismLauncher/pull/1609), [#2825](https://github.com/PrismLauncher/PrismLauncher/pull/2825), [#2515](https://github.com/PrismLauncher/PrismLauncher/pull/2515) and [#2498](https://github.com/PrismLauncher/PrismLauncher/pull/2498)
- Sort screenshots chronologically in descending order by [@QazCetelic](https://github.com/QazCetelic) in [#2798](https://github.com/PrismLauncher/PrismLauncher/pull/2798)
- [Windows] Search for Javas in Registry `HKEY_CURRENT_USER` by [@Kationor](https://github.com/Kationor) in [#2714](https://github.com/PrismLauncher/PrismLauncher/pull/2714)
- Completly remove metadata on refresh by [@Trial97](https://github.com/Trial97) in [#2520](https://github.com/PrismLauncher/PrismLauncher/pull/2520)
- Control Prism data directory via env variable by [@Trial97](https://github.com/Trial97) in [#2590](https://github.com/PrismLauncher/PrismLauncher/pull/2590)
- Persist hidden state of "ungrouped" instance group by [@Ryex](https://github.com/Ryex) in [#2567](https://github.com/PrismLauncher/PrismLauncher/pull/2567)
- Sync modpack search field by [@Trial97](https://github.com/Trial97) in [#2874](https://github.com/PrismLauncher/PrismLauncher/pull/2874)
- Validate metadata on instance launch  by [@Trial97](https://github.com/Trial97) in [#2528](https://github.com/PrismLauncher/PrismLauncher/pull/2528)

## Changed

- Add vc_redist as a NSIS install section by [@Ryex](https://github.com/Ryex) in [#2865](https://github.com/PrismLauncher/PrismLauncher/pull/2865)
- Always display Minecraft log tab by [@Trial97](https://github.com/Trial97) in [#2838](https://github.com/PrismLauncher/PrismLauncher/pull/2838)
- Display all system themes in widget theme selector by [@TayouVR](https://github.com/TayouVR) in [#2596](https://github.com/PrismLauncher/PrismLauncher/pull/2596)
- Do not display message that no update is available if the check was … by [@Trial97](https://github.com/Trial97) in [#2580](https://github.com/PrismLauncher/PrismLauncher/pull/2580)
- Don't bundle JREs in Flatpak by [@getchoo](https://github.com/getchoo) in [#2933](https://github.com/PrismLauncher/PrismLauncher/pull/2933)
- Improve Microsoft login by [@Trial97](https://github.com/Trial97) in [#2402](https://github.com/PrismLauncher/PrismLauncher/pull/2402) and [#2504](https://github.com/PrismLauncher/PrismLauncher/pull/2504)
- Improve wizard page by [@Trial97](https://github.com/Trial97) in [#2803](https://github.com/PrismLauncher/PrismLauncher/pull/2803), [#2831](https://github.com/PrismLauncher/PrismLauncher/pull/2831) and [#2830](https://github.com/PrismLauncher/PrismLauncher/pull/2830)
- Prevent directories from being removed on instance update by [@TheKodeToad](https://github.com/TheKodeToad) in [#2906](https://github.com/PrismLauncher/PrismLauncher/pull/2906)
- Refactor hash task by [@Trial97](https://github.com/Trial97) in [#2536](https://github.com/PrismLauncher/PrismLauncher/pull/2536) and [#2609](https://github.com/PrismLauncher/PrismLauncher/pull/2609)
- Rename object name "userInterfaceTab" from "generalTab" by [@SolidStateDj](https://github.com/SolidStateDj) in [#2311](https://github.com/PrismLauncher/PrismLauncher/pull/2311)
- Use `minecraft` instead of `.minecraft` for better accessibility by [@TheKodeToad](https://github.com/TheKodeToad) in [#2050](https://github.com/PrismLauncher/PrismLauncher/pull/2050)
- [Linux/macOS] Cleanup Nix documentation and flake by [@getchoo](https://github.com/getchoo) in [#2738](https://github.com/PrismLauncher/PrismLauncher/pull/2738)
- Chore: update Qt to 6.7.1 by [@DioEgizio](https://github.com/DioEgizio) in [#2481](https://github.com/PrismLauncher/PrismLauncher/pull/2481)
- Feat: Removed update disabled warning by [@Trial97](https://github.com/Trial97) in [#1526](https://github.com/PrismLauncher/PrismLauncher/pull/1526)
- Feat: refactored Instance ImportTask by [@Trial97](https://github.com/Trial97) in [#1409](https://github.com/PrismLauncher/PrismLauncher/pull/1409) and [#2694](https://github.com/PrismLauncher/PrismLauncher/pull/2694)
- Refactor MinecraftUpdate Task by [@Trial97](https://github.com/Trial97) in [#2633](https://github.com/PrismLauncher/PrismLauncher/pull/2633)
- Refresh account if it should refresh on instance launch by [@Trial97](https://github.com/Trial97) in [#2571](https://github.com/PrismLauncher/PrismLauncher/pull/2571)

## Fixed

- Improve Java checking speed by using startsWith for gentoo paths by [@TheKodeToad](https://github.com/TheKodeToad) in [#2748](https://github.com/PrismLauncher/PrismLauncher/pull/2748)
- Ask user to retry if netjob fails by [@Trial97](https://github.com/Trial97) in [#1365](https://github.com/PrismLauncher/PrismLauncher/pull/1365) and [#2440](https://github.com/PrismLauncher/PrismLauncher/pull/2440)
- Component version resolusion on Minecraft version change by [@Trial97](https://github.com/Trial97) and [@Ryex](https://github.com/Ryex) in [#2547](https://github.com/PrismLauncher/PrismLauncher/pull/2547)
- Ensure that core mods tab is visible on correct versions by [@Trial97](https://github.com/Trial97) in [#2018](https://github.com/PrismLauncher/PrismLauncher/pull/2018)
- Fix a few missing help pages by [@Trial97](https://github.com/Trial97) in [#2650](https://github.com/PrismLauncher/PrismLauncher/pull/2650)
- Fix a few typos by [@benthetechguy](https://github.com/benthetechguy) in [#2660](https://github.com/PrismLauncher/PrismLauncher/pull/2660)
- Fix a typo by [@AtomHare](https://github.com/AtomHare) in [#2217](https://github.com/PrismLauncher/PrismLauncher/pull/2217)
- Fix crash when no resource version is available by [@Trial97](https://github.com/Trial97) in [#2897](https://github.com/PrismLauncher/PrismLauncher/pull/2897)
- Fix dead link to Modrinth authentication docs by [@UnownPlain](https://github.com/UnownPlain) in [#2653](https://github.com/PrismLauncher/PrismLauncher/pull/2653)
- Fix demo mode by [@Trial97](https://github.com/Trial97) in [#1829](https://github.com/PrismLauncher/PrismLauncher/pull/1829)
- Fix inconsistent Ok in instance import by [@Trial97](https://github.com/Trial97) in [#1837](https://github.com/PrismLauncher/PrismLauncher/pull/1837)
- Fix invalid Java path message by [@TheKodeToad](https://github.com/TheKodeToad) in [#2745](https://github.com/PrismLauncher/PrismLauncher/pull/2745)
- Fix missing curseforge logo by [@Trial97](https://github.com/Trial97) in [#2561](https://github.com/PrismLauncher/PrismLauncher/pull/2561)
- Fix modrinth pack update by [@Trial97](https://github.com/Trial97) in [#2304](https://github.com/PrismLauncher/PrismLauncher/pull/2304)
- Fix non-persistent user icon selection in NewInstanceDialog.cpp by [@ajerick](https://github.com/ajerick) in [#2574](https://github.com/PrismLauncher/PrismLauncher/pull/2574)
- Fix playtime recording by [@Trial97](https://github.com/Trial97) in [#1886](https://github.com/PrismLauncher/PrismLauncher/pull/1886)
- Fix sdkman on macos by [@Trial97](https://github.com/Trial97) in [#2572](https://github.com/PrismLauncher/PrismLauncher/pull/2572)
- Fix search term not remaining the same between providers on resource … by [@Trial97](https://github.com/Trial97) in [#2863](https://github.com/PrismLauncher/PrismLauncher/pull/2863)
- Fix shader packs detection by [@Trial97](https://github.com/Trial97) in [#1827](https://github.com/PrismLauncher/PrismLauncher/pull/1827)
- Fix system theme detection by [@TheKodeToad](https://github.com/TheKodeToad) in [#2749](https://github.com/PrismLauncher/PrismLauncher/pull/2749)
- Fix(net/validators): ensure buffers are cleared and reset; by [@Ryex](https://github.com/Ryex) in [#2655](https://github.com/PrismLauncher/PrismLauncher/pull/2655)
- Fix: don't annoy when java tmpdir jvmarg is set & /tmp is noexec by [@turret-dev](https://github.com/turret-dev) in [#2867](https://github.com/PrismLauncher/PrismLauncher/pull/2867)
- Fix: ensure all connections to the ProgressDialogs's Task the dialog made are disconnected by [@Ryex](https://github.com/Ryex) in [#2916](https://github.com/PrismLauncher/PrismLauncher/pull/2916)
- Force clear the resource selection by [@Trial97](https://github.com/Trial97) in [#1977](https://github.com/PrismLauncher/PrismLauncher/pull/1977)
- Keep libGLU in Flatpak by [@arnfaldur](https://github.com/arnfaldur) in [#2890](https://github.com/PrismLauncher/PrismLauncher/pull/2890)
- Prefer stronger hashes from Modrinth by [@Ryex](https://github.com/Ryex) in [#2751](https://github.com/PrismLauncher/PrismLauncher/pull/2751)
- Prevent infinite recursion when mod icon load fails by [@Ryex](https://github.com/Ryex) in [#2907](https://github.com/PrismLauncher/PrismLauncher/pull/2907)
- Remove all the slowdown code from CocurrentTask by [@Trial97](https://github.com/Trial97) in [#2789](https://github.com/PrismLauncher/PrismLauncher/pull/2789)
- Remove dependencies if review mods is rejected by [@Trial97](https://github.com/Trial97) in [#2173](https://github.com/PrismLauncher/PrismLauncher/pull/2173)
- Rename disabled file on mod duplication by [@Trial97](https://github.com/Trial97) in [#1752](https://github.com/PrismLauncher/PrismLauncher/pull/1752)
- Replace http with https on skins by [@Trial97](https://github.com/Trial97) in [#2929](https://github.com/PrismLauncher/PrismLauncher/pull/2929)
- Resolve issue with multiple loaders during mod update by [@Trial97](https://github.com/Trial97) in [#2558](https://github.com/PrismLauncher/PrismLauncher/pull/2558)
- [Linux] Auto-detect Gentoo installed JDKs by [@Richard-Rogalski](https://github.com/Richard-Rogalski) in [#2429](https://github.com/PrismLauncher/PrismLauncher/pull/2429)
- Don't translate file types on file save/open, etc. dialogs by [@TayouVR](https://github.com/TayouVR) in [#2553](https://github.com/PrismLauncher/PrismLauncher/pull/2553)
- Ensure that the shortcut destination exists by [@Trial97](https://github.com/Trial97) in [#2784](https://github.com/PrismLauncher/PrismLauncher/pull/2784)
- Make sure updater take into consideration UserData by [@Trial97](https://github.com/Trial97) in [#2589](https://github.com/PrismLauncher/PrismLauncher/pull/2589)
- Mangohud support: MangoHud::getLibraryString should return absolute path by [@cthbleachbit](https://github.com/cthbleachbit) and [@Trial97](https://github.com/Trial97) in [#2718](https://github.com/PrismLauncher/PrismLauncher/pull/2718) and [#2760](https://github.com/PrismLauncher/PrismLauncher/pull/2760)
- Perf: print api servers asynchronously on instance launch by [@leia-uwu](https://github.com/leia-uwu) in [#2542](https://github.com/PrismLauncher/PrismLauncher/pull/2542)
- Remove client overrides instead of double deleting the normal ones by [@Trial97](https://github.com/Trial97) in [#2908](https://github.com/PrismLauncher/PrismLauncher/pull/2908)
- Replaced currentTextChanged with currentIndexChanged by [@Trial97](https://github.com/Trial97) in [#2729](https://github.com/PrismLauncher/PrismLauncher/pull/2729)
- Trim input from import page by [@Trial97](https://github.com/Trial97) in [#2592](https://github.com/PrismLauncher/PrismLauncher/pull/2592)
- Updated instance copy by [@Trial97](https://github.com/Trial97) in [#1554](https://github.com/PrismLauncher/PrismLauncher/pull/1554)

## Removed

- Remove prebuilt system tarballs on Linux, bundle Qt with Linux portable by [@DioEgizio](https://github.com/DioEgizio) in [#2358](https://github.com/PrismLauncher/PrismLauncher/pull/2358)
- [Linux] Drop unsupported Qt 5 Nix package by [@Scrumplex](https://github.com/Scrumplex) and [@Trial97](https://github.com/Trial97) in [#2361](https://github.com/PrismLauncher/PrismLauncher/pull/2361)
- Remove search button by [@Trial97](https://github.com/Trial97) in [#2450](https://github.com/PrismLauncher/PrismLauncher/pull/2450)

Full Changelog: <https://github.com/PrismLauncher/PrismLauncher/compare/8.4...9.0>

You can [grab the latest download here](https://prismlauncher.org/download/) for your respective platform.
