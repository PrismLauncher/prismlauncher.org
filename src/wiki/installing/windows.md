---
eleventyNavigation:
  parent: Installing
  key: Windows
--- 
# <img src="https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg" height="20" /> Windows

### [Windows (32-bit)](https://packages.polymc.org/latest/win32/win32.zip) ([SHA256](https://packages.polymc.org/latest/win32/win32.zip.sha256))

This is a portable package, you can extract it anywhere and run it.
You might additionally need to install [Microsoft Visual C++ 2010 (x86)](https://download.microsoft.com/download/C/6/D/C6D0FD4E-9E53-4897-9B91-836EBA2AACD3/vcredist_x86.exe).

### [Scoop Package](https://github.com/Calinou/scoop-games/blob/master/bucket/polymc.json)
There is a community maintained Scoop package
```
scoop bucket add games
scoop install polymc
```

### [Chocolatey Package](https://community.chocolatey.org/packages/polymc)
There is also an official Chocolatey package
```
choco install polymc
```