---
eleventyNavigation:
  key: FAQ
  parent: Overview
  order: 3
---

# Frequently asked questions

## Why did our community choose to fork?

*For some more insight, please refer to: [Moving on](/news/moving-on) and [Release 5.0](/news/release-5.0)*

Prism, both the project, and the community surrounding it, descends directly from PolyMC, which was forked from the MultiMC project in late 2021.

The original fork was primarily a result of continuing disagreements between a portion of the community, and MultiMC’s lead maintainer, mainly surrounding the topics of 3rd party packaging and re-distribution. Many users of the time, especially across Linux, and other Unix-like platforms, were left dissatisfied by MultiMC's policy of restricting self-built packages, by not allowing the launcher to build with the necessary API keys for the successful authentication of Microsoft Accounts.

Prism Launcher itself, was born in October 2022 due to a hostile takeover of the PolyMC project by a lead maintainer. Our aim as a community is to both preserve, and continue the work we started with PolyMC, and to provide a welcoming space for all those who wish to do the same.

And as it was before, it remains a key philosophy behind the Prism project to not take a hostile stance on those who wish to use, modify, or re-distribute our software in a way that works for them. In-keeping with these values, the source code of the launcher will continue to be distributed under the GNU General Public License Version 3.

### What makes Prism different?

Prism Launcher looks to be accessible to everyone on all platforms, so no one is left behind. We do this by officially maintaining packages across a wide range of operating systems such as Windows, macOS, and both native as well as Flatpak and AppImage releases on Linux. And, where there are gaps in official distribution, 3rd party builds will always welcome in our community.

Speaking of community; inclusivity is Prism's middle name (not literally)! No matter who you are, please feel free to join and interact with us on our social channels, or even over on GitHub. [Contribution is always appreciated](get-involved).

Furthermore, while the MultiMC project is stated to focus on “predictability” without seeking to incorporate any “flashy features”, Prism will continue to do the complete opposite, with many new and exciting features already on the horizon. Recent releases have already implemented many stand-out features, such as in-launcher mod and modpack updating capabilities.

## Where can I get Prism Launcher?

Prism Launcher is officially available for download. Grab it [here](/download)!

If you don't see Prism available for your platform yet, please be patient. Trust that the devs are hard at work, and hope to have it available for download within the coming days.

### Can I transfer my instances from MultiMC or PolyMC?

Absolutely! It's quick and easy to get set up with all of your favourite mods, worlds, resource packs, and modpacks from before. 

To find out how, [please see here](/wiki/getting-started/migrating-multimc).

## Can I keep using PolyMC? Is it safe?

If modified, PolyMC versions **1.4.2 and below are probably safe to continue using** for now. With that said, **please do not update PolyMC**, as the security of future versions cannot be guaranteed.

Prism Launcher is brought to you by the same trusted team beind PolyMC, and is available now across many platforms. We do encourage that you make the switch as soon Prism becomes available to you.

### Users who wish to keep using PolyMC should change a few settings to ensure security...

In the PolyMC settings page, under the **APIs** tab, please replace the following:

> APIs > Services...

**Metadata Server:** `https://meta.prismlauncher.org/v1/`

> APIs > API Keys...

**Microsoft Authentication:** `c36a9fb6-4f2a-41ff-90bd-ae7cc92031eb`
