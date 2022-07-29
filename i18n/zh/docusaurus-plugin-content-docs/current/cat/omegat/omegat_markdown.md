---
title: 使用 OmegaT 翻译 MarkDown 文件
sidebar_position: 1
tags: [omegat, cat]
---

## Demand Overview

Lately, I want to find a CAT that can work with markdown files (a file format used a lot for technical documents). I expect the CAT to support the markdown format and preserve the original formats well (as much as possible).

## Exploration of CATs

I tried several CATs such as Trados, Wordfast (client), Matecat, and Smartcat, and found that OmegaT works the best for markdown files, especially when I need to do English-to-Chinese translation. Moreover, OmegaT is free and open-source, making it suitable for individual translators.

## Advantages of OmegaT

### 1. Format support:

Natively, OmegaT does not support the markdown format. However, you can install an OKapi filter plugin to make OmegaT read markdown files.

I tried to use the OKapi markdown filter in OmegaT and compared the formats of the source and target files. I found that the filter has the format preserved pretty well (especially compared with Trados, which changed the format a lot in indentation and line breaks).

### 2. Other features:

Other advantages of OmegaT are that it supports cooperation by allowing translators to push/pull projects to remote repositories, provides a lot of plugins, and uses lightweight glossary and TM formats.

## Painpoints of OmegaT

The only format issue I found in OmegaT (with OKapi filter support) is that it removes or adds some spaces or line breaks somehow.

However, I tried to preview the target markdown files using several markdown preview tools and found that the problem does not quite change the preview effect. So I believe it wouldnt be a big problem if translators can double-check the preview effect of the target file.

## Conclusion

I have never used OmegaT before, so I still need to get used to the editor page and find out its other features.

Though it does not work perfectly, yet, Im glad that I found and tried OmegaT and Im loving it.