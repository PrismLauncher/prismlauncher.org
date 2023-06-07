---
title: "!ALERT! Security vulnerability in the CurseForge and Bukkit platform"
description: CurseForge Compromised
date: 2023-06-07
---

For the latest news, check out this document: <https://hackmd.io/B46EYzKXSfWSF35DeCZz9A>

Multiple groups are reporting CurseForge and Bukkit as compromised. Malware has been uploaded in various projects and it may be a security vulnerability in the Overwolf platform. **We recommend not downloading or updating any mods from CurseForge and Bukkit at the moment**, and we will update y'all with the latest news as more information becomes available.

Additionally there are indicators that the malware is self-replicating, which is why **you should avoid playing Minecraft at all for now**.

Table of contents:

[[toc]]

## What can I do?

<div class="notification type-warn top">
Please be aware that this is only for the known compromised jars there is possibility for more advanced malware to be spread, deleting these files does not mean you are 100% safe. Please currently assume that any files on CurseForge aren't safe old releases have been found to be modifed. Additionally there are indicators that the malware is self-replicating, which is why you should avoid playing Minecraft at all for now.
</div>

### Manual Check

> When checking if you are infected, make sure to make `hidden files visible` and for windows also disable `Hide protected operating system files`, for your respective platform.

Stage 1 of the malware attempts to drop a file into the following locations:

* **Linux**:
  * Locate it in systemd-utility.service in ~/.config/systemd/user or /etc/systemd/system/ and lib.jar in ~/.config/.data and check SystemCTL for any changes
* **Windows**: `%LOCALAPPDATA%\Microsoft Edge\libWebGL64.jar` (or `~\AppData\Local\Microsoft Edge\libWebGL64.jar`)
  * Yes, "Microsoft Edge" with a space
  * Also check the registry for an entry at `HKCU:\Software\Microsoft\Windows\CurrentVersion\Run`
  * Or a shortcut in `%appdata%\Microsoft\Windows\Start Menu\Programs\Startup`
  * If the file cannot be deleted due to being open in the "Open JDK Binary" you can use <https://learn.microsoft.com/en-us/sysinternals/downloads/autoruns> or CCleaner to see what applications are on start-up and disable/remove the start up rule for "libWebGL64.jar"
  * Another solution is to delete java so it cannot run in the Java Runtime Enviroment, and then you can delete the jar by locating it in in %localappdata%\Microsoft Edge and an entry in HKCU:\Software\Microsoft\Windows\CurrentVersion\Run or a shortcut in %appdata%\Microsoft\Windows\Start Menu\Programs\Startup

* **All other OSes**: Unaffected. The malware is hardcoded for Windows and Linux only. It is possible it will receive an update adding payloads for other OSes in the future.

Before downloading, the malware will create the enclosing directory if it does not exist. Windows/MS Edge does not use the "Microsoft Edge"-with-a-space directory, and Linux software likely does not use `~/.config/.data`, so these folders existing may be a sign that stage1 has executed on a victim computer.

If stage2 successfully downloads, it will attempt to make itself start on boot by modifying the Windows registry, or dropping a systemd unit into `/etc/systemd`. (The Linux side of this payload is unlikely to work as it requires root privileges.)

<div class="notification type-warn top">
If you have the virus and have successfully removed it please make sure to change <b>ALL OF YOUR PASSWORDS</b> as it is highly likely that the virus is extracting all of your browsers saved passwords.<br>

There are indicators that the malware is self-replicating. Apparently the malware scans your computer for mods and Minecraft jars and injects itself into those. Don't start Minecraft for now.
</div>

<div class="infobox top">
@PandaNinjas has reported:

use your firewall to block outbound connections to 85[.]217[.]144[.]130, and modify your hosts file to include `0.0.0.0 files-8ie.pages.dev` On linux add that line to /etc/hosts, on windows add that line to C:\Windows\system32\drivers\etc\hosts
</div>

<div class="infobox top">
@orowith2os suggests:

