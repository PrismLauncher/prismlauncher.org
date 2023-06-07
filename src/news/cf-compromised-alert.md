---
title: "!ALERT! Security vulnerability in the CurseForge platform"
description: Curseforge Compromised
date: 2023-06-07
---


Multiple groups are reporting CurseForge as compromised. Malware has been uploaded in various projects and it may be a security vulnerability in the CurseForge platform. **We recommend not downloading or updating any mods from CurseForge at the moment**, and we will update y'all with the latest news as more information becomes available.

Table of contents:

[[toc]]

## Who has been affected (so far)

According to Luna Pixel Studios "tenos of mods & modpacks, mostly on 1.16.5 1.18.2 and 1.19.2 have been updated to include malicious files"

The currently confirmed affected mods and modpacks are as follows:

- Dungeons Arise
- Sky Villages
- Better MC modpack series
- Fabuously Optimized
- DungeonsX
- Haven Elytra (bukkit plugin)
- Skyblock Core

Luna Pixel Studios has stated its very likely someone has found a way to bypass 2fa and login to multiple large curseforge profiles. The curseforge profiles are also showing someone logging into them directly.

## What we know about the malware

<div class="notification type-warn top">
Please be aware that this is only for the known compromised jars there is possibility for more advanced malware to be spread, deleting these files does not mean you are 100% safe. Please currently assume that any files on curseforge aren't safe old releases have been found to be modifed.
</div>

### Am I infected?
Stage 1 of the malware attempts to drop a file into the following locations:
* **Linux**: `~/.config/.data/lib.jar`
* **Windows**: `%LOCALAPPDATA%\Microsoft Edge\libWebGL64.jar` (or `~\AppData\Local\Microsoft Edge\libWebGL64.jar`)
    * Yes, "Microsoft Edge" with a space
    * Also check the registry for an entry at `HKCU:\Software\Microsoft\Windows\CurrentVersion\Run` 
    * Or a shortcut in `%appdata%\Microsoft\Windows\Start Menu\Programs\Startup`
* **All other OSes**: Unaffected. The malware is hardcoded for Windows and Linux only. It is possible it will receive an update adding payloads for other OSes in the future.


Before downloading, the malware will create the enclosing directory if it does not exist. Windows/MS Edge does not use the "Microsoft Edge"-with-a-space directory, and Linux software likely does not use `~/.config/.data`; this may be a sign that stage1 has executed on a victim computer.

If stage2 successfully downloads, it will attempt to make itself start on boot by modifying the Windows registry and dropping a systemd unit into `/etc/systemd`. (The Linux side of this payload is unlikely to work as it requires root privileges.)

### Distribution

Some modpacks have had updates published for them without the knowledge of the authors, adding a dependency on malicious mods. These updates were archived immediately after uploading, meaning they *do not show on the web UI, only via the API.*

We cannot tell if the malicious mods were always malicious, or if they got edited. They have upload dates multiple weeks in the past. A CDN compromise or cache poisoning is not out of the question due to Curse's usage of the extremely outdated and insecure MD5 to verify downloads.

## What you can do

<div class="infobox">
Update 12:15 AEST

@Getchoo has reported that decompiling compromised jars have found that they compromise these locations:

linux users should be checking for systemd-utility.service in ~/.config/systemd/user or /etc/systemd/system/ and lib.jar in ~/.config/.data

windows users should be checking for libWebGL64.jar in %localappdata%\Microsoft Edge and an entry in HKCU:\Software\Microsoft\Windows\CurrentVersion\Run or a shortcut in %appdata%\Microsoft\Windows\Start Menu\Programs\Startup and a run.bat in %localappdata%\Microsoft Edge

You will need to enable "View Hidden Files" for the file to appear, if it exists. You can find guides for this online
</div>

<div class="infobox top">
@PandaNinjas has reported:

use your firewall to block outbound connections to 85[.]217[.]144[.]130, and modify your hosts file to include `0.0.0.0 files-8ie.pages.dev` On linux add that line to /etc/hosts, on windows add that line to C:\Windows\system32\drivers\etc\hosts
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

Read-Host -Prompt "press any button to exit"
```

<a class="button size-medium" href="/img/news/cf-compromised/scripts/check_cf.ps1" download="check_cf.ps1">Download Windows Script</a>

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

<a class="button size-medium" href="/img/news/cf-compromised/scripts/check_cf.sh" download="check_cf.sh">Download Linux Script</a>

</div>

## Technical info

Please refer to https://pad.snopyta.org/rQ9-f6mPRWCZbH4Gyv6fnQ# as it contains more up to date technical information

## References

https://pad.snopyta.org/rQ9-f6mPRWCZbH4Gyv6fnQ# - public wiki can be trolled and compromised procede with caution

![Lunar Pixel Studios First Report](/img/news/cf-compromised/image.png)

![Lunar Pixel Studios Second Report/Announcement](/img/news/cf-compromised/image2.png)

![Lunar Pixel Studios Who is affected](/img/news/cf-compromised/image3.png)
