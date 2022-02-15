---
title: Moving on
description: The origins of PolyMC are plagued by controversy. Let's move on from this.
date: 2022-02-15
tags:
  - multimc
---

PolyMC emerged out of frustration with the MultiMC project and therefore brought controversy with it.
In short, the original founders of PolyMC had disagreements with the maintainer of MultiMC and the project's direction.
These disagreements were turned into a takeover of packaging on Arch Linux by the PolyMC founders.
After MultiMC has [dropped support for third-party packaging][mmc-drops-aur], the seeds for PolyMC were laid.

PolyMC's inception is very controversial by its very nature.
The founders have decided to sublicense PolyMC under the terms of the [GNU General Pubic License 3][gpl3] (GPL-3), which made it impossible for MultiMC to take contributions, without re-licensing to GPL-3 as well.
As a result the MultiMC team have decided to burn bridges with PolyMC.
This was manifested after access to the metadata service, provided by MultiMC, was [blocked for all PolyMC users][gh-poly-meta].
All versions prior to 1.0.6 do not work anymore, as they are trying to reach MultiMC servers instead our own.

In an effort to prepare for our upcoming 1.1.0 release, we wanted to contact the MultiMC maintainer to see if they want to be credited in our documentation.
Sadly our request was dismissed and one of our team members was banned from the official MultiMC Discord server for being associated with PolyMC.

<div class="center">
    <img alt="Screenshot of public chat with MultiMC maintainer" src="/assets/img/news/moving-on/discord.png" class="img-constrained">
</div>

This has sparked many internal discussions both at PolyMC as well as MultiMC.
As MultiMC will be introducing a [contributor license agreement (CLA)][cla] we have decided that we have to move on from our origins as a MultiMC fork.

<div class="center">
    <img alt="Screenshot of CLA announcement by MultiMC maintainer" src="/assets/img/news/moving-on/discord-cla.png" class="img-constrained">
</div>

Once this CLA is in place we won't be able to take code from MultiMC anymore, which is why we also won't associate with it anymore.
PolyMC already has a few unique upcoming features, like the integrated mod downloader that supports Modrinth and CurseForge mods.
We also plan to clean-up the codebase, remove obscure or old features and cruft in an effort to make it easier for new contributors to start working on PolyMC.

Additionally we have reorganized PolyMC, since its inception.
One of the founders has stepped down as a maintainer and we have formed the *PolyMC Core Team*.
You can read more about it in [this blogpost](../newmaintainers/).
We hope we can decouple this project from its controversial origins and start work on a powerful Minecraft launcher.
In the meantime check out our upcoming changes:

**Sneak peak of upcoming changes**:
 - Rewrite of metadata generators, to make them easier to work with. See progress over on [PolyMC/polymorphosis][gh-polymorphosis]
 - Potential rewrite of the launch-mechanism for Minecraft. This will give future alternative launchers the tools to build their own. See progress over on [PolyMC/PolyMC#167][rfc-0001]

If you want to be involved in PolyMC, check out the following links:

- [PolyMC GitHub Organization][gh-org]
- [PolyMC Source Code][gh-src]
- [PolyMC Discord server][discord]
- [PolyMC Matrix Space][matrix-space] (bridged with Discord)

---

> Never dig straight down!

~ PolyMC Core Team

[cla]: https://en.wikipedia.org/wiki/Contributor_License_Agreement
[discord]: https://discord.com/invite/xq7fxrgtMP
[gh-org]: https://github.com/PolyMC
[gh-poly]: https://github.com/PolyMC/PolyMC
[gh-poly-meta]: https://github.com/PolyMC/PolyMC/issues/75
[gh-polymorphosis]: https://github.com/PolyMC/polymorphosis
[gpl3]: https://en.wikipedia.org/wiki/GNU_General_Public_License
[matrix-space]: https://matrix.to/#/#polymc:polymc.org
[mmc-drops-aur]: https://www.reddit.com/r/linux_gaming/comments/riitbs/multimc_is_dropping_all_support_for_aur_packages/
[rfc-0001]: https://github.com/PolyMC/PolyMC/issues/167

