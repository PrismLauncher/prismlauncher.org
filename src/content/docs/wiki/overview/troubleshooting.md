---
title: Troubleshooting
sidebar:
  order: 3
---

This is a collection of helpful information for frequent problems when using Prism Launcher.

## MinecraftForge on Linux distributions that use zlib-ng

Some Linux distributions like CachyOS and Fedora use zlib-ng instead of classic zlib, which is [incompatible with MinecraftForge installers](https://github.com/zlib-ng/zlib-ng/issues/1827). To fix this, add `-Dforgewrapper.skipHashCheck=true` in Edit > Settings > Java > Java arguments.

Alternatively, you can switch to classic zlib. For CachyOS, the necessary command to do so is:

```bash
sudo pacman -S zlib lib32-zlib
```

## "Failed to log in: The authentication servers are down for maintenance." or skins not loading?

This is most commonly an issue with old Mojang Java 8 versions in Windows and macOS. To fix it, delete the old installation by going to Prism > top toolbar > Settings > Java > Installations, selecting Java 1.8.0_51 (or Java 1.8.0_74 on macOS) and pressing Remove.

## Minecraft 1.16.5 with Minecraft Forge and Java 8u321+

Older versions of Minecraft Forge for Minecraft 1.16.5 cause the game to crash on launch, as they do not support the latest revisions of Java 8.

You can fix this by changing the Forge version in the launcher to the latest or recommended version.
For that go to **Version** → **Select Forge** → **Change Version** → **Select newest version** → **OK**

Alternatively you can download and use an older Java version (i.e. Java 8u312)

## Minecraft Forge failing to run processor

If you are getting an error saying `Failed to run processor: java.net.ConnectException: Connection refused` when trying to launch a Minecraft Forge instance, you might have connectivity issues with IPv6.

A workaround for this issue is adding the following JVM argument:

```text
-Djava.net.preferIPv4Stack=true
```

## Very old Forge modpacks with modern Java 8 runtimes

On very old modpacks you may crashes similar as follows:

```text
2024-02-28 10:35:15 [SEVERE] [Forestry] myrathi.flatsigns.FlatSigns failed validation. Halting runtime for security reasons. Please replace your mods with untampered versions from the official download sites.
```

```text
2024-02-28 10:31:56 [SEVERE] [ForgeModLoader] The minecraft jar file:/home/********/.var/app/org.prismlauncher.PrismLauncher/data/PrismLauncher/libraries/com/mojang/minecraft/1.6.4/minecraft-1.6.4-client.jar!/net/minecraft/client/ClientBrandRetriever.class appears to be corrupt! There has been CRITICAL TAMPERING WITH MINECRAFT, it is highly unlikely minecraft will work! STOP NOW, get a clean copy and try again!
```

```text
2023-01-23 16:10:09 [SEVERE] [Forestry] ic2.core.IC2 failed validation. Halting runtime for security reasons. Please replace your mods with untampered versions from the official download sites.
```

To fix this, you can use Prism Launcher's auto-downloadable Mojang distributed java runtimes. To use them, enable "Auto-download Mojang Java" in Settings -> Java and untick "Java installation" in Edit -> Settings -> Java

If that isn't enough or you can't use mojang's java you can try using the [SHA-1 Redemption](https://modrinth.com/mod/sha1redemption) nilmod with [NilLoader](https://git.sleeping.town/Nil/NilLoader). Alternatively you can follow this alternative process:

1. Create a file named `java.security` inside the instance minecraft(`.minecraft`/`minecraft`) folder with the following content:

   ```text
   jdk.certpath.disabledAlgorithms=MD2, MD5, SHA1 jdkCA & usage TLSServer, \
       RSA keySize < 1024, DSA keySize < 1024, EC keySize < 224, \
       include jdk.disabled.namedCurves

   jdk.jar.disabledAlgorithms=MD2, MD5, RSA keySize < 1024, \
       DSA keySize < 1024, \
       include jdk.disabled.namedCurves
   ```

2. Open Edit instance window
3. Navigate to Java Setting
4. Check the Java arguments checkbox
5. Paste `-Djava.security.properties=java.security` inside the java arguments text box

## Common Launcher-related issues

### <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Windows_logo_-_2021.svg" alt="Windows Logo" width=20px style="display: inline-block" /> Windows (7, 8.1, 10, 11)

#### "MSVCP140_2.dll was not found"?

Since Prism Launcher 6.0, Prism is compiled using [MSVC](https://en.wikipedia.org/wiki/Microsoft_Visual_C%2B%2B) on Windows.
As a consequence of this, like most apps on Windows, you have to install vcredist for Prism to run.
You need:

- [vcredist 2022 x64](https://aka.ms/vs/17/release/vc_redist.x64.exe) if you're using PrismLauncher-Windows-MSVC (the recommended version for Windows 10 64 bit/Windows 11)
- [vcredist 2022 arm64](https://aka.ms/vs/17/release/vc_redist.arm64.exe) if you're using PrismLauncher-Windows-MSVC-arm64 (the recommended version for Windows 10/11 on ARM)

#### How do I open a .zip file?

Windows by default can "open" **.zip** archive files, but in order to use Prism Launcher, you will want to **extract** it instead.

#### Windows Protected my PC?

This is unfortunately **normal behaviour** due to the nature of the Windows app signing process. Prism Launcher has yet to purchase a signature, however, with enough funding, we may choose to do so in the future. Prism Launcher is an **open-source** application. As a result of this, all of the source code is public, and can be audited by any individual or group. If you would like to do so yourself, you can do so here: <https://github.com/PrismLauncher/PrismLauncher>

If you are **comfortable** and **trust** Prism Launcher, then you can click on the **More info** button, and then do the same on the **Run anyway** one too.

### <img src="https://upload.wikimedia.org/wikipedia/de/c/c2/Microsoft_Windows_7_logo.svg" alt="Windows 7 Logo" width=20px style="display: inline-block" /> Legacy Operating Systems

Prism Launcher doesn't have support for old operating systems, such as Windows 7 and macOS 10.13 High Sierra.

:::danger[The versions here aren't supported anymore!]
These operating systems are very old and have reached the end of their life cycle. They are no longer supported by our launcher and these outdated launcher versions can break at any time. They are only listed here for historical reasons. **Do not ask for support on an unsupported OS version!**

:::

The last version of Prism Launcher supporting Windows 7 and Windows 8.1 was Prism Launcher 7.2's Qt 5 build, you can download here the [setup](https://github.com/PrismLauncher/PrismLauncher/releases/download/7.2/PrismLauncher-Windows-MSVC-Legacy-Setup-7.2.exe) and the [portable build](https://github.com/PrismLauncher/PrismLauncher/releases/download/7.2/PrismLauncher-Windows-MSVC-Legacy-Portable-7.2.zip).

The last version of Prism Launcher supporting macOS 10.13 High Sierra, 10.14 Mojave, 10.15 Catalina is Prism Launcher's 9.4's Qt 5 build, downloadable [here](https://github.com/PrismLauncher/PrismLauncher/releases/download/9.4/PrismLauncher-macOS-Legacy-9.4.zip).

The last version of Prism Launcher supporting macOS 11 Big Sur is Prism Launcher 9.4, downloadable [here](https://github.com/PrismLauncher/PrismLauncher/releases/download/9.4/PrismLauncher-macOS-9.4.zip).

### <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/TuxFlat.svg" alt="Linux Tux Logo" width=20px style="display: inline-block" /> Linux

#### How do I install the Prism Launcher Flatpak on my Linux system?

Detailed instructions on setting-up your system to install Flatpak applications from Flathub, can be found here: <https://flatpak.org/setup/>

#### How do I open the Prism Launcher AppImage on my Linux system?

Depending on your system, you may need to grant the Prism Launcher AppImage **executable** permissions.

You can do this by opening your system's terminal application, **making sure to navigate to the location of the downloaded AppImage,** before granting the execute permission using this command:

```bash
chmod +x PrismLauncher-Linux-{{version.current}}-x86_64.AppImage
```

**Please note,** that depending on the version of Prism Launcher that you have downloaded, you may have to **change the version number** in the command above.

If you want to simplify the installation of the AppImage, use [Gear Level](https://gearlever.mijorus.it/). Note that we recommend just using packages when possible.

### <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Windows_logo_-_2021.svg" alt="Windows Logo" width=20px style="display: inline-block" /> <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/TuxFlat.svg" alt="Linux Tux Logo" width=20px style="display: inline-block" /> Windows and Linux

#### I want to make my system install portable

On Prism Launcher you can make any install portable (or making portable installs system) just by adding (or removing) `portable.txt` to the Prism Launcher root directory.
