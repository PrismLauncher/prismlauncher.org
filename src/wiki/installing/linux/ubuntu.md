---
eleventyNavigation:
  parent: Linux
  key: Ubuntu / Debian
--- 
# <img src="https://www.vectorlogo.zone/logos/debian/debian-icon.svg" height="20" /> Debian / Ubuntu

We use [makedeb](https://docs.makedeb.org/) for our Debian packages.  
Several MPR packages are available:

[![polymc](https://img.shields.io/badge/mpr-polymc-orange)](https://mpr.makedeb.org/packages/polymc)  
[![polymc-bin](https://img.shields.io/badge/mpr-polymc--bin-orange)](https://mpr.makedeb.org/packages/polymc-bin)  
    
Installing Una, a makedeb helper

```
bash <(curl -fsL https://github.com/AFK-OS/una/raw/main/install.sh)

una update
```
            
Installing PolyMC 

```
# stable source package:
sudo una install polymc
# stable binary package:
sudo una install polymc-bin
# latest git package:
sudo una install polymc-git
```
You can replace una install with your preferred [MPR helper's](https://docs.makedeb.org/using-the-mpr/list-of-mpr-helpers/) install command.