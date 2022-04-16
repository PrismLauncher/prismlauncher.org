---
eleventyNavigation:
  parent: Linux
  key: Gentoo
--- 
### <img src="https://www.gentoo.org/assets/img/logo/gentoo-signet.svg" height="20" /> Gentoo

Ebuilds are available in the official Gentoo repository, under [`games-action/polymc`](https://packages.gentoo.org/packages/games-action/polymc). 
Note that, for the time being, it is not stabilized, so it's masked for `~amd64` only.

```bash
sudo emaint sync -a

# If you need to unmask the package, and considering `package.accept_keywords` to be a folder.
echo ">=games-action/polymc-1.1.1" | sudo tee -a /etc/portage/package.accept_keywords/polymc
# Or do this if you want to build from the latest commit instead of a release
echo "=games-action/polymc-9999 **" | sudo tee -a /etc/portage/package.accept_keywords/polymc

emerge games-action/polymc
```

Old ebuilds, as well as additional information, can be found [in the old polymc overlay repository](https://gitlab.com/flowln/polymc-gentoo/). Have fun! :)
