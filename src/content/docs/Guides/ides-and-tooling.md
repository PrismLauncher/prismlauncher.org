---
title: IDEs and Tooling
description: Stuff about IDEs and Tooling
---

There are a few tools that you can set up to make your development workflow smoother. In addition, some IDEs also require a bit more setup to work with Qt and CMake.

## ccache

**ccache** is a compiler cache. It speeds up recompilation by caching previous compilations and detecting when the same compilation is being done again.

You can [download it here](https://ccache.dev/download.html). After setting up, builds will be incremental, and the builds after the first one will be much faster.

:::warn
Please see the settings specific to MSVC [here](https://github.com/ccache/ccache/wiki/MS-Visual-Studio)
:::

## VS Code

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

## CLion

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

## Qt Creator

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
