---
title: 0.4.11 - OSX 10.7 fix and workaround for Minecraft 1.9 compatibility
author: peterix
date: 2016-02-28
---

This release contains mainly a workaround for Minecraft 1.9 support and returned support for OSX 10.7.

### Changelog

- GH-1410: MultiMC crashes on launch on OSX 10.7

    MultiMC didn't work on OSX 10.7 because of an oversight in build server setup. This has been fixed.

- GH-1453: Minecraft 1.9 snapshots didn't download and launch properly

    This has been causes by a change on Mojang servers - the data is now stored in a different location and the files describing the releases have a different format. The required changes on MultiMC side aren't complete yet, but it's enough to get snapshots working.

    Full support for the new version file format will come in the next release.

- MultiMC version file format was simplified

    Some undocumented and unused features were removed from the format. Mostly version patches that removed libraries, advanced library application and merging rules, and things of similar nature. If you used them, you used an undocumented feature that is impossible to reach from the UI.

#### Improvements

- GH-1502: When the locally cached Minecraft version was deleted, the instance that needed it would have to be started twice

    This was caused by generating the list of launch instructions before the update. It is now fixed.

- Version file issues are now reported in the instance's `Version` page.

    This doesn't apply to every possible issue yet and will be expanded upon in the next release.

[The full changelog is available on github.](https://github.com/MultiMC/MultiMC5/blob/a3cd3d5ff18215a475ed6b5f231f3f02ccd668f7/changelog.md)

## The future

Considering the generally huge gaps between the last releases, the future of MultiMC should focus on:

* Work on things that *you*, the users, consider useful.
* Release soon.
* Release often.
* Integrating the existing code written for the previous big features in a sensible way.

All the suggestions have been processed and are [now available on the MultiMC workflowy list](https://workflowy.com/s/2EyDMcp7CU).

This release will be shortly followed by one that further cleans up the version file code and brings it in line with the latest changes from Mojang. You can look at the planned changes [here](https://workflowy.com/s/4BkdTJIsPm).

The poll about what should be the focus of future releases is not up yet, so feel free to review the list(s) and contact me on IRC, reddit, discord or through github issues.

[@peterixxx](https://twitter.com/peterixxx)
