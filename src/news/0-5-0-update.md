---
title: 0.5.0 - Running multiple instances at the same time!
author: peterix
date: 2017-01-14
---

There are many improvements in this release - the biggest one is the ability to run multiple instances simultaneously. There is also basic themeing support, a better first run experience and more bugfixes than you can shake a stick at.

<p align="center">
  <img src="/images/screenshots/0.5.0-linux.png" alt="MultiMC5 0.5.0 with the Dark theme."/>
</p>

I'll let the changelog speak for itself and let you discover all the new features.

### The next release

The focus of the next release will be modpacks and integration with modpack platforms.

You can look forward to these:

* Forge and Liteloader will no longer be added to the instance as patch files, MultiMC will instead manage separate lists of component versions.
* Actual modpack support (this is the prerequisite for everything else).
* Treating the exported instances as modpacks.
* Inclusion of suggested Java settings (like the absolute minimum of memory needed to launch a modpack).
* Tracking of optional mods (both enabled and disabled by default).
* Tracking of server mods (both enabled and disabled by default).
* Full integration of Technic platform (and Solder).
* Downloading and installing of Curse modpacks.
* Ability to track arbitrary folders as instances or instancer lists.
* Possibly also integration with MCUpdater and AT Launcher.

Not everything might end up in the same release though, and not necessarily in the same order. I'd like to keep the releases small.

