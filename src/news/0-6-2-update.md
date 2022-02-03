---
title: 0.6.2 Released!
author: peterix
date: 2018-04-08
---

This release contains some bugfixes, general UI polish and the beginnings of direct modpack platform integrations.

### Changelog

#### New or changed features

- MultiMC now has FTB integration:

    - Official and third-party modpacks work.
    - Codes for private modpacks are not implemented yet.

- Version lists now show release dates where available.

- New instance dialog:

    - It has been completely overhauled and now uses the same kind of paged dialog design as the rest of MultiMC.
    - Vanilla version list now has a filter for version types.
    - FTB integration gets a page here, along with zip import and vanilla.
    - Technic integration is a definite possibility in the future.
    - If there is a decent way to list Twitch modpacks, proper Twitch modpack integration is a possibility too.
    - There still is no modpack updating. Much more work is needed for that.

- Other Logs page:

    - Now has a search bar, just like the main log page.
    - [GH-604](https://github.com/MultiMC/MultiMC5/issues/604): Uses the same font settings as the main log.

- Icon selection dialog now has a button for opening the icons folder.
- MultiMC now has a shinier, updated logo.
- [GH-2150](https://github.com/MultiMC/MultiMC5/issues/2150): Custom commands have been split from the java settings into a new page.

    The use of variables in custom commands is now better documented.
    The label shows that they need to be prefixed by `$`.

- Player name is no longer censored in logs.
- MultiMC now probes the system for the name of the linux distribution as part of analytics. This will be used to focus future packaging efforts.
- Secret cheat code has been added... What does it do?

#### Bugfixes

- VisualVM integration now works when VisualVM is bundled inside the MultiMC folder (uses a relative path).
- When reinstalling a component, or changing a component version, the custom version is now removed first.
- [GH-2134](https://github.com/MultiMC/MultiMC5/issues/2134): Fix multiple issues with the skin upload:

    - When uploading a skin, the model selection now works correctly again.
    - When the new skin file is specified using the `file://` URL scheme, it will now work correctly.

- [GH-2143](https://github.com/MultiMC/MultiMC5/issues/2143): Mojang services status display now reflects the current set of services.
- [GH-2154](https://github.com/MultiMC/MultiMC5/issues/2154): MultiMC now ignores the `hidden` flag of instance folders and they should show up correctly.
- When migrating Legacy instances, custom `minecraft.jar` will be preserved.
