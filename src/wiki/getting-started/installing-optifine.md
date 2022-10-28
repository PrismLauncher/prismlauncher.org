---
eleventyNavigation:
  key: Installing OptiFine
  parent: Getting Started
  order: 7
---
# Before you continue

Because OptiFine is an old, closed-source project, it has evolved to cause many mod incompatibilities, and doesn't do as good of a job as some the alternatives out there.

Also, if you're using the Fabric mod loader, there's no native support for it, and the current workaround is known to be buggy and quite unstable, due to the very nature of OptiFine and OptiFabric.

Therefore, you should consider the use of OptiFine alternatives whenever possible. [See the wiki page about it](../install-of-alternatives).

## <img src="https://www.optifine.net/favicon.ico" height="20" /> Installing OptiFine standalone

This method requires you either have the Minecraft version you wish to install OptiFine on to be installed through the vanilla launcher or to recreate the folder structure somewhere on your system (like /.minecraft/versions/*1.18.2*/*1.18.2*.jar).

Go to <https://optifine.net/downloads> and find your respective Minecraft version (eg. 1.18.2).

Once found, click **mirror**. Now click the **download** button to download your OptiFine jar file.

Execute the OptiFine jar file and change the selected folder location if required, then hit the **"Extract"** button and save the jarmod file somewhere you'll remember.

Now in Prism Launcher edit the instance you wish to install OptiFine on, open the **Version** tab and click **Add to Minecraft.jar**, select the extracted OptiFine jarmod (the file ending in \_MOD.jar) and confirm.

OptiFine will now be installed as a jarmod in that instance, so you can remove the installer and extracted jarmod.

From OptiFine Version **H1_pre2** the instructions for installing OptiFine on Prism Launcher have changed. Make sure to have the version of Minecraft that you wish to install OptiFine on installed through the vanilla launcher.

1. Extract the MOD jar with the OptiFine installer
2. Open it with any archiver
3. Move all files from the folder called **notch** to the top folder of the archive file and click **save**.
4. Open Prism Launcher, edit the instance you wish to install OptiFine on, open the **Version** tab and click **Add to Minecraft.jar**, select the extracted / modified OptiFine jarmod (the file ending in _MOD.jar) and confirm.

## <img src="https://www.optifine.net/favicon.ico" height="20" /> Installing OptiFine on top of a modloader

Make sure you know how to [download mods](../download-mods) before attempting to install OptiFine.

Go to <https://optifine.net/downloads> and find your respective Minecraft version (eg. 1.18.2).

Once found, click **mirror**. Now click the **download** button to download your OptiFine jar file.

Remember where you have kept your **.jar** file, and continue to Prism Launcher. Follow the steps from the [download mods](../download-mods) page, and choose either Forge or Fabric.

### <img src="https://avatars0.githubusercontent.com/u/1390178?s=400&v=4" height="20"> Forge

Forge does not require any extra steps besides adding the **.jar** for OptiFine into Prism Launcher.

**NOTE:** Some versions of OptiFine **don't** work on Forge!

### <img src="https://raw.githubusercontent.com/FabricMC/community/main/media/unascribed/png/fabric.png" height="20"> Fabric

**Note:** If you're playing on Minecraft versions older than 1.16, you might need to also install the [Fabric API](../download-mods/#fabric) mod.

Fabric, unlike Forge, does not natively support OptiFine, and will require the installation of OptiFabric.

Go into the **Mods** tab on the left side and then in the right menu select **Download mods**, then select *CurseForge* and search *OptiFabric*. Once found, click **Select mod for download**, and then press **OK**. You may now proceed with adding the .jar file for OptiFine into Prism Launcher.

If there were results shown in the search, your Minecraft version may not be compatible with OptiFabric. In this case, you can either try the Forge method, or choose to wait until support for your Minecraft version is added.

### <img src="https://raw.githubusercontent.com/QuiltMC/art/master/brand/svg/quilt_logo_dark.svg" height="20"> Quilt

There's no way of running OptiFine on Quilt at the time of writing.

### Adding the .jar file into Prism Launcher

Go into the **Mods** tab on the left side of the **Edit Instance** menu, and then click on the **Add .jar** option to the right of the window.

Now, find and select the **.jar** file you downloaded earlier, and it should now be added to your instance. Enjoy!
