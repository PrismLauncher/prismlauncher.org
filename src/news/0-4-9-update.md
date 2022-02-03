---
title: 0.4.9 - the Windows wifi fix.
author: peterix
date: 2016-01-20
---

0.4.8 ran into an issue with network connections not being detected properly and this is a fix for that, along with a tiny log upload improvement.

### Changelog

- GH-1408: MultiMC 0.4.8 doesn't work on wireless connections.

    This is especially the case on Windows. If you already updated to 0.4.8, you will need to do a manual update, or use a wired connection to do the update.

    The issue was caused by a change in the underlying framework (Qt), and MultiMC not including the network bearer plugins. This made it think that the connection is always down and not try to contact any servers because of that.

    The upstream bug is [QTBUG-49267](https://bugreports.qt.io/browse/QTBUG-49267).

- GH-1410: MultiMC crashes on launch on OS X 10.7.5

    OSX 10.7.x is no longer supported by Apple and I do not have a system to test and fix this.

    So, this is likely **NOT** going to be fixed - please update your OS if you are still running 10.7.

- GH-1362: When uploading or copying the Minecraft log, the action is logged, including a full timestamp.

[The full changelog is available on github.](https://github.com/MultiMC/MultiMC5/blob/33b6222f9ff658e7ce3095c8b96967ba14b72804/changelog.md)

## The future

Considering the generally huge gaps between the last releases, the future of MultiMC should focus on:

* Work on things that *you*, the users, consider useful.
* Release soon.
* Release often.
* Integrating the existing code written for the previous big features in a sensible way.

We are in the process of moving the existing suggestions from [github](https://github.com/MultiMC/MultiMC5/labels/feature), where they got really messy, to a [much more manageable list on workflowy](https://workflowy.com/s/2EyDMcp7CU).

Once this is complete, we'll post a poll about what should be the focus of future releases. Feel free to review the list(s) and contact us on IRC, reddit, discord or through github issues!

[@peterixxx](https://twitter.com/peterixxx) and [@02JanDal](https://twitter.com/02JanDal)
