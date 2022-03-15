---
eleventyNavigation:
  key: Command Line Interface
  parent: Getting Started
  order: 10
---

# Using PolyMC via the Command Line

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
  
  ## What is the instance ID where do I find it?
  
  The instance ID is the folder name for the instance.
  To find it right click the instance you want the ID of, then click *Instance Folder*, then copy the name of the folder opened.
  
  ## PolyMC is opening after I close Minecraft
  
  Currently the *Close PolyMC after game window opens* option opens PolyMC after closing Minecraft, even if launched from the CLI.
  To disable this open *Settings* then select *Minecraft* and finally uncheck the *Close PolyMC after game window opens*.
