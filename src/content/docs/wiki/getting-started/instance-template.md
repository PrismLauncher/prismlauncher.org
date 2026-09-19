---
title: Using an instance template
sidebar:
  order: 4
  label: Instance template
---

### What is an instance template?

An instance template is a directory that may get copied into newly created instance directories if the user wishes so, this can be decided per instance.
This can be very useful if you want your `options.txt` file preserved without having to adjust your settings on every new instance, want to share saves, screenshots, or other directories between instances, or just want certain files to be present in new instances without having to manually copy them all the time.

The instance template will respect symlinks if your operating system supports it, which means that e.g. screenshots can truly be shared between instances and don't have to be copied everytime.

### Setting up

To use an instance template, first select the directory that will contain it.
This can be done in the settings.
![Settings containing instance template directory](/img/screenshots/InstanceTemplateSettings.png)

Even though this has a default directory, this directory might not exist yet. To make sure it exists,
either create the directory with the correct name (see [default data locations](../data-location)), or open it via the folder action menu.
![Opening template directory from the folder action menu](/img/screenshots/InstanceTemplateFolderAction.png)

### Creating the template

Creating the template is pretty straight-forward: Place every file or symlink you want the template to contain in the template directory.
This preserves the file tree, which means users needing to place files at the exact subpath they should appear in the instance direcory.

For example, a newly created Minecraft 26.3 instance directory looks like this:

```
<instance>
├── instance.cfg
├── minecraft
│   ├── coremods
│   ├── downloads
│   │   └── log.json
│   ├── icon.png
│   ├── logs
│   │   ├── latest.log
│   │   └── telemetry
│   ├── mods
│   ├── options.txt
│   ├── realms_persistence.json
│   ├── resourcepacks
│   ├── saves
│   └── server-resource-packs
└── mmc-pack.json
```

This means, to create a template containing only the `options.txt` file, it should look like this:

```
<template>
└── minecraft
    └── options.txt
```

### Creating a new instance with the template

When creating a new instance, the `Use instance template` checkbox can be toggled on or off. This box is on by default everytime the `Create instance` window is opened.

If the template directory specified in the settings does not exist, the checkbox will be toggled off and will be unable to be toggled on.

![Creating a new instance](/img/screenshots/InstanceTemplateCreateNewInstance.png)

### Disclaimer

##### Overwriting of files

When using the instance template, it will override files in the instance if they already exist.
This means, if a modpack author puts certain files into the instance but the template does too, the ones from the modpack will be overridden. This should normally not break things, but keep that in mind when using elaborate templates.

##### Disk Space Concerns

If the instance template contains large directories that are not symlinks, these _will_ use the same disk space everytime.
It is recommended to only copy small directories or create a symlink for larger ones instead. This way, only the symlink that points to the directory will be copied, which saves a lot of disk space in the long run.
