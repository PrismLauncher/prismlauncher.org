---
eleventyNavigation:
  key: Installing Java
  parent: Getting Started
  order: 2
---
# Installing Java

Java is **required** in order to run Minecraft. As such, until Java downloading is implemented, you **will** need to **manually** install Java to run Minecraft with Prism Launcher.

Oracle Java is not recommended. As of 2019, it has licensing that prohibits certain uses, and it requires an account to download certain versions. Their downloads are intended for those who have purchased a support contract from Oracle.

Instead, this guide recommends installing **OpenJDK** from one of the reputable vendors. OpenJDK is a source code only distribution of Java made by a collaboration between Oracle and industry partners such as Adoptium, Microsoft, Red Hat, and Azul. Unlike Oracle Java, it is released under a license that minimizes legal risk for users and does not require payment.

If you would like to learn more about OpenJDK and the vendors mentioned in this page, here are their websites:

- [Adoptium Temurin](https://adoptium.net/)
- [Microsoft OpenJDK](https://www.microsoft.com/openjdk)
- [Azul OpenJDK](https://www.azul.com/downloads/)
- [OpenJDK source distribution](https://openjdk.org/)

Otherwise, continue reading for quick download links and a guide for which one to choose.

## Selecting Java

Once you have **installed** Java, Prism Launcher will be able to detect it during the first time set-up wizard.

If you installed Java after already completing the first time setup process, you can access and modify your Java configuration globally for all instances through:

> Settings > Java > Java Runtime > Auto-Detect...

or for a specific instance:

> Right click an instance > Edit > Settings > Java > Java installation > Auto-Detect...

If you have just installed a version of Java and it doesn't show up, try pressing Refresh or restart the launcher. If you don't have your desired Java version installed, keep reading.

## Installing Java on Windows

**First, check your CPU architecture.** Here is a method that works on all Windows versions:

1. Click or tap on the **Start Menu**
2. Search **Command Prompt** or **Terminal** and click on it
3. Type in `echo %PROCESSOR_ARCHITECTURE%` and press enter
4. Read the result.
   - If it says `AMD64`, you have a 64-bit **x86-64** CPU. This is sometimes called **x64** or **amd64**.
   - If it says `X86`, you have a 32-bit **x86** CPU. This is sometimes called **x32** or **x86-32**.
   - If it says `ARM64`, you have a 64-bit **ARM** CPU. This is sometimes called **aarch64** or **ARM64**.

Then, download the appropriate Java:

| Minecraft | CPU type | Download page | Viable alternatives |
|:---:|:---:|---|---|
| Minecraft **1.20.5** or above | x86-64 | [Microsoft OpenJDK 21 for Windows x64, `.msi` installer](https://aka.ms/download-jdk/microsoft-jdk-21-windows-x64.msi) | Azul, Coretto, Temurin, GraalVM |
|  | x86 | Not available :( |  |
|  | aarch64 | [Microsoft OpenJDK 21 for Windows aarch64, `.msi` installer](https://aka.ms/download-jdk/microsoft-jdk-21-windows-aarch64.msi) | Azul |
| Minecraft **1.17** to **1.20.4** | x86-64 | [Microsoft OpenJDK 17 for Windows x64, `.msi` installer](https://aka.ms/download-jdk/microsoft-jdk-17-windows-x64.msi) | Azul, Coretto, Temurin, GraalVM |
|  | x86 | [Temurin OpenJDK 17 for Windows x32, `.msi` installer](https://adoptium.net/temurin/releases/?version=17&arch=x86&os=windows) | Azul, Coretto |
|  | aarch64 | [Microsoft OpenJDK 17 for Windows aarch64, `.msi` installer](https://aka.ms/download-jdk/microsoft-jdk-17-windows-aarch64.msi) | Azul |
| Minecraft **1.16** or below | x86-64 | [Temurin OpenJDK 8 for Windows x64, `.msi` installer](https://adoptium.net/temurin/releases/?version=8&arch=x64&os=windows) | Azul, Coretto |
|  | x86 | [Temurin OpenJDK 8 for Windows x64, `.msi` installer](https://adoptium.net/temurin/releases/?version=8&arch=x86&os=windows) | Azul, Coretto |
|  | aarch64 | Not available :( |  |

**Tip:** If you are on Windows 11, you can automatically install 8, 17 and 21 by running `winget install Microsoft.OpenJDK.21; winget install Microsoft.OpenJDK.17; winget install EclipseAdoptium.Temurin.8.JDK` in the Terminal app.

## Installing Java on macOS

**First, check your CPU architecture.**

1. Open the Apple menu in the top left corner of the screen
2. Click "About This Mac"
3. Check what it says after "Processor"
   - If it contains `Intel`, you have a 64-bit **x86-64** CPU. This is sometimes called **x64** or **amd64**.
   - If it contains `Apple`, you have a 64-bit **ARM** CPU. This is sometimes called **aarch64** or **ARM64**.

Then, download the appropriate Java:

| Minecraft | CPU type | Download page | Viable alternatives |
|:---:|:---:|---|---|
| Minecraft **1.20.5** or above | x86-64 | [Microsoft OpenJDK 21 for macOS x64, `.pkg` installer](https://learn.microsoft.com/en-us/java/openjdk/download) | Azul, Coretto, Temurin, GraalVM |
|  | aarch64 | [Microsoft OpenJDK 21 for macOS aarch64, `.pkg` installer](https://learn.microsoft.com/en-us/java/openjdk/download) | Azul, Coretto |
| Minecraft **1.17** to **1.20.4** | x86-64 | [Microsoft OpenJDK 17 for macOS x64, `.pkg` installer](https://learn.microsoft.com/en-us/java/openjdk/download) | Azul, Coretto, Temurin, GraalVM |
|  | aarch64 | [Microsoft OpenJDK 17 for macOS aarch64, `.pkg` installer](https://learn.microsoft.com/en-us/java/openjdk/download) | Azul, Coretto |
| Minecraft **1.16** or below | x86-64 | [Temurin OpenJDK 8 for macOS x64, `.pkg` installer](https://adoptium.net/temurin/releases/?version=8) | Azul, Coretto |
|  | aarch64 | [Azul OpenJDK 8 for macOS aarch64, `.dmg` installer](https://www.azul.com/downloads/?version=java-8-lts&os=macos&architecture=arm-64-bit&package=jdk) | Coretto |

## Installing Java on Linux

On Linux, it's recommended to use your package manager for installing Java.

### Fedora, RHEL, CentOS, AlmaLinux, or RockyLinux

On the COPR package all required Java versions should be installed, but this is the command to install it:

```bash
sudo dnf install java-1.8.0-openjdk java-17-openjdk java-21-openjdk
```

### Void Linux

```bash
sudo xbps-install openjdk17-jre openjdk8-jre openjdk21-jre 
```

### Arch Linux, Manjaro, EndeavorOS, Garuda

```bash
sudo pacman -S jre17-openjdk jre8-openjdk jre21-openjdk
```

### Ubuntu, Pop!\_OS, Linux Mint, Zorin OS, or elementaryOS

```bash
sudo apt install openjdk-17-jre openjdk-8-jre openjdk-21-jre
```

### Debian, MX Linux

```bash
sudo apt install openjdk-17-jre openjdk-21-jre
```

Java 8 is not available in Debian 10+ due to lack of security support, but you can use the Adoptium repository for security support until 2026:

```bash
wget -qO - https://packages.adoptium.net/artifactory/api/gpg/key/public | sudo apt-key add -
sudo add-apt-repository --yes https://packages.adoptium.net/artifactory/deb/
sudo apt-get update && sudo apt-get install temurin-8-jdk
```

### Alpine Linux

```bash
sudo apk add openjdk17 openjdk8
```

### Flatpak

The Prism Launcher Flatpak already bundles Java.

### NixOS

The Prism Launcher NixOS package already bundles Java.

## Special cases

### Forge 1.16.5 and Java 8u321+

Old versions of Forge crash with Java 8u321+. For this reason, using Java 8u312 or lower is recommended

### A note about Intel HD 2000/3000 on Windows 10

Since those iGPUs are not *officially* supported on Windows 10, with them the game is likely going to crash with any modern java binary.

*For 1.16.5 or older* there's a workaround, you need to install an older java binary (note: these links are official MultiMC links, and we can't guarantee the safety of the content on them):

- [this for 64bit Windows](https://files.multimc.org/downloads/jre-8u51-windows-x64.zip)
- [this for 32bit Windows](https://files.multimc.org/downloads/jre-8u51-windows-i586.zip)

After you download the required java binary for your architecture, *extract* the zip, and move the folder to your Prism Launcher data folder (%appdata%/Prism Launcher for non-portable, the Prism Launcher folder for portable builds), you need to go to the *Prism Launcher java settings*, then to *browse*, then go to the folder with this particular java, click *java.exe* then *open*.
This should fix your issue.
Unfortunately there's no workaround for java 17 (and so newer Minecraft), so you can only downgrade your Windows or switch to Linux there.
If you want to try, [there's this guide that could work](https://gist.github.com/rb-dahlb/26f316c5b6089807a139fc44ee69f0d1). Nothing is guaranteed here, though.

### Older Minecraft on MacOS

If you use some older Minecraft versions, you might have had this error:

```text
Terminating app due to uncaught exception 'NSInternalInconsistencyException', reason: 'NSWindow drag regions should only be invalidated on the Main Thread!'
```

Here is a fix:

- First, remove, if you had, [your current Oracle Java](https://explainjava.com/uninstall-java-macos/)
- Then download and install [this Java 8u241 binary](https://files.multimc.org/downloads/jre-8u241-macosx-x64.dmg)
- Select this java binary on Prism Launcher, and it should fix your issue!
