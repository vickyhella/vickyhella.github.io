---
title: Versioning
sidebar_position: 2
---

To support multiple versions on your Docusaurus site:

  ```js
  const config = {
  presets: [
    [
      'classic',
      ({
        docs: {
          lastVersion: 'current',
          versions: {
            current: {
              label: 'v1.1',
              path: 'v1.1',
            },
            "v1.0": {
              path: "v1.0",
            }
          }
        },
      }),
    ],
  ],
  }
  ```

