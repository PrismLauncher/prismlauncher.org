---
eleventyNavigation:
  key: Installing OptiFine
  parent: Getting Started
  order: 7
---
# Before you continue

Because OptiFine is an old, closed-source project, it has evolved to cause many mod incompatibilities, and doesn't do as good of a job as some the alternatives out there.

Also, if you're using the Fabric mod loader, there's no native support for it, and the current [workaround](#fabric) is known to be buggy and quite unstable, due to the very nature of OptiFine and OptiFabric.

Therefore, you should consider the use of OptiFine alternatives whenever possible. [See the wiki page about it](../install-of-alternatives).

## <img src="https://www.optifine.net/favicon.ico" height="20" /> Installing OptiFine

Make sure you know how to [download mods](../download-mods) before attempting to install OptiFine.

Go to <https://optifine.net/downloads> and find your respective Minecraft version (eg. 1.18.2).

Once found, click **mirror**. Now click the **download** button to download your OptiFine jar file.

Remember where you have kept your **.jar** file, and continue to the PolyMC launcher. Follow the steps from the [download mods](../download-mods) page, and choose either Forge or Fabric([!warning](#fabric)).

### <img src="https://avatars0.githubusercontent.com/u/1390178?s=400&v=4" height="20"> Forge

Forge does not require any extra steps besides [adding the **.jar** for OptiFine](#adding-the-.jar-file-into-polymc) into PolyMC.

**NOTE:** Some versions of OptiFine **don't** work on Forge!

### <img src="https://raw.githubusercontent.com/FabricMC/community/main/media/unascribed/png/fabric.png" height="20"> Fabric

**Note:** If you're playing on Minecraft versions older than 1.16, you might need to also install the [Fabric API](../download-mods/#fabric) mod.

Fabric, unlike Forge, does not natively support OptiFine, and will require the installation of OptiFabric.

Go into the **Mods** tab on the left side and then in the right menu select **Download mods**, then select *CurseForge* and search *OptiFabric*. Once found, click **Select mod for download**, and then press **OK**. You may now procede with [adding the .jar file](#adding-the-.jar-file-into-polymc) for OptiFine into PolyMC.

If there were results shown in the search, your Minecraft version may not be compatible with OptiFabric. In this case, you can either try the Forge method, or choose to wait until support for your Minecraft version is added.

### <img src="https://raw.githubusercontent.com/QuiltMC/art/master/brand/svg/quilt_logo_dark.svg" height="20"> Quilt

There's no way of running OptiFine on Quilt at the time of writing.

### Adding the .jar file into PolyMC

Go into the **Mods** tab on the left side of the **Edit Instance** menu, and then click on the **Add .jar** option to the right of the window.

Now, find and select the **.jar** file you downloaded earlier, and it should now be added to your instance. Enjoy!
