---
layout: layouts/main.njk
title: Downloads
background: ./src/img/background/download.png
permalink: /download2/
eleventyComputed:
  hero:
    title: "Downloads"
    description: "Download PolyMC {{version.current}}"
---
<style>
  .background {
    filter: brightness(80%);
  }
</style>

<div class="notification is-info">

PolyMC supports the Steam Deck, you can find the installation [instructions here](/wiki/installing/linux/steam-deck).
</div>

<div class="cards">
  <div class="card">
    <h1>Windows</h1>
    <p><a class="button" href="https://github.com/PolyMC/PolyMC/releases/download/{{version.current}}/PolyMC-Windows-x86_64-{{version.current}}.zip">Download</a>
    <p><a class="button" href="https://github.com/PolyMC/PolyMC/releases/download/{{version.current}}/PolyMC-Windows-x86_64-portable-{{version.current}}.zip">Download (Portable)</a>
    <details>
      <summary>
        32-bit Package
        <hr>
      </summary>
      <p><a class="button" href="https://github.com/PolyMC/PolyMC/releases/download/{{version.current}}/PolyMC-Windows-i686-{{version.current}}.zip">Download</a>
      <p><a class="button" href="https://github.com/PolyMC/PolyMC/releases/download/{{version.current}}/PolyMC-Windows-i686-portable-{{version.current}}.zip">Download (Portable)</a>
    </details>
    <h3>CLI (community-maintained)</h3>
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
    <p>Chocolatey and Scoop packages are community-maintained, PolyMC is not responsible for outdated versions.</p>
  </div>
  <div class="card">
    <h1>MacOS</h1>
    <p><a class="button" href="https://github.com/PolyMC/PolyMC/releases/download/{{ version.current }}/PolyMC-macOS-{{ version.current }}.tar.gz">Download (x86)</a></p>
    <p>PolyMC does not work natively on the M1 Mac devices yet.
    </details>
    <h3>Homebrew Package (community-maintained)</h3>
    <details>
      <summary>
        Installation instructions
        <hr>
      </summary>
    <pre><code>brew install --cask polymc</code></pre>
    </details>
  </div>
  <div class="card">
    <h1>Linux</h1>
    <p><a class="button" href="https://flathub.org/apps/details/org.polymc.PolyMC" >Install from FlatHub</a>
    <p><a class="button" href="https://github.com/PolyMC/PolyMC/releases/download/{{version.current}}/PolyMC-Linux-{{version.current}}-x86_64.AppImage" >Download (AppImage)</a>
    <p><a class="button" href="https://github.com/PolyMC/PolyMC/releases/download/{{version.current}}/PolyMC-Linux-{{version.current}}.tar.gz" >Download (tar.gz)</a></p>
    <p><a class="button" href="https://github.com/PolyMC/PolyMC/releases/download/{{version.current}}/PolyMC-Linux-portable-{{version.current}}.tar.gz" >Download (Portable tar.gz)</a></p>
    <p>Distro-specific packages can be <a href="{{ '../wiki/installing/linux/' | url}}">found here</a>!</p>
  </div>
  <div class="card">
    <h1>BSD</h1>
    <p>BSD packages are community-maintained, PolyMC is not responsible for outdated versions.</p>
    <p><a class="button" href="{{ '/wiki/installing/free-bsd/' | url }}">FreeBSD</a></p>
    <p><a class="button" href="{{ '/wiki/installing/open-bsd/' | url }}">OpenBSD</a></p>
  </div>
</div>
