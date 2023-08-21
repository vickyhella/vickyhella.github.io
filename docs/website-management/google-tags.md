---
title: Google Tags
sidebar_position: 6
---

You can use Google tags to track how users are using your website.

## plugin-google-gtag

`plugin-google-gtag` allows you to send event data to Google Analytics, Google Ads, and Google Marketing Platform. To begin with:

1. Go to [Google Tag Assistant](https://tagassistant.google.com/), click **Add domain**, and input your website's URL. After this, you will obtain your `trackingID` formatted as `G-xxxxxxxxxx`.

1. Go to your project's root and run `yarn add @docusaurus/plugin-google-gtag` to install the [plugin-google-gtag](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-google-gtag) plugin.

1. Configure the plugin in your `docusaurus.config.js` file as follows (replace `G-999X9XX9XX` with the value you obtained from Step 1):

  ```js
  module.exports = {
    plugins: [
      [
        '@docusaurus/plugin-google-gtag',
        {
          trackingID: 'G-999X9XX9XX',
          anonymizeIP: true,
        },
      ],
    ],
  };
  ```

## plugin-google-tag-manager

You can use this plugin in conjunction with [gtag](#plugin-google-gtag) for in-depth analysis of how users are using your site.

1. Go to [Google Tag Assistant](https://tagassistant.google.com/), click **Add domain**, and input your website's URL. After this, you will obtain your `containerId` formatted as `GTM-xxxxx`.

1. Go to your project's root and run `yarn add @docusaurus/plugin-google-tag-manager` to install the [plugin-google-tag-manager](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-google-tag-manager) plugin.

1. Configure the plugin in your `docusaurus.config.js` file as follows (replace `GTM-12345` with the value you obtained from Step 1):

  ```js
  module.exports = {
    plugins: [
      [
        '@docusaurus/plugin-google-tag-manager',
        {
          containerId: 'GTM-12345',
        },
      ],
    ],
  };
  ```

:::caution

These two plugins are only active in production.

:::