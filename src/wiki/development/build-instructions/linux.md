---
eleventyNavigation:
  key: Linux
  parent: Build Instructions
  order: 2
---
# Linux Build Instructions

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

Getting the project to build and run on Linux is easy if you use any modern and up-to-date Linux distribution.

### Build dependencies

- A C++ compiler capable of building C++17 code.
- Qt Development tools 6.0 or newer (`qt6-base-dev qtchooser qt6-base-dev-tools libqt6core6 libqt6core5compat6-dev libqt6network6` on Debian (testing/unstable) based systems).
- Alternatively, you can also use Qt 5.12 or newer (`qtbase5-dev qtchooser qt5-qmake qtbase5-dev-tools libqt5core5a libqt5network5 libqt5gui5 libqt5networkauth5-dev` on Debian-based systems), if you prefer it.
- cmake 3.15 or newer (`cmake` on Debian-based system)
- ninja (`ninja-build` on Debian-based systems)
- extra-cmake-modules (`extra-cmake-modules` on Debian-based system)
- zlib (`zlib1g-dev` on Debian-based system)
- Java JDK (`openjdk-17-jdk` on Debian-based system)
- GL headers (`libgl1-mesa-dev` on Debian-based system)
- scdoc if you want to generate manpages (`scdoc` on Debian-based system)

You can use IDEs, like KDevelop, QtCreator or CLion to open the CMake project, if you want to work on the code.

### Building a portable binary

```bash
cmake -S . -B build -G Ninja \
   -DCMAKE_INSTALL_PREFIX=install
#  -DLauncher_QT_VERSION_MAJOR="5" # if you want to use Qt 5

cmake --build build
cmake --install build
cmake --install build --component portable
```

### Building & installing to the system

This is the preferred method of installation, and is suitable for packages.

```bash
cmake -S . -B build -G Ninja \
   -DCMAKE_BUILD_TYPE=Release \
   -DCMAKE_INSTALL_PREFIX="/usr" \ # Use "/usr" when building Linux packages. If building not for package, use "/usr/local"
   -DENABLE_LTO=ON # if you want to enable LTO/IPO
#  -DLauncher_QT_VERSION_MAJOR="5" # if you want to use Qt 5

cmake --build build
cmake --install build # Optionally specify DESTDIR for packages (i.e. DESTDIR=${pkgdir} cmake --install ...)
```

### Building a .deb

