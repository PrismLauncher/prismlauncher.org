---
title: OptiFine Alternatives
sidebar:
  order: 7
---

## Why bother?

For older Minecraft versions, OptiFine was _the_ way to make your game better, faster, and stronger through various useful features and optimizations. However, since Minecraft 1.16 there exist much better alternatives.

### Detailed explanation

For a very long time, OptiFine was an essential mod that many enjoyed using as it offers important benefits such as performance improvements, extra quality of life features, and more. However, it also has its downsides:

- OptiFine is closed-source. This means that no one can easily inspect its code, and it is much more difficult for developers to make their mods compatible with OptiFine - since they can't see what could be conflicting between their mod and OptiFine.

- OptiFine sometimes takes a long time to update to newer Minecraft versions as there is only one developer working on the mod.

- OptiFine functions as an "all-in-one" mod (similar to a modpack). This makes it impossible for the user to disable/fully remove features that may be incompatible with other mods or that they don't need.

In the past few years, various mods have been made to replace these features and offer a better experience for both mod developers _and_ users. Most of them are open-source, updated faster due to community contributions and support, and allow you to remove features if they're incompatible with another mod or don't suit your preference. These will usually be available on Fabric and Quilt, with some of them natively supporting (or working through compatibility layers) Forge and/or NeoForge.

## Installing things

To install mods and modpacks, see the [Download mods](../download-mods) and [Download modpacks](../download-modpacks) pages.

## <img src="https://raw.githubusercontent.com/FabricMC/community/main/media/unascribed/png/fabric.png" alt="FabricMC Logo" height="30"><img src="https://raw.githubusercontent.com/QuiltMC/art/master/brand/svg/quilt_logo_dark.svg" alt="QuiltMC Logo" height="30"> Fabric/Quilt Mods

<div class="notification type-info">
Most Fabric mods require the <a href="https://modrinth.com/mod/fabric-api">Fabric API</a> mod in order to work, while most Quilt mods require <a href="https://modrinth.com/mod/qsl">Quilted Fabric API</a> to work.
</div>

### <img src="https://cdn.modrinth.com/data/AANobbMI/icon.png" alt="Sodium Logo" height="20"> Sodium

