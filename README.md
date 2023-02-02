# Raven API

<img src="https://user-images.githubusercontent.com/83524670/216442523-85bf9c86-a037-4cea-908b-0482be0acb7d.png" width="600">


Tagging a release on this repository will update the:

- [TypeScript SDK repo](https://github.com/ravenappdev/raven-node)
- [Java SDK repo](https://github.com/ravenappdev/raven-java)
- [Postman collection repo](https://github.com/ravenappdev/raven-postman)
- [OpenAPI spec repo](https://github.com/ravenappdev/raven-openapi)
- _More SDKs to come..._

## What is in this repository?

This repository contains

- Raven's Fern API Definition which lives in the [definition](./fern/api/definition/) folder
- Generators (see [generators.yml](./fern/api/generators.yml))

## What is in the API Definition?

The API Definition contains information about what endpoints, types, and errors are used in the API. The definition is broken into smaller files such as [device.yml](fern/api/definition/device.yml).

In order to make sure that the definition is valid, you can use the Fern CLI.

```bash
npm install -g fern-api # Installs CLI
fern check # Checks if the definition is valid
```

## What are Generators?

Generators read in your API Definition and output files or code (i.e. the TypeScript SDK Generator) and are tracked in [generators.yml](./fern/api/generators.yml).

To trigger the generators run:

```bash
# output generated files locally
fern generate

# publish generated files
fern generate --group publish --version <0.0.x>
```

This command currently runs in a GitHub workflow (see [ci.yml](.github/workflows/ci.yml#L32))
