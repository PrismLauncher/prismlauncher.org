---
eleventyNavigation:
  key: Installing Java
  parent: Getting Started
  order: 2
---

# Installing Java

Java is **required** in order to run Minecraft. As such, until Java downloading is implemented, you **will** need to **manually** install Java to run Minecraft with Prism Launcher.

## Which version?

Minecraft 1.20.5 and upwards will require **Java 21 (LTS)**, Minecraft 1.17 to Minecraft 1.20.4 will require **Java 17 (LTS)**, while anything below will require **Java 8 (LTS).**

- 1.20.5 or newer: **Java 21 (LTS)**
- 1.17 to 1.20.4: **Java 17 (LTS)**
- 1.16.5 or older: **Java 8 (LTS)**

If you aren't sure which version(s) you will need, **it is recommended to just install all 3.**

## Binary Downloads

Currently, we recommend heading over to [Adoptium](https://adoptium.net/) to install the latest versions of Java.

**NOTE:** You can use any OpenJDK build you want. [Azul Zulu](https://www.azul.com/downloads/?package=jre#download-openjdk) is a popular alternative to Temurin, and will work just as well.

You can also use Oracle Java, but OpenJDK is better here. Also, to download Oracle Java 9+ you need an Oracle account (which is not a good thing).

## Installing on Linux

On Linux, it's recommended to use your package manager for installing Java.

### Fedora

On the COPR package all required Java versions should be installed, but this is the command to install it:

```bash
sudo dnf install java-1.8.0-openjdk java-17-openjdk java-21-openjdk
```

### Void Linux

```bash
sudo xbps-install openjdk17-jre openjdk8-jre openjdk21-jre
```

### Arch Linux

```bash
sudo pacman -S jre17-openjdk jre8-openjdk jre21-openjdk
```

### Ubuntu

```bash
sudo apt install openjdk-17-jre openjdk-8-jre openjdk-21-jre
```

### Debian

```bash
sudo apt install openjdk-17-jre openjdk-21-jre
```

Java 8 is not available from Debian repos for unknown reasons, but you can [get a deb from Azul](https://www.azul.com/downloads/?version=java-8-lts&os=debian&package=jre&show-old-builds=true).

### Flatpak

The Prism Launcher Flatpak already bundles Java.

### NixOS

The Prism Launcher NixOS package already bundles Java.

## Installing on macOS

On macOS, either [download Java](#binary-downloads) from the web or use one of the third-party package managers below.

### Homebrew

```bash
brew install openjdk@21 openjdk@17 openjdk@8
```

### MacPorts

```bash
sudo port install openjdk21 openjdk17 openjdk8
```

## Using and Configuring Java

Once you have **installed** Java, Prism Launcher will be able to detect it during the first time set-up wizard.

If you installed Java after already completing the first time setup process, you can access and modify your Java configuration through:

**Settings → Java → Java Runtime → Auto-detect...**

## Special cases

### Forge 1.16.5 and Java 8u321+

Old versions of Forge crash with Java 8u321+. For this reason, using Java 8u312 or lower is recommended.

### A note about Intel HD 2000/3000 on Windows 10

Since those iGPUs are not _officially_ supported on Windows 10, with them the game is likely going to crash with any modern Java binary.

_For 1.16.5 or older_ there's a workaround, you need to install an older java binary:

- [For 64 bit Windows](https://files.multimc.org/downloads/jre-8u51-windows-x64.zip)
- [For 32 bit Windows](https://files.multimc.org/downloads/jre-8u51-windows-i586.zip)

**NOTE:** These are official MultiMC links, and we can't guarantee the safety of the content on them.

After downloading, follow these instructions:

1. Extract the zip, and move the folder to your Prism Launcher data folder
   **Non-portable:** `%appdata%/Prism Launcher`
   **Portable:** Prism Launcher folder

2. In Prism Launcher, go to **Settings → Java**, and navigate to the directory with this Java installation
3. Find `java.exe` and click _Open_

This should fix your issue.
Unfortunately, there's no workaround for Java 17 (and so newer Minecraft), so you can only downgrade your Windows or switch to Linux there.
If you want to try, [there's this guide that could work](https://gist.github.com/rb-dahlb/26f316c5b6089807a139fc44ee69f0d1). Nothing is guaranteed here, though.

### Older Minecraft on macOS

If you use some older Minecraft versions, you might have had this error:

```text
Terminating app due to uncaught exception 'NSInternalInconsistencyException', reason: 'NSWindow drag regions should only be invalidated on the Main Thread!'
```

Well, for you there's a resolution too!

- First, remove, if you had, [your current Oracle Java](https://explainjava.com/uninstall-java-macos/)
- Then download and install [this Java binary](https://files.multimc.org/downloads/jre-8u241-macosx-x64.dmg)
- Select this Java binary on Prism Launcher, and it should fix your issue!
