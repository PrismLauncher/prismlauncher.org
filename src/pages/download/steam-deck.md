---
layout: ../../layouts/DownloadLayout.astro
title: Steam Deck Download
platform: steam-deck
description: Download Prism Launcher on Steam Deck
---

## Video Guide

<div class="flex justify-center">
  <iframe
    class="w-full max-w-2xl aspect-video rounded-lg"
    src="https://www.youtube.com/embed/M8oqFUl791Q?si=zZVkmKFTsZb9JRAF"
    title="Prism Launcher on Steam Deck installation guide"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

## Installation Instructions

### Flathub

The easiest way to install Prism Launcher on Steam Deck is through the Discover app store, which comes pre-installed on SteamOS.

1. Switch to Desktop Mode (hold power button, select "Switch to Desktop")
2. Open the Discover app
3. Search for "Prism Launcher"
4. Click Install

### Terminal

You can also install via terminal in Desktop Mode:

```bash
flatpak install flathub org.prismlauncher.PrismLauncher
```

### Add to Steam library

After installation, you can add Prism Launcher as a non-Steam game to access it from your Steam library in Game mode. When in Desktop mode, open up Steam and click on `Games` in the menu bar. Then click on `Add a Non-Steam Game to My Library...`. There you can find `Prism Launcher` and click `ADD SELECTED PROGRAMS`. Now Prism Launcher should be in your Steam library.

### Artwork

If you've added Prism Launcher to your Steam library, you might want to add artwork to the non-Steam game so that it looks better in your library.

The easiest way to set up artwork on the Steam Deck is to use [SteamGridDBBoop](https://www.steamgriddb.com/boop). You can check out [Prism Launcher's SteamGridDB page](https://www.steamgriddb.com/game/5359069) for our official artwork and also community-provided artwork. Alternatively, there is a [SteamGridDB page of Minecraft](https://www.steamgriddb.com/game/38365) if you just want Minecraft artwork.

1. Install SteamGridDB Boop on your Steam Deck via the Discover software center.
2. Right-click on Prism Launcher in your Start Menu and select "Add to Steam".
3. After that, open the [SteamGridDB Boop website](https://www.steamgriddb.com/boop) and click on "Show a test popup" button.
4. If you see a popup, you can close it and continue. If not, run `systemctl restart --user xdg-desktop-portal` in a terminal.
5. Then, click the button again. You should now see a popup. If not, try reading the troubleshooting section on the [SteamGridDB Boop website](https://www.steamgriddb.com/boop).
6. Enable the "Enable SteamGridDB Boop" option in the SteamGridDB Boop settings. You should see a green notification saying "BOOP buttons enabled".
7. Head to your preferred SteamGridDB page and click on the "BOOP" button on each artwork you want to use. It is recommended to set one of each type of artwork so that it looks good in your library. You will then get a popup asking you to select the game you want to add the artwork to. Select Prism Launcher and click "OK".

That's it! You should now see the artwork in your Steam Library.

## Screenshots

<div class="grid grid-cols-1 md:grid-cols-2 gap-2 not-prose">
  <img
    src="/img/Steam_Deck_PrismLauncher_1.jpg"
    alt="Prism Launcher running on Steam Deck - Main interface"
    class="rounded-lg"
  />
  <img
    src="/img/Steam_Deck_PrismLauncher_2.jpg"
    alt="Prism Launcher running on Steam Deck - Instance management"
    class="rounded-lg"
  />
  <img
    src="/img/Steam_Deck_PrismLauncher_3.jpg"
    alt="Prism Launcher running on Steam Deck - Mod installation"
    class="rounded-lg"
  />
</div>
