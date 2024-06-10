---
title: Microsoft authentication issues in some regions
description: Microsoft login and launch check not currently working in the launcher
date: 2024-06-09
tags:
  - Authentication
---
Hi! We are aware of ongoing issues with the Microsoft login in Prism Launcher. We believe this is something to do with Microsoft's third party auth servers experiencing outages in some regions.
The issue also sometimes affects the official Minecraft launcher and minecraft.net.
However, there has not been any official statements or way to track this from Microsoft and not all users are affected.
Myself and many of the other maintainers have not been able to replicate the issue, as we seem to be in unaffected regions.

## What can I do?

Unfortunately in the current version, there is not much that can be done besides trying again if it does not launch. The faults seem to intermittent and only sometimes allow users to login.

*Alternatively we are trialing a new authentication system in the [nightly version](https://nightly.link/PrismLauncher/PrismLauncher/workflows/trigger_builds/develop) of Prism Launcher that some have reported fixes their issues.*
*The new nightly auth system currently has a http 426 error for some users and we are working to fix that if you have that error it is unrelated to Microsoft authentication issues.*
**The Nightly version is considered pre-release software and not stable. Expect bugs.**

## Possibly related issues

[WEB-7179 - Mojang Bug Tracker](https://bugs.mojang.com/browse/WEB-7179)

This report was made around same time these issues have started happening and also affected the official launcher. We are not sure if this is the same or a related issue, but it seems highly likely.
