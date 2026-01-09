# Sourcegraph Search Examples

[View on GitHub Pages](https://sourcegraph.github.io/sourcegraph-search-examples)

This repository contains a single-page app that showcases a variety of search examples that anyone can see on [sourcegraph.com](https://sourcegraph.com/search). The examples can be filtered by relevant tags such as language, framework, pattern type, use case, etc. 

There is no external data store - new examples are added by contributing to the YAML data source file.

## Adding Examples

Add your example to `searchExamples.yaml` in the root folder. You *must* add valid YAML and the example *must* adhere to the schema (copy from the existing examples). 

After adding your example to the YAML document, run `npm run build-examples`. This will validate your updates against the schema file (searchExamplesSchema.json). Assuming your updates are valid, the build-examples script writes a new app data file (static/examples.json) which will be used to populate the app.

### Tests

We have automated tests to ensure that all examples adhere to the schema and follow our guidelines. The tests verify:

- All examples conform to the JSON schema defined in `searchExamplesSchema.json`
- All example links are valid Sourcegraph URLs
- Each example has at least one pattern type tag
- Each example has at least one use case tag

Run the tests locally with:

```shell
npm test
```

These tests also run automatically on GitHub Actions for all pull requests to ensure quality.

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

Deployments are automated via GitHub Actions. When changes are pushed to the `main` branch, the workflow in `.github/workflows/deploy.yml` builds the site and deploys it to GitHub Pages.

The `docs/` folder is no longer tracked in version control—it's generated during CI and deployed automatically.

> **Note:** The repository must have Settings → Pages → Source set to "GitHub Actions" for auto-deploy to work.