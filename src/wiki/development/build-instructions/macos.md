---
eleventyNavigation:
  key: MacOS
  parent: Build Instructions
  order: 4
---
# Build Instructions

## Contents

[[toc]]

## Compiling manually

### Prerequisites

- XCode Command Line tools.
  - Run `xcode-select --install`
- Official build of CMake (<https://cmake.org/download/>).
- `extra-cmake-modules`
- JDK 8 (<https://adoptium.net/temurin/releases/?variant=openjdk8&jvmVariant=hotspot>).
- Any version of Qt 6 (recommended) or Qt 5.12 or newer

#### With Homebrew

Using [homebrew](https://brew.sh) you can install these dependencies with a single command:

```zsh
brew update # in the case your repositories weren't updated
brew install qt openjdk@17 cmake ninja extra-cmake-modules # use qt@5 if you want to install qt5
```

### Getting the source

Clone the source code using Git, fetching submodules along with it:

```bash
git clone --recursive https://github.com/PrismLauncher/PrismLauncher.git
cd PrismLauncher
```

**The rest of the documentation assumes you have already cloned the repository.**

### Building the source

#### Configuration

Remember to replace `/path/to/Qt/` with the actual path. For newer Qt installations, it is often in your home directory. For the Homebrew installation, it's likely to be in `/opt/homebrew/opt/qt``.

```bash
cmake -S . -B build \
  -G Ninja \ # If you installed Ninja
# -D CMAKE_BUILD_TYPE="Release" \ # If you want to build with optimizations
# -D CMAKE_PREFIX_PATH="/path/to/Qt/" \
  -D CMAKE_INSTALL_PREFIX="install" \ # For installing to ./install
  -D CMAKE_OSX_DEPLOYMENT_TARGET=11 \
# -D CMAKE_OSX_ARCHITECTURES="x86_64;arm64" # to build a universal binary (not recommended for development)
  -D Qt6_DIR="/path/to/Qt/" \
# -D Qt5_DIR="/path/to/Qt/" \ # If you want to use Qt 5
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

<div class="notification type-warn">

The final app bundle may not run due to code signing issues, which need to be fixed with `codesign -fs -`.

</div>

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
