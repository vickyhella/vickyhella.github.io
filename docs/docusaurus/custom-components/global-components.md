---
title: Global Components
sidebar_position: 2
---

## Introduction

You can customize components and use them directly in any other files without having to use the `import` statements every time.

## Creating a Component

Create a file that implements that component in the `src/components` folder. The file name should be `<componentname>.js`. 

:::note
Rather than placing it in `src/components`, you can also use other directories (just need to use the exact directory during the import).
:::

For example, to customize a `<Highlight>` component that renders the text background color, create a `Highlight.js` file in the `src/components` directory with the following content:

```jsx
import React from 'react';

export default function Highlight({children, color}) {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: '2px',
        color: '#fff',
        padding: '0.2rem',
      }}>
      {children}
    </span>
  );
}
```

This snippet defines a function called `Highlight` to render text colors.

## Registering the Component

<Tabs>
<TabItems value="Manual">

After creating the file above, create a file `src/theme/MDXComponents.js` and copy the following content to the file:

```jsx
import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Highlight from '@site/src/components/Highlight';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  Highlight,
};
```

</TabItems>

<TabItems value="CLI">
After creating the file above, run:

```bash
yarn swizzle @docusaurus/theme-classic MDXComponents --eject
```

This will create a `src/theme/MDXComponents.js` file. The file shows the current implementation of the components. 

You need to override the content with the following content:

```js
import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Highlight from '@site/src/components/Highlight';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  Highlight,
};
```

</TabItems>
</Tabs>

If you have implemented more components, add more `import` statements and add the component name after the line `Highlight`.

For example, to use the built-in `<Tabs></Tabs>` and `<TabItems></TabItems>` components globally without having to import them in every MDX file, register them to the `MDXComponents` file as follows:

```js
import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Highlight from '@site/src/components/Highlight';
import TabItem from '@theme-original/TabItem';
import Tabs from '@theme-original/Tabs';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  Highlight,
  TabItem,
  Tabs
};
```

:::caution

Because `<Tabs></Tabs>` and `<TabItems></TabItems>` are built-in components, you don't need to create the `Tabs.js` and `TabItems.js` files in the `src/components` directory. 

Instead, you only need to register them to `MDXComponents`.

:::
## References
- [MDX Component Scope](https://docusaurus.io/docs/markdown-features/react#mdx-component-scope)
- [Swizzling](https://docusaurus.io/docs/swizzling)