---
eleventyNavigation:
  key: OptiFine Alternatives
  parent: Getting Started
  order: 7
---

# Why bother?

Once upon a time, OptiFine was *the* way, to make your game better, faster, and stronger through various useful features and optimizations. Things have since changed.

## Detailed explanation

For a very long time, OptiFine was an essential mod that many people enjoyed using as it offers many benefits such as performance improvements, extra quality of life features and more. However, it also has it's downsides:

- OptiFine is closed-source which means that neither users or developers can easily inspect it's code. This makes much more difficult for developers to make their mods compatible with OptiFine, since they can't see what is conflicting between their mod and OptiFine.

- OptiFine sometimes takes a long time to update to newer Minecraft versions as there is only one developer working on the mod.

- OptiFine functions as an "all-in-one" mod (similar to a modpack) which makes it impossible for the user to disable/fully remove features that may be incompatible with other mods or that they don't need.

In the past few years, various mods have appeared to replace these features and offer a better experience for both mod developers *and* users. Most of them are open-source, they often update faster due to community contributions and support, and each specific feature can be fully removed from the game if they're incompatible with a mod you're using or if you simply don't want it. Most of these are available on Fabric and Quilt, along with some of them natively supporting or working through compatibility layers on Forge.

# <img src="https://raw.githubusercontent.com/FabricMC/community/main/media/unascribed/png/fabric.png" height="30"><img src="https://raw.githubusercontent.com/QuiltMC/art/master/brand/svg/quilt_logo_dark.svg" height="30"> Fabric/Quilt

## Mods

**NOTE:** Most Fabric mods require the [Fabric API](https://modrinth.com/mod/fabric-api) mod in order to work, while most Quilt mods require [Quilted Fabric API](https://modrinth.com/mod/qsl) to work.

### <img src="https://cdn.modrinth.com/data/AANobbMI/icon.png" height="20"> Sodium

[Sodium](https://modrinth.com/mod/sodium) is a mod that greatly improves render performance through various optimizations. We **highly recommend** installing it when possible.

To install in Prism Launcher, create an instance with the **Fabric (or Quilt)** loader, and then go to the *Mods tab* and click **Download Mods**. There, click on *Sodium*, click **Select mod for download**, and then press **OK**.

If you use Sodium often, please consider supporting development of the mod by [donating](https://jellysquid.me/donate) to the developer!

### <img src="https://raw.githubusercontent.com/IrisShaders/Iris/trunk/src/main/resources/assets/iris/iris-logo.png" height="20"> Iris

[Iris](https://irisshaders.net/) allows you to use OptiFine shaderpacks, while also running Sodium. Iris supports almost every shaderpack at this point, [with some exceptions](https://github.com/IrisShaders/Iris/blob/trunk/docs/supportedshaders.md#shaders-that-do-not-work-on-iris).

To install in Prism Launcher, create an instance with the **Fabric (or Quilt)** loader, and then go to the *Mods tab* and click **Download Mods**. There, click on *Iris*, click **Select mod for download**, and then press **OK**.

### <img src="https://cdn.modrinth.com/data/Orvt0mRa/icon.png" height="20"> Indium

[Indium](https://modrinth.com/mod/indium) is an addon for Sodium that provides support for the Fabric Rendering API. This is needed if you want to use Sodium with mods that use advanced rendering techniques.

To install in Prism Launcher, create an instance with the **Fabric (or Quilt)** loader, and then go to the *Mods tab* and click **Download Mods**. There, click on *Indium*, click **Select mod for download**, and then press **OK**.

### <img src="https://cdn.modrinth.com/data/gvQqBUqZ/icon.png" height="20"><img src="https://cdn.modrinth.com/data/H8CaAYZC/icon.png" height="20"> Other Mods

If you want to further improve your performance, please also consider installing [Lithium](https://modrinth.com/mod/lithium) and [Starlight](https://modrinth.com/mod/starlight)! Do note that Starlight is no longer needed client-side if you're playing on Minecraft 1.20 or higher, as Mojang has optimized their lighting engine since then.

If you would like to go a bit further, LambdAurora maintains a very detailed list of OptiFine alternatives for Fabric and Quilt, which you can find [here](https://lambdaurora.dev/optifine_alternatives/). There's also a list of mods made by the Additive modpack [here](https://github.com/skywardmc/additive/wiki/Give-up-OptiFine), which provides the Minecraft versions that each mod supports along with some extra information.

## Modpacks

### <img src="https://avatars.githubusercontent.com/u/92206402?s=200&v=4" height="20"> Fabulously Optimized

If you don't want to search and install these mods manually, then try the [Fabulously Optimized](https://modrinth.com/modpack/fabulously-optimized) modpack, which supports almost all OptiFine features.

[See the installation instructions](https://fabulously-optimized.gitbook.io/modpack/readme/install-instructions#prism-launcher) for Prism Launcher.

### <img src="https://cdn-raw.modrinth.com/data/BYfVnHa7/7f8dc20fc0edd29fd95819a6f40938be0b9cadfa.png" height="20"> Simply Optimized

[Simply Optimized](https://modrinth.com/modpack/sop) is a modpack designed with just optimization in mind. SO has better out-of-the-box performance than Fabulously Optimized, but it doesn't come with the QoL mods or full OptiFine parity you would see in Fabulously Optimized, so you're expected to add any additional mods you want yourself.

### <img src="https://raw.githubusercontent.com/skywardmc/art/main/adrenaline/logo_512h.png" height="20"> Adrenaline

[Adrenaline](https://modrinth.com/modpack/adrenaline) is a modpack which aims to improve performance as much as possible while not changing anything about the vanilla game or adding any QOL features, and remaining stable. Adrenaline supports both Fabric and Quilt and a wide range of Minecraft versions. However, like Simply Optimized, it does not come with any OptiFine replacement mods, so you'll have to manually install the features that you want.


# <img src="https://avatars0.githubusercontent.com/u/1390178?s=400&v=4" height="30"> Forge

## Mods

Unlike on Fabric/Quilt, most unofficial ports of OptiFine alternatives for Forge might have some compatibility/stability issues.

While on some modpacks/with some mods they're going to work good, with others they might be *very* unstable so be well aware of what you're doing. If you have issues, use OptiFine.

**Don't report issues with those on upstream's Discord support channels!**

### <img src="https://raw.githubusercontent.com/Asek3/Rubidium/e3aea98992e110b41ceed5ab128c81ff6fd98fa0/src/main/resources/icon.png" height="20"> Rubidium

[Rubidium](https://modrinth.com/mod/rubidium) is a Sodium port for Forge. Be aware of the statements above before using it.

To install in Prism Launcher, create an instance with the **Forge** loader, and then go to the *Mods tab*, click **Download Mods**. There, search for *Rubidium*, click on it, click **Select mod for download**, and then press **OK**.

### <img src="https://raw.githubusercontent.com/Asek3/Oculus/1.18.2/src/main/resources/oculus-logo.png" height="20"> Oculus

[Oculus](https://modrinth.com/mod/oculus) is an Iris port for Forge. Be aware of the statements above before using it.

To install in Prism Launcher, create an instance with the **Forge** loader, and then go to the *Mods tab*, click **Download Mods**. There, search for *Oculus*, click on it, click **Select mod for download**, and then press **OK**.

### Other mods

You can find a list of performance mods for Forge [here](https://github.com/NordicGamerFE/usefulmods#performance-and-bug-fixing-mods).

## Modpacks
