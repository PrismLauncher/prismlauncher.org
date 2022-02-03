---
title: 0.6.0 Released!
author: peterix
date: 2017-12-31
---

Well, this took a while.

I'll just let the changelog speak for itself.

When it comes to the future of MultiMC, it is practically set in stone for the next few months. Minecraft 1.13 is coming, along with some big change in Forge and modding in general. For that, MultiMC will have to adapt.

Part of that will be documenting the current instance and metadata formats, further streamlining of those formats and then improvements necessary to fully support anything and everything that comes along.

The big idea and bug pile still lives [on workflowy](https://workflowy.com/s/2EyDMcp7CU). So if you just want to follow development, or want to help with something, it's the place to look.

2018 will be a very interesting year for Minecraft.

So, happy New Year everyone, let the madness begin!

### Changelog

#### New or changed features

- Contact with Mojang, Forge and LiteLoader servers is no longer handled by MultiMC, but a metadata server. Instead of generating and storing the files at the point of installation, they are updated hourly on the server and can be fixed when something goes wrong.

    This goes along with some changes to the instance format and to the metadata format.

    Instead of including the metadata JSON files directly in the instances, the instances now contain a new `mmc-pack.json` file that specifies versions to be used.

    The metadata can be found at [v1.meta.multimc.org](https://v1.meta.multimc.org), the [meta.multimc.org](https://meta.multimc.org) endpoint that was used during development will be replaced by documentation.

    This should be a much more reliable solution going forward, because it allows fixing issues without releasing new versions of MultiMC or reinstalling Forge/LiteLoader/others.

- Tracking of FTB launcher instances has been replaced with direct import of Curse modpacks.

    You can import the modpack zip files from CurseForge and FTB:
    - Get the zip, for example from [here](https://www.feed-the-beast.com/projects/ftb-retro-ssp/files/2219693).
    - Drag & Drop it on top of the main window, or select it in the new instance dialog.
    - Let the magic happen.

    If you need help moving over your old instances or worlds from the FTB launcher, stop by in the MultiMC discord server.

    The Curse import functionality is there thanks to the work [@Dries007](https://twitter.com/driesk007) and [@NikkiAI](https://twitter.com/NikkyAI) have done on [CurseMeta](https://cursemeta.dries007.net/).

- [GH-1314](https://github.com/MultiMC/MultiMC5/issues/1314): MultiMC now allows replacing the main jar in an instance without having to mod the Mojang jars.

    This goes along with changing the wording of the jar mod button to make it clear that it adds files to the main Minecraft jar instead of installing mod files with the `.jar` extension.

- Because the current instance format can now handle replacing the main jar, Legacy format instances are no longer directly supported.

    Instead of launching, you will be prompted to convert them to the current instance format.
    If the automated process fails, stop by in the MultiMC discord server and ask for help.

- Main window UI has been changed for increased clarity.

    Many people had issues finding the settings and instead ended up using the per-instance overrides. The main toolbar now has labels and the per-instance overrides have been deemphasized by removing the direct path to them from the main window. In general, it should be easier to find the right settings menu without getting things completely wrong on the first try.

- [GH-1997](https://github.com/MultiMC/MultiMC5/issues/1997): MultiMC now supports Java 9.

    This does not mean that the current mod loaders and mods do, but you can run Vanilla Minecraft with Java 9 now.

    However, Java 9 will come up last in the lists when multiple versions are installed and its use is strongly discouraged.

- [GH-2026](https://github.com/MultiMC/MultiMC5/issues/2026): You can launch Minecraft 1.13 snapshots - and hopefully also 1.13 once it is released.

    The bare minimum of changes needed for 1.13 to launch has been done.

    This does not mean support for modded 1.13!

    It is not yet clear what it will even look like and what exactly will be needed for Forge to be able to install properly.

- Bundled Qt libraries have been updated to version 5.6.3 on macOS and Windows

    This means less issues with SSL encryption on macOS and better support for HiDPI/retina displays, along with many bug fixes.
    The workarounds for SSL problems on macOS have been removed thanks to this.

- Linux builds were moved to a newer version of Ubuntu (14.04)

    This means better support on newer distribution releases, and dropping support for older distributions.

- Bundled OpenSSL library on Windows no longer requires Visual Studio runtime libraries.

    This should avoid issues with missing runtime libraries.

- [GH-1855](https://github.com/MultiMC/MultiMC5/issues/1855): The instance window now has an offline launch button.

- [GH-1886](https://github.com/MultiMC/MultiMC5/issues/1886): UI now clarifies that MultiMC proxy settings do not apply to the game.

- It is now possible to package MultiMC on linux without hacks.

    The build system has a concept of 'install layouts'. Example Arch linux package that uses this (multimc-git) is [available in the AUR](https://aur.archlinux.org/packages/multimc-git).

- Wrapper commands now support arguments.

    Previously, they would be treated as a single command -- spaces and all.

- UI elements that set maximum JVM memory are now limited to the amount of system memory present.

    Before, they were hardcoded.



    This is to accommodate the needs of some new mods for ancient Minecraft versions that do not work well with the applet wrapper.

- On instance launch, the used GPU and graphics driver are reported - but only on linux.

    Other platforms will hopefully get this in the future.

- There are some under the hood improvements for ancient Minecraft versions and versions not provided by Mojang.

      - The `haspaid` parameter is set for the applet wrapper.
      - MultiMC will prefer to use `.minecraft` instead of `minecraft` folder inside the instances now.
      - There is some preliminary support for classic multiplayer - see [this workflowy list](https://workflowy.com/s/2EyDMcp7CU#/1cbfc198cf28) for details.
      - A new `noapplet` trait has been added to allow running legacy Minecraft versions without the applet wrapper.

- Mods without changed metadata (Example Mod) are now listed under their filename instead.

- Tweaker list in metadata now overrides the order of already present tweakers.

    This allows running [Vivecraft](http://www.vivecraft.org/). Official support will hopefully follow.

- Instance icons can now be in the SVG format. Also, aspect ratio of SVG icons is now preserved in the instance toolbar.

- [GH-1082](https://github.com/MultiMC/MultiMC5/issues/1082): It is now possible to disable and enable version components (packages) similarly to mods.

- A new material design / flat icon theme has been added.

- When changing instance component versions, the present version is selected first.

#### Bugfixes

- paste.ee upload now works again.

    MultiMC now uses its new API. If you used a custom API key before, you will need to generate a new one.

- [GH-1873](https://github.com/MultiMC/MultiMC5/issues/1873), [GH-1873](https://github.com/MultiMC/MultiMC5/issues/1873), [GH-1875](https://github.com/MultiMC/MultiMC5/issues/1875) : The main window can now be closed regardless of running instances and running instances directly will not create a main window.

- [GH-1854](https://github.com/MultiMC/MultiMC5/issues/1854): MultiMC should no longer crash when the instance is closed while the kill confirmation dialog is open.

- [GH-1956](https://github.com/MultiMC/MultiMC5/issues/1956): Launch will abort sooner when important files are missing.

- [GH-1874](https://github.com/MultiMC/MultiMC5/issues/1874): Instance launching and updating MultiMC are now mutually exclusive.

    It was possible to do both at the same time, with undefined results.

- [GH-1864](https://github.com/MultiMC/MultiMC5/issues/1864): imgur album creation now works again.

- [GH-1876](https://github.com/MultiMC/MultiMC5/issues/1876): Various included libraries have been changed to satisfy their license terms.

    Namely:
    - pack200 (GPL with classpath exception, now a shared library)
    - iconfix (LGPL, now a shared library)
    - quazip (LGPL, now a shared library)
    - ColumnResizer (replaced with a BSD-3 version).

- [GH-1882](https://github.com/MultiMC/MultiMC5/issues/1882): Update dialog will now save its location and size.

- [GH-1885](https://github.com/MultiMC/MultiMC5/issues/1885): MultiMC will now correctly download zero-byte files.

    No content does not equal no file and a presence of a file can mean the difference between something working or not.

- When importing modpacks, file permissions from the pack archive will no longer be preserved.

    The archives are sometimes broken and have invalid permissions, especially when coming from sources other than MultiMC.

- Instance export filter has been fixed.

    The filtering logic was picking and ignoring incorrect files under some conditions. Also, hidden files were ignored.

- Download progress bars are now less jumpy.

    Instead of tracking the total size of all downloads, each download gets a fixed share of the progress bar.
    In many cases, the size of files is unknown before a download starts. The change means that the total progress bar size cannot increase as new downloads start and file sizes are discovered.

- [GH-1927](https://github.com/MultiMC/MultiMC5/issues/1927): fix crash bugs related to FML library downloads succeeding multiple times.

- Rare problems with error 201 during Mojang authentication have been fixed.

- [GH-1971](https://github.com/MultiMC/MultiMC5/issues/1971): MultiMC will now no longer check path prefixes when importing instances.

    This has caused more issues than it solved. Now it will simply try to move the files instead of giving up early.

- Instance import and creation have been overhauled in general for increased reliability.

- Hardcoded link colors in various dialogs and dialog pages have been fixed and now should follow theme palettes.

- [GH-1993](https://github.com/MultiMC/MultiMC5/issues/1993): Minimum and maximum JVM memory settings will now get swapped if set the wrong way.

    The values self-correct on both settings save and load now.

- [GH-2050](https://github.com/MultiMC/MultiMC5/issues/2050): Fixed behavior of cancel buttons when browsing for paths.

    This affected various settings dialogs and pages, setting the paths to an invalid value when the dialogs were closed with the `Cancel` button.

- The checkboxes in the accounts settings page now have the correct appearance.

- MultiMC responds to account manipulation better.

      - Setting and resetting default account will update the account list properly.
      - Removing the active account will now also reset it (previously, it would 'stay around').
      - The accounts model is no longer reset by every action.

- When closing and reopening the instance window, the log settings are preserved.

- In the instance export dialog, the sorting order has been changed to go from `a` to `z`, not backwards.
