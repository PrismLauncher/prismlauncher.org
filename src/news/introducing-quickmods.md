---
title: Introducing QuickMods - A better way to install mods
author: 02JanDal, Forkk
date: 2014-04-25T01:35:44+02:00
---

Hello from the MultiMC development team! We have an exciting announcement today. For a while, one of our developers, Jan ([@02JanDal](https://twitter.com/02JanDal)), has been working on a system for easily downloading and installing mods. The system is called QuickMod, and today we're excited to finally be able to show off an early proof of concept.

Before you read further, please keep in mind that this is still in early development. It is quite buggy, but we're working on smoothing it out. Everything here is subject to change and we **do not have an ETA** for how long it will take to finish. It's done when it's done.


## Demo Video

If you're too lazy to read, here is a video of Forkk demonstrating the installation of a bunch of mods using the QuickMod system:

<iframe width="800" height="600" src="//www.youtube.com/embed/5OBKT7w6p6w?rel=0" frameborder="0" allowfullscreen></iframe>


## QuickMods

Once upon a time, when installing mods, you had to mess with the Minecraft jar file. Then came Forge and other great stuff to ease the installation, as well as MultiCraft (the predecessor of MultiMC), making installation of mods even easier. But it doesn't stop there, sometime in December last year I started working on a feature I call QuickMods. There are two parts to them, the JSON specification (available [here](http://02jandal.github.io/QuickModDoc/)) and the implementation in MultiMC 5.

### The QuickMod file format

QuickMods are small text files which contain information about a mod such as its name, description, and where to download it.


### How do they work?

To install a QuickMod, you simply add it into MultiMC via its URL, or a file. Once the QuickMod is added to MultiMC, it can be installed into any instance via the "Install" button in the mod edit dialog.

When a QuickMod is installed into an instance, MultiMC will get the mod's download link, determine what other mods that mod requires, and then go through a download process for everything it needs to downloaded. Mods with direct download links are downloaded directly, while, for mods which must go through adf.ly or some other website, MultiMC will open a small web browser window with whatever page the mod should be downloaded from. Mod developers still get their ad revenue, and users get a really easy way to download mods. Everybody wins.


### How are they made?

QuickMods are simple JSON files which contain information about mods. Jan has written a [command line tool](https://github.com/02JanDal/QuickModGenerator) and a [gradle plugin](https://github.com/robotbrain/quickmod-gradle) to simplify the process of creating QuickMod files.

Anyone can create one, too, not just the mod developer. QuickMods don't distribute the mod files themselves, either; they download mods from the original download location, so you won't need to have permission from the mod developer to use them for your mod packs.


### Some more information

* How does this relate to the Curse client?
    * Development of QuickMods started some time before the Curse/FTB deal, and it will continue even after the release of the Curse client. This either means that they will be competing systems (though we plan to try have some sort of bridge), or (hopefully, but, unlikely) that Curse will support QuickMods and supply QuickMod files.
* Which versions of Minecraft does this work for?
    * Currently only 1.6 and up, though this is only a limit in the implementation, the QuickMod files aren't limited.

It'll still be some time until this is ready for release, in the mean time we'd love to hear any thoughts or ideas, the best way to reach us is via IRC (#MultiMC on irc.esper.net).

### Important notice

Both the QuickMod specification and the implementation in MultiMC are still under heavy development, and likely to change. Be ready for incompatibilities until we have a stable release out.

~ Jan and Forkk

