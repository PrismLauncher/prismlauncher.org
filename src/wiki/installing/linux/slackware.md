---
eleventyNavigation:
  parent: Linux
  key: Slackware
--- 
# <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Slackware_logo.svg/256px-Slackware_logo.svg.png" height="20" /> Slackware

A [SlackBuild](https://codeberg.org/glowiak/SlackBuilds/src/branch/master/repository/polymc.md) is available. You will need [qt5](http://slackbuilds.org/repository/14.2/libraries/qt5/) (on 15.0 installed by default), a [JDK](https://codeberg.org/glowiak/SlackBuilds/src/branch/master/repository/adoptium-jdk8.md), and if you're on 14.2, you will need to compile a newer CMake version manually. To build, type this in extracted directory, with all dependiences met:

    sudo ./polymc.SlackBuild
    sudo installpkg /tmp/polymc-version-arch-1_SBo.tgz

You can also download a community-maintained [prebuilt x86_64 package](http://glowiak.github.io/file/polymc-latest-slackware), and install it with /sbin/installpkg:

    sudo /sbin/installpkg ~/Downloads/polymc-version-x86_64-1_SBo.tgz

If you want to enjoy the latest, but yet untested features of PolyMC, try the [polymc-edge](https://codeberg.org/glowiak/SlackBuilds/src/branch/master/repository/polymc-edge.md) SlackBuild. Dependiences and build instructions are the same, but as a new commit is pushed to the develop branch every hour, there's no sense to build binary packages for it, sorry :/ 

**NOTE:** The -edge SBo conflicts with the normal, stable version, and the -edge version does not have a desktop entry.
