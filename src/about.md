---
layout: layouts/page.njk
title: About
templateClass: tmpl-post
eleventyNavigation:
  key: About
  order: 3
---

# Why was this fork made?
The maintainer of MultiMC has been hostile to other people packaging it, and has taken an anti-user approach removing features from the software to make it harder to package for a system install. Therefore, this project was made to allow anyone to distribute this as they please, without needless obstructions that the MultiMC maintainer seems to deem necessary. Additionally, this allows for full-system installs, building from source (and you will be allowed support for your own builds), and for any redistribution you like--packages, binaries, whatever.

We simply do not agree with the MultiMC maintainer's attitude, and believe the source code should be provided not only for contribution purposes, but **for the user's freedom.** We believe that no program is truly "open source" if it is not Free Software. The maintainer only open-sourced MultiMC because he wanted free code contributions. To quote him:

> The source is only provided for the purpose of collaboration.

<img src="https://file.swurl.xyz/29645c5bdb8b0fd8/fingerprint.png" alt="Build fingerprinting to prevent anyone from using other methods of packaging.">

<img src="https://file.swurl.xyz/1a85d58df6535fcb/aur_insults.png" alt="resorts to insults on people who try to make the package more free.">

<img src="https://file.swurl.xyz/d18d1ce659a9656f/meta.png" alt="Explicitly breaking metadata to harm the end user's experience.">

<img src="https://file.swurl.xyz/36802e45e55534b3/anti_free_software.png" alt="Anti-Free Software approach. Maintainer also works for Microsoft and has to make deals with them.">

<img src="https://file.swurl.xyz/2a32f733b3f0a2dc/breaking.png" alt="Maintainer implies a potential inbuilt breakage of multimc-bin in the future.">

The maintainer also blacklisted me from forking the repository after I made this fork.

<img src="https://file.swurl.xyz/48c8cbb77abfc28e/fork.png" alt="blacklisted from repo">

This project is **not** endorsed by MultiMC. The maintainer does not like anyone forking, let alone people forking for the purpose of user freedom, and has previously stated he disapproves of this fork.

**UPDATE**: And now, it's confirmed. MultiMC has blocked PolyMC from accessing meta.

<img src="https://file.swurl.xyz/33f9bfe731a5cc63/meta_blocked.png" alt="blocked from meta">

Griffin on Matrix confirmed this, with a `curl` and PolyMC's user agent:

```
C:\Users\tsira>curl -A "PolyMC/1.0.5" https://meta.multimc.org/v1/index.json
error code: 1020
```
