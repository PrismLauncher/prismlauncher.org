---
title: Download Prism Launcher for SteamOS/Steam Deck
eleventyNavigation:
  key: <i class="fa fa-steam-square" aria-hidden="true"></i> Steam Deck
  order: 3
---

<div class="download-content">
  <div class="row">
    <div class="column">
      <div>
        <h1>Steam Deck Download</h1>
        <br>
        <a class="button size-large type-link" href="https://flathub.org/apps/details/org.prismlauncher.PrismLauncher" target="_blank">Install from FlatHub</a>
      </div>
    </div>
    <div class="column">
      <iframe width="692" height="389" src="https://www.youtube.com/embed/M8oqFUl791Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</div>

<div class="infobox top">

## Installation information

It is recommended to install third-party software via Flatpak on the Steam Deck.
This can be done by searching for `Prism Launcher` in the Discover software center, in *Desktop Mode*.

<a href='https://flathub.org/apps/details/org.prismlauncher.PrismLauncher'><img width='240' alt='Download on Flathub' src='https://flathub.org/assets/badges/flathub-badge-en.png'/></a>

After installing Prism Launcher, set it up as usual.
When you are done, open up Steam (still in *Desktop Mode*), click on `Games` in the menubar, and then click on `Add a Non-Steam Game to My Library...`.
There you can find and select `Prism Launcher` and click `ADD SELECTED PROGRAMS`.
Now Prism Launcher should be in your Steam Library.

### Artwork

Now that you have Prism Launcher in your Steam Library, you might want to change the artwork of your Prism Launcher Non-Steam Game, so that it looks better in your library.

#### Examples

![Prism Launcher on the homescreen of the deck](/img/Steam_Deck_PrismLauncher_1.jpg)
![Prism Launcher in the library of the deck](/img/Steam_Deck_PrismLauncher_2.jpg)
![Prism Launcher's page in the deck](/img/Steam_Deck_PrismLauncher_3.jpg)

#### Setting up Artwork

The easiest way to setup artwork on the steam deck is to use [SteamGridDBBoop](https://www.steamgriddb.com/boop).
You can check out [Prism Launcher's SteamGridDB page](https://www.steamgriddb.com/game/5359069) for our official artwork, as well as community-provided artwork.
Alternatively, there also is a [SteamGridDB page of Minecraft](https://www.steamgriddb.com/game/38365).
This page contains a lot of artwork for Minecraft, which can be used for Prism Launcher as well.

Firstly install SteamGridDB Boop on your Steam Deck via the Discover software center.
Next right-click on Prism Launcher in your Start Menu and select "Add to Steam".
After that, open the [SteamGridDB Boop website](https://www.steamgriddb.com/boop) and click on the "Show a test popup" button.
If you see a popup, you can close it and continue. If not, run the following command in a terminal:

```bash
  systemctl restart --user xdg-desktop-portal
```

Then, click on the "Show a test popup" button again. You should now see a popup. If not, try reading the troubleshooting section on the [SteamGridDB Boop website](https://www.steamgriddb.com/boop).

Next Enable the "Enable SteamGridDB Boop" option in the SteamGridDB Boop settings. You should see a green notification saying "BOOP buttons enabled".

Head to your preferred SteamGridDB page and click on the "BOOP" button on each artwork you want to use. It is recommended to set one of each type of artwork so that it looks good in your library. You will then get a popup asking you to select the game you want to add the artwork to. Select Prism Launcher and click "OK".

That's it! You should now see the artwork in your Steam Library.

### <img src="https://raw.githubusercontent.com/intergrav/Branding/main/deckcraft/mark/mark_svg.svg" height="20"> DeckCraft

[DeckCraft](https://modrinth.com/project/deckcraft) is a modpack designed to make it easier to play Minecraft on the Steam Deck. It includes a variety of optimizations, extra features, pre-installed shaders, and more. It works out-of-the-box and doesn't require any manual configuration to start playing.

You can install it through the launcher by heading to `Add Instance`, select the `Modrinth` tab, then press `STEAM` + `X` together to open the keyboard and search for "DeckCraft". After this, select your preferred version and install it.

### Tips and Tricks

- For the best experience, go ahead and enable `Start Minecraft maximized`, and `Close Prism Launcher after game window opens` in the launcher's settings, under the `Minecraft` tab.
- If you want Minecraft to launch without showing Prism Launcher, add `-l <instance-id>` in the launch options for your Prism Launcher Non-Steam Game. If you use this launch option, make sure that `Close Prism Launcher after game window opens` is disabled in the launcher's settings, so that the launcher does not show up when the game is closed. See [CLI launch options](../../wiki/getting-started/command-line-interface/) for more.
- Install a mod that enables controller support. See [Controller Support](../../wiki/getting-started/controller-support) for more.

</div>
