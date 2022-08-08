---
eleventyNavigation:
  key: FAQ
  parent: Overview
  order: 3
---

# Frequently asked questions

## Why did our community choose to fork?

For some more insight, please refer to: [Moving on](/news/moving-on)

PolyMC was forked from the MultiMC project in late 2021. This was primarily a result of continuing disagreements between a portion of the community, and MultiMC’s lead maintainer, mainly surrounding the topics of 3rd party packaging and re-distribution.

Many users, especially across Linux, and other Unix-like platforms, which lacked officially built packages were eventually unable to even use newer self-built versions MultiMC. This was due to the launcher’s source code not building with the necessary API keys for the successful authentication of Microsoft Accounts.

The philosophy behind the PolyMC project, and wider community as a whole, is to not take a hostile stance on those who wish to use, modify, or re-distribute our software in a way that works for them. In-keeping with these values, the source code of the launcher is distributed under the GNU General Public License Version 3.

### What does this mean for the future?

PolyMC looks to be accessible to everyone on all platforms, so no one is left behind. We do this by officially maintaining packages across a wide range of operating systems such as Windows, macOS, and both native as well as Flatpak and AppImage releases on Linux. And, where there are gaps in official distribution, 3rd party builds will always welcome in our community.

Furthermore, while the MultiMC project is stated to focus on “predictability” without seeking to incorporate any “flashy features”, PolyMC is already shaping up to be quite the opposite. This can already be seen in our recent 1.1.0 release, which brings our new in-launcher mod installer. And this, is just the first of many new changes and features to come. PolyMC 1.4.0 also added the Mod Updater.

### Theming not working

PolyMC switched to Qt 6 in the 1.4.0 update.  
This means that some themes, like Breeze from KDE will not work.  
If you have this issue, check if your theme has a Qt 6 version. If it does not, you need to switch to a Qt 5 build.  
You can find a Qt 5 build on the [download page](https://polymc.org/download/)  
If you are using Gnome, install the `adwaita-qt6` and `qt6ct` packages (package names might differ between distros), then run `qt6c` from the terminal and select `Adwaita` as the theme. PolyMC should now use it.
