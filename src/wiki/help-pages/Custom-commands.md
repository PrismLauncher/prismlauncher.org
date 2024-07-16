---
eleventyNavigation:
  key: Custom Commands
  parent: Help pages
---

<div class="row">
  <div class="column">
      {% image "Custom Commands tab in settings", "./src/img/screenshots/SettingsCustomCommandsLight.png", "./src/img/screenshots/SettingsCustomCommandsDark.png" %}
  </div>
</div>

Pre-launch command runs before the instance launches and post-exit command runs after it exits.

Both will be run in the launcher's working folder with extra environment variables:

* $INST_NAME - Name of the instance
* $INST_ID - ID of the instance (its folder name)
* $INST_DIR - absolute path of the instance
* $INST_MC_DIR - absolute path of Minecraft
* $INST_JAVA - Java binary used for launch
* $INST_JAVA_ARGS - command-line parameters used for launch (warning: will not work correctly if arguments contain spaces)

Wrapper command allows launching using an extra wrapper program (like 'optirun' on Linux)