All the existing suggestions are [available on the MultiMC workflowy list](https://workflowy.com/s/2EyDMcp7CU).

The actual planning for the next release will happen on [this list](https://workflowy.com/s/E3Wo.yNRoPn2Wix).

**If you want the project to continue and expand, please [support it on Patreon](https://www.patreon.com/multimc)!**

[@peterixxx](https://twitter.com/peterixxx)

### Changelog

#### New or changed features

- [GH-338](https://github.com/MultiMC/MultiMC5/issues/338), [GH-513](https://github.com/MultiMC/MultiMC5/issues/513), [GH-700](https://github.com/MultiMC/MultiMC5/issues/700): Edit instance dialog and Console window have been unified

    The resulting instance window can be closed or reopened at any point, it does not matter if the instance is running or not. The list of available pages in the instance window changes with instance state.

    Multiple instances can now run from the same MultiMC - It's even more **multi** now.

    On launch, the main window is kept open and running instances are marked with a badge. Opening the instance window is no longer the default action. Second activation of a running instance opens the instance window.

    MultiMC can be entirely closed, keeping Minecraft instances running. However, if you close MultiMC, play time tracking, logging and crash reporting will not work.

    Accounts which are in use are marked as such. If you plan to run multiple instances with multiple accounts, it is advisable to not set a default account to make it ask which one to use on launch.

- It is no longer possible to run multiple copies of MultiMC from a single folder

    This generally caused strange configuration and Mojang login issues because the running MultiMC copies did not know about each other.

    With the ability to launch multiple instances with different accounts, it is no longer needed.

    Trying to run a second copy will focus the existing window. If MultiMC was started without a main window, a new main window will be opened. If the second copy is launching an instance from the command line, it will launch in the first copy instead.

    This feature is also used for better checking of correct update completion ([GH-1726](https://github.com/MultiMC/MultiMC5/issues/1726)). It should no longer be possible for MultiMC to end up in a state when it is unable to start - the old version checks that the new one can start and respond to liveness checks by writing a file.

- [GH-903](https://github.com/MultiMC/MultiMC5/issues/903): MultiMC now supports theming

    By default, it comes with a Dark, Bright, System (the old default) and Custom theme.

    The Custom theme can change all of the colors, change the Qt widget theme and style the whole UI with CSS rules.
    Files you can customize are created in `themes/custom/`. The CSS theming is similar to what TeamSpeak uses.

    Ultimately, this is a start, not a final solution. If you are interested in making custom themes and would like to shape the direction this takes in the future, ask on Discord. :)

- Translations have been overhauled

    You no longer need to restart MultiMC to change its active translation. MultiMC also asks which translation to use on the first start.

    There is a lot that has to be done with translations, but at least now it should be easier to work with them and use them.

- MultiMC now includes Google Analytics

    The purpose of this is to determine where to focus future effort. Generally, only basic technical information is collected:

  - OS name, version, and architecture
  - Java version, architecture and memory settings
  - MultiMC version
  - System RAM size

    It does not activate until you agree with it. It may be expanded upon later, in which case you will be asked to agree again.

- Java selection on start has been replaced with a more robust solution

    You can select from the list as before, but also provide your own Java and set the basic memory sizes - Heap and PermGen (for java < 8).

    It is checking the configuration and selected Java on the fly and provides more or less instant feedback.

- Java detection has been improved

    MultiMC will prefer looking for `javaw.exe` on Windows and now can scan most, if not all the usual Linux java paths.

- Java memory settings now allow running with less memory

    The minimum has been changed to 128 MB.

- There is now an initial setup wizard

    So far, it is used for selecting the translation to use, the analytics agreement and initial Java setup.

- Existing MCEdit integration has been replaced by the Worlds page in the Instance/Console window

    It supports renaming, copying, and deleting worlds, opening them in MCEdit and copying the world seed without the need to launch Minecraft.

    The Linux version of MCEdit is now also started from the shell script, fixing some compatibility issues.

- [GH-767](https://github.com/MultiMC/MultiMC5/issues/767): Minecraft skin upload

    The `Upload Skin` button is located on the Accounts page.

- It is now possible to turn off line wrapping in the Minecraft log
- Groups now have a proper context menu

    You can delete groups and create instances in them using the context menu. Just right click anywhere inside a group that's not an instance.

- Exporting of tracked FTB instances has been disabled

    It did not produce viable instances.

- Added support for Liteloader snapshots

    Requested many times, it's finally available.

- [GH-1635](https://github.com/MultiMC/MultiMC5/issues/1635), [GH-1273](https://github.com/MultiMC/MultiMC5/issues/1273), [GH-589](https://github.com/MultiMC/MultiMC5/issues/589), [GH-842](https://github.com/MultiMC/MultiMC5/issues/842), [GH-901](https://github.com/MultiMC/MultiMC5/issues/901), [GH-1117](https://github.com/MultiMC/MultiMC5/issues/1117): Mod lists have been improved heavily

  - There is filter bar to allow finding mods in large packs quickly.
  - Extended selection is allowed (does not have to be continuous).
  - You can enable and disable many mods at the same time.
  - Sorting by clicking on the column headers is now possible.
  - Mod lists have a column for when a mod was changed last time (or added using the mod list).
  - You can open the `config` folder from the mods list now.

- [GH-352](https://github.com/MultiMC/MultiMC5/issues/352): It is now possible to cancel an instance update.

- Instance launch button now has a drop-down arrow instead of click and hold.

    This should make launching with profilers more discoverable.

- When instances do not exit properly (crash), they get a badge

    This should make it easier to spot what crashed if you have multiple running.

- Instances can now contain libraries

    Any libraries stored in `$instanceroot/libraries/` will override the libraries from MultiMC's global folders, as long as they are marked `local` in the JSON patch.

    This should make installing library-based mods easier in the future, and allow to include them in modpacks.

#### Improvements

- [GH-1433](https://github.com/MultiMC/MultiMC5/issues/1433): The account selection dialog no longer shows e-mail addresses when no default account is selected.

    Instead, it shows Minecraft profile names.

- [GH-1643](https://github.com/MultiMC/MultiMC5/issues/1643): The preferred language property is no longer being censored in logs.

    Because the values are often very short (`en` for example), it was simply not usable.

- [GH-1521](https://github.com/MultiMC/MultiMC5/issues/1521): JSON editor now works when customized.

- [GH-1560](https://github.com/MultiMC/MultiMC5/issues/1560): Leading whitespace is now removed from instance names on creation and renaming

    Leading and trailing spaces in names can confuse Windows Explorer and Java.

- [GH-1586](https://github.com/MultiMC/MultiMC5/issues/1586): MultiMC now prints to command line on Windows, so you can review the command line options.

- [GH-1699](https://github.com/MultiMC/MultiMC5/issues/1699): Linux builds no longer contain the XCB library

    This caused many compatibility issues on with certain Linux graphics drivers and prevented MultiMC from starting.

- [GH-1731](https://github.com/MultiMC/MultiMC5/issues/1731): it was possible for the Screenshots page to show a list of all system drives.

    Trying to delete said system drives obviously lead to data loss. Additional checks have been added to prevent this from happening.

- [GH-1670](https://github.com/MultiMC/MultiMC5/issues/1670): "Instance update failed because: Too soon! Let the LWJGL list load :)." has been fixed.

    This fixes launching of legacy (and legacy FTB) instances.

- [GH-1778](https://github.com/MultiMC/MultiMC5/issues/1778): Jar modded Minecraft.jar location breaks mod assumptions

    Some ancient mods require the modded `Minecraft.jar` to be in `.minecraft/bin`, inside the instance. Now it is placed there.

#### Internals

- Full support for the current Mojang downloads JSON format.

    This includes checksum verification, when available.

- Minecraft logging has been overhauled

    The log now persists after the instance/console window is closed.

- [GH-575](https://github.com/MultiMC/MultiMC5/issues/575): Mod lists got a refactor

    The original issue is about adding sub-folder listings to mod lists. However, this is simply a refactor that separates the old Jar mod list from the less complex Loader mods. It allowed all of the mod list improvements to happen.

- The network code has been heavily reworked

    Most issues related to slow networks and failing downloads should be a thing of the past.
    This also includes post-download validation of the download - like using SHA1 checksums.

- Minecraft launching has been reworked

    It is now a lot of tiny reusable tasks that chain together.

    MultiMC now also has a separate launch method that works more like the Mojang launcher (not using a launcher part, but running Java directly).
