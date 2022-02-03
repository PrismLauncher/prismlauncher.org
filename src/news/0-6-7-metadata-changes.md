---
title: 0.6.7 - UI fixes and important metadata news - update required!
author: peterix
date: 2019-08-04
---

The previous release introduced some extra buttons that made the instance window way too big for some displays. This release is aimed at fixing that, along with other UI and performance improvements.

There are some accessibility fixes thrown in too.

**But along with those, we are also disabling the metadata server that older versions of MultiMC depend on**. **This means that older versions will not work.**

This is a much needed change, because the encryption on that domain (v1.meta.multimc.org) costs extra $30 every month for no good reason. The required files now all reside at meta.multimc.org instead.


### New or changed features

- Mod lists are now asynchronous and heavily threaded.

    Basically, both faster and more responsive.

    The changes necessary for this also pave the way for having other sources of mod metadata, and for adding more mod-related features support in general.

- Mod list printed in log has been improved.

    It now also shows disabled mods, and has prefix and suffix that shows if the mod is enabled, and if it is a folder.

- You can now enable and disable mods with the keyboard.

    Toggle with enter.

- Enabling and disabling mods no longer makes the list forget what was selected.

- [GH-358](https://github.com/MultiMC/MultiMC5/issues/358): Switched all the dialog pages from using buttons in layouts to toolbars.

    Toolbar buttons are smaller, and the toolbars can overflow buttons into an overflow space. This allows requiring a lot less space for the windows.

    All of the relevant pages now also have context menus to offset the issues toolbars create when using screen readers.

- Main window instance list is now compatible with screen readers.

    If you have poor or no eyesight, this makes MultiMC usable.

- More instance pages are now visible when the instance is running.

    Mods, version and the like should now be visible, but most of the controls are disabled until the game closes.

- [GH-2550](https://github.com/MultiMC/MultiMC5/issues/2550), [GH-2722](https://github.com/MultiMC/MultiMC5/issues/2722), [GH-2762](https://github.com/MultiMC/MultiMC5/issues/2762): Mod list sorting is much improved.

    You can now sort mods by enabled status.

    Sorting by version actually looks at the versions as versions, not words.

    Sorting by name ignores 'The' prefixes in mod names. For example, 'The Betweenlands' will be sorted as 'Betweenlands'.

    Sorting cascades from 'Enabled' to 'Name' and then 'Version'. This means that if you sort 'Enabled', the enabled and disabled mods are still sorted by name and mods with the same name will be also sorted by version.
