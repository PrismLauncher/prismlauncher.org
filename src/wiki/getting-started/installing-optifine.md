---
eleventyNavigation:
  key: Installing Optifine
  parent: Getting Started
  order: 7
---
# Preamble

Because Optifine is an old, closed-source project, it evolved to cause many mod incompatibilities, and doesn't do as good of a job as some alternatives out there. 

Also, if you're using the Fabric mod loader, there's no native support for it, and the current [workaround](#fabric) is known to be buggy and unstable due to the very nature of Optifine and Optifabric. 

Therefore, you should use optifine alternatives whenever possible. [See the wiki page about it](../install-of-alternatives).

# Installing optifine
Make sure you know how to [download-mods](../download-mods) before attempting to install optifine.

Go to https://optifine.net/downloads and find your respective minecraft version (eg. 1.18.2).

Once found, click **mirror**. Now click the **download** button to download your optifine jar file.

Remember where you have kept your .jar and continue to the PolyMC launcher. Follow the steps from [download-mods](../download-mods) and choose either forge or fabric([!warning](#fabric)).

## Forge
Forge does not require exta steps besides [adding the .jar for optifine](#adding-.jar-file). 

NOTE: some OF versions **don't** work on Forge!

## Fabric 
Note: If you're playing on minecraft versions before 1.16, you might need to also install [Fabric API](../download-mods/#fabric).


Fabric, unlike Forge, does not natively support optifine and will require the installation of Optifabric. 

Go into the **Mods** tab on the left side and then in the right menu select **Download mods**, then select *CurseForge* and search *OptiFabric*. once found click **Select mod for download** then press **Ok**. Now procede to [adding the jar file](#adding-.jar-file). 

If there's no results shown in the search, your minecraft version may not be compatible, in which case you can try the forge method or may have to wait till support for your version is added.

## Adding .jar file
Go into the **Mods** tab on the left side, and then in the right menu select **Add .jar**. Find the jar file you downloaded at the beginning and it should now be added to your instance. Enjoy!
