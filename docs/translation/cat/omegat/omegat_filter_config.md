---
title: OmegaT Filter Configuration
sidebar_position: 2
tags: [omegat, cat, filter, okapi]
---

## Overview

To make OmegaT work with Markdown files, parse YAML headers, and allow modifying links, we need to customize some settings.

To do so, we need to configure a filter plugin so that OmegaT can parse markdown files and customize a filter config file to allow translating links and YAML headers.

## Instructions

1. Download [Okapi’s OmegaT filter]([https://okapiframework.org/wiki/index.php/Okapi_Filters_Plugin_for_OmegaT](https://okapiframework.org/wiki/index.php/Okapi_Filters_Plugin_for_OmegaT)), which is available [here]([https://okapiframework.org/binaries/omegat-plugin/](https://okapiframework.org/binaries/omegat-plugin/)).
2. Open OmegaT, click **Options** > **Access configuration files.** In the folder that is opened, create a folder called `plugins`, and copy the filter downloaded in Step 1 to this folder.
    
:::note
At this stage, OmegaT can already parse markdown files. If you don’t need to translate links or YAML headers, you can skip the steps below.
:::
    
3. Download okapi’ Rainbow app (supports macOS and Windows). You can download it [here]([https://okapiframework.org/binaries/main/](https://okapiframework.org/binaries/main/)).
4. Create a custom filter config file.
    1. Open Rainbow.
    2. Click **Tools** > **Filter Configurations**.
    3. Find **Markdown** in the **Name** column, click **Create**, name your config file as needed (for example, `test`), and click **OK**. After this, you will get a config file named `okf_markdown@test`, which will be needed later.
        ![Untitled](/img/omegat_filter_config1.png)
        
    4. Customize the config file as needed. 
    For example, I need it to allow translating the links and YAML header, so I checked the **Translate Hyperlink URLs extracted as a subflow** and **Translate YAML Metadata Header** boxes.
        ![Untitled](/img/omegat_filter_config2.png)
        
:::note
You can customize your settings as needed. However, I haven’t tried other settings yet, so this document will not cover those other settings. Once I tried them out, I will put the tutorials here.
:::
        
5. Open OmegaT again and apply the `okf_markdown@test` file created in Step 4.

Now, OmegaT can parse markdown files and allow link/YAML headers translation.

## Conclusion

After performing the steps above, you should be able to translate markdown files. 

However, the translated file format might not be exactly the same as the source file (for example, the indentation could be different). This is caused by the Okapi filter itself. Therefore, **translators should always preview the translated file and modify the format if needed** to ensure the source and target files have the same format.