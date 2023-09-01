---
title: Search Engine Optimization (SEO)
sidebar_position: 2
---

SEO refers to methods for ensuring that the correct documentation pages appear higher in the results from search engines such as Google. As of 2023, the two major search engines we need to tailor our SEO towards are Google and Bing, with Google taking a decisive lead. Other search engines, such as DuckDuckGo, don't generate as much traffic. 

Algolia is our internal site search engine and a special case.

## Algolia

[Algolia ](https://www.algolia.com/doc/guides/getting-started/how-algolia-works/)is the internal search engine we use on our docs sites. It works somewhat similarly to the third party engines, except we have much more control over how it behaves. In particular, we can tell it what to index on and what to ignore. 

What Algolia looks for when it indexes is content in between HTML tags. This means you can get extremely specific and have it index on unordered list items, captions, and table cells. You can configure it to look at the entire body text or content in between paragraph tags as well, but that can get extremely slow if you have a lot of written content.

For the most part, our docs sites are configured so that Algolia indexes on headings within pages: H1 on down.

To optimize search for Algolia, make sure that headings for pages contain pertinent keywords that a user is likely to search for. For example, instead of naming a heading about Istio installation "Install," be more specific and name it "Install Istio".

### Localization

We currently support docs written in American English and Simplified Chinese. Chinese presents special challenges for search. Algolia does support queries that combine Latin and Simplified Chinese characters. However, it doesn't support queries that contain pinyin (Chinese words written with Latin characters). These will return no results even if the corresponding Chinese characters are part of a heading. 

## Third party search

Both Google and Bing have guides for web developers and site maintainers:

- [Google starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Bing Webmaster guide](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a) (note: Bing offers a Webmaster program but we're not concerning ourselves with the specifics of how to use that program – we're interested in the details about how Bing indexes pages)

The biggest take-aways from these guides are the following:

1. Accurate sitemaps help search engine web crawlers find our pages
2. Canonical references in the header of the page are vital if you have multiple versions of the same content (for example, for localization, or for different software releases)
3. Metadata, such as keywords and site descriptions, help pages stand out and also aid in differentiating between multiple versions on the same docs site

Outside of this advice, it's important to know a little more about how search engines rank pages in results. In general, pages that have been around a while, which contain more keywords associated with a given search, and which have more links pointing toward them, all tend to rank more highly. Two of these three factors can create a strong bias in favor of pages for older releases.

## Sitemapping

WIP

## Canonical references

Canonical references indicate which version of a page is "canon" – in practical terms, which page should appear at the top of the search results. If you have versions of the page for older releases of a project, you want to mark the page for the latest release as canonical. You do this by adding a special link, which points to the canonical (latest) version of the page, from all of the older pages. The canonical page gets the same link, pointing to itself. If you don't do this, pages for older releases will tend to appear higher in search results, because they've been around for longer and have acquired more links pointing to them.

Canonical references are added to our docs' Markdown pages in HTML tags. The link is an URL to the published page on the live site: 

```html
<head> 
  <link rel="canonical" href="[https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha">
</head>
```

We usually place this near the top of the page, under the Markdown frontmatter.

## Keywords and descriptions

Docusaurus files have frontmatter, which is a special grouping of metadata at the top of the file. Almost all of our docs pages use this section of the file to indicate a title. The few exceptions are files intended for embedding in other pages, or for use as sample YAML configs. Frontmatter looks like this:

```js
---
title: RKE Cluster Configuration Reference
---
```

Although we mostly use the title field, we can add keyword or description fields as well. The content in the description field provides a blurb for the search engine to display as a page preview. This content is otherwise autogenerated by Docusaurus when the page is built. Keywords are terms that indicate the topic of a page and help with page rank, but are otherwise not displayed to the user. This field can be a good place to put information otherwise not mentioned in the body of the text, such as the release number.