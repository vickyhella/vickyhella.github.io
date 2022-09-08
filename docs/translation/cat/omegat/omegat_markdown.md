---
title: Introducing OmegaT's Markdown Support
sidebar_position: 1
tags: [omegat, cat]
---

## My Demand

I was looking for a CAT to translate markdown files. I expect the CAT to:

- support markdown (a file format usually used in technical documents).
- preserve the original formats well (at leaset as much as possible).
- be free-of-charge.

## CAT Exploration

I tried several CATs such as Trados, Wordfast (client), Matecat, and Smartcat, and found that OmegaT works the best for markdown files, especially when I need to do English-to-Chinese translation. 

## Advantages of OmegaT

### Format support

Natively, OmegaT does not support the markdown format. However, you can install an OKapi filter plugin to make OmegaT parse markdown files.

I tried to use the OKapi markdown filter in OmegaT and compared the formats of the source and target files. I found that the filter has the format preserved pretty well (especially compared with Trados).

### Lightweight

OmegaT uses very lightweight glossary and TM, meaning their sizes can be very small. You can migrate them with ease.

### Open Source
OmegaT is free and open-source, making it suitable for individual translators.

### Customizable

OmegaT supports customization via plugins, commands, scripts, and more.

## Painpoints of OmegaT

The only format issue I found in OmegaT (with OKapi filter support) is that it removes or adds some indentations or line breaks somehow.

However, I tried to preview the target markdown files using several markdown preview tools and found that the problem does not quite change the preview effect a lot. 

So I believe it wouldnt be a big problem if translators can double-check the preview effect of the target file.

## Conclusion

I have never used OmegaT before, so I still need to get used to the editor page and find out its other features.

Though it does not work perfectly, yet, I'm glad that I found and tried OmegaT.