---
title: "Prism Launcher Release 10.0.1, now available"
description: "Use the .index Shader Pack!"
date: 2026-01-07
slug: "release-10.0.1"
release_version: "10.0.1"
minimum_macos_version: 12.0.0
macos_file_extension: zip
macos_signature: HQwpFzlTaHxmdpl9ubFEtR/G4LnlDrLI/BMtxt8VnEvV+WqLtPJ0pf52I1nyp6s4fZC6HHnniToPPWYy5qF+Dw==
tags:
  - Release
---

Hi again! And this time much sooner :)

This is a small release meant to address some of the initial bugs that were reported in 10.0.0, including a fake `.index` Shader Pack appearing in-game and issues with updating on Linux.

As always, you can [grab the latest download here](/download). Until next time! 🌈

## Changelog

See [here](https://github.com/PrismLauncher/PrismLauncher/compare/10.0.0...10.0.1) for the full list of changes.

## Added

- Use "Game" category on macOS by [@dkaluta](https://github.com/dkaluta) in [#4619](https://github.com/PrismLauncher/PrismLauncher/pull/4619)

## Changed

- Automatically use `vcpkg` to build on macOS and Windows by [@getchoo](https://github.com/getchoo) in [#4670](https://github.com/PrismLauncher/PrismLauncher/pull/4670)
- Hardcode less Prism Launcher branding by [@Octol1ttle](https://github.com/Octol1ttle) in [#4648](https://github.com/PrismLauncher/PrismLauncher/pull/4648)
- Use `libarchive` to extract updates by [@Trial97](https://github.com/Trial97) in [#4641](https://github.com/PrismLauncher/PrismLauncher/pull/4641)

## Fixed

- Don't use `.index` for shaderpacks by [@TheKodeToad](https://github.com/TheKodeToad) in [#4658](https://github.com/PrismLauncher/PrismLauncher/pull/4658)
- Fix update manifest generation for Linux by [@Trial97](https://github.com/Trial97) in [#4649](https://github.com/PrismLauncher/PrismLauncher/pull/4649)
- Fix AppImage zsync information by [@getchoo](https://github.com/getchoo) in [#4671](https://github.com/PrismLauncher/PrismLauncher/pull/4671)
