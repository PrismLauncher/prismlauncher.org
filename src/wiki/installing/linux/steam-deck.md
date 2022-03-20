---
eleventyNavigation:
  key: Steam Deck
  parent: Linux
  order: 6
---
# <img src="https://www.vectorlogo.zone/logos/steampowered/steampowered-icon.svg" height="20"/> Steam Deck / SteamOS

## Video Tutorials
<iframe width="692" height="389" src="https://www.youtube.com/embed/UTVBqyvFCV8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  
<iframe width="692" height="389" src="https://www.youtube.com/embed/6E2Enr5S78k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

It is recommended to install third-party software via Flatpak on the Steam Deck.
This can be done by searching for `PolyMC` in the Discover software center in *Desktop Mode*.

<a href='https://flathub.org/apps/details/org.polymc.PolyMC'><img width='240' alt='Download on Flathub' src='https://flathub.org/assets/badges/flathub-badge-en.png'/></a>

After installing PolyMC, set it up as usual.
When you are done open up Steam (still in *Desktop Mode*), click on `Games` in the menubar and then click on `Add a Non-Steam Game to My Library...`.
There you can find and select `PolyMC` and click `ADD SELECTED PROGRAMS`.
Now you should have PolyMC in your Steam Library.

## Artwork

Now that you have PolyMC in your Steam Library you might want to change the artwork of your PolyMC Non-Steam Game so that it looks better in your library.

### Examples

<img src="/img/Steam_Deck_PolyMC_1.jpg" height="240">
<img src="/img/Steam_Deck_PolyMC_2.jpg" height="240">
<img src="/img/Steam_Deck_PolyMC_3.jpg" height="240">
<img src="https://i.imgur.com/WXFkxCw.png" height="240">

### Setting up Artwork

You first need to find artwork for PolyMC.
One option is to check out [PolyMC's SteamGridDB page](https://www.steamgriddb.com/game/5321639) for our official artwork, as well as community-provided artwork.
Alternatively there also is a [SteamGridDB page of Minecraft](https://www.steamgriddb.com/game/38365).
In any case, select the artwork you like and download them onto your Steam Deck.

First we will set the **background** (also called hero in SteamGridDB) and the **logo**, in desktop mode go to your steam library and select the PolyMC Non-Steam Game, right click at the top and select `Set Custom Background`.

<img src="https://i.imgur.com/jaqjRob.png" height="360">

Now navigate to where you have saved the images and select the background. I saved them in my Downloads folder, which will be at /home/deck/Downloads.
Then do the same thing for `Set Custom Logo` and select the logo.

Additionally you can change the **cover-art** (also called grid in SteamGridDB).
There are two types of cover-art, one is the normal vertical one, and the other is the wider one.
To change these, you should first start PolyMC through Steam and close it again.
This way you can now head over to your library and right click PolyMC in the `RECENT GAMES` shelf.
It should be a **wide cover** as it's the last-played game.

<img src="/img/Steam_Deck_Cover_wide.png" height="360">

Now right click the cover and select `Set custom artwork` under `Manage`.
Navigate to where you have saved the images and select the **wide cover-art**.

Then start a different game and close it, so that PolyMC is now the second game in the shelf (with a *vertical cover*).
<img src="/img/Steam_Deck_Cover_vertical.png" height="360">
Now you can again right click the cover and select `Set custom artwork` under `Manage`.
Navigate to where you have saved the images and select the **vertical cover-art**.

Additionally you can add an Icon and rename the Non-Steam Game to Minecraft, to do so right click on the PolyMC Non-Steam Game and select `Properties`, at the top you can rename PolyMC to Minecraft and you can change the Icon by clicking the empty square that is to the left of the name, select the image you want. 

## Tips and Tricks

- For the best experience, go ahead and enable `Start Minecraft maximized` and `Close PolyMC after game window opens` in the launcher's settings under the `Minecraft` tab.
- If you want Minecraft to launch without the PolyMC launcher add `-l <instance-id>` in the launch options for your PolyMC Non-Steam Game. If you use this launch option make sure that `Close PolyMC after game window opens` is disabled in the launcher's settings so that the launcher does not show up when the game is closed. See [CLI launch options](../../../getting-started/command-line-interface/)
- Install a mod that enables controller support. See [Controller Support](../../../getting-started/controller-support)

