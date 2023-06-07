---
layout: layouts/main.njk
title: About
templateClass: tmpl-post
tags: nav
hero:
  title: About Prism Launcher
eleventyNavigation:
  key: About
  order: 3
---
<div class="content">

# What is Prism Launcher?

Prism Launcher is a custom launcher for Minecraft that was forked from MultiMC. It allows the creation, and management of multiple installations of the game, or "instances" rather, each having their own separate mods, resource packs, settings, and more. While originally being forked over packaging/redistribution concerns, Prism Launcher brings new and exciting features developed by the community for the community. Furthermore, Prism Launcher is still just as true to its roots as ever in providing a project that vows to never bring hostility to those looking to fork, redistribute, or repackage, so long as the terms of our license are respected.

## I'm in! Now tell me more about these features?

- Managing multiple, isolated instances of Minecraft.
- Easy installation of mod loaders, such as Forge, Fabric, LiteLoader and Quilt.
- Manage your worlds, resource packs, and shader packs in just a few clicks.
- Install modpacks from many platforms such as CurseForge, Technic, FTB, FTB Legacy and Modrinth.
- Install individual mods from CurseForge and Modrinth, automatically tailored to match your loader and game version.
- Kill Minecraft easily in the event of a crash or freeze.
- Access all your logs easily.
- Built using Qt technologies, allowing the launcher to be both very performant and light on system resources.
- And much, much more.

</div>
<div class="infobox top">

# Maintainers

<ul class="user-list">
  {% for user in members.users %}
  <li class="user-info">
    <a href="{{user[2]}}">
      <img src="{{user[1]}}" alt="Avatar">
      <div class="user-info-overlay">
        <div class="user-name">{{user[0]}}</div>
      </div>
    </a>
  </li>
  {% endfor %}
</ul>
</div>
<div class="content top">

# Contributors

<ul class="user-list">
  {% for user in contributors.users %}
  <li class="user-info user-contrib">
    <a href="{{user[1]}}">
      <img src="{{user[0]}}" alt="Avatar">
    </a>
  </li>
  {% endfor %}
</ul>
</div>
