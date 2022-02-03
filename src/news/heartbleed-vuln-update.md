---
title: Heartbleed Vulnerability Update (fixed!)
author: Drayshak
date: 2014-04-09T16:21:04+02:00
---

If you've used the Internet in the last couple of days, you've probably heard about the [Heartbleed](http://heartbleed.com/) vulnerability. To keep it short, there's a vulnerability in a bunch of versions of OpenSSL that make it possible for servers or clients to make their counterparts expose system memory in 64kB blocks.

MultiMC on Windows ships with a version that's vulnerable. As far as we can tell, the only people that could use the exploit are servers that we connect to, which are Mojang and ourselves. We're going to update A.S.A.P. and hope to get a build out with it tonight (US time).

If you don't want to wait for the update tonight, you can replace three files in your MultiMC folder with newer versions. Specifically, "libeay32.dll", "libssl32.dll" and "ssleay32.dll". We use the OpenSSL distribution from [Shining Light Productions](http://slproweb.com/products/Win32OpenSSL.html) - download their "Win32 OpenSSL v1.0.1g Light" installer, run it, grab those files from the installation directory ("C:/OpenSSL-Win32/" by default), and copy them in to your MultiMC folder.

I'll also update the title of this blog post when we've pushed an updated version out.

[@Drayshak](https://twitter.com/drayshak)

__Edit:__ We've pushed new stable, release candidate and development versions out with the fix. Update as soon as you can to get it!