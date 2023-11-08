---
eleventyNavigation:
  key: CatPacks
  parent: Getting Started
  order: 12
---

# CatPacks

## Installation

The CatPacks folder location is as follows:

- on **Windows:** `%appdata%\PrismLauncher\catpacks`
- on **Mac:** `~/Library/Application Support/PrismLauncher/catpacks`
- on **Linux:** `~/.local/share/PrismLauncher/catpacks`
- on **Flatpak:** `~/.var/app/org.prismlauncher.PrismLauncher/data/PrismLauncher/catpacks`

After you move the CatPack to the mentioned folder restart Prism Launcher, then open the global settings.
In the Launcher section, click the User Interface tab, and under Cat, choose the newly added CatPack.
Click the Close button, and enjoy your CatPack.

## CatPack Types

### 1. Simple CatPack

The most basic CatPack is a simple image(that's all).

### 2. Advanced CatPack

Is a folder that contains a `catpack.json` file and some images.

For example, the structure of a CatPack is as follows:

```text
└── test_catpack
    ├── catpack.json
    ├── christmas.png
    ├── oneDay.png
    ├── maxwell.png
    ├── newyear.png
    └── newyear2.png
```

The `catpack.json` looks as follows:

```json
{
  "name": "My Cute Cat",
  "default": "maxwell.png",
  "variants": [
    {
      "startTime": {
        "day": 12,
        "month": 4
      },
      "endTime": {
        "day": 12,
        "month": 4
      },
      "path": "oneDay.png"
    },
    {
      "startTime": {
        "day": 20,
        "month": 12
      },
      "endTime": {
        "day": 28,
        "month": 12
      },
      "path": "christmas.png"
    },
    {
      "startTime": {
        "day": 30,
        "month": 12
      },
      "endTime": {
        "day": 1,
        "month": 1
      },
      "path": "newyear2.png"
    },
    {
      "startTime": {
        "day": 28,
        "month": 12
      },
      "endTime": {
        "day": 3,
        "month": 1
      },
      "path": "newyear.png"
    }
  ]
}
```

Fields description:

- `name` the name of the CatPack
- `default` the path to the default cat
- `variants` a list of the cats that are visible only on specific days/periods.
- `startTime` the day from which the variant is visible (inclusive)
- `endTime` the day until the variant is visible (inclusive)
- `path` the path to the variant

All paths are relative, so you only need to put the name of the image from the CatPack(with extension).

The default cat is the cat displayed in all periods we can't match any variants.

The variant matching is done by looking if today is between `startTime` and `endTime`, if is matched then that variant is displayed.

The order of variants matters as the first variant that matches the period is returned ignoring the rest.

So for the mentioned example, the variants are displayed as follows:

- `oneDay.png` will be visible only on 12 April each year
- `christmas.png` from 20 December until 28 December
- `newyear.png` on 29 December
- `newyear2.png` from 30 December until 1 January
- `newyear.png` from 2 January until 3 January
- `maxwell.png` for the periods that were not mentioned

So an example of order matter is if the `newyear.png` and `newyear2.png` orders would be reversed then `newyear2.png` will never be displayed.
