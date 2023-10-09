---
title: Updating Algolia Records
sidebar_position: 3
---

This document describes how to generate and upload your search records to Algolia. You can follow the instructions here after updating the docs or when you find that the search didn't return the results as needed.

### Prerequisites

You need to install:
- Docker
- [jq](https://github.com/stedolan/jq/wiki/Installation): a lightweight command-line JSON processor. To quickly install it on Mac, run the command below:
  ```bash
  brew install jq
  ```

### Preparing the files needed

1. Create a folder called `algolia-project` in any location you want.
1. In this folder, create a file called `.env` with the following content:

  ```
  APPLICATION_ID=<YOUR_APP_ID>
  API_KEY=<YOUR_API_KEY>
  ```

  Replace `<YOUR_APP_ID>` and `<YOUR_API_KEY>` with the actual ones:

1. Create another file called `config.json` with the following content:

  ```json
  {
  "index_name": "<index-name>",
  "sitemap_urls": ["http://<example-url>/sitemap.xml"],
  "start_urls": ["http://<example-url>/"],
  "selectors": {
      "lvl0": "",
      "lvl1": "article h1",
      "lvl2": "article h2",
      "lvl3": "article h3",
      "lvl4": "article h4",
      "lvl5": "article h5"
  },
  "custom_settings": {
      "attributesForFaceting": [
      "language",
      "version",
      "type",
      "docusaurus_tag"
      ]
  }
  }
  ```

  Replace `<index-name>` and `<example-url>` with the actual ones.

  :::info
  
  After this, your `algolia-project` folder should have two files: `.env` and `config.json`.

  :::

### Updating records

Go to the directory (`algolia-project`) that contains the `.env` and `config.json` files and run the command below:

```bash
docker run -it --env-file=.env -e "CONFIG=$(cat ./config.json | jq -r tostring)" algolia/docsearch-scraper
```

After the command is run successfully, it will output the number of records generated as follows:

```bash
> DocSearch: https://example-url-1/ 0 records)
> DocSearch: https://example-url-2/ 1 records)
> DocSearch: https://example-url-3/ 4 records)
> DocSearch: https://example-url-4/ 4 records)

Nb hits: 9
```

After this, your records should be uploaded and updated. You can wait for a while and then search the newly uploaded records on your website for verification.

:::note
It might take several minutes for the records to be uploaded.
:::

:::info

Uploading Algolia records is simply done from the command-line tool and doesn't require a console login.

If you want to view the search trend and get statistics on keywords that are searched the most, you can log into the Algolia console to have a look (described in the section below).

:::

## Viewing the search data

To get an insight into your users' search behaviors:

1. Log in to your [Algolia console](https://dashboard.algolia.com/).
1. Click the **Search** icon in the left navigation bar.
1. Click **Analytics** under **OBSERVE**.

On the page displayed, you can see an overview of the search data as well as the metrics below:

- Total Users
- Total Searches
- No Results Rate
- Click-through Rate
- Conversion Rate
- No Click Rate
- Top Searches
- Top Results
- Searches Without Results

## References

- [Run Your Own](https://docsearch.algolia.com/docs/legacy/run-your-own/)