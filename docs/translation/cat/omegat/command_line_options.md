---
title: Edit OmegaT Options
sidebar_position: 3
tags: [OmegaT, command line, mac]
---

## Method 1: Edit `Configuration.properties` and `Info.plist`

- `Configuration.properties`: modifies OmegaT configuration.
- `Info.plist`: modifies Java configuration.

After you modify these files, OmegaT will run with these options each time you start it.

However, this might not be what you wanted all the time. For instance, if you add a custom config folder or start OmegaT with the `--no-team` option, you probably don’t want it be the new default.

## Method 2: Command line options

```bash
open /Applications/OmegaT.app -n --args --your_options
```

If you have `OmegaT.app` located elsewhere, just change the path. `-n` means that it will start a new instance, so you may have more than one projects open at a time. Anything that comes after `--args` will be interpreted as arguments (options) passed to OmegaT.

## References

- [Command line options for OmegaT on macOS](https://truetranslation.org/2023/01/04/command-line-options-for-omegat-on-macos/)