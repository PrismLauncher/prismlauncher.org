---
eleventyNavigation:
  key: MacOS
  parent: Build Instructions
  order: 4
---
# Build Instructions

## Contents

[[toc]]

## Getting the source

Clone the source code using git, and grab all the submodules:

```zsh
git clone --recursive https://github.com/PrismLauncher/PrismLauncher.git
cd PrismLauncher
```

**The rest of the documentation assumes you have already cloned the repository.**

## Building

### Install prerequisites

- Install XCode Command Line tools.
- Install the official build of CMake (<https://cmake.org/download/>).
- Install extra-cmake-modules
- Install JDK 8 (<https://adoptium.net/temurin/releases/?variant=openjdk8&jvmVariant=hotspot>).
- Install any version of Qt 6 (recommended) or Qt 5.12 or newer

Using [homebrew](https://brew.sh) you can install these dependencies with a single command:

```zsh
brew update # in the case your repositories weren't updated
brew install qt openjdk@17 cmake ninja extra-cmake-modules # use qt@5 if you want to install qt5
```

### XCode Command Line tools

If you don't have XCode Command Line tools installed, you can install them with this command:

```zsh
xcode-select --install
```

### Build

Choose an installation path.

This is where the final `PrismLauncher.app` will be constructed when you run `make install`. Supply it as the `CMAKE_INSTALL_PREFIX` argument during CMake configuration. By default, it's in the dist folder, under PrismLauncher.

[If you are on zsh](https://support.apple.com/kb/HT208050),zsh does not ignore comments by default, run the following to ignore comments for this session:

```zsh
setopt interactivecomments
```

```zsh
mkdir build
cmake \
 -S . \
 -B build \
 -G Ninja \
 -DCMAKE_BUILD_TYPE=Release \
 -DCMAKE_INSTALL_PREFIX:PATH="$(dirname $PWD)/dist/" \
 -DCMAKE_INSTALL_PREFIX="dist" \
 -DCMAKE_PREFIX_PATH="/path/to/Qt/" \
 -DQt5_DIR="/path/to/Qt/" \
 -DQt6_DIR="/path/to/Qt/" \
 -DCMAKE_OSX_DEPLOYMENT_TARGET=11 \
 -DLauncher_QT_VERSION_MAJOR=6 \ # if you want to use Qt 6
 -DENABLE_LTO=ON \ # if you want to enable LTO/IPO
 -DLauncher_BUILD_PLATFORM=macOS \
# if you want to enable LTO/IPO:
 -DENABLE_LTO=ON
#-DCMAKE_OSX_ARCHITECTURES="x86_64;arm64" # to build a universal binary (not recommended for development)
#-DLauncher_QT_VERSION_MAJOR=5 # if you want to use Qt 5

cmake --build build
cmake --install build
```

Remember to replace `/path/to/Qt/` with the actual path. For newer Qt installations, it is often in your home directory. For the Homebrew installation, it's likely to be in `/opt/homebrew/opt/qt`.

**Note:** The final app bundle may not run due to code signing issues, which
need to be fixed with `codesign -fs -`.

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
