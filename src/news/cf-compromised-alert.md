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
Please be aware that this is only for the known compromised jars there is possibility for more advanced malware to be spread, deleting these files does not mean you are 100% safe. Please currently assume that any files on curseforge aren't safe old releases have been found to be modifed.
</div>

<div class="infobox top">
@PandaNinjas has reported:

use your firewall to block outbound connections to 85[.]217[.]144[.]130, and modify your hosts file to include 0.0.0.0 files-8ie.pages.dev On linux add that line to /etc/hosts, on windows add that line to C:\Windows\system32\drivers\etc\hosts
</div>

<div class="infobox top">
@Getchoo has released a linux and windows command line script to quickly check if these files exist:

Windows:
```powershell
$badPaths = @(
        "$HOME\AppData\Local\Microsoft Edge\libWebGL64.jar",
        "HKCU:\Software\Microsoft\Windows\CurrentVersion\Run\t",
        "$HOME\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\run.bat"
)

$res = $false

ForEach ($Path in $badPaths) {
        if (Test-Path -Path $Path) {
                  Write-Host "bad file found! please delete $Path"
                        $res = $true
        }
}

if (!($res)) {
                Write-Host "nothing found! :)"
}
```

Linux:
```bash
#!/usr/bin/env bash

service_file="systemd-utility"
bad_paths=(
        "$HOME/.config/.data/lib.jar"
        "$HOME/.config/systemd/user/$service_file"
        "/etc/systemd/system/$service_file"
)

res="true"
for path in "${bad_paths[@]}"; do
        if [ -f "$path" ]; then
                echo "bad file found! please delete $path"
                res="false"
        fi
done

if [ "$res" == "true" ]; then
        echo "nothing found :)"
fi
```
</div>



Report from Lunar Pixel Studios:

![Lunar Pixel Studios First Report](/img/news/cf-compromised/image.png)

![Lunar Pixel Studios Second Report/Announcement](/img/news/cf-compromised/image2.png)
