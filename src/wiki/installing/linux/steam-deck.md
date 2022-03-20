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

Final Result

<img src="https://i.imgur.com/WXFkxCw.png" width="480" height="268.75"/>

First you will need to save the following images in your steam deck, i just save them in my Downloads folder.

- [Logo](https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg) save as jpg
- [Background](https://news.xbox.com/en-us/wp-content/uploads/sites/2/2021/11/Minecraft-Caves-Cliffs-Part-II-Available-Now_JPG.jpg) save as jpg
- [Icon](https://theme.zdassets.com/theme_assets/2155033/bc270c23058d513de5124ffea6bf9199af7a2370.png) save as png

First we will set the background and the icon, in desktop mode go to your steam library and select the PolyMC Non-Steam Game, right click at the top and select `Set Custom Background`

<img src="https://i.imgur.com/jaqjRob.png" width="480" height="253.25"/>

Then navigate to where you have saved the images and select the background, i saved them in my Downloads folder so that is in /home/deck/Downloads.
Then do the same thing for `Set Custom Logo` and select the logo.

Now in gaming mode you will see the new artwork for the PolyMC Non-Steam Game.

Additionally you can add an Icon and rename the Non-Steam Game to Minecraft, to do so right click on the PolyMC Non-Steam Game and select `Properties`, at the top you can rename PolyMC to Minecraft and you can change the Icon by clicking the empty square that is to the left of the name, select the Icon png and you are done! 

## Tips and Tricks

- For the best experience, go ahead and enable `Start Minecraft maximized` and `Close PolyMC after game window opens` in the launcher's settings under the `Minecraft` tab.
- If you want Minecraft to launch without the PolyMC launcher add `-l <instance-id>` in the launch options for you PolyMC Non-Steam Game. If you use this launch option make sure that `Close PolyMC after game window opens` is disabled in the launcher's settings so that the launcher does not show up when the game is closed. See [CLI launch options](../../../getting-started/command-line-interface/)
- Install a mod that enables controller support. See [Controller Support](../../../getting-started/controller-support)

