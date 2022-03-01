---
layout: layouts/main.njk
eleventyNavigation:
  key: Home
  order: 1
hero:
  title: 'PolyMC'
  description: 'An Open Source Minecraft launcher with the ability to manage multiple instances, accounts and
  mods. Focused on user freedom and free redistributability.'
  image: 
    dark: ./src/img/screenshots/LauncherDark.png
    light: ./src/img/screenshots/LauncherLight.png
  background: /img/forest.webp
  download: true
---

<h1 style="text-align: center">Main Features</h1>

---

<div class="row row-reverse">
  <div class="column">
    <div>
      <h1>Modpack management</h1>
      <div class="subtitle">
        Install and launch modpacks easily, while keeping them clean.
        No longer do you need to manually install and update. PolyMC can do that for you, without installing tons of separate launchers
      </div>
    </div>
  </div>
  <div class="column">
    {% image "Modpack Installer", "./src/img/screenshots/ModpackInstallLight.png", "./src/img/screenshots/ModpackInstallDark.png" %}
  </div>
</div>

<div class="row">
  <div class="column">
    <div>
      <h1>Download Mods</h1>
      <div class="subtitle">
        <p>Are you sick of finding and adding that one mod you need? PolyMC is able to download individual mods from outside of modpacks using modrinth and curseforge.
      </div>
    </div>
  </div>
  <div class="column">
    {% image "Mod Installer", "./src/img/screenshots/ModInstallLight.png", "./src/img/screenshots/ModInstallDark.png" %}
  </div>
</div>

<div class="row row-reverse">
  <div class="column">
    <div>
      <h1>Minecraft instance management </h1>
      <div class="subtitle">
        <p>Did your settings ever reset after launching an older version? Did you ever accidentally break a world because you opened it in an old version?
        Are you tired of manually switching mods for different versions, installing modloaders?<p>
        <p>PolyMC can help. Each Minecraft instance has it's own folder, with separate mods, resourcepacks and other things.</p>
      </div>
      <br>
    </div>
  </div>
  <div class="column">
    {% image "Instance Settings", "./src/img/screenshots/PropertiesLight.png", "./src/img/screenshots/PropertiesDark.png" %}
  </div>
</div>

<div class="row">
  <div class="column">
    <div>
      <h1>Lightweight</h1>
      <div class="subtitle">
        You don't need an embedded web browser for a game launcher. PolyMC uses the Qt toolkit, which requires little system resources.
      </div>
    </div>
  </div>
  <div class="column">
    {% image "Mod Installer", "./src/img/screenshots/LauncherCatLight.png", "./src/img/screenshots/LauncherCatDark.png" %}
  </div>
</div>

<div class="infobox">

  # Get involved
  ---

  ## Discord

  to talk directly to us and get involved with development:
  
  [![PolyMC Discord](https://img.shields.io/discord/923671181020766230?label=PolyMC%20Discord)](https://discord.gg/xq7fxrgtMP)

  ## Element

  For people who don't want to use Discord, we have a Matrix Space which is bridged to the Discord server:

  [![PolyMC Space](https://img.shields.io/matrix/polymc:polymc.org?label=PolyMC%20Space&server_fqdn=matrix.polymc.org)](https://matrix.to/#/#polymc:polymc.org)

  If there are any issues with the space or you are using a client that does not support the feature here are the individual rooms:

  [![Support](https://img.shields.io/matrix/support:polymc.org?label=%23support&server_fqdn=matrix.polymc.org)](https://matrix.to/#/#support:polymc.org)
  [![Discussion](https://img.shields.io/matrix/discussion:polymc.org?label=%23discussion&server_fqdn=matrix.polymc.org)](https://matrix.to/#/#discussion:polymc.org)
  [![Development](https://img.shields.io/matrix/development:polymc.org?label=%23development&server_fqdn=matrix.polymc.org)](https://matrix.to/#/#development:polymc.org)
  [![News](https://img.shields.io/matrix/news:polymc.org?label=%23news&server_fqdn=matrix.polymc.org)](https://matrix.to/#/#news:polymc.org)

  # Source code
  ---

  PolyMC is focused on user freedom and free redistributability all code is available on [the GitHub](https://github.com/PolyMC/PolyMC/) under the GPL-3 license.
  
  [Source for this website](https://github.com/PolyMC/polymc.github.io) is hosted under the AGPL-3 License.

  The logo and related assets are under the CC BY-NC-SA 4.0 license.
</div>
