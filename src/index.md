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
    url: /download
    content: 'Download Now'
---

<div class="content">
  <div class="row row-reverse">
    <div class="column">
      <div>
        <h1>Modpack Management</h1>
        <div class="subtitle">
          Install and launch modpacks easily, while keeping them clean.
          No longer do you need to manually install them, and updating feature is coming soon. Prism Launcher can do that for you, without installing tons of separate launchers.
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
          <p>Prism Launcher can help. Each Minecraft instance has its own folder, with separate mods, resourcepacks and other things.</p>
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
          You don't need an embedded web browser for a game launcher. Prism Launcher uses the Qt toolkit, which requires little system resources. Prism Launcher also supports customizing the instance window and theme.
        </div>
      </div>
    </div>
    <div class="column">
      {% image "Mod Installer", "./src/img/screenshots/CustomizeLight.png", "./src/img/screenshots/CustomizeDark.png" %}
    </div>
  </div>
</div>

<h1 style="text-align: center">Want to Get Involved?</h1>
<div class="row top infobox involded">
   <div class="column">
    <a class="brand-icon" href="https://www.reddit.com/r/PrismLauncher/" target="_blank">
     <i class="fa fa-reddit"></i>
    </a>
    <div>
     <h2>Reddit</h2>
     <div class="subicon">
      Post and read posts all about Prism Launcher
     </div>
    </div>
   </div>
   <div class="column">
    <a class="brand-icon" href="https://discord.gg/prismlauncher" target="_blank">
     <i class="fa fa-discord"></i>
    </a>
    <div>
     <h2>Discord</h2>
     <div class="subicon">
      To talk directly to us and get involved with development.
     </div>
    </div>
   </div>
   <div class="column">
    <a class="brand-icon" href="https://matrix.to/#/#prismlauncher:matrix.org" target="_blank">
     <i class="fa fa-matrix-org"></i>
    </a>
    <div>
     <h2>Matrix</h2>
     <div class="subicon">
      We have a Matrix Space which is bridged to the Discord server.
     </div>
    </div>
   </div>
   <div class="column">
    <a class="brand-icon" href="https://github.com/prismlauncher/PrismLauncher/" target="_blank">
     <i class="fa fa-github"></i>
    </a>
    <div>
     <h2>Github</h2>
     <div class="subicon">
      Prism Launcher is focused on user freedom and free redistributability all code is available on Github.
     </div>
    </div>
   </div>
  </div>
</div>
