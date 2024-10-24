---
eleventyNavigation:
  key: Troubleshooting
  parent: Overview
  order: 4
---
# Troubleshooting

This is a collection of helpful information for frequent problems when using Prism Launcher.

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

## Common Launcher-related issues

### <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Windows_logo_-_2021.svg" height="20" /> Windows (7, 8.1, 10, 11)

#### "MSVCP140_2.dll was not found"?

Since Prism Launcher 6.0, Prism is compiled using [MSVC](https://en.wikipedia.org/wiki/Microsoft_Visual_C%2B%2B) on Windows.
As a consequence of this, like most apps on Windows, you have to install vcredist for Prism to run.
You need:

* [vcredist 2022 x64](https://aka.ms/vs/17/release/vc_redist.x64.exe) if you're using PrismLauncher-Windows-MSVC (the recommended version for Windows 10 64 bit/Windows 11)
* [vcredist 2022 arm64](https://aka.ms/vs/17/release/vc_redist.arm64.exe) if you're using PrismLauncher-Windows-MSVC-arm64 (the recommended version for Windows 10/11 on ARM)

#### How do I open a .zip file?

Windows by default can "open" **.zip** archive files, but in order to use Prism Launcher, you will want to **extract** it instead.

#### Windows Protected my PC?

This is unfortunately **normal behaviour** due to the nature of the Windows app signing process. Prism Launcher has yet to purchase a signature, however, with enough funding, we may choose to do so in the future. Prism Launcher is an **open-source** application. As a result of this, all of the source code is public, and can be audited by any individual or group. If you would like to do so yourself, you can do so [here](https://github.com/PrismLauncher/PrismLauncher).

If you are **comfortable** and **trust** Prism Launcher, then you can click on the **More info** button, and then do the same on the **Run anyway** one too.

### <img src="https://upload.wikimedia.org/wikipedia/de/c/c2/Microsoft_Windows_7_logo.svg" height="20" /> Windows 7 and 8.1

#### "api-ms-win-core-synch-l1-2.0.dll not found" or "The procedure entry point CreateDXGIFactory2 could not be located in the dynamic link library dxgi.dll"?

Prism Launcher hasn't supported Windows 7 and Windows 8.1 since version 8.0 due to dependencies. These operating systems have been EOL for years, so please upgrade your operating system for security reasons.
[Prism Launcher 7.2](https://github.com/PrismLauncher/PrismLauncher/releases/tag/7.2) is the last version that has a legacy build for these EOL operating systems, but it's no longer supported.

### <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/TuxFlat.svg" height="20" /> Linux

#### How do I install the Prism Launcher Flatpak on my Linux system?

Detailed instructions on setting-up your system to install Flatpak applications from Flathub, can be found [here](https://flatpak.org/setup/).

#### How do I open the Prism Launcher AppImage on my Linux system?

Depending on your system, you may need to grant the Prism Launcher AppImage **executable** permissions.

You can do this by opening your system's terminal application, **making sure to navigate to the location of the downloaded AppImage,** before granting the execute permission using this command:

```bash
sudo chmod +x PrismLauncher-Linux-{{version.current}}-x86_64.AppImage
```

**Please note,** that depending on the version of Prism Launcher that you have downloaded, you may have to **change the version number** in the command above.

If you want to simplify the installation of the AppImage, use [AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher). Note that this won't work on non-systemd system, and we recommend just using packages.

#### Prism Launcher isn't using my system theme

Prism Launcher has support for Qt 6.
This means that some themes and theming platforms like KDE Plasma's theming will not work on builds using that version of the Qt toolkit.
But don't worry, we still provide Qt 5 builds.
You can find them on the [download page](https://prismlauncher.org/download/linux).

### <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Windows_logo_-_2021.svg" height="20" /> <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/TuxFlat.svg" height="20" /> Windows and Linux

#### I want to make my system install portable

On Prism Launcher you can make any install portable (or making portable installs system) just by adding (or removing) portable.txt to the Prism Launcher root directory.
