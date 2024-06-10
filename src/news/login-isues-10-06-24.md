---
title: Microsoft having authentication issues in some regions.
description: Microsoft login and launch check not working currently in launcher, affects other launchers and official launcher in somes cases.
date: 2022-02-07
tags:
  - Authentication
---
Hi we are aware of a current ongoing issue with the Microsoft login in Prism Launcher, we belive the issue to be with Microsofts third party auth servers in some regions experiencing outages.
However there has not been any official statements or way to track this from Microsoft and not all users are affected.
Myself and many of the other maintainers have not been able to replicate the issue as we seem to be in unaffected regions.

## What can I do?

Unfortunately for current version there is not much that can be done besides trying again if it does not launch, the faults seem to intermittent and sometimes allow users to login.

*Alternatively we are trialing a new authentication system for [Prism Launcher nightly version](https://nightly.link/PrismLauncher/PrismLauncher/workflows/trigger_builds/develop) that some have reported success with*
*The new nightly auth system currently has a http 426 error for some users and we are working to fix that if you have that error it is unrelated to Microsoft authentication issues*
**The Nightly version is considered pre release software and is not stable, expect bugs.**

## Possibly related issues

[WEB-7179 - Mojang Bug Tracker](https://bugs.mojang.com/browse/WEB-7179)

This report was made around same time these issues have started happening and affected the official launcher, We are not sure if this is the same or a related issue but it seems highly likely.