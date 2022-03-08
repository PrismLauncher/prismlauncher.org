---
layout: layouts/main.njk
title: Downloads
permalink: /download/
hero:
  title: "Downloads"
  background: /img/forest.webp
---

<div class="cards">
  <div class="card">
    <h1>Windows</h1>
    <a class="button" href="https://packages.polymc.org/latest/win32/win32.zip">Download (Portable)</a>
    (<a href="https://packages.polymc.org/latest/win32/win32.zip.sha256">SHA256</a>)
  </div>
  <div class="card">
    <h1>MacOS</h1>
    <a class="button" href="https://github.com/PolyMC/PolyMC/actions">Download</a>
  </div>
  <div class="card">
    <h1>Linux</h1>
    <a class="button" href="https://flathub.org/apps/details/org.polymc.PolyMC">FLATHUB</a>
    <a class="button" href="https://packages.polymc.org/latest/appimage/" >AppImage (portable)</a>
    <a href="https://packages.polymc.org/latest/appimage/PolyMC-latest-x86_64.AppImage.sha256">AppImage SHA256</a>
    <p>distro specific packages can be <a href="{{ '../wiki/installing/' | url}}">found here</a></p>
  </div>
  <div class="card">
    <h1>BSD</h1>
    <a class="button" href="{{ '/wiki/installing/freeBSD/' | url }}">FreeBSD</a>
    <a class="button" href="{{ '/wiki/installing/openBSD/' | url }}">OpenBSD</a>
  </div>
</div>
