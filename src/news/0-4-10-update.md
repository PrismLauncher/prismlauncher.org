---
title: 0.4.10 - Another wifi fix
author: peterix
date: 2016-01-22
---

0.4.9 ran into an another issue with network connections, the recently added bearer plugins causing huge network lag.

### Changelog
- GH-1422: Huge ping spikes while using MultiMC

    Another day, another fix. The bearer plugins added in 0.4.9 didn't really help and we ran into more bugs.

    This time, the presence of the network bearer plugins caused a lot of network lag for people on wifi connections.

    Because this wasn't a problem on the previous version of Qt MultiMC used (5.4.2), I ended up reverting to that. This is a temporary solution until the Qt framework can be rebuilt and retested for every platform without this broken feature.

    The upstream bug is [QTBUG-40332](https://bugreports.qt.io/browse/QTBUG-40332) and despite being closed, it is far from fixed.

Because of the reverted Qt version, OSX 10.7 *might* work again. If it does, please do tell, it would help with figuring out what went wrong there :)

[The full changelog is available on github.](https://github.com/MultiMC/MultiMC5/blob/7ca9f92343e2fb2a15d278b08f7244838e74a5d8/changelog.md)

## The future

Considering the generally huge gaps between the last releases, the future of MultiMC should focus on:

* Work on things that *you*, the users, consider useful.
* Release soon.
* Release often.
* Integrating the existing code written for the previous big features in a sensible way.

We are in the process of moving the existing suggestions from [github](https://github.com/MultiMC/MultiMC5/labels/feature), where they got really messy, to a [much more manageable list on workflowy](https://workflowy.com/s/2EyDMcp7CU).

Once this is complete, we'll post a poll about what should be the focus of future releases. Feel free to review the list(s) and contact us on IRC, reddit, discord or through github issues!

[@peterixxx](https://twitter.com/peterixxx) and [@02JanDal](https://twitter.com/02JanDal)
