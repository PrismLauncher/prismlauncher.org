---
eleventyNavigation:
  key: Installing Java
  parent: Getting Started
  order: 2
---

# Installing Java

Java is **required** in order to run Minecraft. As such, until PolyMC 1.2.0 is released, you **will** need to **manually** install Java to run Minecraft with PolyMC.

Currently, we recommend heading over to [Adoptium](https://adoptium.net/) to install the latest versions of Java. Minecraft 1.17 and upwards will require **Temurin 17 (LTS)**, while anything below will require **Temurin 8 (LTS).**

* 1.17 or newer: **Temurin 17 (LTS)**
* 1.16.5 or older: **Temurin 8 (LTS)**

If you aren't sure which version you will need, **it is recommended to just install both.**

**NOTE:** You can use any OpenJDK build you want. [Azul Zulu](https://www.azul.com/downloads/?package=jdk#download-openjdk) is a popular alternative to Temurin, and will work just as well.

## Using Java
Once you have **installed** Java, PolyMC will be able to detect it during the first time set-up wizard. 

If you installed Java after already completing the first time setup process, you can access and modify your Java configuration through:
> Settings > Java > Java Runtime > Auto-detect...
