---
title: "!ALERT! Security vulnerability in the CurseForge and Bukkit platform"
description: Curseforge Compromised
date: 2023-06-07
---


Multiple groups are reporting CurseForge and Bukkit as compromised. Malware has been uploaded in various projects and it may be a security vulnerability in the Overwolf platform. **We recommend not downloading or updating any mods from CurseForge and Bukkit at the moment**, and we will update y'all with the latest news as more information becomes available.

Table of contents:

[[toc]]

## Who has been affected (so far)

According to Luna Pixel Studios "tenos of mods & modpacks, mostly on 1.16.5 1.18.2 and 1.19.2 have been updated to include malicious files"

The currently confirmed affected mods and modpacks are as follows:

*At this point, we have enough samples to know this is quite widespread.*

Curseforge:

- Dungeons Arise
- Sky Villages
- Better MC modpack series
- ~~Fabuously Optimized~~ (Found to not be compromised)
- Dungeonz
- Skyblock Core
- Vault Integrations
- AutoBroadcast
- Museum Curator Advanced
- Vault Integrations Bug fix
- Create Infernal Expansion Plus - Mod removed from curseforge

Bukkit:

- Display Entity Editor
- Haven Elytra
- The Nexus Event Custom Entity Editor
- Simple Harvesting
- MCBounties
- Easy Custom Foods
- Anti Command Spam Bungeecord Support
- Ultimate Leveling
- Anti Redstone Crash
- Hydration
- Fragment Permission Plugin
- No VPNS
- Ultimate Titles Animations Gradient RGB
- Floating Damage


Luna Pixel Studios has stated its very likely someone has found a way to bypass 2fa and login to multiple large curseforge profiles. The curseforge profiles are also showing someone logging into them directly.

## What we know about the malware

<div class="notification type-warn top">
Please be aware that this is only for the known compromised jars there is possibility for more advanced malware to be spread, deleting these files does not mean you are 100% safe. Please currently assume that any files on curseforge aren't safe old releases have been found to be modifed.
</div>

**Notice: Plugins with similar malware have been found as early as mid-April.**

A number of Curseforge and dev.bukkit.org (not the Bukkit software itself) accounts have been compromised, and malicious software was injected into many popular plugins and mods. There are reports of malicious plugin/mod JARs as early as May 22nd. 

**Until further notice, do not use the official Curseforge launcher, or download anything from Curseforge or the Bukkit plugin repository.** While the control server for this malware is currently offline, **any download from Curseforge or the Bukkit plugin repository in in the last 2-3 weeks should be treated as potentially malicious**. This malware is unlikely to be detected by Windows Defender or similar antimalware products.

If you have downloaded any mods from Curseforge, or plugins from Bukkit, even through clients such as Prism Launcher or the official Curseforge launcher, it is recommended that you follow the "Am I infected?" guide below.

The affected accounts had two-factor authentication enabled. It's unlikely this is a simple password compromise situation; it may be auth token compromise or something bigger on the CF side. Multiple accounts are affected so we don't believe this is isolated.

Currently, we do not suspect other platforms such as Modrinth to be affected.

### Am I infected?

> When checking if you are infected, make sure to make `hidden files visible`, for your respective platform.

There are scripts available [here](https://prismlauncher.org/news/cf-compromised-alert/) which can help you check easily.

Stage 1 of the malware attempts to drop a file into the following locations:
* **Linux**: `~/.config/.data/lib.jar`
* **Windows**: `%LOCALAPPDATA%\Microsoft Edge\libWebGL64.jar` (or `~\AppData\Local\Microsoft Edge\libWebGL64.jar`)
    * Yes, "Microsoft Edge" with a space
    * Also check the registry for an entry at `HKCU:\Software\Microsoft\Windows\CurrentVersion\Run` 
    * Or a shortcut in `%appdata%\Microsoft\Windows\Start Menu\Programs\Startup` 
* **All other OSes**: Unaffected. The malware is hardcoded for Windows and Linux only. It is possible it will receive an update adding payloads for other OSes in the future.


Before downloading, the malware will create the enclosing directory if it does not exist. Windows/MS Edge does not use the "Microsoft Edge"-with-a-space directory, and Linux software likely does not use `~/.config/.data`, so these folders existing may be a sign that stage1 has executed on a victim computer.

If stage2 successfully downloads, it will attempt to make itself start on boot by modifying the Windows registry, or dropping a systemd unit into `/etc/systemd`. (The Linux side of this payload is unlikely to work as it requires root privileges.)

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

<div class="notification type-warn">
"To use this file, open PowerShell, run Unblock-File .\Downloads\check_cf.ps1 (or Unblock-File .\OneDrive\Downloads\check_cf.ps1), then right click the file explorer, and run it with powershell"
</div>

<a class="button size-medium" href="/img/news/cf-compromised/check_cf.ps1" download="check_cf.ps1">Download Windows Script</a>

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

<a class="button size-medium" href="/img/news/cf-compromised/check_cf.sh" download="check_cf.sh">Download Linux Script</a>

</div>

<div class="infobox top">
@orowith2os suggests:

If you use Linux, use the [PrismLauncher Flatpak](https://flathub.org/apps/org.prismlauncher.PrismLauncher) and be very careful of what you give it access to through utilities such as Flatseal. By default, it has no access to the needed directories to compromise the system.

Other sandbox escapes may be possible, but the malware most likely doesn't account for running inside of a sandbox of this sort.

</div>

## Technical info

Please find up to date technical information on the hakmd document (now not public editable) - https://hackmd.io/B46EYzKXSfWSF35DeCZz9A

## References

https://hackmd.io/B46EYzKXSfWSF35DeCZz9A

### Luna Pixel Studios

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

### The Iris Project

> We have reason to believe many accounts on Curseforge have been hacked and are uploading malicious files containing bot-nets. Luna Pixel Studios, the owner of many big modpacks, is one of the affected accounts.
> The situation is being actively looked into.
