---
layout: layouts/main.njk
title: Downloads
permalink: /download/
eleventyComputed:
  hero:
    title: "Downloads"
    description: "Download PolyMC {{version.current}}"
    background: ./src/img/forest.png
---
<div class="notification is-info">

PolyMC supports the Steam Deck you can find the installation [instructions here](/wiki/installing/linux/steam-deck).
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
    <h3>CLI (Third Party)</h3>
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
    <p>Chocolatey and Scoop are third party repositorys, PolyMC is not resposible for outdated versions.</p>
  </div>
  <div class="card">
    <h1>MacOS</h1>
    <p><a class="button" href="https://github.com/PolyMC/PolyMC/releases/download/{{ version.current }}/PolyMC-macOS-{{ version.current }}.tar.gz">Download (x86)</a></p>
    <p>PolyMC does not yet work on the M1 Mac devices.
  </div>
  <div class="card">
    <h1>Linux</h1>
    <p><a class="button" href="https://github.com/PolyMC/PolyMC/releases/download/1.1.1/PolyMC-Linux-1.1.1-x86_64.AppImage" >Install from FlatHub</a>
    <p><a class="button" href="https://github.com/PolyMC/PolyMC/releases/download/1.1.1/PolyMC-Linux-1.1.1-x86_64.AppImage" >Download (AppImage)</a>
    <p><a class="button" href="https://github.com/PolyMC/PolyMC/releases/download/1.1.1/PolyMC-Linux-1.1.1.tar.gz" >Download (tar.gz)</a></p>
    <p>distro specific packages can be <a href="{{ '../wiki/installing/' | url}}">found here</a></p>
  </div>
  <div class="card">
    <h1>BSD</h1>
    <p>BSD packages are managed by a third party, PolyMC is not resposible for outdated versions.</p>
    <p><a class="button" href="{{ '/wiki/installing/free-bsd/' | url }}">FreeBSD</a></p>
    <p><a class="button" href="{{ '/wiki/installing/open-bsd/' | url }}">OpenBSD</a></p>
  </div>
</div>
