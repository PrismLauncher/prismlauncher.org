---
eleventyNavigation:
  key: Installing Java
  parent: Getting Started
  order: 2
---
# Installing Java

Java is **required** in order to run Minecraft. As such, until Java downloading is implemented, you **will** need to **manually** install Java to run Minecraft with Prism Launcher.

Currently, we recommend heading over to [Adoptium](https://adoptium.net/) to install the latest versions of Java. Minecraft 1.20.5 and upwards will require **Temurin 21 (LTS)**, Minecraft 1.17 to Minecraft 1.20.4 will require **Temurin 17 (LTS)**, while anything below will require **Temurin 8 (LTS).**

* 1.20.5 or newer: **Temurin 21 (LTS)**
* 1.17 to 1.20.4: **Temurin 17 (LTS)**
* 1.16.5 or older: **Temurin 8 (LTS)**

If you aren't sure which versions you will need, **it is recommended to just install all 3.**

**NOTE:** You can use any OpenJDK build you want. [Azul Zulu](https://www.azul.com/downloads/?package=jre#download-openjdk) is a popular alternative to Temurin, and will work just as well.

You can also use Oracle Java, but openjdk is better here. Also, to download Oracle Java 9+ you need an Oracle account which is not a good thing.

## Java on linux

On Linux, it's recommended to use your package manager for installing Java.

### Fedora

On the COPR package all required java versions should be installed, but this is the command to install it:

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

Java 8 is not available from Debian repos for unknown reasons, but you can [get a deb from Azul](https://www.azul.com/downloads/?version=java-8-lts&os=debian&package=jre&show-old-builds=true)

### Flatpak

The Prism Launcher flatpak already bundles java.

### NixOS

The Prism Launcher NixOS package already bundles java.

## Special cases

### Forge 1.16.5 and Java 8u321+

Old versions of Forge crash with Java 8u321+. For this reason, using Java 8u312 or lower is recommended

### Using Java

Once you have **installed** Java, Prism Launcher will be able to detect it during the first time set-up wizard.

If you installed Java after already completing the first time setup process, you can access and modify your Java configuration through:

> Settings > Java > Java Runtime > Auto-detect...

### A note about Intel HD 2000/3000 on Windows 10

Since those iGPUs are not *officially* supported on Windows 10, with them the game is likely going to crash with any modern java binary.

*For 1.16.5 or older* there's a workaround, you need to install an older java binary (note: these links are official MultiMC links, and we can't guarantee the safety of the content on them):

* [this for 64bit Windows](https://files.multimc.org/downloads/jre-8u51-windows-x64.zip)
* [this for 32bit Windows](https://files.multimc.org/downloads/jre-8u51-windows-i586.zip)

After you download the required java binary for your architecture, *extract* the zip, and move the folder to your Prism Launcher data folder (%appdata%/Prism Launcher for non-portable, the Prism Launcher folder for portable builds), you need to go to the *Prism Launcher java settings*, then to *browse*, then go to the folder with this particular java, click *java.exe* then *open*.
This should fix your issue.
Unfortunately there's no workaround for java 17 (and so newer Minecraft), so you can only downgrade your Windows or switch to Linux there.
If you want to try, [there's this guide that could work](https://gist.github.com/rb-dahlb/26f316c5b6089807a139fc44ee69f0d1). Nothing is guaranteed here, though.

### Older Minecraft on MacOS

If you use some older Minecraft versions, you might have had this error:

```text
Terminating app due to uncaught exception 'NSInternalInconsistencyException', reason: 'NSWindow drag regions should only be invalidated on the Main Thread!'
```

Well, for you there's a resolution too!

* First, remove, if you had, [your current oracle java](https://explainjava.com/uninstall-java-macos/)
* Then download and install [this java binary](https://files.multimc.org/downloads/jre-8u241-macosx-x64.dmg)
* Select this java binary on Prism Launcher, and it should fix your issue!
