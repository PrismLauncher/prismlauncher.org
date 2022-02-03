---
title: 0.5.1 - Bugfixes.
author: peterix
date: 2017-02-12
---

This release is mainly bugfixes for some of the issues found in 0.5.0.

### Changelog

#### Improvements

- Log uploads now use HTTPS because the [paste.ee](https://paste.ee) site is switching to HTTPS only.

- Console now has the line limit and overflow settings properly set when hidden.

  Before, if you didn't have the console set to show up on launch, it would have some low default values set.
  This meant that you wouldn't get enough of the log when the game crashed.

- [GH-1802](https://github.com/MultiMC/MultiMC5/issues/1802): Log resize is now handled properly.

    The log could end up with many empty lines because the wrong maximum size was used during the resize, potentially losing some lines.

- [GH-1807](https://github.com/MultiMC/MultiMC5/issues/1807): Fixed 'loggging' typo in console overflow notification.

- [GH-1801](https://github.com/MultiMC/MultiMC5/issues/1801): Launch script is no longer dumped into MultiMC's log on instance launch.

- [GH-1065](https://github.com/MultiMC/MultiMC5/issues/1065): Use of 'folder' and 'directory' in the UI has been unified to 'folder'.

- [GH-1788](https://github.com/MultiMC/MultiMC5/issues/1788): A problem with missing translation templates in the setup wizard pages has been fixed.

    It should be possible to translate everything again.

- [GH-1789](https://github.com/MultiMC/MultiMC5/issues/1789): Deletion of custom icon has been fixed.

    It wasn't possible to do it from the MultiMC icon selection dialog.

- [GH-1790](https://github.com/MultiMC/MultiMC5/issues/1790): While using the system theme on macOS, dialogs had wrong colors.

    The wrong colors are now only visible immediately after changing the theme to 'System'. An application restart will fix the colors.

    The underlying issue cannot be easily fixed.

    [See the Qt upstream bug.](https://bugreports.qt.io/browse/QTBUG-58268)

- [GH-1793](https://github.com/MultiMC/MultiMC5/issues/1793): The Java wizard page did not show up as expected when moving MultiMC between different computers.

    The page should now show up as expected.

- [GH-1794](https://github.com/MultiMC/MultiMC5/issues/1794): Copied FTB instances did not work properly.

    The instance type of the copy was not set, causing it to not be usable.
