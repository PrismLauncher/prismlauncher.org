---
eleventyNavigation:
  key: Command Line Interface
  parent: Getting Started
  order: 10
---

# Using Prism Launcher via the Command Line

```text
Usage: prismlauncher [-h] [-v] [-d &lt;dir&gt;] [-l &lt;launch&gt;] [-s &lt;server&gt;] [-a &lt;profile&gt;] [-I &lt;import&gt;] [--show &lt;show&gt;] [--alive] [--help-all]

Options:
  -d, --dir &lt;directory&gt;    Use a custom path as application root (use '.' for current directory)
  -l, --launch &lt;instance&gt;  Launch the specified instance (by instance ID)
  -s, --server &lt;address&gt;   Join the specified server on launch (only valid in combination with --launch)
  -a, --profile &lt;profile&gt;  Use the account specified by its profile name (only valid in combination with --launch)
  --alive                  Write a small 'live.check' file after the launcher starts
  -I, --import &lt;file&gt;      Import instance from specified zip (local path or URL)
  --show &lt;show&gt;            Opens the window for the specified instance (by instance ID)
  -h, --help               Displays help on commandline options.
  --help-all               Displays help, including generic Qt options.
  -v, --version            Displays version information.
```

## What is an instance ID, and where do I find it?

The instance ID is the name of the folder where your instance is contained.

To find it, **right-click** on the instance you want to know the ID of, and then click on _Instance Folder_ within the context menu.

Now, just copy the name of the folder that opened.

## Prism Launcher is still opening after I close Minecraft

Currently, the _Close Prism Launcher after game window opens_ option opens Prism Launcher after closing Minecraft, even when launched from the CLI.

To disable this, open _Settings_, then select _Minecraft_, and finally, un-check _Close Prism Launcher after game window opens_ or check _Quit the launcher after game window closes_.
