---
title: "Prism Launcher Release 11.1.1, now available"
description: "That's a lot of 1s..."
date: 2026-09-28
slug: "release-11.1.1"
release_version: "11.1.1"
minimum_macos_version: 12.0.0
macos_file_extension: zip
macos_signature: oOQaRiPLccwz/IPOzJrs/r9N2BHEONMHQ5LqYoCha7OTLySXl/w5KljG7Uf5Pneqxyz/tHR9hqvzQaYfXLAFBw==
tags:
  - Release
---

We're back!

This is a hotfix release for a security vulnerability that appeared in 11.1.0. Up until now, malicious CurseForge modpacks could move and delete files from arbitrary paths the launcher currently has access to. We'll disclose more information about this in the upcoming week. Special thanks to [@OpenNerdz](https://github.com/OpenNerdz) for reporting it!

As a reminder, **it is best to only use modpacks directly from Modrinth or CurseForge**. Providers like these moderate mod author uploads to ensure maliciously-crafted or otherwise dangerous content is not uploaded to their platforms. **Avoid modpacks sent over platforms like Discord** unless you are able to personally verify they are safe before importing into any launcher.

Run to [grab the latest download here](/download)! You can also hit the "Update" button in your launcher, or check your package manager :p

## Changelog

And for those who are a bit more curious, here's our full changelog. You can also see the individual changes [here](https://github.com/PrismLauncher/PrismLauncher/compare/11.1.0...11.1.1).

Until next time! 🌈

### Fixed

- Prevent path traversal in CurseForge modpack overrides by [@Trial97](https://github.com/Trial97) in [#6183](https://github.com/PrismLauncher/PrismLauncher/pull/6183)
