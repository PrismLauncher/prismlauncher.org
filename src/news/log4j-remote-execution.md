---
title: IMPORTANT MESSAGE - Security vulnerability in Minecraft
author: peterix
date: 2021-12-10
---

Hello, you may have seen all kinds of chaos and misunderstanding related to a [security bug in log4j](https://nvd.nist.gov/vuln/detail/CVE-2021-44228) that can allow attackers to run code on your machine.

All versions of the game that use an unpatched or old version of the *log4j* library are susceptible to attacks - if you are running a server, or are connecting to one.

Single player should be safe.

----

**NOTE: log4j has been further updated to 2.16.0.**\
Do not be alarmed by the change from 2.15.0.

# Fixes in MultiMC

MultiMC has a system to automatically update game and mod loader versions.

We are using this system to:

- Force all modern versions of Minecraft to use *log4j 2.15.0* or newer, which doesn't have this issue.
- Force old version of Minecraft to use a patched version of *log4j 2.0-beta9*, which has this issue fixed.
- Force all mod loaders installed through MultiMC to not bundle any version of *log4j*.

**Effectively, if you use MultiMC and haven't done anything unusual with it, you should be safe.**

## Trust, but verify.

While the defaults are safe, there are some things you can do to ensure this is true in your case.

1. **Make sure you are actually running MultiMC and not some third party fork.**

    We cannot vouch for anything that comes from sources other than [multimc.org](https://multimc.org).

2. **Fully restart MultiMC to make it load fresh version metadata.**

    While MultiMC is running, it remembers the descriptions of versions it has seen during that session.

    Restarting it will make it check for updates to all those versions again.

3. **Start all your instances in online mode at least once.**

    MultiMC needs to download new files to actually apply the fixes. This cannot be done offline.

4. **Make sure you haven't customized Minecraft/Liteloader/Forge/Fabric versions in the instance Version page(s).**

    Customized versions will not automatically update. You may have done this without realizing, so go check:

    <p align="center">
      <img src="/images/customized_minecraft_version.png" />
    </p>

    If Minecraft, Forge, Liteloader or Fabric have `(Custom)` in their version like this, select them and press `Revert`.

    Do this for every instance.

    If you actually customized your versions on purpose, you will have to redo that with the updated *log4j* libraries.

    If the customized versions came with a modpack and you're not sure how to proceed, contact the modpack author(s) or look for any instructions they may have published.

5. **Check the logs during start to be absolutely sure.**

    When starting up an instance, the log4j library versions should be either `2.16.0` or `2.0-beta9-fixed`. Others may not be safe.

    Good example:
    ```
	Libraries:
	...
	/MultiMC/libraries/org/apache/logging/log4j/log4j-api/2.16.0/log4j-api-2.16.0.jar
	/MultiMC/libraries/org/apache/logging/log4j/log4j-core/2.16.0/log4j-core-2.16.0.jar
	...
	```

	Good example:
	```
	Libraries:
	...
	/MultiMC/libraries/org/apache/logging/log4j/log4j-api/2.0-beta9-fixed/log4j-api-2.0-beta9-fixed.jar
	/MultiMC/libraries/org/apache/logging/log4j/log4j-core/2.0-beta9-fixed/log4j-core-2.0-beta9-fixed.jar
	...
	```

    **BAD** example:
	```
	Libraries:
	...
	/MultiMC/libraries/org/apache/logging/log4j/log4j-api/2.14.1/log4j-api-2.14.1.jar
	/MultiMC/libraries/org/apache/logging/log4j/log4j-core/2.14.1/log4j-core-2.14.1.jar
	...
	```
