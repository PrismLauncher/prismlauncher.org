---
title: "[SECURITY UPDATE] Prism Launcher Release 6.3, now available"
description: 91% bug free!
date: 2023-02-03
release_version: "6.3"
minimum_macos_version: 10.15.0
macos_file_extension: tar.gz
macos_signature: ddgRaenV1h5Rwnci+fQskurWkHb2WUZZSNmW1AkwplFsN8RIzum3VQNJ5xHS08WBd2m6EWTjlVRsERU65YAtCg==
tags:
  - release
---

Update: If you are on a version before 6.2, you should upgrade to this release to avoid a security bug regarding `.mrpack` modpack imports. You can read more about this in [this blog post from QuiltMC](https://quiltmc.org/en/blog/2023-02-04-five-installer-vulnerabilities/).

Hello!

Uh, wasn't there a release today already? Well yes there was. It's just that the last update added a new security check for instance components, which sadly made Prism Launcher think that Fabric and Quilt are invalid.
Note that this issue won't cause permanent damage, as that check is done on runtime and is purely for informational purposes.

Make sure to read the [previous changelog here](https://prismlauncher.org/news/release-6.2/) to see the other changes as well!

## Changelog

### Fixed

- Fix regex pattern for component UIDs by [@Scrumplex](https://github.com/Scrumplex) in [#815](https://github.com/PrismLauncher/PrismLauncher/pull/815)

Full Changelog: <https://github.com/PrismLauncher/PrismLauncher/compare/6.2...6.3>

You can [grab the latest download here](https://prismlauncher.org/download/) for your respective platform.
