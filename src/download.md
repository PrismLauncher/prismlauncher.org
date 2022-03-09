---
layout: layouts/main.njk
title: Downloads
permalink: /download/
hero:
  title: "Downloads"
  background: /img/forest.webp
---
<div class="notification is-info">

PolyMC supports the Steam Deck you can find the installation instructions [here](/wiki/installing/steam-deck)
</div>

<div class="cards">
  <div class="card">
    <h1>Windows</h1>
    <p><a class="button" href="https://packages.polymc.org/latest/win32/win32.zip">Download (Portable)</a>
    (<a href="https://packages.polymc.org/latest/win32/win32.zip.sha256">SHA256</a>) (<a href="{{ '/wiki/getting-started/installing-polymc/#troubleshoot' | url }}">Troubleshoot</a>)
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
    <p><a class="button" href="https://github.com/PolyMC/PolyMC/actions">Download (x86)</a></p>
  </div>
  <div class="card">
    <h1>Linux</h1>
    <p><a href='https://flathub.org/apps/details/org.polymc.PolyMC'><img width='240' alt='Download on Flathub' src='https://flathub.org/assets/badges/flathub-badge-en.png'/></a></p>
    <p><a class="button" href="https://packages.polymc.org/latest/appimage/" >AppImage</a>
    (<a href="https://packages.polymc.org/latest/appimage/PolyMC-latest-x86_64.AppImage.sha256">AppImage SHA256</a>)</p>
    <p><a class="button" href="https://github.com/PolyMC/PolyMC/actions" >Binary Tarball</a></p>
    <p>distro specific packages can be <a href="{{ '../wiki/installing/' | url}}">found here</a></p>
  </div>
  <div class="card">
    <h1>BSD</h1>
    <p><a class="button" href="{{ '/wiki/installing/free-bsd/' | url }}">FreeBSD</a></p>
    <p><a class="button" href="{{ '/wiki/installing/open-bsd/' | url }}">OpenBSD</a></p>
  </div>
</div>
