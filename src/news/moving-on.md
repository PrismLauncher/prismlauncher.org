---
title: Moving on
description: The origins of PolyMC are plagued by controversy. Let's move on from this.
date: 2022-03-06
tags:
  - multimc
---

PolyMC emerged out of frustration with the MultiMC project and therefore brought controversy with it.
In short, the original founders of PolyMC had disagreements with the maintainer of MultiMC and the project's direction.
These disagreements were turned into a takeover of packaging on Arch Linux by the PolyMC founders, something that, understandably, the [MultiMC maintainers took as sabotage][gh-poly-meta-sabotage].
After MultiMC [dropped support for third-party packaging][mmc-drops-aur], the seeds for PolyMC were laid.

As a side note, we want to mention that we do not approve the actions of community members that used these controversies as a basis to harass MultiMC developers.
Please refrain from brigading other communities.
It only causes harm on both sides.

PolyMC's inception is very controversial by its very nature.
The founders have decided to sublicense PolyMC under the terms of the [GNU General Public License 3][gpl3] (GPL-3), which made it impossible for MultiMC to take contributions, without re-licensing to GPL-3 as well.
As a result the MultiMC team have decided to burn bridges with PolyMC.
This was manifested after access to the metadata service, provided by MultiMC, was [blocked for all PolyMC users][gh-poly-meta].
All versions prior to 1.0.6 do not work anymore, as they try to reach MultiMC servers instead of our own.

In an effort to prepare for our upcoming 1.1.0 release, we wanted to contact the MultiMC maintainer to see, if they want to be credited in our documentation.
Sadly, our request was dismissed, and most of our team members were banned from the official MultiMC Discord server for being associated with PolyMC.

<img alt="Screenshot of public chat with MultiMC maintainer" src="/img/news/moving-on/discord.png" style="width: 40em">

This has sparked many internal discussions both at PolyMC and MultiMC.
In the end, we concluded that we will be moving on from our origins as a packaging-friendly fork of MultiMC.

In our upcoming 1.1.0 release, you will be able to use new features that will differentiate PolyMC from MultiMC.
The major new feature is the integrated mod downloader that supports Modrinth and CurseForge mods.
We also plan to clean the codebase, remove obscure or old features and cruft in an effort to make it easier for new contributors to start working on PolyMC.

Additionally, we have reorganized PolyMC since its inception to be more community-centric.
One of the founders has stepped down as a maintainer, and we have formed the *PolyMC Core Team*.
You can read more about it in [this blogpost](../new-maintainers/).

We want to decouple this project from its controversial origins and start work on a powerful Minecraft launcher.
While we are working on getting 1.1.0 out, check out our future plans:

**Sneak peek of future plans**:

- Rewrite of metadata generators, to make them easier to work with. See progress over on [PolyMC/polymorphosis][gh-polymorphosis]
- Potential rewrite of the launch-mechanism for Minecraft. This will give future alternative launchers the tools to build their own. See progress over on [PolyMC/PolyMC#167][rfc-0001]

If you want to be involved in PolyMC, check out the following links:

- [PolyMC GitHub Organization][gh-org]
- [PolyMC Source Code][gh-poly]
- [PolyMC Discord server][discord]
- [PolyMC Matrix Space][matrix-space] (bridged with Discord)

---

> Never dig straight down!

~ PolyMC Core Team

[discord]: https://discord.com/invite/xq7fxrgtMP
[gh-org]: https://github.com/PolyMC
[gh-poly]: https://github.com/PolyMC/PolyMC
[gh-poly-meta]: https://github.com/PolyMC/PolyMC/issues/75
[gh-poly-meta-sabotage]: https://github.com/PolyMC/PolyMC/issues/75#issuecomment-1023571223
[gh-polymorphosis]: https://github.com/PolyMC/polymorphosis
[gpl3]: https://en.wikipedia.org/wiki/GNU_General_Public_License
[matrix-space]: https://matrix.to/#/#polymc:matrix.org
[mmc-drops-aur]: https://www.reddit.com/r/linux_gaming/comments/riitbs/multimc_is_dropping_all_support_for_aur_packages/
[rfc-0001]: https://github.com/PolyMC/PolyMC/issues/167
