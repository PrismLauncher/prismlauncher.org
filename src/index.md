---
layout: layouts/main.njk
title: Home
background: ./src/img/background/home.jpg
hero:
  title: 'PrismLauncher'
  description: 'An Open Source Minecraft launcher with the ability to manage multiple instances, accounts and
  mods. Focused on user freedom and free redistributability.'
  image: 
    dark: ./src/img/screenshots/LauncherDark.png
    light: ./src/img/screenshots/LauncherLight.png
  background: 
  download: true
---

<div class="content">
  <div class="row row-reverse">
    <div class="column">
      <div>
        <h1>Modpack management</h1>
        <div class="subtitle">
          Install and launch modpacks easily, while keeping them clean.
          No longer do you need to manually install them, and updating feature is coming soon. PrismLauncher can do that for you, without installing tons of separate launchers.
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
        <h1>Download & Update Mods</h1>
        <div class="subtitle">
          <p>Are you sick of finding and adding that one mod you need? PrismLauncher is able to download & update individual mods from outside of modpacks using Modrinth and CurseForge.
        </div>
      </div>
    </div>
    <div class="column">
      {% image "Mod Installer", "./src/img/screenshots/ModInstallLight.png", "./src/img/screenshots/ModInstallDark.png" %}
      {% image "Mod Installer", "./src/img/screenshots/ModUpdateLight.png", "./src/img/screenshots/ModUpdateDark.png" %}
    </div>
  </div>

  <div class="row row-reverse">
    <div class="column">
      <div>
        <h1>Minecraft instance management </h1>
        <div class="subtitle">
          <p>Did your settings ever reset after launching an older version? Did you ever accidentally break a world because you opened it in an old version?
          Are you tired of manually switching mods for different versions, installing modloaders?<p>
          <p>PrismLauncher can help. Each Minecraft instance has its own folder, with separate mods, resourcepacks and other things.</p>
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
        <h1>Lightweight & Customizable</h1>
        <div class="subtitle">
          You don't need an embedded web browser for a game launcher. PrismLauncher uses the Qt toolkit, which requires little system resources. PrismLauncher also supports customizing the instance window and theme.
        </div>
      </div>
    </div>
    <div class="column">
      {% image "Mod Installer", "./src/img/screenshots/CustomizeLight.png", "./src/img/screenshots/CustomizeDark.png" %}
    </div>
  </div>
</div>
<div class="infobox top">

# Get involved

---

## Reddit
  
[![r/PrismLauncher](https://img.shields.io/reddit/subreddit-subscribers/PrismLauncher?label=r%2FPrismLauncher)](https://www.reddit.com/r/PrismLauncher/)

## Discord

To talk directly to us and get involved with development:

[![PrismLauncher Discord](https://img.shields.io/discord/1031648380885147709?label=PrismLauncher%20Discord)](https://discord.gg/KSkaP5wGpx)

## Matrix

For people who don't want to use Discord, we have a Matrix Space which is bridged to the Discord server:

[![PrismLauncher Space](https://img.shields.io/matrix/prismlauncher:matrix.org?label=PrismLauncher%20space)](https://matrix.to/#/#prismlauncher:matrix.org)

If there are any issues with the space or you are using a client that does not support the feature, here are the individual rooms:

[![Development](https://img.shields.io/matrix/prismlauncher-development:matrix.org?label=PrismLauncher%20Development)](https://matrix.to/#/#prismlauncher-development:matrix.org)
[![Discussion](https://img.shields.io/matrix/prismlauncher-discussion:matrix.org?label=PrismLauncher%20Discussion)](https://matrix.to/#/#prismlauncher-discussion:matrix.org)
[![Github](https://img.shields.io/matrix/prismlauncher-github:matrix.org?label=PrismLauncher%20Github)](https://matrix.to/#/#prismlauncher-github:matrix.org)
[![Maintainers](https://img.shields.io/matrix/prismlauncher-maintainers:matrix.org?label=PrismLauncher%20Maintainers)](https://matrix.to/#/#prismlauncher-maintainers:matrix.org)
[![News](https://img.shields.io/matrix/prismlauncher-news:matrix.org?label=PrismLauncher%20News)](https://matrix.to/#/#prismlauncher-news:matrix.org)
[![Offtopic](https://img.shields.io/matrix/prismlauncher-offtopic:matrix.org?label=PrismLauncher%20Offtopic)](https://matrix.to/#/#prismlauncher-offtopic:matrix.org)
[![Support](https://img.shields.io/matrix/prismlauncher-support:matrix.org?label=PrismLauncher%20Support)](https://matrix.to/#/#prismlauncher-support:matrix.org)
[![Voice](https://img.shields.io/matrix/prismlauncher-voice:matrix.org?label=PrismLauncher%20Voice)](https://matrix.to/#/#prismlauncher-voice:matrix.org)

# Source code

---

PrismLauncher is focused on user freedom and free redistributability. All code is available on [the GitHub](https://github.com/placeholdermc/PrismLauncher/) under the GPL-3 license.

[Source for this website](https://github.com/placeholdermc/prismlauncher.github.io) is hosted under the AGPL-3 License.

The logo and related assets are under the CC BY-SA 4.0 license.
</div>
