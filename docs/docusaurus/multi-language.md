---
title: Multi-Language Support
sidebar_position: 1
---

To support multiple languages on your Docusaurus site, follow the instructions below:

1. Add the following code to the `docusaurus.config.js` file, assuming you need to add `Simplified Chinese` support:

  **Part 1**:

  ```js
  const config = {
    i18n: {
      defaultLocale: "en",
      locales: ["en", "zh"],
      localeConfigs: {
        en: {
          label: "English",
        },
        zh: {
          label: "简体中文",
        },
      },
    },
  }
  ```
  **Part 2**:
  
  ```js
  themeConfig: {
    navbar: {
      items: [
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
  }
  ```

2. In the project directory, run the following command:
  ```shell
  yarn run write-translations -- --locale zh
  ```

  This command will generate the translation-related files in the `i18n` folder, which need to be translated as needed.


