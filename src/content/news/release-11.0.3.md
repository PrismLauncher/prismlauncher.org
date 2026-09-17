---
title: "Prism Launcher Release 11.0.3"
description: "Very fun!"
date: 2026-07-11
slug: "release-11.0.3"
release_version: "11.0.3"
minimum_macos_version: 12.0.0
macos_file_extension: zip
macos_signature: lhvsZeXvmUM94mELXZZJN6fUeKXDqOJUgc1CwdVbZg18jMn2Q/uD8HRucSTGttrBWSTj9ERKMjQmkGntk71uAw==
tags:
  - Release
---

Hi again!
In this new release we fixed a few bugs, we made offline mode more easy to use when authentication servers are down and we [fixed CurseForge support after July 16th](https://blog.curseforge.com/introducing-api-key-authentication-for-curseforge-file-downloads/).

Grab the latest download [here](/download), and read on to see the full list of changes.

# Added

- Add modrinth headers for download source (standalone, modpack, dependency) by [@Trial97](https://github.com/Trial97) in [#5506](https://github.com/PrismLauncher/PrismLauncher/pull/5506)
- Log components in instance logs by [@Octol1ttle](https://github.com/Octol1ttle) in [#5560](https://github.com/PrismLauncher/PrismLauncher/pull/5560)

## Changed

- Include Flame API key in CDN downloads by [@Octol1ttle](https://github.com/Octol1ttle) in [#5671](https://github.com/PrismLauncher/PrismLauncher/pull/5671)
- When auth is down, launch into offline mode by [@TayouVR](https://github.com/TayouVR) in [#5647](https://github.com/PrismLauncher/PrismLauncher/pull/5647)

## Fixed

- AccountList: Skip refresh when !shouldRefresh by [@catfromplan9](https://github.com/catfromplan9) in [#5614](https://github.com/PrismLauncher/PrismLauncher/pull/5614)
- Do not open account select dialog if there are no accounts by [@Octol1ttle](https://github.com/Octol1ttle) in [#5535](https://github.com/PrismLauncher/PrismLauncher/pull/5535)
- Don't delete base directories when evicting metacache by [@Octol1ttle](https://github.com/Octol1ttle) in [#5513](https://github.com/PrismLauncher/PrismLauncher/pull/5513)
- Don't remove old Microsoft accounts until they're successfully reauthenticated by [@Octol1ttle](https://github.com/Octol1ttle) in [#5620](https://github.com/PrismLauncher/PrismLauncher/pull/5620)
- Fix Cmd+Q on macOS closing active window instead of quitting by [@dannydjdk](https://github.com/dannydjdk) in [#5427](https://github.com/PrismLauncher/PrismLauncher/pull/5427)
- Fix Copy/Upload buttons not working in ScreenshotsPage by [@Octol1ttle](https://github.com/Octol1ttle) in [#5387](https://github.com/PrismLauncher/PrismLauncher/pull/5387)
- Fix infinite loop in SkinManageDialog by [@Octol1ttle](https://github.com/Octol1ttle) in [#5388](https://github.com/PrismLauncher/PrismLauncher/pull/5388)
- Fix memory leak and crash with data packs modal by [@TheKodeToad](https://github.com/TheKodeToad) in [#5551](https://github.com/PrismLauncher/PrismLauncher/pull/5551)
- Fix offline accounts not being refreshed during launch by [@Octol1ttle](https://github.com/Octol1ttle) in [#5542](https://github.com/PrismLauncher/PrismLauncher/pull/5542)
- Fix wrong Xbox failure string by [@Octol1ttle](https://github.com/Octol1ttle) in [#5492](https://github.com/PrismLauncher/PrismLauncher/pull/5492)
- Fix: Remove trademark and special characters from instance folder names by [@Trial97](https://github.com/Trial97) in [#5204](https://github.com/PrismLauncher/PrismLauncher/pull/5204)
- Fixed dependencies not enabling/disabling other dependencies by [@jzhou-dev](https://github.com/jzhou-dev) in [#5717](https://github.com/PrismLauncher/PrismLauncher/pull/5717)
- Fixes for task abort logic by [@0x189D7997](https://github.com/0x189D7997) in [#5415](https://github.com/PrismLauncher/PrismLauncher/pull/5415)
- Fixes to 'Use system locale' by [@Octol1ttle](https://github.com/Octol1ttle) in [#5485](https://github.com/PrismLauncher/PrismLauncher/pull/5485)
- Fixes to PrismExternalUpdater by [@Octol1ttle](https://github.com/Octol1ttle) in [#5486](https://github.com/PrismLauncher/PrismLauncher/pull/5486)
- Fixes to translations by [@Octol1ttle](https://github.com/Octol1ttle) in [#5512](https://github.com/PrismLauncher/PrismLauncher/pull/5512)
- Low RAM warning fixes by [@Octol1ttle](https://github.com/Octol1ttle) in [#5392](https://github.com/PrismLauncher/PrismLauncher/pull/5392)
- NetJob: do not automatically retry on `404 Not Found` response by [@0x189D7997](https://github.com/0x189D7997) in [#5416](https://github.com/PrismLauncher/PrismLauncher/pull/5416)
- ProgressDialog: allow finished tasks to be re-displayed once restarted by [@Octol1ttle](https://github.com/Octol1ttle) in [#5412](https://github.com/PrismLauncher/PrismLauncher/pull/5412)
- Search by project id (#) improvement by [@0x189D7997](https://github.com/0x189D7997) in [#5303](https://github.com/PrismLauncher/PrismLauncher/pull/5303)
- Show error message when device code authorization fails by [@Octol1ttle](https://github.com/Octol1ttle) in [#5645](https://github.com/PrismLauncher/PrismLauncher/pull/5645)
- Show process start error string in logs by [@Octol1ttle](https://github.com/Octol1ttle) in [#5644](https://github.com/PrismLauncher/PrismLauncher/pull/5644)
- Use "Discrete" key from switcheroo if present by [@Octol1ttle](https://github.com/Octol1ttle) in [#5487](https://github.com/PrismLauncher/PrismLauncher/pull/5487)
- Use native APIs for GPU discovery by [@Octol1ttle](https://github.com/Octol1ttle) in [#5602](https://github.com/PrismLauncher/PrismLauncher/pull/5602)
- changed "Ok" to "OK" by [@0osh](https://github.com/0osh) in [#5331](https://github.com/PrismLauncher/PrismLauncher/pull/5331)
- fix Atl path traversal by [@Trial97](https://github.com/Trial97) in [#5511](https://github.com/PrismLauncher/PrismLauncher/pull/5511)
- fix change version by [@Trial97](https://github.com/Trial97) in [#5504](https://github.com/PrismLauncher/PrismLauncher/pull/5504)
- fix other logs page crash by [@so5iso4ka](https://github.com/so5iso4ka) in [#5458](https://github.com/PrismLauncher/PrismLauncher/pull/5458)
- fix text overlap in project item views by [@so5iso4ka](https://github.com/so5iso4ka) in [#5406](https://github.com/PrismLauncher/PrismLauncher/pull/5406)
- fix world size uninitialized memory and UI refresh signal by [@qaptivator](https://github.com/qaptivator) in [#5418](https://github.com/PrismLauncher/PrismLauncher/pull/5418)
- fix: force metadata version list refreshes to reload by [@morsznetik](https://github.com/morsznetik) in [#5349](https://github.com/PrismLauncher/PrismLauncher/pull/5349)
- fix: ignore non-existent or empty paths in processURLs by [@qaptivator](https://github.com/qaptivator) in [#5442](https://github.com/PrismLauncher/PrismLauncher/pull/5442)
- fix: trim whitespaces from ManagedPackURL by [@qaptivator](https://github.com/qaptivator) in [#5444](https://github.com/PrismLauncher/PrismLauncher/pull/5444)
