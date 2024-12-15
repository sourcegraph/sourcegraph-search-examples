# Sourcegraph Search Examples

[View on GitHub Pages](https://sourcegraph.github.io/sourcegraph-search-examples)

This repository contains a single-page app that showcases a variety of search examples that anyone can see on [sourcegraph.com](https://sourcegraph.com/search). The examples can be filtered by relevant tags such as language, framework, pattern type, use case, etc. 

There is no external data store - new examples are added by contributing to the YAML data source file.

## Adding Examples

Add your example to `searchExamples.yaml` in the root folder. You *must* add valid YAML and the example *must* adhere to the schema (copy from the existing examples). 

After adding your example to the YAML document, run `npm run build-examples`. This will validate your updates against the schema file (searchExamplesSchema.json). Assuming your updates are valid, the build-examples script writes a new app data file (static/examples.json) which will be used to populate the app.

## Developing

### Install Dependencies

```shell
npm install
```

### Start Dev Server

```bash
npm run dev
```

## Building

```bash
npm run build
```

Or, if you're running the dev server and adding/changing examples, rebuild just the `examples.json` file after changing `searchExamples.yaml`:

```bash
npm run build-examples
```

You can preview the production build with `npm run preview`.

## Deploying

As a GitHub pages site, the production deployment serves the assets in the `/docs/` folder of the `main` branch of this repo. The build is configured to rewrite the `/docs/` folder. If a new build is committed and merged to the `main` branch, but the github pages site is not updating, it is likely due to a caching issue with GitHub pages.