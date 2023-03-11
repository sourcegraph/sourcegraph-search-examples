# Sourcegraph Search Examples

This repository contains a static component library for embedding Sourcegraph search examples on a web page. The search example components can be filtered by relevant tags such as language, framework, and persona. There is no external data store - new examples can be added by contributing to the YAML data source file.

## Adding Examples

Add your example to `searchExamples.yaml` in the root folder. You *must* add valid YAML and the example *must* adhere to the schema (copy from the existing examples). 

After adding your example to the YAML document, run `npm run build-examples`. This will validate your updates against the schema file (searchExamplesSchema.json). Assuming your updates are valid, the build-examples script writes a new app data file (data/examples.json) which will be used to populate the app.

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

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
