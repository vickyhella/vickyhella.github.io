import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Highlight from '@site/src/components/Highlight';
import TabItem from '@theme-original/TabItem';
import Tabs from '@theme-original/Tabs';
import ColorText from '@site/src/components/ColorText';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  Highlight,
  TabItem,
  Tabs,
  ColorText
};