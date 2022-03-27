---
eleventyNavigation:
  key: Installing PolyMC
  parent: Getting Started
  order: 1
---

# Installing PolyMC

Installing PolyMC on most platforms should be quite straightforward. Head over to our [Downloads](/download/) page, and choose the option that'll work best for your operating system.

## But, how do I install PolyMC on "X" system?

For all available system-specific installation guides, please refer to the [Installing](../../installing) section of the Wiki.

# Common Issues

## <img src="https://upload.wikimedia.org/wikipedia/commons/9/94/M_box.svg" height="20" /> Windows (8.1, 10, 11)

### How do I open a .zip file?

Windows by default can "open" **.zip** archive files, but in order to use PolyMC, you will want to **extract** it instead.

For more detailed instructions, please see our dedicated [Windows](../../installing/windows) install guide.

### Windows Protected my PC?

This is unfortunately **normal behaviour** due to the nature of the Windows app signing process. PolyMC has yet to purchase a signature, however, with enough funding, we may choose to do so in the future. PolyMC is an **open-source** application. As a result of this, all of the source code is public, and can be audited by any individual or group. If you would like to do so yourself, you can do so [here](https://github.com/PolyMC/PolyMC).

If you are **comfortable** and **trust** PolyMC, then you can click on the **More info** button, and then do the same on the **Run anyway** one too.

### I'm getting random OpenSSL errors on Windows. What can I do?
**NOTE:** These issues have been resolved in PolyMC version 1.1.1, so we do recommend upgrading. You can download this release [here](/download/), or upgrade through your system's package manager.

For those still choosing to use PolyMC 1.1.0, you can fix these issues installing [vcredist 2010 x86](https://download.microsoft.com/download/C/6/D/C6D0FD4E-9E53-4897-9B91-836EBA2AACD3/vcredist_x86.exe).

## <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Apple_Computer_Logo_rainbow.svg" height="20" /> macOS

### macOS cannot verify that this app is free from malware?

Much like the similar pop-up on Windows, this too is **normal behaviour.**

If you face this obstacle, **right-click** on PolyMC.app, and click **Open**. Click the **Close** button on the pop-up window, and then **right-click** on PolyMC.app again. Click on open, and then click on **Open** once more.
 
There's also another way to do this: open your Mac's **System Preferences** application, and make your way to the **Security & Privacy** page. Once there, near the bottom of the page, there should be an **"Open Anyway"** option. Click on that option, and then **re-open** the installer.

## <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/TuxFlat.svg" height="20" /> Linux

### How do I install the PolyMC Flatpak on my Linux system?

Detailed instructions on setting-up your system to install Flatpak applications from Flathub, can be found [here](https://flatpak.org/setup/).

### How do I open the PolyMC AppImage on my Linux system?

Depending on your system, you may need to grant the PolyMC AppImage **executable** permissions.

You can do this by opening your system's terminal application, **making sure to navigate to the location of the downloaded AppImage,** before granting the execute permission using this command:

```
sudo chmod +x PolyMC-Linux-1.1.0-x86_64.appimage
```
**Please note,** that depending on the version of PolyMC that you have downloaded, you may have to **change the version number** in the command above.
