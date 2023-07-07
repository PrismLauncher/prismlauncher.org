---
title: "[MALWARE WARNING] \"fractureiser\" malware in many popular Minecraft mods and modpacks"
description: Malware is being distributed through Minecraft mods and modpacks mainly through CurseForge
date: 2023-06-07
---

For a full summary, check out this GitHub repository: <https://github.com/fractureiser-investigation/fractureiser>

Starting June 6th, 2023 UTC, multiple groups reported many CurseForge and Bukkit projects as compromised. Malware was been uploaded to several projects and it's now known that the virus was self-replicating and spreading. Since then, both [Modrinth](https://twitter.com/modrinth/status/1666853947804463115) and [Curseforge](https://twitter.com/CurseForge/status/1666741580022128641) have stated all infected files have been removed or they were unaffected. It should be safe to use these services now, however users should still take caution in downloading files, especially from less trustworthy services.

<div class="notification type-warn">
Following the steps below if you find that you have the virus, remove it then <b>CHANGE ALL OF YOUR PASSWORDS</b> as it is highly likely that the virus is extracting all of your browsers saved passwords.
</div>

Table of contents:

[[toc]]

## What can I do?

<div class="notification type-warn">
 Windows 10 versions older than 22H2 may not have received this intelligence update yet due to being out of support. We recommend you upgrade to 22H2 in order to continue receiving support from Microsoft.
</div>

<b>As of June 8th, 2023 UTC</b>, Windows Defender has started detecting some jars infected with stage 0, along with files from stage 2 (specifically libWebGL64.jar). You should make you have the latest security intelligence updates from Microsoft by going to settings and running Windows Update. To confirm, go to Windows Defender, click "Virus and Threat Protection," scroll down to "Virus and Threat Protection Updates," and press "Protection Updates." It should say the last update was today and the version was created on <b>June 9th, 2023</b>. This will help reduce any damage or further infection caused by jars containing fractureiser.

It is still recommended to read the following steps if you haven't already run a scan or are suspicious of a mod you have downloaded. It is still possible infected jars are on your system, as currently the detection done by Windows Defender for stage 0 files can be inconsistent.

### Checking Mods

When downloading mods and plugins you may be suspicious of, douira's [Fractureiser Web Scanner](https://douira.github.io/fractureiser-web-detector/) can be used to detect if they are infected.

### Finding out if you have already been infected

Fractureiser drops multiple files on your system. These steps may be used to see if an infected mod has already been run:

#### Manual Check

> When checking if you are infected, make sure to make `hidden files visible` and for windows also disable `Hide protected operating system files`, for your respective platform.

Stage 1 of the malware attempts to drop a file into the following locations:

* **Linux**:
  * Locate it in systemd-utility.service in ~/.config/systemd/user or /etc/systemd/system/ and lib.jar in ~/.config/.data and check SystemCTL for any changes
* **Windows**: `%LOCALAPPDATA%\Microsoft Edge\libWebGL64.jar` (or `~\AppData\Local\Microsoft Edge\libWebGL64.jar`)
  * Yes, "Microsoft Edge" with a space
  * Also check the registry for an entry at `HKCU:\Software\Microsoft\Windows\CurrentVersion\Run`
  * Or a shortcut in `%appdata%\Microsoft\Windows\Start Menu\Programs\Startup`
  * If the file cannot be deleted due to being open in the "Open JDK Binary" you can use <https://learn.microsoft.com/en-us/sysinternals/downloads/autoruns> to see what applications are on start-up and disable/remove the start up rule for "libWebGL64.jar"
  * Another solution is to delete java so it cannot run in the Java Runtime Environment, and then you can delete the jar by locating it in in %localappdata%\Microsoft Edge and an entry in HKCU:\Software\Microsoft\Windows\CurrentVersion\Run or a shortcut in %appdata%\Microsoft\Windows\Start Menu\Programs\Startup

* **All other OSes**: Unaffected. The malware is hardcoded for Windows and Linux only. It is possible it will receive an update adding payloads for other OSes in the future.

Before downloading, the malware will create the enclosing directory if it does not exist. Windows/MS Edge does not use the "Microsoft Edge"-with-a-space directory, and Linux software likely does not use `~/.config/.data`, so these folders existing may be a sign that stage1 has executed on a victim computer.

If stage2 successfully downloads, it will attempt to make itself start on boot by modifying the Windows registry, or dropping a systemd unit into `/etc/systemd`. (The Linux side of this payload is unlikely to work as it requires root privileges.)

<div class="infobox top">
@PandaNinjas has reported:

