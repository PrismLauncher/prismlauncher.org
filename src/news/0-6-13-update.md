---
title: 0.6.13 - Microsoft account integration
author: peterix
date: 2021-09-09
---

This release brings initial support for Microsoft accounts, along with a nice pile of modpack platform changes and improved Java runtime detection.

What comes next:

- Bug fixes for Microsoft authentication (broken offline play, overzealous token refreshing, etc.).
- Fixes for the current issues with Forge 1.17.x and newer.
- Complete rework of Java runtime management. The game now requires different versions of the JRE and our current approach no longer works.
- Full debranding of the MultiMC codebase and removal of API keys.

### Microsoft accounts

This is the first release with Microsoft accounts in.

Implementation is loosely based on documentation available from [wiki.vg](https://wiki.vg/Microsoft_Authentication_Scheme) with some notable changes:

- More complete implementation including getting and displaying GamerTags [(see XR-046)](https://docs.microsoft.com/en-us/gaming/gdk/_content/gc/policies/pc/live-policies-pc#xr-046-display-name-and-gamerpic-).

- Using the OAuth Device Flow instead of closely integrating with a browser engine.

    MultiMC asks you to open a Microsoft login web page and put in a code that lets MultiMC authenticate.

    This lets you authenticate on a completely separate device like your phone, leaving code we ship and the computer you may not even trust out of the picture.

As part of this, the skin fetching no longer uses a third party service and instead gets skins directly from Mojang.

Capes can also be selected in MultiMC now. With how many people will now get one for migrating their accounts, it only makes sense.

### macOS update

Because of issues with the Microsoft accounts, we now have two builds on macOS:

- The old build with Qt 5.6 that does not work with Microsoft accounts, but can run on macOS older than 10.13.

- A new build with Qt 5.15.2 that does work with Microsoft accounts, can use the new macOS dark theme and highlight colors, but requires at least macOS 10.13.

MultiMC will update to the 5.15.2 builds when it detects that this is possible. **It may look like it is updating twice, just let it do its thing.**

Similar approach got attempted on Windows, aiming to fix various display scaling and theming issues, but it ran into too many problems and will be attempted later, with more caution.

### Modpack platforms

In general, the modpack platform pages have been made more consistent with each other ([GH-3118](https://github.com/MultiMC/MultiMC5/issues/3118), [GH-3720](https://github.com/MultiMC/MultiMC5/issues/3720), [GH-3731](https://github.com/MultiMC/MultiMC5/issues/3731)).

- FTB improvements:

    - Modpack file downloads are now checked with checksums and cached.

    - [GH-1949](https://github.com/MultiMC/MultiMC5/issues/1949): Allow Legacy FTB and FTB pack downloads to be aborted.

- CurseForge improvements:

    - CurseForge modpack platform is now presented as CurseForge, not Twitch.

    - UI has been updated to match other platforms

    - Added sorting

    - [GH-3667](https://github.com/MultiMC/MultiMC5/issues/3667): Added version selection

    - [GH-3611](https://github.com/MultiMC/MultiMC5/issues/3611): Added ability to install beta versions

    - [GH-3633](https://github.com/MultiMC/MultiMC5/issues/3633): When a CurseForge pack is available for multiple Minecraft versions, we assume the latest one.

- ATLauncher improvements:

    - Handling latest/custom/recommended mod loader versions.

    - Fabric loader packs should now work.

    - [GH-3764](https://github.com/MultiMC/MultiMC5/issues/3764): Only client mods are installed now for ATL packs.

    - Improved error handling

    - Optional mods are supported.

    - [GH-1949](https://github.com/MultiMC/MultiMC5/issues/1949): Allow ATLauncher pack downloads to be aborted


- Fixed bugs in FTB platform search.

### Other changes

- Forge installation is disabled on Minecraft 1.17+ because of incompatible/unresolved changes on the Forge side.

    We're going to aim for fixing it in time for 1.18. Thankfully, 1.17 is more of a in-between release, so go play some 1.16.x packs!

- [GH-2529](https://github.com/MultiMC/MultiMC5/issues/2529): On macOS, MultiMC will ask to move all the instance data to a new `Data` folder in order to fix long load times caused by macOS checking all files.

- Detection of a large amount of various Java runtime flavors have been added.

- It is now possible to join servers when starting an instance:

    - From command line via the `--launch` and `--server` arguments.

    - Or by setting this up in the instance settings page.

    This may not work correctly in some cases, because it is a rarely used feature and modders do not test with it.

- MultiMC now prints resolved IP addresses of Minecraft services into the game log for diagnostic purposes.

- Updated instance icons based on Minecraft textures.

- Forge `mods.toml` files are now used for displaying mods in the UI.

- Datapack button is now disabled when no world is selected.

- MultiMC warns about GLFW and OpenAL workarounds being enabled in the game log.

- Languages in the translations list are now sorted by their two/three letter key

- [GH-3450](https://github.com/MultiMC/MultiMC5/issues/3450): Displaying and recording gameplay time is now optional and can be turned off.

- [GH-3930](https://github.com/MultiMC/MultiMC5/issues/3930): MultiMC can now track the gameplay time of the last session.

- [GH-3033](https://github.com/MultiMC/MultiMC5/issues/3033): The version pages of instances now have a filter bar.

- [GH-2971](https://github.com/MultiMC/MultiMC5/issues/2971): UI descriptions of texture and resource packs no longer mention mods.

- Quick and dirty minimum Java runtime versions checks have been added. This needs to be expanded in the future.

### Technical changes

- The codebase continues to move towards being debranded and harder to build as 'MultiMC' for third parties.
