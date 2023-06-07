---
title: "!ALERT! Security vulnerability in the CurseForge platform"
description: Curseforge Compromised
date: 2023-06-07
---

Multiple groups are reporting CurseForge as compromised. Malware has been uploaded in various projects and it may be a security vulnerability in the CurseForge platform. **We recommend not downloading or updating any mods from CurseForge at the moment**, and we will update y'all with the latest news as more information becomes available.

<div class="infobox">
Update 12:15 AEST

@Getchoo has reported that decompiling compromised jars have found that they compromise these locations:

linux users should be checking for systemd-utility.service in ~/.config/systemd/user or /etc/systemd/system/ and lib.jar in ~/.config/.data

windows users should be checking for libWebGL64.jar in %localappdata%\Microsoft Edge and an entry in HKCU:\Software\Microsoft\Windows\CurrentVersion\Run or a shortcut in %appdata%\Microsoft\Windows\Start Menu\Programs\Startup and a run.bat in %localappdata%\Microsoft Edge

You will need to enable "View Hidden Files" for the file to appear, if it exists. You can find guides for this online
</div>

<div class="notification type-warn top">
Please be aware that this is only for the known compromised jars there is possibility for more advanced malware to be spread, deleting these files does not mean you are 100% safe
</div>

Report from Lunar Pixel Studios:

![Lunar Pixel Studios First Report](/img/news/cf-compromised/image.png)

![Lunar Pixel Studios Second Report/Announcement](/img/news/cf-compromised/image2.png)
