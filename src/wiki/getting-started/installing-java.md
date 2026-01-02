---
eleventyNavigation:
  key: Installing Java
  parent: Getting Started
  order: 2
---
# Installing Java

## Automatically installing Java (recommended)

In Prism Launcher 9.0+, you can let the launcher handle Java automatically on Windows, macOS and Linux (not available in all packages) by enabling "Autodetect Java version" and "Auto-download Mojang Java" in:

> Settings (top toolbar) > Java

This will make the launcher automatically download the right version of Java for your version of Minecraft (Java 8 for pre-1.17, Java 17 for 1.17-1.20.4, etc.). The rest of this page is going to explain downloading Java manually, and is probably not needed for you.

If the Java downloader is not available for you - which is the case on most Linux packages apart from the official Flatpak and AppImage downloads - manual installation is recommended instead.

## Manually installing Java

Oracle Java is not recommended. As of 2019, it has licensing that prohibits certain uses, and it requires an account to download certain versions. Their downloads are intended for those who have purchased a support contract from Oracle.

Instead, this guide recommends installing **OpenJDK** from one of the reputable vendors. OpenJDK is a source code only distribution of Java made by a collaboration between Oracle and industry partners such as Adoptium, Microsoft, Red Hat, and Azul. Unlike Oracle Java, it is released under a license that minimizes legal risk for users and does not require payment.

If you would like to learn more about OpenJDK and the vendors mentioned in this page, here are their websites:

- [Adoptium Temurin](https://adoptium.net/)
- [Microsoft OpenJDK](https://www.microsoft.com/openjdk)
- [Azul OpenJDK](https://www.azul.com/downloads/)
- [OpenJDK source distribution](https://openjdk.org/)

Otherwise, continue reading for quick download links and a guide for which one to choose.

### Selecting Java

Once you have **installed** Java, Prism Launcher will be able to detect it during the first time set-up wizard.

If you installed Java after already completing the first time setup process, you can access and modify your Java configuration globally for all instances through:

> Settings > Java > Java Runtime > Auto-Detect...

or for a specific instance:

> Right click an instance > Edit > Settings > Java > Java installation > Auto-Detect...

If you have just installed a version of Java and it doesn't show up, try pressing Refresh or restart the launcher. If you don't have your desired Java version installed, keep reading.

### Installing Java on Windows

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

### Installing Java on macOS

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

### Installing Java on Linux

On Linux, it's recommended to use your package manager for installing Java.

#### Fedora, RHEL, CentOS, AlmaLinux, or RockyLinux

On the COPR package all required Java versions should be installed, but this is the command to install it:

```bash
sudo dnf install java-1.8.0-openjdk java-17-openjdk java-21-openjdk
```

#### Void Linux

```bash
sudo xbps-install openjdk17-jre openjdk8-jre openjdk21-jre 
```

#### Arch Linux, Manjaro, EndeavorOS, Garuda

```bash
sudo pacman -S jre17-openjdk jre8-openjdk jre21-openjdk
```

#### Ubuntu, Pop!\_OS, Linux Mint, Zorin OS, or elementaryOS

```bash
sudo apt install openjdk-17-jre openjdk-8-jre openjdk-21-jre
```

#### Debian, MX Linux

```bash
sudo apt install openjdk-17-jre openjdk-21-jre
```

Java 8 is not available in Debian 10+ due to lack of security support, but you can use the Adoptium repository for security support until 2026:

```bash
wget -qO - https://packages.adoptium.net/artifactory/api/gpg/key/public | sudo apt-key add -
sudo add-apt-repository --yes https://packages.adoptium.net/artifactory/deb/
sudo apt-get update && sudo apt-get install temurin-8-jdk
```

#### Alpine Linux

```bash
sudo apk add openjdk17 openjdk8
```

#### Flatpak

The Prism Launcher Flatpak already bundles Java. You must manually download java binaries in Settings > Java > Management tab.

#### NixOS

The Prism Launcher NixOS package already bundles Java.

### Special cases

#### Forge 1.16.5 and Java 8u321+

Old versions of Forge crash with Java 8u321+. For this reason, using Java 8u312 or lower is recommended.

#### A note about Intel HD 2000/3000 on Windows 10

Since those iGPUs are not *officially* supported on Windows 10, with them the game is likely going to crash with any modern java binary.

<!-- markdownlint-disable-next-line link-fragments -->
*For 1.16.5 or older* there's a workaround in installing an older Java binary. Mojang Java 8u51 is recommended, and can be automatically installed with the [above](#automatically-installing-java-(recommended)).

Unfortunately there's no workaround for Java 17 (and so newer Minecraft), so you can only downgrade your Windows or switch to Linux there.
If you want to try, [there's this guide that could work](https://gist.github.com/rb-dahlb/26f316c5b6089807a139fc44ee69f0d1). Nothing is guaranteed here, though.

#### Older Minecraft on MacOS

If you use some older Minecraft versions, you might have had this error:

```text
Terminating app due to uncaught exception 'NSInternalInconsistencyException', reason: 'NSWindow drag regions should only be invalidated on the Main Thread!'
```

Here is a fix:

- First, remove, if you had, [your current Oracle Java](https://explainjava.com/uninstall-java-macos/)
- Then download and install [this Java 8u241 binary](https://files.multimc.org/downloads/jre-8u241-macosx-x64.dmg)
- Select this java binary on Prism Launcher, and it should fix your issue!
