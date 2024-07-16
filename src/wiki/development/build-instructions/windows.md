---
eleventyNavigation:
  key: Windows
  parent: Build Instructions
  order: 3
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

## Building With MSVC

### Dependencies

- [Visual Studio](https://visualstudio.microsoft.com/downloads/) - Software Distribution and Building Platform for Windows
  - If you don't want install the Visual Studio IDE, go to 'Tools For Visual Studio' and download 'Build Tools for Visual Studio' instead
  - Select 'Desktop development with C++', note that in the optional components (right side) CMake will be selected
- [Java Development Kit 8 or later](https://adoptium.net/)
  - Make sure that "Set JAVA_HOME variable" is enabled in the Adoptium installer.
- [Qt](https://www.qt.io/download-qt-installer)
  - For Qt 6 (Qt 6.6.2 is the recommended one), 'Qt 5 Compatibility Module' & 'Qt Image Formats' are required
  - For Qt 5 (Qt 5.15.2 is the recommended one), OpenSSL Toolkit is required
  - If you don't want to use the Qt installer, than you can use [aqt](https://github.com/miurahr/aqtinstall), see [aqt-list](https://ddalcino.github.io/aqt-list-server/) for help with command arguments.

### Compile from command line on Windows using msbuild

You will need to run commands from `x64 Native Tools Command Prompt` or `x86 Native Tools Command Prompt` depending on if you are building 64bit or 32bit.
These instructions assume you are using the `x64 Native Tools Command Prompt` to build for 64bit.
All commands are for a debug build, for release builds, replace `Debug` with `Release` in the cmake build and install commands.

1. `cd` into the folder you cloned Prism Launcher to. Put quotation marks around the path.
2. Now we can prepare the build itself: Run `cmake -Bbuild -DCMAKE_INSTALL_PREFIX=install -DENABLE_LTO=ON -DCMAKE_PREFIX_PATH=C:\Qt\6.6.2\msvc2019_64\lib\cmake`. These options will copy the final build to the `install` folder after the build.

   - If you have installed Qt in a non-default location, then change the `CMAKE_PREFIX_PATH` to `-DCMAKE_PREFIX_PATH=<Path to Qt Install>\6.6.2\msvc2019_64\lib\cmake`, replacing `<Path to Qt Install>` with the path to your Qt install.
   - If you are building for 32bit, change `msvc2019_64` to `msvc2019`.
   - If you want to build using Qt 5, then add the `-DLauncher_QT_VERSION_MAJOR=5` parameter and change `CMAKE_PREFIX_PATH` to point to Qt 5.

3. Now you need to run the build itself: Run `cmake --build build --config Debug -- /p:UseMultiToolTask=true /p:EnforceProcessCountAcrossBuilds=true`.

   - If preferred, `UseMultiToolTask` & `EnforceProcessCountAcrossBuilds` can be set as environment variables instead of passing as arguments.

4. Now, wait for it to compile. This could take some time, so hopefully it compiles properly.
5. Run the command `cmake --install build --config Debug`, and it should install Prism Launcher to whatever the `-DCMAKE_INSTALL_PREFIX` was.
6. If you don't want Prism Launcher to store its data in `%APPDATA%`, run `cmake --install build --config Debug --component portable` after the install process.
7. When building on Qt 5, whenever compiling, the OpenSSL DLLs aren't put into the directory to where Prism Launcher installs which are necessary in that case, meaning that you cannot log in. The best way to fix this, is just to do `robocopy D:/Qt/Tools/OpenSSL/Win_x64/bin/ install libcrypto-1_1-x64.dll libssl-1_1-x64.dll`. This should copy the required OpenSSL DLLs to log in. When building on Qt 6 this is not necessary because it can use schannel, the Windows tls library.

   - Replace `<Path to Qt Install>` with the path to your Qt install.
   - If building for 32bit, replace `Win_x64` with `Win_x86` and remove `-x64` from the dlls names.

#### Using ccache

CMake with the msbuild generator currently does not support `CMAKE_CXX_COMPILER_LAUNCHER`, so the process of setting up [ccache](#ccache) differs from other build systems.
ccache 4.7.x or newer is required for MSVC support.

1. Copy `ccache.exe` and rename that copy to `cl.exe`
2. In the build command, add `/p:TrackFileAccess=false /p:CLToolExe=cl.exe /p:CLToolPath=<path to ccache cl>` to the end of the build arguments

   - Replace `<path to ccache cl>` with the path to the copy of `ccache.exe` you renamed to `cl.exe`

**If this doesn't work for you, please let us know on our Discord sever, or Matrix Space.**

## Building with MSYS2

### Dependencies

- [MSYS2](https://www.msys2.org/) - Software Distribution and Building Platform for Windows
- [Java Development Kit 8 or later](https://adoptium.net/)
  - Make sure that "Set JAVA_HOME variable" is enabled in the Adoptium installer.

### Preparing MSYS2

1. Open one of the shortcuts from the MSYS2 folder in the Start menu

   - We recommend building using the CLANG64 msystem of MSYS2, as it compiles considerably faster and with a few less bugs.

2. Install helpers: Run `pacman -Syu pactoys git mingw-w64-x86_64-binutils` in the MSYS2 shell.
3. Install all build dependencies using `pacboy`: Run `pacboy -S toolchain:p cmake:p ninja:p qt6-base:p qt6-5compat:p qt6-svg:p qt6-imageformats:p quazip-qt6:p extra-cmake-modules:p ninja:p ccache:p`.

   - Alternatively you can use Qt 5 (for older Windows versions), by running the following command instead: `pacboy -S toolchain:p cmake:p ninja:p qt5-base:p qt5-svg:p qt5-imageformats:p quazip-qt5:p extra-cmake-modules:p ninja:p ccache:p`
   - This might take a while, as it will install Qt and all the build tools required.

### Compile from command line on Windows

1. `cd` into the folder you cloned Prism Launcher to. Put quotation marks around the path.
2. Now we can prepare the build itself: Run `cmake -Bbuild -DCMAKE_INSTALL_PREFIX=install -DENABLE_LTO=ON -DCMAKE_OBJDUMP=/mingw64/bin/objdump.exe -DCMAKE_BUILD_TYPE=Debug -G Ninja`. These options will copy the final build to the `install` folder after the build.

   - Replace Debug with Release if you want to build a Release build.
   - If you want to build using Qt 5, then add the `-DLauncher_QT_VERSION_MAJOR=5` parameter
   - If you want to use [ccache](#ccache) to speed up recompilations, add the parameter `-DCMAKE_CXX_COMPILER_LAUNCHER=ccache`

3. Now you need to run the build itself: Run `cmake --build build`.
4. Now, wait for it to compile. This could take some time, so hopefully it compiles properly.
5. Run the command `cmake --install build`, and it should install Prism Launcher to whatever the `-DCMAKE_INSTALL_PREFIX` was.
6. If you don't want Prism Launcher to store its data in `%APPDATA%`, run `cmake --install build --component portable` after the install process
7. When building on Qt 5, whenever compiling, the OpenSSL DLLs aren't put into the directory to where Prism Launcher installs which are necessary in that case, meaning that you cannot log in. The best way to fix this, is just to do `cp /(msystem)/bin/libcrypto-1_1.dll /(msystem)/bin/libssl-1_1.dll install`. This should copy the required OpenSSL DLLs to log in. When building on Qt 6 this is not necessary because it can use schannel, the Windows tls library.

   - Replace `(msystem)` with the msystem you're using (e.g. clang64). On 64-bit msystems, like *MSYS2 CLANG64*, you have to add `-x64` to the dlls.

**If this doesn't work for you, please let us know on our Discord sever, or Matrix Space.**

## IDEs and Tooling

There are a few tools that you can set up to make your development workflow smoother. In addition, some IDEs also require a bit more setup to work with Qt and CMake.

### ccache

**ccache** is a compiler cache. It speeds up recompilation by caching previous compilations and detecting when the same compilation is being done again.

You can [download it here](https://ccache.dev/download.html). After setting up, builds will be incremental, and the builds after the first one will be much faster.

<!-- TODO: The VS-Code instructions could be done better for windows (and in general) -->

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

1. Install Qt Creator within MSYS2 using `pacboy -S qt-creator:p` if building with it, otherwise you may use the regular installer or your package manager of choice (e.g. scoop)
   - NOTE: If you install or run Qt Creator outside of MSYS2 when compiling through it, Qt Creator will fail to find the compiler.
2. (Optional) Create a shortcut to `C:\msys64\(msystem).exe qtcreator`
   - Replace `(msystem)` with the msystem you're using (e.g. clang64).
3. Open Qt Creator (with the `qtcreator` command in MSYS2).
4. Choose `File->Open File or Project`.
5. Navigate to the Launcher source folder you cloned and choose `CMakeLists.txt`.
6. When prompted to configure the project, scroll past the **many** Desktop Qt options without changing anything and click "Configure Project" at the bottom right.
7. Cross your fingers, and press the "Run" button (bottom left of Qt Creator).

   - If the project builds successfully it will run and the Launcher window will pop up.
