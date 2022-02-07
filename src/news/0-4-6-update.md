---
title: 0.4.6 - Bug fixes and improvements!
author: peterix
date: 2015-05-20
---

After about half a year, a new stable release is (almost) ready. This one includes plenty of behind the scenes fixes and also some UI and usability improvements.

Why almost? Apple forced my hand and made me release early by breaking secure connections on OSX. The remaining issues weren't critical though, and I decided to push the release now, rather than leave the OSX users hanging.

Stable releases should come in a more timely manner from now on.

So, what's new?

### Enough bug fixes to fix... a lot of things

With almost half a year since the last stable version, the list of fixes is very long indeed.

Probably the most important part of MultiMC - network and download functionality - has been improved significantly.

If you still play some very old version of Minecraft, you'll also notice that some mods now behave better - instead of letting java load them, we just stuff everything into the Minecraft jar, just like the old mods expect.

The problem that triggered this release - broken root certificates on OSX - has also been fixed.

No bees were involved in this release.

### Simple modpack support

We've added some simple modpack import and export functionality into this version. You can export instance as minimal zip files using the handy export dialog that lets you pick which files to export and even remembers them for the next time:

<p align="center">
  <img src="/images/export1.png" alt="Export Instance dialog"/>
</p>

And the instance creation dialog lets you pick local and remote pack zip files instead of just Minecraft versions:

<p align="center">
  <img src="/images/import1.png" alt="New Instance from modpack"/>
</p>

This should be expanded upon in the (hopefully) near future.

### Better version lists and java detection

Version lists got a new facelift and now highlight the latest (with a bug icon) and recommended (with a star icon) versions.

<p align="center">
  <img src="/images/version_lists1.png" alt="Improved version lists"/>
</p>

Same applies to the list that presents the detected java versions. The best one detected will be on top of the list. This should make it super easy to decide which one to use.

## The future

Exciting things are coming, at the usual glacial pace and with the ETA of "when it's done" :)

We are hard at work at getting our own package repository running (continuation of QuickMods), along with much better modpack support. The future MultiMC will have this package repository at its core and will use it for more than just mods.

Seeing that FTB is moving to the curse platform, the FTB tracking support will be abandoned when the FTB launcher stops working. The replacement should be import (not tracking) of other launcher instances and direct download and updating of modpack instances from the various platforms out there.

[@peterixxx](https://twitter.com/peterixxx) and [@02JanDal](https://twitter.com/02JanDal)

## Full changelog

### Functional changes

- Old version.json and custom.json version files will be transformed into a minecraft version patch:
  - The process is automated
  - LWJGL entries are stripped from the original file - you may have to re-do LWJGL version customizations
  - Old files will be renamed - .old extension is added
- It's now possible to:
  - Customize, edit and revert builtin version patches (Minecraft, LWJGL)
  - Edit custom version patches (Forge, LiteLoader, other)
- Blocked various environment variables from affecting Minecraft:
  - "JAVA_ARGS",
  - "CLASSPATH",
  - "CONFIGPATH",
  - "JAVA_HOME",
  - "JRE_HOME",
  - "_JAVA_OPTIONS",
  - "JAVA_OPTIONS",
  - "JAVA_TOOL_OPTIONS"
  - If you rely on those in any way, now would be a time to fix that
- Improved handling of LWJGL on OSX (.dylib vs. .jnilib extensions)
- Jar mods are now always put into a generated temporary Minecraft jar instead of being put on the classpath
- PermGen settings:
  - Changed default PermGen value to 128M because of many issues from new users
  - MultiMC now recognizes the Java version used and will not add PermGen settings to Java >= 1.8
- Implemented simple modpack import and export feature:
  - Export allows selecting which files go into the resulting zip archive
  - Only MultiMC instances for now, other pack formats are planned
  - Import is either from local file or URL, URL can't have ad/click/pay gates
- Instance copy doesn't follow symlinks on Linux anymore
  - Still does on Windows because copying symlinks requires Administrator level access
- Instance delete doesn't follow symlinks anymore - anywhere
- MCEdit tool now recognizes MCEdit2.exe as a valid file to runtime
- Log uploads now follow the maximum allowed paste sizes of paste.ee and are encoded properly
- MultiMC now doesn't use a proxy by default
- Running profilers now works on Windows
- MultiMC will warn you if you run it from WinRAR or temporary folders
- Minecraft process ID is printed in the log on start
- SSL certificates are fixed on OSX 10.10.3 and newer - see [explanation](http://www.infoworld.com/article/2911209/mac-os-x/yosemite-10103-breaks-some-applications-and-https-sites.html).

### UI changes

- Version lists:
  - All version lists now include latest and recommended versions - recommended are pre-selected
  - Java version list now sorts versions based on suitability - best on top
  - Forge version list includes the development branch the version came from
  - Minecraft list marks latest release as 'recommended' and latest snapshot as 'latest', if it is newer than the release
- Mod lists:
  - Are updated and sorted after adding mods
  - Browse buttons now properly open the central mods folder
  - Are no longer watching for updates when the user doesn't look at them
  - Loader mod list now recognizes .litemod files as valid mod files
- Improved wording of instance delete dialog
- Icon themes:
  - Can be changed without restarting
  - Added a workaround for icon themes broken in KDE Plasma 5 (only relevant for custom builds)
- Status icons:
  - Included a 'yellow' one
  - Are clickable and link to [help.mojang.com](https://help.mojang.com/)
  - Refresh when the icon theme does
- Changed default console font to Courier 10pt on Windows
- Description text in the main window status bar now updates when Minecraft version is changed
- Inserted blatant self-promotion (Only Minecraft 1.8 and up)
  - This adds a bit of unobtrusive flavor text to the Minecraft F3 screen
- Log page now has a button to scroll to bottom
- Errors are reported while updating the instance in the Version page
- Fixed typos (forge -> Forge)

### Internals

- Massive internal restructuring (ongoing)
- Downloads now follow redirects
- Minecraft window size is now always at least 1x1 pixel (prevents crash from bad settings)
- Better handling of Forge downloads (obviously invalid/broken files are redownloaded)
- All download tasks now only start 6 downloads, using a queue (fixes issues with assets downloads)
- Fixed bugs related to corrupted settings files (settings and patch order file saves are now atomic)
- Updated zip manipulation library - files inside newly written zip/jar files should have proper access rights and timestamps
- Made Minecraft resource downloads more resilient (throwing away invalid/broken index files)
- Minecraft asset import from old format has been removed
- Generally improved MultiMC logging:
  - More error logging for network tasks
  - Added timestamps relative to application start
- Fixed issue with the application getting stuck in a modal dialog when screenshot uploads fail
- Instance profiles and patches are now loaded lazily (speeds up MultiMC start)
- Groups are saved after copying an instance
- MultiMC launcher part will now exit cleanly when MultiMC crashes or is closed during instance launch
