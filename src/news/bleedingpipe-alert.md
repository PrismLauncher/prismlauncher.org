---
title: "[MALWARE WARNING] Bleeding Pipe RCE Vulnerability on some Forge servers"
description: Multiple vulnerable mods are being exploited in the wild to gain remote code execution
date: 2023-07-30
---

For a full summary, please see this blogpost from the [Minecraft Malware Prevention Alliance](https://github.com/Minecraft-Malware-Prevention-Alliance): <https://blog.mmpa.info/posts/bleeding-pipe/>

On July 29th, 2023, the Minecraft Malware Prevention Alliance (MMPA) released a blogpost detailing the exploitation of some mods on 1.7.10, 1.12.2, and possibly other versions of Forge servers. Malicious actors took advantage of vulnerabilities in how they deserialized data, allowing them to have Remote Code Execution ([RCE](https://www.cloudflare.com/learning/security/what-is-remote-code-execution/)) on both clients and servers. It is currently unknown what exactly was done, but it can be assumed a malicious payload was being sent to affected devices; there are no known methods to detect if this happened to you.

Table of Contents:

[[toc]]

## What can I do?

Following the MMPA's guidance:

### Everyone

[Pipeblocker](https://modrinth.com/mod/pipeblocker) is a mod created by the MMPA that can protect against all mods affected by this vulnerability. It can be used on any server or client on Forge 1.7.2-1.12.2.

### Players

Player can manually check folders such as `.minecraft` for suspicious files. Tools such as [jSus](https://github.com/NeRdTheNed/jSus) and [jNeedle](https://github.com/KosmX/jneedle) can also be used to scan folders automatically.

### Server Administrators

If you use the mods listed below, it is recommended to update them to the latest version available. For BDLib specifically, the GT New Horizions fork is recommended.

## Affected mods

- EnderCore (dependency of EnderIO)
- LogisticsPipes
- BDLib (versions 1.7-1.12)
- Smart Moving 1.12
- Brazier
- DankNull
- Gadomancy

## References

<https://blog.mmpa.info/posts/bleeding-pipe/>

<https://discord.com/channels/1115852272245686334/1116187144973713518/1134919145268449361>

## Thanks

We would like to thank the MMPA for the detailed blogpost explaining the situation and the release of Pipeblocker. If you are interested, you can join their Discord server here: <https://discord.gg/5NvpmUttDP>
