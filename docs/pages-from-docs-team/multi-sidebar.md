---
title: Using Multiple Sidebars in Docusaurus
sidebar_position: 1
---

## Context

As discussed during the docs meeting of the 8th of June 2023, we'ré slowly seeing the limits of the Divio paradigm for certain projects with a lot of pages and keeping it to one single sidebar.

To enhance the user experience going forward, and assuring there's still a coherence in the sidebar, while keeping the Divio paradigm in mind, the suggestion was to split the sidebar to smaller ones and have new links setup in the navbar.

## Configuration

The configuration is done in the two files **sidebar.js** and **docusaurus.config.js**.

To help explaining the whole configuration, a fictive example with Rancher Desktop will be used.

### sidebar.js

As described in [Docusaurus docs](https://docusaurus.io/docs/sidebar/multiple-sidebars), multiple sidebars can be created by providing a unique name and referencing the pages for each sidebar.

:::caution

While the docs confirm that a page can be referenced in multiple sidebars, it will have an impact on browsing as the sidebar while seeing the page might change for another one. The users will loose the context they were browsing and it can bring confusion.

Therefore, it's **strongly recommended** to have the pages referenced in **only one** sidebar.

:::

Here's an example with the Rancher Desktop **sidebar.js**:

```js
// Before
tutorialSidebar: [

  ...

tutorialSidebar: [

  ...

  {
    type: 'category',
    label: 'HowTos',
    items: [
      "how-to-guides/hello-world-example",
      "how-to-guides/transfer-container-images",
      "how-to-guides/create-multi-node-cluster",
      "how-to-guides/setup-NGINX-Ingress-Controller",
      "how-to-guides/skaffold-and-rancher-desktop",
      "how-to-guides/running-air-gapped"
    ],
  },

  ...
],

// After
tutorialSidebar: [

  ...

],

howtoSidebar: [

  "how-to-guides/hello-world-example",

  {
    type: 'category',
    label: 'Containers & Kubernetes',
    items: [
      "how-to-guides/transfer-container-images",
      "how-to-guides/create-multi-node-cluster",
      "how-to-guides/setup-NGINX-Ingress-Controller",
      "how-to-guides/skaffold-and-rancher-desktop",
      "how-to-guides/running-air-gapped"
    ],
  },
],
```

As shown in the example, the goal would be to "extract" a bigger section, such as tutorials and howto, from the main sidebar to create a new one.

Once this work is done, the second step can be started.

### docusaurus.config.js

By default, with the unique sidebar, there's no need to configure anything. The sidebar will be loaded when opening the website, and all the pages will be accessible from it.

When migrating to a multiple sidebar setup, there's a need to configure a way to reach the other sidebars. This is where the new links in the navbar will help.

The links can be set a docID, meaning when the page will open, Docusaurus will display the associated sidebar to the page.

Here's an example with the Rancher Desktop **docusaurus.config.js**:

```js
// Before
navbar: {
  logo: {
    alt: 'Rancher Desktop Logo',
    src: 'img/logo.svg',
  },

  ...
},

// After
navbar: {
  logo: {
    alt: 'Rancher Desktop Logo',
    src: 'img/logo.svg',
  },
  items: [
    {
      type: 'doc',
      docId: 'getting-started/introduction',
      position: 'left',
      label: 'Documentation',
    },
    {
      type: 'doc',
      docId: 'how-to-guides/hello-world-example',
      position: 'left',
      label: 'Guides',
    },
  ],

  ...
}

```

## Caveats

One of the major caveat with this solution, is the impact of the browsing with versioned docs, which the majority or the SUSE projects use, if not all.

There's a "misalignment" between the sidebar, which is impacted by versioning, and the navbar, which is static without versioning.

In order words, for the example above, only the "next" version of the **sidebar.js** was updated, so until the "next" version becomes the "current" version, the links will still be displayed but the sidebar will still be the unique one.

To solve this potential issue, all the versioned sidebars should be updated. However this could bring us to the next major caveat: link not found (404) for the docs page referenced by the link.

As docs are evolving and being updated quite often, the risk of having the page referenced by the navbar link not "existing" in certain versions can be quite high.

To solve this potential issue, it would require the creation of a generic page for each link and in all versions.

## Conclusion and next steps

As discussed during the meeting, this is just a suggestion and as a potential next milestone, it would be to go through our projects and see if all, or just some of them, could leverage this suggestion and try to proactively see if the caveats explained above, could impact the docs site (strong chances of impact).