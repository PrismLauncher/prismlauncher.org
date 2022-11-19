---
eleventyNavigation:
  key: Java Settings
  parent: Help pages
--- 

### Java settings

In this page you can set the global Java settings.

<div class="row">
  <div class="column">
      {% image "Java tab under Prism Launcher settings", "./src/img/screenshots/JavaSettingsLight.png", "./src/img/screenshots/JavaSettingsDark.png" %}
  </div>
</div>

## Memory

<div class="row">
  <div class="column">
      {% image "Memory section of java tab under Prism Launcher settings", "./src/img/screenshots/JavaSettingsMemoryLight.png", "./src/img/screenshots/JavaSettingsMemoryDark.png" %}
  </div>
</div>

Java memory settings.
NOTE: MORE RAM ALLOCATED DOESN'T MEAN BETTER PERFORMANCE! In fact, in most use cases (except you're playing big modpacks) 4GB of ram allocated should be more than enough

## Java Runtime

<div class="row">
  <div class="column">
      {% image "Java Runtime section of java tab under Prism Launcher settings", "./src/img/screenshots/JavaSettingsJavaRuntimeLight.png", "./src/img/screenshots/JavaSettingsJavaRuntimeDark.png" %}
  </div>
</div>

This is where the settings for the Java runtime live, like the location of the runtime and any Java arguments to use.

For information about how to get a correct Java version, see: [Installing Java](../../getting-started/installing-java).

**Auto-detect** will check your computer for all java versions and show you a list of them, the best one on top.

**Test** can be used to test the selected Java runtime along with your memory settings and JVM arguments without starting the game.

**Skip java compatibility checks** skips java compatibility checks at game launch
