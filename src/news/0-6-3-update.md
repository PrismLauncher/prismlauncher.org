---
title: 0.6.3 - The Big Sync
author: peterix
date: 2018-12-26
---

This is a release mostly aimed at getting all the small changes and fixes out of the door.

### Changelog

#### Potentially breaking changes

- Local libraries are only loaded from inside the instances now.

    Before, MultiMC allowed loading local libraries from the main `libraries` folder.
    This in turn allowed existence of instances which could not be transported from one installation of MultiMC to another.

    GH-2475: A bug that allowed the launch to continue with missing local libraries has also been fixed.

    Effectively, you will get errors from launching such instances. You can fix the errors by copying the libraries to the locations indicated in the error log.

#### New or changed features

- FTB import now has support for third party modpack codes.

    Better late than never?

- Instance creation can now be interrupted / aborted.

- [GH-2053](https://github.com/MultiMC/MultiMC5/issues/2053): You can now inspect and change the `servers.dat` file from MultiMC.

- MultiMC now uses the https protocol for many more network requests.

- [GH-2352](https://github.com/MultiMC/MultiMC5/issues/2352): There is now a button to open the `.minecraft` folder inside the selected instance.

- [GH-2232](https://github.com/MultiMC/MultiMC5/issues/2232): MultiMC can now use `.gif` icons (not animated).

- [GH-2101](https://github.com/MultiMC/MultiMC5/issues/2101): Instance renaming is now done inline, in the actual instance list.

- [GH-2452](https://github.com/MultiMC/MultiMC5/issues/2452): When deleting a group, MultiMC asks for confirmation.

- [GH-1552](https://github.com/MultiMC/MultiMC5/issues/1552): PermGen is no longer shown when it's not appropriate (java 8 and up).

- [GH-2144](https://github.com/MultiMC/MultiMC5/issues/2144): When changing versions of a component like Forge, the current version is marked with `(installed)`.

- [GH-2374](https://github.com/MultiMC/MultiMC5/issues/2374): World list has been improved:

    - Alternating line background colors have been added.
    - The world game type is now shown in a column.

- [GH-2384](https://github.com/MultiMC/MultiMC5/issues/2384): When installing a mod, existing mod with the same file name will be replaced.

- The background cat sometimes wears a silly hat.

#### Bugfixes

- [GH-2252](https://github.com/MultiMC/MultiMC5/issues/2252): Fixed odd drag and drop behaviour on Windows

    Drag and drop of URLs from a browser locked up the browser. This needs further fixes on macOS.

- Instance naming fixes:

    - [GH-2355](https://github.com/MultiMC/MultiMC5/issues/2355): Whitespace prefix or suffix is no longer allowed.
    - [GH-2238](https://github.com/MultiMC/MultiMC5/issues/2238): Newlines in instance names are no longer allowed either.

- [GH-2412](https://github.com/MultiMC/MultiMC5/issues/2412): MultiMC no longer leaves behind zombie processes after launch on linux.

- [GH-2382](https://github.com/MultiMC/MultiMC5/issues/2382): Version filter for the forge/liteloader version lists was not matching the whole version name.

- [GH-2488](https://github.com/MultiMC/MultiMC5/issues/2488): More issues with broken relative URL redirection in Qt have been fixed.

- Some memory leaks of downloaded data have been fixed.

- MultiMC now handles instance groups and instance group saving better.

    Long deleted groups no longer persist in the group list.

- [GH-2467](https://github.com/MultiMC/MultiMC5/issues/2467): Broken (and nonsensical) sorting indicators have been removed from the versions page header.
