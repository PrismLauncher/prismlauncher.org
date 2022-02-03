---
title: 0.6.12 - Spring cleaning and modpack platforms
author: peterix
date: 2021-03-21
---

After roughly one year of maintenance and development work by various contributors, we're just calling it a good time to release.

What got added since the last time? Quite a bit! But in general, this is more of a spring cleaning before the major changes that we need to make come in.

What comes next after this:

- Rework of the account system to add support for Microsoft accounts
- Rework of the Mojang accounts to allow them to co-exist with Microsoft accounts
- General fixes to dealing with account state and skins -- currently, we use a third party service to fetch skins and we only do it on application start.
- Complete rework of Java runtime management. The game will soon require different versions of the JRE and our approach will no longer work in that environment.

We'll probably call it 0.7 once all these are in place.

### Modpack platforms

We've added a whole bunch of new modpack platforms to pick from right into the new instance dialog. If you run into any unusual issues with the imported packs, report them on the bug tracker.

- Added a CurseForge pack browser

- [GH-3095](https://github.com/MultiMC/MultiMC5/issues/3095): Added an FTB pack browser

    Temporarily, MultiMC ignores download failures for FTB packs ([GH-3304](https://github.com/MultiMC/MultiMC5/issues/3304)). This is because the platform has consistency issues.

- [GH-469](https://github.com/MultiMC/MultiMC5/issues/469): Added a Technic/Solder pack browser

- [GH-405](https://github.com/MultiMC/MultiMC5/issues/405): Added a ATLauncher pack browser

### Other changes

- Added the option to not use OpenAL and/or GLFW libraries bundled with the game.

    This is interesting if you have ones that come with your system and work better.

- Skins (the part used for account icons) are now rendered with the overlay on.

- [GH-3130](https://github.com/MultiMC/MultiMC5/issues/3130): Skin upload has been switched over to the new Mojang API and should have less issues.

- MultiMC now shows world icons and allows resetting world icons in `View Worlds`.

- [GH-3229](https://github.com/MultiMC/MultiMC5/issues/3229): Copy seed button has been updated to be compatible with newer versions of the game.

- [GH-3427](https://github.com/MultiMC/MultiMC5/issues/3427): `View Worlds` now has a very simple `Datapacks` button - it just opens the system file browser.

- [GH-3189](https://github.com/MultiMC/MultiMC5/issues/3189): Updated nbt library - this makes `View Worlds` work properly again for newer versions of the game.

- Fixed online saving in Classic versions.

- [GH-3131](https://github.com/MultiMC/MultiMC5/issues/3131): Fixed not working with proxy ports greater than 32767.

- Proxy login details are no longer logged in files.

- [GH-3467](https://github.com/MultiMC/MultiMC5/issues/3467): The launch could stall in the ScanModFolders task if the mod folders didn't exist yet.

- [GH-3602](https://github.com/MultiMC/MultiMC5/issues/3602): Pre-launch commands could fail on first launch of the instance because the .minecraft folder has not been created yet.

### Technical changes

- [GH-3234](https://github.com/MultiMC/MultiMC5/issues/3234): At build time, the meta URL can be changed.

- Removed some hacks previously required to get Forge working

    MultiMC no longer contains pack200 and the custom lzma format support used by Forge only.

- Some preparations have been done to allow downloading Java runtimes from Mojang - support for the Piston repository.

- Compatibility with unusual build environments has been increased
