---
eleventyNavigation:
  key: Installing Prism Launcher
  parent: Getting Started
  order: 1
---

<div class="notification type-info">
  This page is not yet complete
</div>

# <img src="https://raw.githubusercontent.com/PrismLauncher/PrismLauncher/a9d4370ad462b4ad3dd91f6bc38b40262967b5b2/program_info/org.prismlauncher.PrismLauncher.svg" height="20" /> Installing Prism Launcher

Installing Prism Launcher on most platforms should be quite straightforward. Head over to our [Downloads](/download/) page, and choose the option that'll work best for your operating system, however the flathub and appimage options are detailed below:

# Linux

## Flathub
* To install the flatpack you must have flathub installed. Install instructions can be found [here](https://flathub.org/setup).
* Now head to the [Flathub page for prism launcher](https://flathub.org/apps/org.prismlauncher.PrismLauncher). 
* Find the dropdown next to "install" and run the commands listed there. 
* Prism launcher should now be installed on your system.

## AppImage
This is dependent on system, but I will cover Ubuntu here.
* Head over to the [Downloads](/download/) page and download the AppImage.
* To "install" the appimage you must create a .desktop file and put it in `/usr/share/applications`. I cover this in a later step.
* Place your AppImage in `/usr/local/bin` with the following command:  
`sudo mv Downloads/PrismLauncher-Linux-x86_64.AppImage /usr/local/bin/`  
Note that if your AppImage is not called `PrismLauncher-Linux-x86_64.AppImage` you will need to change that in the command as well.
* Now you must allow the file to be executed with the following command: `sudo chmod a+x /usr/local/bin/PrismLauncher-Linux-x86_64.AppImage`
* Now download the logo with this command: `wget https://github.com/PrismLauncher/prismlauncher.org/blob/main/src/favicon.ico` M
* Move it to the correct location: `sudo mv Downloads/favicon.ico /usr/share/icons/prismLauncherFavicon.ico`
* To create the .desktop file we can use this command: `nano PrismLauncher.desktop`
* Now paste the following inside:
```
[Desktop Entry]
Encoding=UTF-8
Version=1.0
Type=Application
Terminal=false
Exec=/usr/local/bin/PrismLauncher-Linux-x86_64.AppImage
Name=Prism Launcher
Icon=/usr/share/icons/prismLauncherFavicon.ico
```
* Press `ctrl+x` then `y` and `enter` to save the file.
* Now move the file to `/usr/share/applications` so it shows up in your app dock. `sudo mv PrismLauncher.desktop /usr/share/applications`
* Check that the app appears in your app dock and that it launches.
