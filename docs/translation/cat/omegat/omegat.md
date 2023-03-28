---
title: Introducing OmegaT
tags: [omegat, cat]
---

## My Demand

I was looking for a CAT to translate files of different formats such as Markdown, YAML, JSON, and PDF. I expect it to:

- support markdown (a file format commonly used in technical documents).
- preserve the original formats well (at least as much as possible).
- be free-of-charge.

I tried several CATs such as Trados, Wordfast, Matecat, and Smartcat, and found that OmegaT works the best for markdown files, especially when I need to do English-to-Chinese translation. 

## Advantages of OmegaT

### Format support

Natively, OmegaT cannot parse markdown files. However, you can install the OKapi filter plugin to make OmegaT parse markdown files.

I tried the OKapi markdown filter in OmegaT and compared the formats of the source and target files. I found that the filter has the format preserved pretty well (especially compared with Trados).

### Lightweight

OmegaT uses very lightweight glossary and TM, meaning their sizes can be very small. As the files are small, you can move them anywhere you want with ease.

I have a translation project with around 320,000 English words, and the total TM size is only about 10 MB, which is really surprising for me.

When it comes to the glossary file, OmegaT uses and generates glossary in tab-separated values (TSV) format, whose extension is `txt`. You can convert your other glossary files into it if needed.

### Open Source
OmegaT is free and open-source, making it suitable for individual translators.

### Customizable

OmegaT supports customization via plugins, commands, scripts, and more. You can google these resources and find ones according to your needs.

## Painpoints of OmegaT

The only format issue I found in OmegaT (with OKapi filter support) is that it removes or adds some indentations or line breaks somehow.

Therefore, translators need to preview the target file and compare the format with that of the source to ensure format consistency.


## Conclusion

I have been using OmegaT for months and I think it's a CAT tool that I'm glad I found.