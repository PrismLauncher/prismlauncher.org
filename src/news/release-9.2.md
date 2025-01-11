---
title: "Prism Launcher Release 9.2, now available"
description: Don't feed avocados to parrots!
date: 2025-01-11
release_version: "9.2"
minimum_macos_version: 11.0.0
macos_file_extension: zip
macos_signature: QIGpVyZlzgovp9h5MgpxXp2xqkGiQqFl6pG8puNnZIDx1rKx9LYvwA+PH6EApaot9H6hE7c5wQjZG8AkpuxgCA==
tags:
  - release
---

Hello!

This is a minor update that should fix some crashes.

# Changelog

## Changed

- [macOS] Update Sparkle to v2.6.4 by [@kthchew](https://github.com/kthchew) in [#3202](https://github.com/PrismLauncher/PrismLauncher/pull/3202)
- swap search with filter button for modpacks search by [@Trial97](https://github.com/Trial97) in [#3009](https://github.com/PrismLauncher/PrismLauncher/pull/3009)

## Fixed

- Add extra protection against empty download link by [@Trial97](https://github.com/Trial97) in [#2989](https://github.com/PrismLauncher/PrismLauncher/pull/2989)
- Add scrollbar to Settings -> Launcher -> Features by [@TheKodeToad](https://github.com/TheKodeToad) in [#3070](https://github.com/PrismLauncher/PrismLauncher/pull/3070)
- Correct symbolic link destination on the manifest (Mojang) Java download by [@kthchew](https://github.com/kthchew) in [#3214](https://github.com/PrismLauncher/PrismLauncher/pull/3214)
- Fix Java status if auto-download is enabled by [@Trial97](https://github.com/Trial97) in [#2947](https://github.com/PrismLauncher/PrismLauncher/pull/2947)
- Fix MANIFEST.MF parsing by [@Kationor](https://github.com/Kationor) in [#3130](https://github.com/PrismLauncher/PrismLauncher/pull/3130)
- Fix automatically choose mod provider option by [@Trial97](https://github.com/Trial97) in [#3216](https://github.com/PrismLauncher/PrismLauncher/pull/3216)
- Fix crash caused by invalid resource pointer by [@Trial97](https://github.com/Trial97) in [#3098](https://github.com/PrismLauncher/PrismLauncher/pull/3098)
- Fix crash with invalid mrpack format by [@Trial97](https://github.com/Trial97) in [#3181](https://github.com/PrismLauncher/PrismLauncher/pull/3181)
- Fix double deletion of tasks by [@Trial97](https://github.com/Trial97) in [#3019](https://github.com/PrismLauncher/PrismLauncher/pull/3019)
- Fix duplicate edit window appearing by [@Trial97](https://github.com/Trial97) in [#3010](https://github.com/PrismLauncher/PrismLauncher/pull/3010)
- Fix file remaining open after program closure by [@Trial97](https://github.com/Trial97) in [#3096](https://github.com/PrismLauncher/PrismLauncher/pull/3096)
- Fix import skin if path is empty by [@Trial97](https://github.com/Trial97) in [#2954](https://github.com/PrismLauncher/PrismLauncher/pull/2954)
- Fix leak on resource search by [@Trial97](https://github.com/Trial97) in [#3024](https://github.com/PrismLauncher/PrismLauncher/pull/3024)
- Fix removing portable.txt on Linux portable build by [@TheKodeToad](https://github.com/TheKodeToad) in [#2953](https://github.com/PrismLauncher/PrismLauncher/pull/2953)
- Fix system icons on Linux by [@leia-uwu](https://github.com/leia-uwu) in [#3152](https://github.com/PrismLauncher/PrismLauncher/pull/3152) and [#3170](https://github.com/PrismLauncher/PrismLauncher/pull/3170)
- Fix tab order in launcher settings by [@kthchew](https://github.com/kthchew) in [#3199](https://github.com/PrismLauncher/PrismLauncher/pull/3199)
- Fix the update mods for old curseforge mods with no loader information by [@Trial97](https://github.com/Trial97) in [#3043](https://github.com/PrismLauncher/PrismLauncher/pull/3043)
- Skip parsing open QSaveFile temporary files as resources by [@Trial97](https://github.com/Trial97) in [#2958](https://github.com/PrismLauncher/PrismLauncher/pull/2958)
- Translate standard buttons by [@Trial97](https://github.com/Trial97) in [#2837](https://github.com/PrismLauncher/PrismLauncher/pull/2837)
- Use Launcher log level in AutoInstallJava by [@TheKodeToad](https://github.com/TheKodeToad) in [#2982](https://github.com/PrismLauncher/PrismLauncher/pull/2982)
- [macOS] Fix java system detection for Intel Macs by [@Trial97](https://github.com/Trial97) in [#3030](https://github.com/PrismLauncher/PrismLauncher/pull/3030)
- ci: bump linux qt version by [@Ryex](https://github.com/Ryex) in [#3060](https://github.com/PrismLauncher/PrismLauncher/pull/3060)

Full Changelog: <https://github.com/PrismLauncher/PrismLauncher/compare/9.1...9.2>

You can [grab the latest download here](https://prismlauncher.org/download/) for your respective platform.
