---
layout: layouts/main.njk
title: Downloads
permalink: /download/
hero:
  title: "Downloads"
  background: ./src/img/forest.png
---
<div class="notification is-info">

PolyMC supports the Steam Deck you can find the installation [instructions here](/wiki/installing/linux/steam-deck).
</div>

<div class="cards">
  <div class="card">
    <h1>Windows</h1>
    <p><a class="button" href="https://github.com/PolyMC/PolyMC/releases/download/1.1.0/PolyMC-Windows-1.1.0.zip">Download (Portable)</a>
    (<a href="{{ '/wiki/getting-started/installing-polymc/#troubleshoot' | url }}">Troubleshoot</a>)
    </p>
    <details>
      <summary>
        Scoop Package
        <hr>
      </summary>
    <pre><code>scoop bucket add games
scoop install polymc</code></pre>
    </details>
    <details>
      <summary>
        Chocolatey Package
        <hr>
      </summary>
    <pre><code>choco install polymc</code></pre>
    </details>
  </div>
  <div class="card">
    <h1>MacOS</h1>
    <p><a class="button" href="https://github.com/PolyMC/PolyMC/releases/download/1.1.0/PolyMC-macOS-1.1.0.tar.gz">Download (x86)</a></p>
  </div>
  <div class="card">
    <h1>Linux</h1>
    <p><a href='https://flathub.org/apps/details/org.polymc.PolyMC'><img width='240' alt='Download on Flathub' src='https://flathub.org/assets/badges/flathub-badge-en.png'/></a></p>
    <p><a class="button" href="https://github.com/PolyMC/PolyMC/releases/download/1.1.0/PolyMC-Linux-1.1.0-x86_64.AppImage" >AppImage</a>
    <p><a class="button" href="https://github.com/PolyMC/PolyMC/releases/download/1.1.0/PolyMC-Linux-1.1.0.tar.gz" >Binary Tarball</a></p>
    <p>distro specific packages can be <a href="{{ '../wiki/installing/' | url}}">found here</a></p>
  </div>
  <div class="card">
    <h1>BSD</h1>
    <p><a class="button" href="{{ '/wiki/installing/free-bsd/' | url }}">FreeBSD</a></p>
    <p><a class="button" href="{{ '/wiki/installing/open-bsd/' | url }}">OpenBSD</a></p>
  </div>
</div>