use your firewall to block outbound connections to 85[.]217[.]144[.]130, and modify your hosts file to include `0.0.0.0 files-8ie.pages.dev` On linux add that line to /etc/hosts, on windows add that line to C:\Windows\system32\drivers\etc\hosts
</div>

<div class="infobox top">
@orowith2os suggests:

If you use Linux, use the [PrismLauncher Flatpak](https://flathub.org/apps/org.prismlauncher.PrismLauncher) and be very careful of what you give it access to through utilities such as Flatseal. By default, it has no access to the needed directories to compromise the system.

Other sandbox escapes may be possible, but the malware most likely doesn't account for running inside of a sandbox of this sort.

</div>

#### Automated Script

<div class="infobox top">
@Getchoo has released a linux and windows command line script to quickly check if these files exist:

Windows (powershell, not cmd):

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
To use this file after downloading it to your "Downloads" folder, press Windows key + R, then paste and run `powershell -executionpolicy bypass -file "%UserProfile%\Downloads\check_cf.ps1"`
</div>

<a class="button size-medium" href="/img/news/cf-compromised/check_cf.ps1" download="check_cf.ps1">Download Windows Script</a>

Linux:

```bash
#!/usr/bin/env bash

service_file="systemd-utility.service"
data_dir="$HOME/.config/.data"
bad_paths=(
        "$data_dir/.ref"
        "$data_dir/client.jar"
        "$data_dir/lib.jar"
        "$data_dir/lib.dll"
        "$data_dir/libWebGL64.jar"
        "$data_dir/run.bat"
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
 To automatically download and run this file, run `curl -fsSL https://prismlauncher.org/img/news/cf-compromised/check_cf.sh | bash`
</div>

<a class="button size-medium" href="/img/news/cf-compromised/check_cf.sh" download="check_cf.sh">Download Linux Script</a>

</div>

### Files were found! What can I do?

As said before, you should first <b>CHANGE ALL OF YOUR PASSWORDS</b>, as it is possible that the virus extracted all of your browsers saved passwords. You should also use MCRcortex's [nekodetector](https://github.com/MCRcortex/nekodetector), which will allow you to scan your entire system for other Java files that may try to create these files again.

## Who was affected

<div class="infobox top">
 This is by no means a complete list, as it is possible other mods were affected. Keep in mind the mods included in this list should be safe now when downloaded from Curseforge, Modrinth, etc.
</div>

According to Luna Pixel Studios, "tens of mods & modpacks, mostly on 1.16.5 1.18.2 and 1.19.2 were updated to include malicious files"

The currently confirmed affected mods and modpacks are as follows:

*At this point, we have enough samples to know this was quite widespread.*

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
* Anti Redstone Crash (Not to be confused with "NTD AntiRedstoneCrash")
* Hydration
* Fragment Permission Plugin
* No VPNS
* Ultimate Titles Animations Gradient RGB
* Floating Damage

Luna Pixel Studios has stated its very likely someone has found a way to bypass 2fa and login to multiple large CurseForge profiles. The CurseForge profiles are also showing someone logging into them directly.

## What we know about the malware

**Notice: Plugins with similar malware have been found as early as mid-April.**

A number of CurseForge and dev.bukkit.org (not the Bukkit software itself) accounts were compromised, and malicious software was injected into many popular plugins and mods. There are reports of malicious plugin/mod JARs as early as May 22nd.

If you have downloaded any mods from CurseForge, or plugins from Bukkit, even through clients such as Prism Launcher or the official CurseForge launcher, it is recommended that you follow the "Am I infected?" guide below.

The affected accounts had two-factor authentication enabled. It's unlikely this is a simple password compromise situation; it may be auth token compromise or something bigger on the CF side. Multiple accounts are affected so we don't believe this is isolated.

We know platforms such as Modrinth to be unaffected.

It has been found that the information this virus steals is highly likely related to microsoft credentials and browser saved passwords. **RESET ALL OF YOUR PASSWORDS** after you have removed the virus

### Distribution

Some modpacks have had updates published for them without the knowledge of the authors, adding a dependency on malicious mods. These updates were archived immediately after uploading, meaning they *do not show on the web UI, only via the API.*

We cannot tell if the malicious mods were always malicious, or if they got edited. They have upload dates multiple weeks in the past. A CDN compromise or cache poisoning is not out of the question due to Curse's usage of the extremely outdated and insecure MD5 to verify downloads.

## Technical info

Please find up to date technical information on the fracturiser github - <https://github.com/fractureiser-investigation/fractureiser>

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

<https://github.com/fractureiser-investigation/fractureiser>

### Luna Pixel Studios

<div class="infobox top">
 This is an archive of statements by Luna Pixel Studios. Information may or may not be current, and Curseforge should be safe to use now.
</div>

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
