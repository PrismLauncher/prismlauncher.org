---
title: 0.4.7 - What 0.4.6 should have been.
author: peterix
date: 2015-06-01
---

This is mainly a bugfix release on top of 0.4.6 - with some minor features added.

What's new? Not much, really.

### Icon export an import

When exporting and importing instances, you'll notice that if the icon you use for the instance is custom,
it will be exported too. If the user doesn't select an icon during import, this icon will be used for the instance after import.

### FTB related crashes should be gone

0.4.6 had a crasher bug related to FTB tracking. This is now fixed. We are sorry for the inconvenience.

## The future

Exciting things are coming, at the usual glacial pace and with the ETA of "when it's done" :)

We are (still) hard at work at getting our own package repository running (continuation of QuickMods), along with much better modpack support. The future MultiMC will have this package repository at its core and will use it for more than just mods.

Seeing that FTB is moving to the curse platform, the FTB tracking support will be abandoned when the FTB launcher stops working. The replacement should be import (not tracking) of other launcher instances and direct download and updating of modpack instances from the various platforms out there.

[@peterixxx](https://twitter.com/peterixxx) and [@02JanDal](https://twitter.com/02JanDal)

## Full changelog

### Functional changes

- [GH-974](https://github.com/MultiMC/MultiMC5/issues/974): A copy of the libstdc++ library is now included in linux releases, improving compatibility
- [GH-985](https://github.com/MultiMC/MultiMC5/issues/985): Jar mods are now movable and removable after adding
- [GH-983](https://github.com/MultiMC/MultiMC5/issues/983): Use 'minecraft.jar' as the main jar when using jar mods - fixes NEI in Legacy Minecraft versions
- [GH-977](https://github.com/MultiMC/MultiMC5/issues/977): Fix FTB paths on Windows

    This removes some very old compatibility code. If you get any issues, make sure you run the FTB Launcher and let it update its files.

- [GH-992](https://github.com/MultiMC/MultiMC5/issues/992) and [GH-1003](https://github.com/MultiMC/MultiMC5/issues/1003): Improved performance when saving settings:

   - Bad performance was caused by improved data consistency
   - Each config file is now saved only once, not once for every setting
   - When loading FTB instances, there are no writes to config files anymore

- [GH-991](https://github.com/MultiMC/MultiMC5/issues/991): Implemented wrapper command functionality:

    There is an extra field in the MultiMC Java settings that allows running Java inside a wrapper program or script. This means you can run Minecraft with wrappers like `optirun` and get better performance with hybrid graphics on linux without workarounds.

- [GH-997](https://github.com/MultiMC/MultiMC5/issues/997): Fixed saving of multi-line settings. This fixes notes.
- [GH-967](https://github.com/MultiMC/MultiMC5/issues/967): It is now possible to add patches (Forge and LiteLoader) to tracked FTB instances properly.

    Libraries added by the patches will be taken from MultiMC's `libraries` folder, while the tracked patches will use FTB's folders.

- [GH-1011](https://github.com/MultiMC/MultiMC5/issues/1011) and [GH-1015](https://github.com/MultiMC/MultiMC5/issues/1015): Fixed various issues when the patch versions aren't complete

    This applies when Minecraft versions are missing or when patches are broken and the profile is manipulated by adding, moving, removing, customizing and reverting patches.

- [GH-994](https://github.com/MultiMC/MultiMC5/issues/994): Rearranged the buttons on the Versions page to make jar mods less prominent

    Using the `Add jar mods` button will also show a nag dialog until it's been used successfully

- [GH-1021](https://github.com/MultiMC/MultiMC5/issues/1021): Builtin legacy Minecraft versions aren't customizable anymore

    The internal format for Legacy Minecraft versions does not translate to the external patch format and would cause crashes

- [GH-1016](https://github.com/MultiMC/MultiMC5/issues/1016): MultiMC prints a list of mods, coremods (contents of the coremods folder) and jar mods to the log on instance start. This should help with troubleshooting.
- [GH-1031](https://github.com/MultiMC/MultiMC5/issues/1031): Icons are exported and imported along with instances

    This only applies if the icon was custom (not built-in) when exporting and the user doesn't choose an icon while importing the pack.

### UI changes
- [GH-970](https://github.com/MultiMC/MultiMC5/issues/970): Fixed help button for the External tools and Accounts dialog pages not linking to the proper wiki places
  - Same for the Versions dialog page
