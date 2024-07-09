---
eleventyNavigation:
  key: OpenBSD Build instructions
  parent: Development
  order: 5
---
# Build Instructions

## Contents

[[toc]]

## Getting the source

Clone the source code using git, and grab all the submodules:

```bash
git clone --recursive https://github.com/PrismLauncher/PrismLauncher.git
cd PrismLauncher
```

**The rest of the documentation assumes you have already cloned the repository.**

## Building

Tested on OpenBSD 7.5 amd64. It should also work on older versions.

### Build dependencies

- A C++ compiler capable of building C++11 code (included in base system).
- Qt Development tools 6.6 or newer ([meta/qt6](https://openports.pl/meta/qt6)).
- cmake 3.1 or newer ([devel/cmake](https://openports.pl/devel/cmake)).
- extra-cmake-modules ([devel/kf5/extra-cmake-modules](https://openports.pl/devel/kf5/extra-cmake-modules))
- zlib (included in base system).
- Java JDK ([devel/jdk-1.8](https://openports.pl/devel/jdk/1.8)).
- GL headers (included in base system).
- lwjgl ([games/lwjgl](https://openports.pl/games/lwjgl) and [games/lwjgl3](https://openports.pl/games/lwjgl3)).

You can use IDEs, like KDevelop or QtCreator, to open the CMake project if you want to work on the code.

### Building a portable binary

```bash
mkdir install
# configure the project
cmake -S . -B build \
   -DCMAKE_INSTALL_PREFIX=./install -DCMAKE_PREFIX_PATH=/usr/local/lib/qt6/cmake -DENABLE_LTO=ON
# build
cd build
make -j$(nproc) install
cmake --install install --component portable
```

### Building & installing to the system

This is the preferred method of installation, and is suitable for packages.

```bash
# configure everything
cmake -S . -B build \
   -DCMAKE_BUILD_TYPE=Release \
   -DCMAKE_INSTALL_PREFIX="/usr/local" \ # /usr/local is default in OpenBSD and FreeBSD
   -DCMAKE_PREFIX_PATH=/usr/local/lib/qt6/cmake # use linux layout and point to qt5 libs
   -DENABLE_LTO=ON # if you want to enable LTO/IPO
   -DLauncher_QT_VERSION_MAJOR="6"
cd build
make -j$(nproc) install # Optionally specify DESTDIR for packages (i.e. DESTDIR=${pkgdir})
```
<!-- no IDEs and Tooling for OpenBSD for now, If someone wants to add any tools here feel free to do so
## IDEs and Tooling -->
