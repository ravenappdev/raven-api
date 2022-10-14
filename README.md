# Raven API

Tagging a release on this repository will:

- Update the [TypeScript SDK Github Repo](https://github.com/fern-api/raven-node)
- _More SDKs to come..._

## What is in this repository?

This repository contains

- Raven's Fern API Definition which lives in the [definition](./fern/api/definition/) folder
- Generators (see [generators.yml](./fern/api/generators.yml))

## What is in the API Definition?

The API Definition contains information about what endpoints, types, and errors are used in the API. The definition is broken into smaller files such as [device.yml](fern/api/definition/device.yml) and [event.yml](fern/api/definition/event.yml).

In order to make sure that the definition is valid, you can use the Fern CLI.

```bash
npm install -g fern-api # Installs CLI
fern check # Checks if definitions is valid
```

## What are Generators?

Generators read in your API Definition and output files/code (i.e. the TypeScript SDK Generator). They are tracked in [generators.yml](./fern/api/generators.yml).

Running `fern release <version>` will run all of the generators. This command runs in a GitHub workflow (see [ci.yml](.github/workflows/ci.yml#L31))

