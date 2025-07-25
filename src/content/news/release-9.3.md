---
title: "Prism Launcher Release 9.3, now available"
description: "Chicken jockey!"
date: 2025-04-06
slug: "release-9.3"
release_version: "9.3"
minimum_macos_version: 11.0.0
macos_file_extension: zip
macos_signature: ehYILtH34Gxau37zkcwy2E+iPGsZNeyiOY4CYwrXmci10qcPc0c+iJ2MFyMauX4sk58P6txXI4ucQ5XUui82DQ==
tags:
  - release
---

Hey!

<div class="center blog-image">

<video autoplay loop muted src="/img/news/release-9.3/i-am-steve.webm" />

</div>

After taking a break from our work on the upcoming [Prism 𝕏](https://prismlauncher.org/news/prism-premium/) (happy April Fools!), the Prism Launcher team is proud to present the latest release in our 9.x series: **9.3** 🎉

This release primarily improves stability, compatibility, and introduces some quality of life changes. Highlights include many crashes being fixed, better support for themeing, better default themes, and our AppImage now (hopefully) working on many more Linux distributions.

Feel free to grab the latest download [here](https://prismlauncher.org/download) for your respective platform, and until next time! 🌈

# Changelog

You can find a full list of changes here: <https://github.com/PrismLauncher/PrismLauncher/compare/9.2...9.3>.

## Added

- Build Flatpaks for ARM by [@getchoo](https://github.com/getchoo) in [#3319](https://github.com/PrismLauncher/PrismLauncher/pull/3319)
- Build Nix packages for aarch64-linux by [@getchoo](https://github.com/getchoo) in [#3318](https://github.com/PrismLauncher/PrismLauncher/pull/3318)
- Publish on FlakeHub by [@getchoo](https://github.com/getchoo) in [#3359](https://github.com/PrismLauncher/PrismLauncher/pull/3359)
- Recognize riscv64 as a 64-bit platform by [@thonkdifferent](https://github.com/thonkdifferent) in [#3425](https://github.com/PrismLauncher/PrismLauncher/pull/3425)
- Truncate logs for mclo.gs to fit 25k line limit by [@TheKodeToad](https://github.com/TheKodeToad) and [@maskersss](https://github.com/maskersss) in [#2737](https://github.com/PrismLauncher/PrismLauncher/pull/2737)

## Changed

- Added mouse interactions for labels in ProgressDialog by [@Trial97](https://github.com/Trial97) in [#1689](https://github.com/PrismLauncher/PrismLauncher/pull/1689)
- Default to Fusion based Dark/Bright themes on Windows by [@TheKodeToad](https://github.com/TheKodeToad) in [#3452](https://github.com/PrismLauncher/PrismLauncher/pull/3452)
- Use better compile flags for MINGW by [@getchoo](https://github.com/getchoo) in [#3330](https://github.com/PrismLauncher/PrismLauncher/pull/3330)
- propagate load component error by [@Trial97](https://github.com/Trial97) in [#3255](https://github.com/PrismLauncher/PrismLauncher/pull/3255)

## Fixed

- Correctly expand environment variables for pre/post launch and wrapper commands by [@Trial97](https://github.com/Trial97) in [#1555](https://github.com/PrismLauncher/PrismLauncher/pull/1555)
- Fix $INST_JAVA not being set for auto download java by [@sshcrack](https://github.com/sshcrack) in [#3179](https://github.com/PrismLauncher/PrismLauncher/pull/3179)
- Fix crash with invalid quilt mod info by [@Trial97](https://github.com/Trial97) in [#3496](https://github.com/PrismLauncher/PrismLauncher/pull/3496)
- Fix crash with low disk space by [@Trial97](https://github.com/Trial97) in [#3528](https://github.com/PrismLauncher/PrismLauncher/pull/3528)
- Fix updating Curseforge mods with missing mod loader by [@Trial97](https://github.com/Trial97) in [#3294](https://github.com/PrismLauncher/PrismLauncher/pull/3294)
- Fixed when game crashes, it doesn't log any time played by [@rileyrichard](https://github.com/rileyrichard) in [#3392](https://github.com/PrismLauncher/PrismLauncher/pull/3392)
- Map Minecraft snapshots to Modrinth by [@Trial97](https://github.com/Trial97) in [#3260](https://github.com/PrismLauncher/PrismLauncher/pull/3260)
- Show warning when adding new resources with no instances by [@Trial97](https://github.com/Trial97) in [#3373](https://github.com/PrismLauncher/PrismLauncher/pull/3373)
- Update Modrinth API authentication link by [@Trial97](https://github.com/Trial97) in [#3292](https://github.com/PrismLauncher/PrismLauncher/pull/3292)
- Use Ubuntu 22.04 for Linux builds by [@Trial97](https://github.com/Trial97) in [#3299](https://github.com/PrismLauncher/PrismLauncher/pull/3299)
- Use correct colours for all system themes by [@TheKodeToad](https://github.com/TheKodeToad) in [#3530](https://github.com/PrismLauncher/PrismLauncher/pull/3530)
- add libMangoHud_shim.so to mangohub preloadlist by [@Trial97](https://github.com/Trial97) in [#3413](https://github.com/PrismLauncher/PrismLauncher/pull/3413)
- feat: add updater dialogues by [@SticksDev](https://github.com/SticksDev) in [#3454](https://github.com/PrismLauncher/PrismLauncher/pull/3454)
- fix mod load with empty gameversions by [@Trial97](https://github.com/Trial97) in [#3455](https://github.com/PrismLauncher/PrismLauncher/pull/3455)
- fix null mainwindow in case of login on setup by [@Trial97](https://github.com/Trial97) in [#3464](https://github.com/PrismLauncher/PrismLauncher/pull/3464)
- make sure if user changes java path also disable java management by [@Trial97](https://github.com/Trial97) in [#3414](https://github.com/PrismLauncher/PrismLauncher/pull/3414)
