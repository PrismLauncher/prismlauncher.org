---
eleventyNavigation:
  key: FAQ
  parent: Overview
  order: 3
---

# Frequently asked questions

## Is PolyMC still safe to use?

PolyMC versions **1.4.2 and below are probably safe to continue using** for now atleast. With that said, **please do not update the lancher**, and it is advised that you change a few things within the launcher just to be safe.

In the PolyMC settings page, under the **APIs** tab, please replace the following:

> APIs > Services...

**Metadata Server:** `https://meta.prismlauncher.org/v1/`

> APIs > API Keys...

**Microsoft Authentication:** `c36a9fb6-4f2a-41ff-90bd-ae7cc92031eb`

## When will Prism Launcher be available?

*Soon*™ (Probably within the next few days...)

## Why did our community choose to fork?

*For some more insight, please refer to: [Moving on](/news/moving-on)*

Prism, both the project, and the community surrounding it, descends directly from PolyMC, which was forked from the MultiMC project in late 2021. 

The original fork was primarily a result of continuing disagreements between a portion of the community, and MultiMC’s lead maintainer, mainly surrounding the topics of 3rd party packaging and re-distribution. Many users of the time, especially across Linux, and other Unix-like platforms, were left dissatisfied by MultiMC's policy of restricting self-built packages, by not allowing the launcher to build with the necessary API keys for the successful authentication of Microsoft Accounts

Prism Launcher itself, was born in October 2022 due to a hostile takeover of the PolyMC project by a lead maintainer. Our aim as a community is to both preserve, and continue the work we started with PolyMC, and to provide a welcoming space for all those who wish to do the same.

And as it was before, it remains a key philosophy behind the Prism project to not take a hostile stance on those who wish to use, modify, or re-distribute our software in a way that works for them. In-keeping with these values, the source code of the launcher will continue to be distributed under the GNU General Public License Version 3.

### What does this mean for the future?

Prism Launcher looks to be accessible to everyone on all platforms, so no one is left behind. We do this by officially maintaining packages across a wide range of operating systems such as Windows, macOS, and both native as well as Flatpak and AppImage releases on Linux. And, where there are gaps in official distribution, 3rd party builds will always welcome in our community.

Furthermore, while the MultiMC project is stated to focus on “predictability” without seeking to incorporate any “flashy features”, Prism will continue to do the complete opposite, with many new and exciting features already on the horizon.
