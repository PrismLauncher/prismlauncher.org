---
layout: layouts/main.njk
title: Home
hero:
  title: 'Prism Launcher'
  description: 'An Open Source Minecraft launcher with the ability to manage multiple instances, accounts and
  mods. Focused on user freedom and free redistributability.'
  image:
    dark: ./src/img/screenshots/LauncherDark.png
    light: ./src/img/screenshots/LauncherLight.png
  button:
    url: /download?from=button
    content: 'Download Now'
---

<div class="content">
  <div class="row row-reverse">
    <div class="column">
      <div>
        <h1>Modpack Management</h1>
        <div class="subtitle">
          Install and launch modpacks easily, while keeping them clean.
          No longer do you need to manually install them, and easily update modpacks, Prism Launcher can do these tasks for you, without installing tons of separate launchers.
        </div>
      </div>
    </div>
    <div class="column">
      {% image "Modpack Installer", "./src/img/screenshots/ModpackInstallLight.png", "./src/img/screenshots/ModpackInstallDark.png" %}
      {% image "Mod Installer", "./src/img/screenshots/ModpackUpdateLight.png", "./src/img/screenshots/ModpackUpdateDark.png" %}
    </div>
  </div>

  <div class="row">
    <div class="column">
      <div>
        <h1>Download & Update Mods</h1>
        <div class="subtitle">
          <p>Are you sick of finding and adding that one mod you need? Prism Launcher is able to download & update individual mods from outside of modpacks using Modrinth and CurseForge.
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
        <h1>Minecraft Instance Management </h1>
        <div class="subtitle">
          <p>Did your settings ever reset after launching an older version? Did you ever accidentally break a world because you opened it in an old version?
          Are you tired of manually switching mods for different versions, installing modloaders?<p>
          <p>Prism Launcher can help. Each Minecraft instance has its own folder, with separate mods, resource packs and other things.</p>
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
          You don't need an embedded web browser as a game launcher. Prism Launcher uses the Qt toolkit, which requires little system resources. Prism Launcher also lets you customize the menu and supports <a href="https://prismlauncher.org/wiki/getting-started/change-themes/">custom themes</a>.
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

<a class="button type-link size-small" href="https://www.reddit.com/r/PrismLauncher/" target="_blank">r/PrismLauncher</a>

## Discord

To talk directly to us and get involved with development:

<a class="button type-link size-small" href="https://discord.gg/ArX2nafFz2" target="_blank">Prism Launcher Discord</a>

## Matrix

For people who don't want to use Discord, we have a Matrix Space:

<a class="button type-link size-small" href="https://matrix.to/#/#prismlauncher:matrix.org" target="_blank">Prism Launcher Space</a>

# Source code

---

Prism Launcher is focused on user freedom and free redistributability. All code is available on [the GitHub](https://github.com/PrismLauncher/PrismLauncher/) under the GPL-3 license.

[Source for this website](https://github.com/PrismLauncher/prismlauncher.org) is hosted under the AGPL-3 License.

The logo and related assets are under the CC BY-SA 4.0 license.
</div>
