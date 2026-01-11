---
title: "Prism Launcher Release 10.0.2, now available"
description: "Here we go again"
date: 2026-01-11
slug: "release-10.0.2"
release_version: "10.0.2"
minimum_macos_version: 12.0.0
macos_file_extension: zip
macos_signature: reidRvjXwV4oPRPjNgF5v+w1mATAlj1hzYueJC/hG4AfWenlMvI/dl5nzF7xCaSqCg/68gdrqFcqzYtGEycSDQ==
tags:
  - Release
---

Hi again!

This is another small release to sort out more bugs with 10.0.0 and 10.0.1 as well as some longer standing issues!

As always, you can [grab the latest download here](/download). Until next time! 🌈

## Fixed

- Check that mouse press is inside view rectangle of CheckComboBox by [@Octol1ttle](https://github.com/Octol1ttle) in [#4681](https://github.com/PrismLauncher/PrismLauncher/pull/4681)
- Disable tooltips if using gamescope / Steam Deck. by [@mdeneen](https://github.com/mdeneen) in [#4096](https://github.com/PrismLauncher/PrismLauncher/pull/4096)
- Fix environment variables always being discarded and custom commands always being overriden by [@TheKodeToad](https://github.com/TheKodeToad) in [#4718](https://github.com/PrismLauncher/PrismLauncher/pull/4718)
- Fix shaderpacks folder being hidden by [@TheKodeToad](https://github.com/TheKodeToad) in [#4707](https://github.com/PrismLauncher/PrismLauncher/pull/4707)
- Skip asking for offline name when using offline account by [@Octol1ttle](https://github.com/Octol1ttle) in [#4680](https://github.com/PrismLauncher/PrismLauncher/pull/4680)
- fix curseforge import by [@Trial97](https://github.com/Trial97) in [#4699](https://github.com/PrismLauncher/PrismLauncher/pull/4699)
- fix jpg icons by [@Trial97](https://github.com/Trial97) in [#4706](https://github.com/PrismLauncher/PrismLauncher/pull/4706)
- fix modrinth environments filter by [@Trial97](https://github.com/Trial97) in [#4704](https://github.com/PrismLauncher/PrismLauncher/pull/4704)

## Removed

- remove curseforge api key validation by [@Trial97](https://github.com/Trial97) in [#4700](https://github.com/PrismLauncher/PrismLauncher/pull/4700)
- various demons from the codebase
