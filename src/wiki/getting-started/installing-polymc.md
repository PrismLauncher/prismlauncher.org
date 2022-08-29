---
eleventyNavigation:
  key: Installing PolyMC
  parent: Getting Started
  order: 1
---

# <img src="https://raw.githubusercontent.com/PolyMC/PolyMC/e909cc363d2236ad99601222728bad5b1ea71c31/program_info/org.polymc.PolyMC.svg" height="20" /> Installing PolyMC

Installing PolyMC on most platforms should be quite straightforward. Head over to our [Downloads](/download/) page, and choose the option that'll work best for your operating system.

## Common Issues

### <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Windows_logo_-_2021.svg" height="20" /> Windows (7, 8.1, 10, 11)

#### How do I open a .zip file?

Windows by default can "open" **.zip** archive files, but in order to use PolyMC, you will want to **extract** it instead.

#### Windows Protected my PC?

This is unfortunately **normal behaviour** due to the nature of the Windows app signing process. PolyMC has yet to purchase a signature, however, with enough funding, we may choose to do so in the future. PolyMC is an **open-source** application. As a result of this, all of the source code is public, and can be audited by any individual or group. If you would like to do so yourself, you can do so [here](https://github.com/PolyMC/PolyMC).

If you are **comfortable** and **trust** PolyMC, then you can click on the **More info** button, and then do the same on the **Run anyway** one too.

### <img src="https://upload.wikimedia.org/wikipedia/de/c/c2/Microsoft_Windows_7_logo.svg" height="20" /> Windows 7 and 8.1

#### api-ms-win-core-synch-l1-2.0.dll not found?

PolyMC 1.4.0 and higher started using Qt 6 by default on Windows, which does *not* support Windows 7 and Windows 8.1.

For this reason, we still provide a build that uses Qt 5 in [our download page](https://polymc.org/download/) called "Legacy version", you'll have to use that on those legacy versions of Windows.

### <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Apple_Computer_Logo_rainbow.svg" height="20" /> macOS

#### macOS cannot verify that this app is free from malware?

Much like the similar pop-up on Windows, this too is **normal behaviour.**

If you face this obstacle, **right-click** on PolyMC.app, and click **Open**. Click the **Close** button on the pop-up window, and then **right-click** on PolyMC.app again. Click on open, and then click on **Open** once more.

There's also another way to do this: open your Mac's **System Preferences** application, and make your way to the **Security & Privacy** page. Once there, near the bottom of the page, there should be an **"Open Anyway"** option. Click on that option, and then **re-open** the installer.

### <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/TuxFlat.svg" height="20" /> Linux

#### How do I install the PolyMC Flatpak on my Linux system?

Detailed instructions on setting-up your system to install Flatpak applications from Flathub, can be found [here](https://flatpak.org/setup/).

#### How do I open the PolyMC AppImage on my Linux system?

Depending on your system, you may need to grant the PolyMC AppImage **executable** permissions.

You can do this by opening your system's terminal application, **making sure to navigate to the location of the downloaded AppImage,** before granting the execute permission using this command:

```bash
sudo chmod +x PolyMC-Linux-{{version.current}}-x86_64.AppImage
```

**Please note,** that depending on the version of PolyMC that you have downloaded, you may have to **change the version number** in the command above.

If you want to simplify the installation of the AppImage, use [AppimageLauncher](https://github.com/TheAssassin/AppImageLauncher). Note that this won't work on non-systemd system and we recommend just using packages.

#### PolyMC isn't using my system theme

PolyMC added support for Qt 6 in the 1.4.0 update.  
This means that some themes and theming platforms, like Breeze and KDE Plasma's theming will not work on builds using that version of the Qt toolkit.  
But don't worry, we still provide Qt 5 builds.
You can find them on the [download page](https://polymc.org/download/linux).

### <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Windows_logo_-_2021.svg" height="20" /> <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/TuxFlat.svg" height="20" /> Windows and Linux

#### I want to make my system install portable

Since PolyMC 1.2.0, you can make any install portable (or making portable installs system) just by adding (or removing) portable.txt to the PolyMC root directory.
