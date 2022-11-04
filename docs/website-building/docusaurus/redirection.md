---
title: Redirection
sidebar_position: 3
---

## Redirecting a Page

On the file (e.g., md or js files) that needs to be redirected, add the code below. Assume that we are adding the following code to the /docs/test.js page:

  ```js
  import {Redirect} from '@docusaurus/router';

  const Home = () => {
    return <Redirect to="/" />;
  };
  ```

  With the `@docusaurus/router` component, users accessing the `test.js` page will be directed to the homepage `/`.

### Redirection in Multi-Language Use Cases

If your Docusaurus site provides more than one language, the code above will not work for the non-language.

In this way, you can add the code below instead:
  
```js
import React from 'react';
import {Redirect} from '@docusaurus/router';

export default function Home(context) {
  return <Redirect to={`${context.config.baseUrl}target`} />;
}
```

After this, when users access this page from the default locale, they will be redirected to the `homepage/target` page. If they are from another locale such as `zh`, they will be directed to the `homepage/zh/target` page.

<!--
## Redirection Using a Plugin
-->