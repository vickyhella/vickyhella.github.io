# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```bash
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

**Non-default locales:**

To preview a non-default locale (such as `zh`) in the browser:

1. Generate the locale files：

  ```bash
  yarn run write-translations -- --locale zh
  ```

1. Modify or translate the locale files accordingly.

1. Preview the changes in the browser:

  ```bash
  yarn run start -- --locale zh
  ```

  > If you use another locale, change `zh` to the actual locale as needed.
  > `yarn start` only previews the default locale, and `yarn run start -- --locale zh` only previews the specified locale. To preview all locales, run `yarn build`.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## About Algolia Search

The search index used in this documentation is generated by Algolia's [running our own crawler](https://docsearch.algolia.com/docs/legacy/run-your-own).

## Running the Crawler

To run the crawler, you'll need:
- A configuration file, which can be found [here](./config.json).
- An `.env` file, containing your credentials, which is as follows:

```
APPLICATION_ID=<app_id>
API_KEY=<key_with_write_permissions>
```

If you're running the crawler from the Docker image, run:

```
docker run -it --env-file=.env -e "CONFIG=$(cat ./config.json | jq -r tostring)" algolia/docsearch-scraper
```

Otherwise, follow [these instructions](https://docsearch.algolia.com/docs/legacy/run-your-own#running-the-crawler-from-the-code-base) if running the crawler using the code base.