Requirements: [makedeb](https://docs.makedeb.org/) installed on your system.

```bash
git clone https://mpr.makedeb.org/prismlauncher.git
cd prismlauncher
makedeb -s
```

The .deb will be located in the directory the repo was cloned in.

### Building an .rpm  for Fedora

Build dependencies are automatically installed using `DNF`, however, you will also need the `rpmdevtools` package (on Fedora),
in order to fetch sources and set up your tree.
You don't need to clone the repo for this; the spec file handles that.

```bash
cd ~
# setup your ~/rpmbuild directory, required for rpmbuild to work.
rpmdev-setuptree
# get the rpm spec file from the prismlauncher on pagure
git clone https://pagure.io/prismlauncher.git
cd prismlauncher
# install build dependencies
sudo dnf builddep prismlauncher.spec
sudo dnf builddep -D "_without_qt6 1" prismlauncher.spec # if you want to use Qt 5 instead of Qt 6
# download build sources
spectool -g -R prismlauncher.spec
# move patches to rpmbuild sources directory
cp *.patch ~/rpmbuild/SOURCES
# copy any patches to rpmbuild sources directory
cp *.patch ~/rpmbuild/SOURCES 
# now build!
rpmbuild -bb prismlauncher.spec
rpmbuild -bb --without qt6 prismlauncher.spec # if you want to use Qt 5 instead of Qt 6
```

The path to the .rpm packages will be printed once the build is complete.

### Building an .rpm for openSUSE

Unlike Fedora, the openSUSE packages depend on the [Open Build Service](https://build.opensuse.org/), so you will need to install the command line tool `osc` by following [this](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.osc.html#sec.obs.osc.install) guide.
It also uses the [obs_scm](https://github.com/openSUSE/obs-service-tar_scm) service, which is available in the `obs-service-obs_scm` package if it's not already installed.

```bash
osc checkout home:getchoo

# there will be 4 directories in home:getchoo, with some having a -qt5 and/or -nightly suffix
# -qt5 packages will build with Qt 5 instead of Qt 6, while -nightly packages will build with the latest commit (updated every 24h)
# for this example, we're just using the stable release package that builds with Qt 6
# NOTE: only -qt5 will build on Leap
cd home:getchoo/prismlauncher

# to build against the current version of Leap, replace `openSUSE_Tumbleweed` with 15.4
osc build --sccache openSUSE_Tumbleweed
```

The path to the .rpm packages will be printed once the build is complete.

### Building a Flatpak

You don't need to clone the entire Prism Launcher repo for the latest stable version; the Flatpak file handles that. However, cloning the source repository is necessary to build from the latest commit (contains upstream manifest).
Both `flatpak` and `flatpak-builder` packages must be installed on your system to proceed, including all build dependencies previously mentioned (at the top of page).

#### Latest Stable Release

```bash
git clone --recursive https://github.com/flathub/org.prismlauncher.PrismLauncher
cd org.prismlauncher.PrismLauncher
flatpak install org.kde.Sdk/x86_64/6.7 runtime/org.freedesktop.Sdk.Extension.openjdk17/x86_64/23.08 runtime/org.freedesktop.Sdk.Extension.openjdk8/x86_64/23.08 runtime/org.freedesktop.Sdk.Extension.openjdk21/x86_64/23.08 # build requirements
# remove --user --install if you want to build without installing
flatpak-builder --user --install flatbuild org.prismlauncher.PrismLauncher.yml
```

#### Latest Commit

```bash
git clone --recursive https://github.com/prismlauncher/PrismLauncher # source repo - contains upstream manifest
cd PrismLauncher/flatpak
flatpak install org.kde.Sdk/x86_64/6.7 runtime/org.freedesktop.Sdk.Extension.openjdk17/x86_64/23.08 runtime/org.freedesktop.Sdk.Extension.openjdk8/x86_64/23.08 runtime/org.freedesktop.Sdk.Extension.openjdk21/x86_64/23.08 # build requirements
# remove --user --install if you want to build without installing
flatpak-builder --user --install flatbuild org.prismlauncher.PrismLauncher.yml
```

### Installing Qt using the installer (optional)

1. Run the Qt installer.
2. Choose a place to install Qt.
3. Choose the components that you wish install.

    - You need Qt 6.0.x 64-bit ticked. (or a newer version)
    - Alternatively you can choose Qt 5.12.0 or newer
    - You need Tools/Qt Creator ticked.
    - Other components are selected by default, you can un-tick them if you don't need them.

4. Accept the license agreements.
5. Double-check the install details and then click "Install".

    - Installation can take a very long time, go grab a cup of tea or something and let it work.

## IDEs and Tooling

There are a few tools that you can set up to make your development workflow smoother. In addition, some IDEs also require a bit more setup to work with Qt and CMake.

### ccache

**ccache** is a compiler cache. It speeds up recompilation by caching previous compilations and detecting when the same compilation is being done again.

You can [download it here](https://ccache.dev/download.html). After setting up, builds will be incremental, and the builds after the first one will be much faster.

### VS Code

To set up VS Code, you can download [the C/C++ extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools), since it provides IntelliSense auto complete, linting, formatting, and various other features.

Then, you need to set up the configuration. Go into the command palette and open up C/C++: Edit Configurations (UI). There, add a new configuration for PrismLauncher.

1. Add the path to your Qt `include` folder to `includePath`
2. Add `-L/{path to your Qt installation}/lib` to `compilerArgs`
3. Set `compileCommands` to `${workspaceFolder}/build/compile_commands.json`
4. Set `cppStandard` to `c++14` or higher.

For step 3 to work, you also have to reconfigure CMake to generate a `compile_commands.json` file. To do this, add `-DCMAKE_EXPORT_COMPILE_COMMANDS=ON` to the end of your CMake configuration command and run it again. You should see a file at `build/compile_commands.json`.

Now the VS Code setup should be fully working. To test, open up some files and see if any error squiggles appear. If there are none, it's working properly!

Here is an example of what `.vscode/c_cpp_properties.json` looks like on macOS with Qt installed via Homebrew:

```json
{
    "configurations": [
        {
            "name": "Mac (PrismLauncher)",
            "includePath": [
                "${workspaceFolder}/**",
                "/opt/homebrew/opt/qt@6/include/**"
            ],
            "defines": [],
            "macFrameworkPath": [
                "/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk/System/Library/Frameworks"
            ],
            "compilerPath": "/usr/bin/clang",
            "compilerArgs": [
                "-L/opt/homebrew/opt/qt@6/lib"
            ],
            "compileCommands": "${workspaceFolder}/build/compile_commands.json",
            "cStandard": "c17",
            "cppStandard": "c++17",
            "intelliSenseMode": "macos-clang-arm64"
        }
    ],
    "version": 4
}
```

### CLion

1. Open CLion
2. Choose `File->Open`
3. Navigate to the source folder
4. Go to settings `Ctrl+Alt+S`
5. Navigate to `Toolchains` in `Build, Execution, Deployment`
   - Set the correct build tools ([see here](https://i.imgur.com/daFAdVe.png))
   - CMake: `cmake` (optional)
   - Make: `make` (optional)
   - C Compiler: `gcc`
   - C++ Compiler: `g++`
   - Debugger: `gdb` (optional)
6. Navigate to `CMake` in `Build, Execution, Deployment`
   - Set `Build directory` to `build`
7. Navigate to `Edit Configurations`  ([see here](https://i.imgur.com/fu53nc3.png))
   - Create a new configuration
   - Name: `All`
   - Target: `All targets`
   - Choose the newly added configuration as default

Now you should be able to build and test Prism Launcher with the `Build` and `Run` buttons.

### Qt Creator

1. Open Qt Creator.
2. Choose `File->Open File or Project`.
3. Navigate to the Launcher source folder you cloned and choose CMakeLists.txt.
4. Read the instructions that just popped up about a build location and choose one.
5. You should see "Run CMake" in the window.

   - Make sure that Generator is set to "Unix Generator (Desktop Qt 6.x.x GCC 64bit)".
      - Alternatively this is probably "Unix Generator (Desktop Qt 5.12.x GCC 64bit)"
   - Hit the "Run CMake" button.
   - You'll see warnings, and it might not be clear that it succeeded until you scroll to the bottom of the window.
   - Hit "Finish" if CMake ran successfully.

6. Cross your fingers, and press the "Run" button (bottom left of Qt Creator).

   - If the project builds successfully it will run and the Launcher window will pop up.
