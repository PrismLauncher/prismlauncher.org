---
title: 0.6.5 - translation UI and legacy sound fixes
author: peterix
date: 2019-02-20
---

Finalizing the translation workflow improvements and adding fixes for sounds missing in old game versions.

### New or changed features

- UI for the language settings has been unified across the application

- GH-2209: Sounds in old (pre-1.6) versions should now work again

    The launcher now downloads the correct assets and reconstructs the `resources` folder inside instances. This mirrors the same fix implemented in vanilla.

    Also, a minor issue with the reconstruction being done twice per launch has been fixed.
