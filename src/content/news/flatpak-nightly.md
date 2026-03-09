---
title: Test the future of Prism with Flatpak
description: Updates every night!
date: 2026-01-28
tags:
  - News
---

As of today, our more adventurous users can help test the latest changes to the launcher with our very own [Flatpak repository](https://github.com/PrismLauncher/flatpak)!

This is meant to provide an experience similar to our current [nightly builds](/wiki/development/development-builds/), but with easier installation and compatibility for all distributions of Linux. After installing it, you can play with and test out new features and fixes our team has been working on before anyone else - with updates every night :)

## How can I use it?

For most users, you can open [this link](https://flatpak.prismlauncher.org/prismlauncher-nightly.flatpakref) in your software center of choice. It will automatically setup the Flathub remote, our remote, and install the `nightly` branch of Prism we provide.

You can also use the following terminal snippet to do the same:

```
$ flatpak install https://flatpak.prismlauncher.org/prismlauncher-nightly.flatpakref
```

Keep in mind, this _won't_ overwrite the stable release of Prism. You can explictly use either with `flatpak run --branch=(stable | nightly) org.prismlauncher.PrismLauncher`. You can also choose which version to make the default with `flatpak make-current`:

```
$ flatpak make-current org.prismlauncher.PrismLauncher (stable | nightly)
```

## What if I come across issues?

Due to these being in-development builds, bugs, crashes, and other issues are to be expected at times. See the ["Feedback and Bugs"](/wiki/overview/feedback-and-bugs/) section of our wiki on how and where to report these. Your help here is greatly appreciated, and will directly help _us_ in making our releases faster and more stable.

Until next time! 🌈 🤠
