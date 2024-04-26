---
eleventyNavigation:
  key: Instance Copy
  parent: Help pages
---

# Copy an Instance

When you right click on an instance, you can choose to copy it. After selecting this option, you will see a new window. You can choose an icon, name and a group for the new instance.

<div class="row">
  <div class="column">
      {% image "Copy menu when right click on instance", "./src/img/screenshots/CopyInstanceLight.png", "./src/img/screenshots/CopyInstanceDark.png" %}
  </div>
</div>

## Instance Copy Options

This is where you can find options and copying settings for your new instance.

### Keep play time

This option will allow you to keep your playtime from your original instance, if this setting is enable in Global Settings, see: [Game Time](../Minecraft-settings/#game-time)

### Copy saves

This option allows you to copy all saved games from your original to your new instance.

### Copy game options

This option allows you to copy all game settings, if you want your configuration to be cloned.

### Copy ressources packs

This option allows you to copy all the ressources packs to your new instance.

### Copy screenshots

This option allows you to copy all your screenshots to your new instance folder.

### Copy shader packs

This option allows you to copy all your shader packs to your new instance folder.

### Copy servers

This option allows you to copy all your servers to your new instance. You can find them in your new instance multiplayer menu.

### Copy mods

This option allows you to copy all your mods to your new instance folder.

### Select all

This option allows you to select all the precedent options.

## Advanded Copy Options

This is where you can set more advanced options, such as links or cloning.

### Symbolic and Hard Link Options

You can't use these options if your partition is on FAT filesystem.

**Use symbolic links**

This option will create a symbolink link between the two instances.

**Use hard links**

This option will create a hard link between the two instances.

### CoW (Copy-on-Write) Options

**Clone instead of copying**

This option is only supported on XFS, BTRFS and APFS filesystems.
<!-- May be more? -->
