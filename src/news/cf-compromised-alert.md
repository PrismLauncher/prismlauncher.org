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

Reports from Luna Pixel Studios:

> **DO NOT UPDATE MODS OR MODPACKS ON CURSEFORGE.**
> 
> Several new files have been uploaded to projects by Luna Pixel Studios, including Sky Villages, When Dungeons Arise, and Better MC. These may or may not include malicious files. We are not responsible for this, and currently doing everything we can to remove these files.
> 
> This could be due to a Curseforge bug or someone with access to the Luna Pixel Studios account, or even Curseforge itself. 
> 
> Currently, it is best to avoid downloading files off Curseforge until this is resolved. I will let you all know when this is resolved. 
> 
> Thank you.

> To clear up some questions:
> 
> Any launcher that uses Curseforge API is affected, but you are safe as long as you aren't downloading these files.
> 
> Nothing will auto-update unless you specifically told a launcher to do so.
> 
> These files are not confirmed to be malicious, but we still recommend doing an antivirus scan using Windows Defender.

> Summary:
> 
> As of a couple hours ago, tens of mods & modpacks, mostly on 1.16.5, 1.18.2 and 1.19.2 have been updated to include malicious files. These projects include When Dungeons Arise, Sky Villages, and the Better MC modpack series. The Curseforge profile of these accounts show someone logging into them directly.
> 
> It is very likely that someone has access to several large Curseforge profiles and have found a way of bypassing 2FA to log into them.
> 
> You can see here that the Fabulously Optimized team was also affected: <https://cdn.discordapp.com/attachments/790275974503202857/1115801834746023946/image.png>
> 
> One of the malicious mods, DungeonsX, shows this code when decompiled: <https://cdn.discordapp.com/attachments/790275974503202857/1115801511411335228/image.png>
> 
> The main payload being sent from this code can be viewed here: <https://pastebin.com/k2ZQKbEz>
> 
> The DungeonsX mod downloads a jar file and loads it into minecraft, executes a function that downloads the program again, and saves it as a self running file. This mod has been added to all of Luna Pixel Studio's modpacks, and the files were immediately archived by the bad actor. It can be assumed that these files will become available again later, exposing hundreds of thousands of people to malware.
> 
> This code allows the mod to be used as a botnet and leave a backdoor on devices: <https://chorb.is-from.space/DiscordPTB_gzDJsWklzc.png>
> 
> The code being executed mainly targets Linux users, likely with the intent of infecting servers. This will still affect people on Windows. 
> 
> The only file from this incident which is not already archived is https://www.curseforge.com/minecraft/mc-mods/skyblock-core/files/4570565.
> This file was archived, but gained 10 downloads in that time, implying it's being shared on other platforms: <https://cdn.discordapp.com/attachments/856652644113580072/1115811476591095908/image.png>
> 
> ### It is recommended to hold off on updating any mods or modpacks until this is resolved.

Reports from The Iris Project:

> We have reason to believe many accounts on Curseforge have been hacked and are uploading malicious files containing bot-nets. Luna Pixel Studios, the owner of many big modpacks, is one of the affected accounts.
> The situation is being actively looked into.
