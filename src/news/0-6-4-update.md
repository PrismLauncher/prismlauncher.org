---
title: 0.6.4 - better translation workflow and new FTB API location
author: peterix
date: 2019-01-06
---

This is a release mostly aimed at getting all the small changes and fixes out of the door.

### Changelog

#### New or changed features

- FTB API location has changed

    MultiMC now uses the new location and should keep working.

- Translations have been overhauled, again

    It is now possible to put the translation source `.po` files into the `translations` folder and see changes in MultiMC immediately.

    The new translation workflow is like this:
    * Get a `.po` file from here the [translations repository](https://github.com/MultiMC/MultiMC5-translate).
    * Alternatively, get the `template.pot` and start a new translation based on it.
    * Put it in the `translations` folder.
    * Edit it with [POEdit](https://poedit.net/).
    * See the changes in real time.
    * When done, post the changed files on discord, or github.

    When using a `.po` file, MultiMC logs which strings are missing from the translation on the currently displayed UI screen(s), and which one are marked as fuzzy. This should make it easy to determine what's important.
