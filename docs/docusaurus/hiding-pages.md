---
title: Hiding Pages
sidebar_position: 6
# sidebar_class_name: hidden
---

Sometimes you might want to hide a specific page from the sidebar (the Markdown file is still stored in project repo, but doesn't render in production) but still access it via a URL.

If you use the Docusaurus framework as this website does, and generate sidebars using `autogenerated`, which doesn't allow you to manually remove specific pages from the sidebar, follow the steps below:

<Tabs>
<TabItem value="Use a CSS class">
1. Add a new class to your CSS file. By default, the CSS file should be `src/css/custom.css`:

  ```css
  .hidden {
  display: none !important;
  }
  ```

2. Add a class name to pages/categories that you need to hide.

  - To hide a specific page, add the following line to the metadata section of your Markdown file (see  [Markdown front matter](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter) for more customizable fields):

  ```yml
  sidebar_class_name: hidden
  ```

  - To hide a whole category, add the following line to the `_category_.json` file (see [Category item metadata](https://docusaurus.io/docs/sidebar/autogenerated#category-item-metadata) for more customizable fields):

  ```json
  "className": "hidden"
  ```

After this, these pages won't appear in the sidebar, but can still be accessed via a URL.

</TabItem>

<TabItem value="Use the src/pages folder">

You can also put the pages (such as `.md` and `.js`) that you want to hide in the `src/pages` folder. Pages in this folder won't appear in the sidebar, but can still be accessed via a URL.

:::info

If you have multiple versions whose URLs are in the format of `<domain>/v1.1/hello-world` and `<domain>/v1.2/hello-world`, you can also create folders called `v1.1` and `v1.2` in the `pages` folders to make the URL format consistent.

:::

</TabItem>

</Tabs>
