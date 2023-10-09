---
title: Updating API Docs
---

Currently, two Harvester versions, v1.1 and v1.2, have API docs. They are already well-configured. However, if you need to add API docs for another version, such as v1.3, follow the instructions below.

1. Click [this link](https://github.com/harvester/harvester/tree/master/api/openapi-spec), select the desired branch (e.g., v1.3), and download the `swagger.json` file that is needed. You can also confirm with a backend engineer to make sure you are using the right `swagger.json` file.

1. Copy the paste the file downloaded above to the `api` folder of the Harvester documentation repo, and rename it `v1.3-swagger.json`.

1. Open the `docusaurus.config.js` file and modify the OpenAPI configurations as follows:

  ```js
      [
      "docusaurus-plugin-openapi-docs",
      {
        id: "api",
        docsPluginId: "classic",
        config: {
          api: {
            specPath: "api/v1.3-swagger.json", // path of the v1.3-swagger.json
            outputDir: "docs/api",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            version: "v1.3", // Set v1.3 as the current version
            label: "v1.3", // Current version label
            baseUrl: "/v1.3/api", // Leading slash is important
            versions: {
              "v1.2": { // add v1.2 to the versions part
                specPath: "api/v1.2-swagger.json",
                outputDir: "versioned_docs/version-v1.2/api",
                label: "v1.2",
                baseUrl: "/v1.2/api",
              },
              "v1.1": {
                specPath: "api/v1.1-swagger.json",
                outputDir: "versioned_docs/version-v1.1/api",
                label: "v1.1",
                baseUrl: "/v1.1/api",
              },
            },
          },
        },
      },
    ],
  ```

1. After updating `docusaurus.config.js`, run the command below:

  ```bash
  yarn clean-api-docs && yarn gen-api-docs
  ```

  This command clears all API mdx files and regenerates them according to the configurations made in step 3.
  
1. After running the command, you might see the `harvester-apis.info.mdx` file of each version is changed because one sentence is deleted after the command is run. This is because this line was manually added in the first place and thus is removed every time this command is run.
Therefore, you need to add this sentence back to the files for each version after you run the command.

  ```
  This section introduces the APIs of the Harvester server. You can find out more about Harvester's API definitions [here](https://github.com/harvester/harvester/tree/master/pkg/apis/harvesterhci.io).
  ```

  This sentence is the content of the `API - Introduction` page. If you miss this step, this page will be empty and have no content at all.

1. Verify it in a local environment to see if your configurations are looking good in production:

    ```bash
    yarn start
    ```

    An even better way to verify it is to build it locally. `yarn build` can report errors for both the `zh` and `en` locales.

    ```bash
    yarn build
    yarn serve
    ```

1. After everything is done, commit your changes and submit a PR. If no error is reported in the CI, reviewers can safely merge your PRs after their review.

  :::info

  If the CI reports an error similar to `JavaScript heap out of memory` after you add the v1.3 API docs, but `yarn build` was successful on your local machine, that is because the machine our CI is using doesn't have enough memory.

  In this case, you might need to reach out to an engineer for help with the machine or CI configurations.

  :::