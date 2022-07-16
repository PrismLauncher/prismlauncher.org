---
eleventyNavigation:
  key: Command Line Interface
  parent: Getting Started
  order: 10
---

# Using PolyMC via the Command Line

```
Usage: polymc [-h] [-V] [-d <dir>] [-l <launch>] [-s <server>] [-a <profile>] [--alive] [-I <import>]

Options & Switches:
  -h, --help            Display this help and exit.
  -V, --version         Display program version and exit.
  -d, --dir <dir>       Use the supplied folder as application root instead of the binary location (use '.' for current)
  -l, --launch <launch> Launch the specified instance (by instance ID)
  -s, --server <server> Join the specified server on launch (only valid in combination with --launch)
  -a, --profile <profile> Use the account specified by its profile name (only valid in combination with --launch)
  --alive               Write a small 'live.check' file after the launcher starts
  -I, --import <import> Import instance from specified zip (local path or URL)
```

## What is an instance ID, and where do I find it?

The instance ID is the name of the folder where your instance is contained.

To find it, **right-click** on the instance you want to know the ID of, and then click on *Instance Folder* within the context menu.

Now, just copy the name of the folder that opened.

## PolyMC is still opening after I close Minecraft

Currently, the *Close PolyMC after game window opens* option opens PolyMC after closing Minecraft, even when launched from the CLI.

To disable this, open *Settings*, then select *Minecraft*, and finally, un-check *Close PolyMC after game window opens* or check *Quit the launcher after game window closes*.
