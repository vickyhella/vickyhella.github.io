---
title: Algolia Search
sidebar_position: 3
---

## Uploading Search Records

This document describes how to generate and upload your search records to Algolia. You can follow the instructions here after updating the docs, or when you found that the search didn't return the results as needed.

### Prerequisites

You need to install:
- Docker
- [jq](https://github.com/stedolan/jq/wiki/Installation): a lightweight command-line JSON processer. To quickly install it on Mac, run the command below:
    ```
    brew install jq
    ```

### Preparing the Files Needed

You need to create a directory that contains the following two files:
- `.env`: Replace `YOUR_APP_ID` and `YOUR_API_KEY` with the actual ones:
    ```
    APPLICATION_ID=YOUR_APP_ID
    API_KEY=YOUR_API_KEY
    ```
- `config.json`: Replace `<index-name>` and `<example-url>` with the actual ones:
    ```
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

### Generating/Updating Records

Go to the directory that contains the `.env` and `config.json` files and run the command below:

```
docker run -it --env-file=.env -e "CONFIG=$(cat ./config.json | jq -r tostring)" algolia/docsearch-scraper
```

After the command is run successfully, it will output the number of records generated as follows:

```
> DocSearch: https://example-url-1/ 0 records)
> DocSearch: https://example-url-2/ 1 records)
> DocSearch: https://example-url-3/ 4 records)
> DocSearch: https://example-url-4/ 4 records)

Nb hits: 9
```

:::note
It might take several minutes for the records to be uploaded.
:::

You can now go back to the [Algolia console](https://www.algolia.com/) and see the updated records.

## References

- [Run Your Own](https://docsearch.algolia.com/docs/legacy/run-your-own/)