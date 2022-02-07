---
title: 0.6.14 - Microsoft account refinement, Forge 1.17+ and other fixes
author: peterix
date: 2021-12-08
---

This further refines Microsoft account support, along with small fixes related to modpack platforms and Java runtime detection.

It's also been 10 years since the first release of MultiMC. All background cats are now ready to party!
<p align="center">
  <img src="/images/cattiversary.png" alt="Background cat with a party hat"/>
</p>

What comes next, in no particular order:

- Complete rework of Java runtime management. With the release of 1.18, the game now requires even more different versions of the JRE, and a solution is required.
- Switch release model from distinct development and stable builds to a stream of builds with some of them promoted to stable.
- Overhauling theming in general, ideally with a repository of themes [like teamspeak has](https://www.myteamspeak.com/).
- Deconstructing Forge installers and replacing them with something that doesn't randomly break and we can host ourselves.
- Investigation into gathering and providing mod metadata for all mods.
- Fixing skins in old releases, and telemetry blocking.
- ... and others.

### Forge

- Forge for 1.17.x and 1.18 has been enabled.
  It's still messy on the inside, which is something to address in the future.

### Microsoft accounts

The account system now refreshes accounts in the background while the application is running.

- GH-4071: Errors encountered while refreshing account tokens no longer always result in the tokens expiring:
  - Network errors encountered when refreshing the main account tokens result in the account being **Offline**.
  - **Hard** errors are produced by the main tokens becoming provably invalid.
  - Errors encountered later are treated as **Soft** - they do make the account unusable, but still recoverable by trying again.
  - **Soft** errors are treated as **Hard** errors when adding the account initially.

In general, this should make MultiMC much more forgiving towards various temporary and non-fatal errors.

- GH-4217: Added support for GamePass accounts and Minecraft profile setup:
  - The new endpoint for logging in with Microsoft is now used (`/launcher/login`), enabling compatibility with GamePass.
  - Game ownership is checked instead of only relying on Minecraft profile presence.
  - Accounts can now be added even when they do not have a profile.
  - The launcher should guide you through selecting a Minecraft name if you don't have one yet.

### Modpack platform changes

- GH-4055: MultiMC now tries to avoid downloading multiple files to the same path for FTB modpacks.

- Search as you type is now used for FTB.

- GH-4185: Version of the modpack is now included in the name of the instance by default.

- The modpack platform UIs now include text field clear buttons.

### Other changes

- Adjusted warnings about Java runtime required for Minecraft 1.18 (it's not Java 16, it's Java 17).

- GH-3490: Instance sorting is now aware of numbers (and sorts 99 before 100).

- GH-4164: Reimplemented assigning instances to groups using drag & drop.

- GH-1795: Added terminal launch option to use a specific Minecraft profile (in-game player name).

    Used like this:
    ```
    ./MultiMC --launch 1.17.1 --profile MultiMCTest --server mc.hypixel.net
    ```

- GH-4227: Fix crash related to invalid Forge mod metadata.

- GH-4200: Search for the *Eclipse Foundation* and *Adoptium* Java runtimes in the Windows Registry.

- Added shader packs page to instances.

- Removed Mojang services status information from the main window - the status is no longer provided by Mojang.

- It is now possible to turn off global tracking of play time.

### Technical changes

- Debranding is mostly finished. You may see some changes in the logo being used in less places.
