---
title: Redirection
sidebar_position: 3
---

## Redirecting a page

On the file (e.g., md or js files) that needs to be redirected, add the code below. Assume that you are adding the following code to the /`docs/test.js` page:

  ```js
  import {Redirect} from '@docusaurus/router';

  const Home = () => {
    return <Redirect to="/" />;
  };
  ```

  With the `@docusaurus/router` component, users accessing the `test.js` page will be directed to the homepage `/`.

### Redirection in multi-language use cases

If your Docusaurus site provides more than one language, the code above will not work for non-default languages.

In this way, you can add the code below instead:
  
```js
import React from 'react';
import {Redirect} from '@docusaurus/router';

export default function Home(context) {
  return <Redirect to={`${context.config.baseUrl}<target>`} />;
}
```

`<target>` should be replaced with the actual target location that the user should be redirected to.

After this, when users access this page from the default locale, they will be redirected to `homepage/target`. If they are from another locale such as `zh`, they will be directed to `homepage/zh/target`.

<!--
## Redirection Using a Plugin
-->