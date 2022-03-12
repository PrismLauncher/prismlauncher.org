---
eleventyNavigation:
  parent: Linux
  key: Gentoo
--- 
### <img src="https://www.gentoo.org/assets/img/logo/gentoo-signet.svg" height="20" /> Gentoo

A Gentoo ebuild is available in the [flowln](https://gitlab.com/flowln/flowln-overlay) overlay, named `games-action/polymc`.

```
# May require root access

echo "[flowln]
location = /var/db/repos/flowln
sync-type = git
sync-uri = https://gitlab.com/flowln/flowln-overlay.git" > /etc/portage/repos.conf/flowln.conf

emerge --sync flowln

emerge polymc

# to use latest git version:
sudo tee -a /etc/portage/package.accept_keywords <<< "=games-action/polymc-9999 **"
```

The USE flags currently available are:
- debug: Enable debug output, useful for development and troubleshooting
- xrandr: Minecraft <= 1.12.2 need this to work properly (See [this](https://github.com/PolyMC/PolyMC/issues/227))
