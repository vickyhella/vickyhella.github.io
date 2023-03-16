---
title: Components Within MDX Files
sidebar_position: 1
---

export const Background = ({children, color}) => (
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

## Introduction

Sometimes the native components of Docusaurus might not be enough for our docs. In this case, we can customize some components to add more styles to our pages.

## Implementing Components

To customize a component within MDX files, add the implementation code to the beginning of the file (below the YAML headers, if any).

This snippet customizes a `Background` component, which renders the content wrapped in the component with the specified color:

```jsx
export const Background = ({children, color}) => (
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
```

:::note
Only paragraphs that start with export will be parsed as components instead of prose.

`children` is the content wrapped in the component (`<Background>children</Background>`.
:::

## Using Components

Use the component as follows:

```
<Background color="#25c2a0">Green</Background> and <Background color="#1877F2">blue</Background> are my favorite colors.
```

It looks like this:

<Background color="#25c2a0">Green</Background> and <Background color="#1877F2">blue</Background> are my favorite colors.

## References
- [Using JSX in Markdown](https://docusaurus.io/docs/markdown-features/react#using-jsx-in-markdown)
- [Swizzling](https://docusaurus.io/docs/swizzling)