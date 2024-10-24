---
eleventyNavigation:
  key: Linux
  parent: Build Instructions
  order: 2
---
# Linux Build Instructions

## Contents

[[toc]]

## Compiling manually

### Prerequisites

Getting the project to build and run on Linux is easy if you use any modern and up-to-date Linux distribution.

- A C++ compiler supporting at least C++17.
- Qt Development tools 6.0 or newer (`qt6-base-dev qtchooser qt6-base-dev-tools libqt6core6 libqt6core5compat6-dev libqt6network6` on Debian (testing/unstable) based systems).
- Alternatively, you can also use Qt 5.12 or newer (`qtbase5-dev qtchooser qt5-qmake qtbase5-dev-tools libqt5core5a libqt5network5 libqt5gui5 libqt5networkauth5-dev` on Debian-based systems), if you prefer it.
- cmake 3.15 or newer (`cmake` on Debian-based system)
- ninja (optional, `ninja-build` on Debian-based systems)
- extra-cmake-modules (`extra-cmake-modules` on Debian-based system)
- zlib (`zlib1g-dev` on Debian-based system)
- Java JDK (`openjdk-17-jdk` on Debian-based system)
- GL headers (`libgl1-mesa-dev` on Debian-based system)
- scdoc if you want to generate manpages (`scdoc` on Debian-based system)

#### Installing Qt using the installer (optional)

You may also use the [Qt installer](https://doc.qt.io/qt-6/qt-online-installation.html) to fetch Qt libraries:

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

### Getting the source

Clone the source code using Git, fetching submodules along with it:

```bash
git clone --recursive https://github.com/PrismLauncher/PrismLauncher.git
cd PrismLauncher
```

**The rest of the documentation assumes you have already cloned the repository.**

### Building the source

#### Configuration

```bash
cmake -S . -B build \
  -G Ninja \ # If you installed Ninja
# -D CMAKE_BUILD_TYPE="Release" \ # If you want to build with optimizations
  -D CMAKE_INSTALL_PREFIX="install" \ # For installing to ./install
# -D CMAKE_INSTALL_PREFIX="/usr" \ # For building packages. If only installing locally, use "/usr/local"
# -D ENABLE_LTO=ON \ # If you want to enable LTO
# -D Launcher_QT_VERSION_MAJOR="5" # If you want to use Qt 5
```

#### Compilation

```bash
cmake --build build -j
```

#### Installation

```bash
cmake --install build
cmake --install build --component portable # If you want to install a portable version
DESTDIR="$pkgdir" cmake --install build # If you're installing for a package
```

## Building a Flatpak

Flatpaks allow for you to quickly build Prism and run it on any distribution

Make sure Flathub is [setup](https://flathub.org/setup).

```bash
# Install Flatpak build tools
flatpak install flathub org.flatpak.Builder

# Clone the source repository
git clone --recursive https://github.com/prismlauncher/PrismLauncher

# Enter the Flatpak directory
cd PrismLauncher/flatpak

# Run the build
flatpak run org.flatpak.Builder \
  --user \
  --install \ # Comment if you only want to build, not install
  --install-deps-from=flathub \
  --ccache \
  --repo=repo \
  builddir \
  org.prismlauncher.PrismLauncher.yml
```

## Building with Nix

Nix is a tool for handling reproducible builds across multiple platforms.

After [installing Nix](https://nix.dev/install-nix), you can run the following command to build a debug package:

```bash
nix build --print-build-logs github:PrismLauncher/PrismLauncher#prismlauncher-debug
```

You can also enter a development shell with all of the tools required to build manually:

```bash
nix develop
cmake -S . -B build -G Ninja -D CMAKE_INSTALL_PREFIX="install"
cmake --build build
cmake --install build
```

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