If you use Linux, use the [PrismLauncher Flatpak](https://flathub.org/apps/org.prismlauncher.PrismLauncher) and be very careful of what you give it access to through utilities such as Flatseal. By default, it has no access to the needed directories to compromise the system.

Other sandbox escapes may be possible, but the malware most likely doesn't account for running inside of a sandbox of this sort.

</div>

### Automated Script

<div class="infobox top">
@Getchoo has released a linux and windows command line script to quickly check if these files exist:

Windows:

```powershell
$appData = "$HOME\AppData"
$edgePath = "$appData\Local\Microsoft Edge"

$badPaths = @(
        "$edgePath\.ref",
        "$edgePath\client.jar"
        "$edgePath\lib.dll",
        "$edgePath\libWebGL64.jar",
        "$edgePath\run.bat",
        "$appData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\run.bat",
        "HKCU:\Software\Microsoft\Windows\CurrentVersion\Run\t"
)

$res = $false

ForEach ($Path in $badPaths) {
        if (Test-Path -Path $Path) {
                Write-Host "bad file found! removing $Path..."
                Remove-Item -Force $Path
                $res = $true
        }
}

if (!($res)) {
                Write-Host "nothing found! :)"
}

Read-Host -Prompt "press any button to exit"
```

<div class="notification type-warn">
"To use this file, press Windows key + R, then paste and run `powershell -executionpolicy bypass -file "%UserProfile%\Downloads\check_cf.ps1"`"
</div>

<a class="button size-medium" href="/img/news/cf-compromised/check_cf.ps1" download="check_cf.ps1">Download Windows Script</a>

Linux:

```bash
#!/usr/bin/env bash

service_file="systemd-utility"
data_dir="$HOME/.config/.data"
bad_paths=(
        "$data_dir/.ref"
        "$data_dir/client.jar"
        "$data_dir/lib.jar"
        "$HOME/.config/systemd/user/$service_file"
        "/etc/systemd/system/$service_file"
)

res="true"
for path in "${bad_paths[@]}"; do
        if [ -f "$path" ]; then
                echo "bad file found! removing $path..."
                rm --force "$path"
                res="false"
        fi
done

if [ "$res" == "true" ]; then
        echo "nothing found :)"
fi
```

<div class="notification type-warn">
"To use this file, run `curl -fsSL https://prismlauncher.org/img/news/cf-compromised/check_cf.sh | bash`"
</div>

<a class="button size-medium" href="/img/news/cf-compromised/check_cf.sh" download="check_cf.sh">Download Linux Script</a>

</div>

## Who has been affected (so far)

According to Luna Pixel Studios, "tens of mods & modpacks, mostly on 1.16.5 1.18.2 and 1.19.2 have been updated to include malicious files"

The currently confirmed affected mods and modpacks are as follows:

*At this point, we have enough samples to know this is quite widespread.*

CurseForge:

* Dungeons Arise
* Sky Villages
* Better MC modpack series
* ~~Fabuously Optimized~~ (Found to not be compromised)
* Dungeonz
* Skyblock Core
* Vault Integrations
* AutoBroadcast
* Museum Curator Advanced
* Vault Integrations Bug fix
* Create Infernal Expansion Plus - Mod removed from CurseForge

Bukkit:

* Display Entity Editor
* Haven Elytra
* The Nexus Event Custom Entity Editor
* Simple Harvesting
* MCBounties
* Easy Custom Foods
* Anti Command Spam Bungeecord Support
* Ultimate Leveling
* Anti Redstone Crash
* Hydration
* Fragment Permission Plugin
* No VPNS
* Ultimate Titles Animations Gradient RGB
* Floating Damage

Luna Pixel Studios has stated its very likely someone has found a way to bypass 2fa and login to multiple large CurseForge profiles. The CurseForge profiles are also showing someone logging into them directly.

## What we know about the malware

**Notice: Plugins with similar malware have been found as early as mid-April.**

A number of CurseForge and dev.bukkit.org (not the Bukkit software itself) accounts have been compromised, and malicious software was injected into many popular plugins and mods. There are reports of malicious plugin/mod JARs as early as May 22nd.

**Until further notice, do not use the official CurseForge launcher, or download anything from CurseForge or the Bukkit plugin repository.** While the control server for this malware is currently offline, **any download from CurseForge or the Bukkit plugin repository in in the last 2-3 weeks should be treated as potentially malicious**. This malware is unlikely to be detected by Windows Defender or similar antimalware products.

If you have downloaded any mods from CurseForge, or plugins from Bukkit, even through clients such as Prism Launcher or the official CurseForge launcher, it is recommended that you follow the "Am I infected?" guide below.

The affected accounts had two-factor authentication enabled. It's unlikely this is a simple password compromise situation; it may be auth token compromise or something bigger on the CF side. Multiple accounts are affected so we don't believe this is isolated.

Currently, we do not suspect other platforms such as Modrinth to be affected.

It has been found that the information this virus steals is highly likely related to microsoft credentials and browser saved passwords. **RESET ALL OF YOUR PASSWORDS** after you have removed the virus

### Distribution

Some modpacks have had updates published for them without the knowledge of the authors, adding a dependency on malicious mods. These updates were archived immediately after uploading, meaning they *do not show on the web UI, only via the API.*

We cannot tell if the malicious mods were always malicious, or if they got edited. They have upload dates multiple weeks in the past. A CDN compromise or cache poisoning is not out of the question due to Curse's usage of the extremely outdated and insecure MD5 to verify downloads.

## Technical info

Please find up to date technical information on the hackmd document (now not public editable) - <https://hackmd.io/B46EYzKXSfWSF35DeCZz9A>

<div class="infobox top">
@orowith2os says:

**Note: I don't know Java, this is just me making sense of what I see as best I can.** Others will most likely be able to build on top of this information and explain it in more detail.

Taking a quick look over the decompiled source code, it will indeed fail to function inside of the default PrismLauncher Flatpak sandbox; the current malware hardcodes the user's `~/.config/` directory. The creation of files inside of the Flatpak sandbox, if the app does not have access to that real path, will result in it being written to a tmpfs that gets wiped on a sandbox restart. systemd is also not available inside of the Flatpak sandbox, so executing that command will fail. The malware seems to not attempt to work around these limitations, and assumes it is running unsandboxed.

</div>

<div class="infobox top">
@getchoo and @Scrumplex says:

**Note: When running Prism Launcher at a user level (i.e., not as root), the services installed by stage 1 of the malware will only be made at a user level - however, due to an invalid `WantedBy` field these will not work.

This means most Linux users may be unaffected by this, but as the files are still there and could pose a threat, it is still recommended to manually check for the files or the run the script to delete them from your system.

</div>

## References

<https://hackmd.io/B46EYzKXSfWSF35DeCZz9A>

### Luna Pixel Studios

> **DO NOT UPDATE MODS OR MODPACKS ON CURSEFORGE.**
>
> Several new files have been uploaded to projects by Luna Pixel Studios, including Sky Villages, When Dungeons Arise, and Better MC. These may or may not include malicious files. We are not responsible for this, and currently doing everything we can to remove these files.
>
> This could be due to a CurseForge bug or someone with access to the Luna Pixel Studios account, or even CurseForge itself.
>
> Currently, it is best to avoid downloading files off CurseForge until this is resolved. I will let you all know when this is resolved.
>
> Thank you.
>
> To clear up some questions:
>
> Any launcher that uses CurseForge API is affected, but you are safe as long as you aren't downloading these files.
>
> Nothing will auto-update unless you specifically told a launcher to do so.
>
> These files are not confirmed to be malicious, but we still recommend doing an antivirus scan using Windows Defender.
>
> Summary:
>
> As of a couple hours ago, tens of mods & modpacks, mostly on 1.16.5, 1.18.2 and 1.19.2 have been updated to include malicious files. These projects include When Dungeons Arise, Sky Villages, and the Better MC modpack series. The CurseForge profile of these accounts show someone logging into them directly.
>
> It is very likely that someone has access to several large CurseForge profiles and have found a way of bypassing 2FA to log into them.
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
> The only file from this incident which is not already archived is <https://www.curseforge.com/minecraft/mc-mods/skyblock-core/files/4570565>.
> This file was archived, but gained 10 downloads in that time, implying it's being shared on other platforms: <https://cdn.discordapp.com/attachments/856652644113580072/1115811476591095908/image.png>
>
> ### It is recommended to hold off on updating any mods or modpacks until this is resolved.

### The Iris Project

> We have reason to believe many accounts on CurseForge have been hacked and are uploading malicious files containing bot-nets. Luna Pixel Studios, the owner of many big modpacks, is one of the affected accounts.
> The situation is being actively looked into.
