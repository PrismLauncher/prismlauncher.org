---
title: 0.6.1 Released!
author: peterix
date: 2018-01-29
---

This is a small bugfix update for some of the problems found since 0.6.0.

### Changelog

#### New or changed features

- [GH-2087](https://github.com/MultiMC/MultiMC5/issues/2087): The version page now has a button that will download all the necessary files without launching the game.

#### Bugfixes

- Several issues related to bad URLs returned by the Curse servers have been fixed.

    The Curse platform does not use valid URLs according to [RFC 3986, section 2](https://tools.ietf.org/html/rfc3986#section-2) by including spaces and UTF-8 characters without percent encoding them.
    MultiMC has been improved to handle these invalid URLs and report errors in case other invalid URLs are encountered.
    This affected pretty much all modpack imports. You may want to reimport them if you were affected by this.

- [GH-1780](https://github.com/MultiMC/MultiMC5/issues/1780), [GH-2102](https://github.com/MultiMC/MultiMC5/issues/2102), [GH-2103](https://github.com/MultiMC/MultiMC5/issues/2103): Multiple issues with the build system and packaging on linux have been fixed.

    - Installed libraries now no longer have `RPATH` set and have the correct file permissions when using the `lin-system` layout.
    - Installation using the `lin-bundle` layout has been fixed on platforms that use position independent code.
    - `CMAKE_INSTALL_PREFIX` and `DESTDIR` now behave as expected on linux platforms.

- MultiMC no longer logs the process environment and launch scripts to its log files.

- [GH-2089](https://github.com/MultiMC/MultiMC5/issues/2089): Mention of instance tracking has been removed from the deletion confirmation dialog.

- [GH-2087](https://github.com/MultiMC/MultiMC5/issues/2087): The obsolete 'revert to vanilla' logic that was previously applied to versions has been removed.

    This should remove some confusing situations that could happen while changing and manipulation instance versions.

- The temporary `Minecraft.jar` is now removed from the instance after it stops running.

- [GH-2119](https://github.com/MultiMC/MultiMC5/issues/2119): The main instance view scrollbar now correctly updates when the window is resized without changing the number of icons that can fit into it horizontally.
