---
eleventyNavigation:
  parent: Linux
  key: Gentoo
--- 
### <img src="https://www.gentoo.org/assets/img/logo/gentoo-signet.svg" height="20" /> Gentoo

Gentoo ebuilds are available in the [polymc-gentoo](https://gitlab.com/flowln/polymc-gentoo) overlay, named `games-action/polymc`. If you encounter any problems with those, please open an issue on that repository first, since it is maintained by third-parties!

To install PolyMC, do the following:
```bash
# May require root access

echo "[polymc]
location = /var/db/repos/polymc
sync-type = git
sync-uri = https://gitlab.com/flowln/polymc-gentoo.git" > /etc/portage/repos.conf/polymc.conf

emerge --sync polymc

emerge polymc

# To use the latest git version:
sudo tee -a /etc/portage/package.accept_keywords <<< "=games-action/polymc-9999 **"
```

The USE flags currently available are:
- debug: Enable debug output, useful for development and troubleshooting
- xrandr: Minecraft <= 1.12.2 need this to work properly (See [this issue](https://github.com/PolyMC/PolyMC/issues/227))
