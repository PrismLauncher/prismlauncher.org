---
eleventyNavigation:
  key: Command Line Interface
  parent: Getting Started
  order: 10
---

# Using Prism Launcher via the Command Line

```text
Usage: prismlauncher [-h] [-V] [-d &lt;dir&gt;] [-l &lt;launch&gt;] [-s &lt;server&gt;] [-a &lt;profile&gt;] [--alive] [-I &lt;import&gt;]

Options & Switches:
  -h, --help            Display this help and exit.
  -V, --version         Display program version and exit.
  -d, --dir &lt;dir&gt;       Use the supplied folder as application root instead of the binary location (use '.' for current)
  -l, --launch &lt;launch&gt; Launch the specified instance (by instance ID)
  -s, --server &lt;server&gt; Join the specified server on launch (only valid in combination with --launch)
  -a, --profile &lt;profile&gt; Use the account specified by its profile name (only valid in combination with --launch)
  --alive               Write a small 'live.check' file after the launcher starts
  -I, --import &lt;import&gt; Import instance from specified zip (local path or URL)
```

## What is an instance ID, and where do I find it?

The instance ID is the name of the folder where your instance is contained.

To find it, **right-click** on the instance you want to know the ID of, and then click on *Instance Folder* within the context menu.

Now, just copy the name of the folder that opened.

## Prism Launcher is still opening after I close Minecraft

Currently, the *Close Prism Launcher after game window opens* option opens Prism Launcher after closing Minecraft, even when launched from the CLI.

To disable this, open *Settings*, then select *Minecraft*, and finally, un-check *Close Prism Launcher after game window opens* or check *Quit the launcher after game window closes*.