[Sodium](https://modrinth.com/mod/sodium) is a mod that greatly improves render performance through various rendering optimizations. We **highly recommend** installing it when possible.

If you use Sodium often, please consider supporting development of the mod by [donating](https://jellysquid.me/donate) to the developer!

### <img src="https://cdn.modrinth.com/data/gvQqBUqZ/icon.png" alt="Lithium Logo" height="20"> Lithium

[Lithium](https://modrinth.com/mod/lithium) is a mod that greatly improves render performance through various game logic optimizations. We **highly recommend** installing it when possible.

### <img src="https://raw.githubusercontent.com/IrisShaders/Iris/trunk/src/main/resources/assets/iris/iris-logo.png" alt="Iris Logo" height="20"> Iris

[Iris](https://irisshaders.dev/) allows you to use OptiFine shaderpacks, while also running Sodium. It currently supports almost every shaderpack, [with some exceptions](https://github.com/IrisShaders/Iris/blob/trunk/docs/supportedshaders.md#shaders-that-do-not-work-on-iris).

### <img src="https://cdn.modrinth.com/data/Orvt0mRa/icon.png" alt="Indium Logo" height="20"> Indium

[Indium](https://modrinth.com/mod/indium) is an addon for older Sodium versions that provides support for the Fabric Rendering API. This is needed if you want to use Sodium on Minecraft 1.20 or older with mods that use advanced rendering techniques.

### <img src="https://cdn.modrinth.com/data/gvQqBUqZ/icon.png" alt="Lithium Logo" height="20"><img src="https://cdn.modrinth.com/data/H8CaAYZC/icon.png" alt="Starlight Logo" height="20"> Other Mods

If you would like to go a bit further, LambdAurora maintains a [very detailed list of OptiFine alternatives for Fabric and Quilt](https://lambdaurora.dev/optifine_alternatives/). There's also [a list of mods used by the Additive modpack](https://github.com/skywardmc/additive/wiki/Give-up-OptiFine), which provides the Minecraft versions that each mod supports along with some extra information.

## <img src="https://raw.githubusercontent.com/FabricMC/community/main/media/unascribed/png/fabric.png" alt="FabricMC Logo" height="30"><img src="https://raw.githubusercontent.com/QuiltMC/art/master/brand/svg/quilt_logo_dark.svg" alt="QuiltMC Logo" height="30"> Fabric/Quilt Modpacks

### <img src="https://avatars.githubusercontent.com/u/92206402?s=200&v=4" alt="Fabulously Optimized Logo" height="20"> Fabulously Optimized

If you don't want to search and install these mods manually, then try the [Fabulously Optimized](https://modrinth.com/modpack/fabulously-optimized) modpack, which supports almost all OptiFine features.

[See the installation instructions](https://fabulously-optimized.gitbook.io/modpack/readme/install-instructions#prism-launcher) for Prism Launcher.

### <img src="https://cdn.modrinth.com/data/BYfVnHa7/icon.png" alt="Simply Optimized Logo" height="20"> Simply Optimized

[Simply Optimized](https://modrinth.com/modpack/sop) is a modpack designed with just optimization in mind. SO has better out-of-the-box performance than Fabulously Optimized, but it doesn't come with the QoL mods or full OptiFine parity you would see in Fabulously Optimized, so you're expected to add any additional mods you want yourself.

### <img src="https://raw.githubusercontent.com/skywardmc/art/main/additive/logo_512h.png" alt="Additive Logo" height="20"> Additive

[Additive](https://modrinth.com/modpack/additive) is a modpack similar to Fabulously Optimized which aims to support nearly all OptiFine features. It's based on Adrenaline for better performance, supports Fabric, and can be installed on a wide range of Minecraft versions.

### <img src="https://raw.githubusercontent.com/skywardmc/art/main/adrenaline/logo_512h.png" alt="Adrenaline Logo" height="20"> Adrenaline

[Adrenaline](https://modrinth.com/modpack/adrenaline) is a Fabric modpack which aims to improve performance as much as possible while not changing anything about the vanilla game and not introducing instability. Like Simply Optimized, it does not come with any OptiFine replacement mods, so you'll have to manually install the features that you want.

## <img src="https://avatars0.githubusercontent.com/u/1390178?s=400&v=4" alt="Forge Logo" height="30"> Forge/NeoForge Mods

### <img src="https://cdn.modrinth.com/data/AANobbMI/icon.png" alt="Sodium Logo" height="20"> Sodium for Forge

[Sodium](https://modrinth.com/mod/sodium) also exists for some Minecraft versions on Forge/NeoForge — see [its support policy](https://github.com/CaffeineMC/sodium/wiki/Support-Policy). We highly recommend installing it when possible.

### <img src="https://cdn.modrinth.com/data/gvQqBUqZ/icon.png" alt="Lithium Logo" height="20"> Lithium for Forge

[Lithium](https://modrinth.com/mod/lithium) also exists for some Minecraft versions on Forge/NeoForge — see [its support policy](https://github.com/CaffeineMC/lithium/wiki/Support-Policy). We highly recommend installing it when possible.

### <img src="https://raw.githubusercontent.com/IrisShaders/Iris/trunk/src/main/resources/assets/iris/iris-logo.png" alt="Iris Logo" height="20"> Iris for Forge

[Iris](https://irisshaders.dev/) also generally exists for the same loaders/versions as Sodium.

<div class="notification type-warn">
<strong>On older Minecraft versions with Forge, you'll need to use unofficial ports of OptiFine alternatives, which might have some compatibility/stability issues.</strong>

While on some modpacks/with some mods they&#39;re going to work good, with others they might be <em>very</em> unstable so be well aware of what you&#39;re doing. If you have issues, use OptiFine.

You can use <a href="https://modrinth.com/mod/connector">Sinytra Connector</a> to run many Fabric mods on Forge.

<strong>Don&#39;t report issues with those on upstream&#39;s Discord support channels!</strong>

</div>

### <img src="https://raw.githubusercontent.com/FiniteReality/embeddium/aa6657df4eaea8bdfa6243233c893207f5b7f8b4/src/main/resources/icon.png" alt="Embeddium" height="20"> Embeddium

[Embeddium](https://modrinth.com/mod/embeddium) is a Sodium port for Forge that focuses on compatibility with other Forge mods. We generally recommend using it instead of Rubidium. Be aware of the statements above before using it.

### <img src="https://raw.githubusercontent.com/Asek3/Oculus/1.18.2/src/main/resources/oculus-logo.png" alt="Oculus Logo" height="20"> Oculus

[Oculus](https://modrinth.com/mod/oculus) is an Iris port for Forge. Be aware of the statements above before using it.

### Radium

[Radium](https://modrinth.com/mod/radium) is a Lithium port for Forge. Be aware of the statements above before using it.

### Other mods

You can find [a list of performance mods for Forge here](https://github.com/NordicGamerFE/usefulmods#performance-and-bug-fixing-mods).

## <img src="https://avatars0.githubusercontent.com/u/1390178?s=400&v=4" alt="Forge Logo" height="30"> Forge Modpacks

### <img src="https://raw.githubusercontent.com/skywardmc/art/main/hammer/logo_512h.png" alt="Hammer Logo" height="20"> Hammer

[Hammer](https://modrinth.com/modpack/hammer) is like the Adrenaline modpack but made for Forge, utilizing Forge ports of mods and [Sinytra Connector](https://modrinth.com/mod/connector) to run Fabric/Quilt optimization mods.

### <img src="https://raw.githubusercontent.com/skywardmc/art/main/drill/logo_512h.png" alt="Drill Logo" height="20"> Drill

[Drill](https://modrinth.com/modpack/drill) is the Additive modpack but made for Forge, utilizing Forge ports of mods and [Sinytra Connector](https://modrinth.com/mod/connector) to run Fabric/Quilt optimization and OptiFine replacement mods.
