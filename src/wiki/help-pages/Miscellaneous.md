---
eleventyNavigation:
  key: Miscellaneous
  parent: Help pages
--- 

## Fix crash with recent Java 8 versions for old forge modpacks

This applies to old Forge modpacks that crashed on startup with the new versions of Java.
The crash may look as follows:

```text
2024-02-28 10:35:15 [SEVERE] [Forestry] myrathi.flatsigns.FlatSigns failed validation. Halting runtime for security reasons. Please replace your mods with untampered versions from the official download sites.
```

```text
2024-02-28 10:31:56 [SEVERE] [ForgeModLoader] The minecraft jar file:/home/********/.var/app/org.prismlauncher.PrismLauncher/data/PrismLauncher/libraries/com/mojang/minecraft/1.6.4/minecraft-1.6.4-client.jar!/net/minecraft/client/ClientBrandRetriever.class appears to be corrupt! There has been CRITICAL TAMPERING WITH MINECRAFT, it is highly unlikely minecraft will work! STOP NOW, get a clean copy and try again!
```

```text
2023-01-23 16:10:09 [SEVERE] [Forestry] ic2.core.IC2 failed validation. Halting runtime for security reasons. Please replace your mods with untampered versions from the official download sites.
```

### Solution

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

### Sources

- <https://gist.github.com/ThePixelbrain/a0fe3231b9a9d71d910e7f71895e0196>
- <https://github.com/PrismLauncher/PrismLauncher/issues/747#issuecomment-1850676378>
