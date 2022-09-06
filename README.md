# Raven

This repository contains:

- [Fern API Definition](/fern/raven/definition/events.yml) of the Events API
- [Sample TypeScript app](./sample-ts-app/src/app.ts) consuming [generated TypeScript SDK](./sample-ts-app/package.json#L9)


## TypeScript Sample App

The core logic lives in [app.ts](./sample-ts-app/src/app.ts).

> Fern provides the user with an easy way to instantiate a client,

```typescript
const client = TODO;
```

> type safety when invoking different endpoints,

```typescript
const response = TODO;
```

> and auto-complete.

![Autocomplete of client](./TODO.png)

**Run the sample app:**

```bash
cd sample-ts-app
npm install
npm run dev
```

## Java Sample App

The core logic lives in [SampleApp.java](./sample-java-app/src/main/java/com/sample/app/SampleApp.java).

> Fern provides the user with an easy way to instantiate a client

```java
TODO client = TODO
  .getClient("TODO")
```

> and type safety when invoking different endpoints.

```java
TODO
```

**Run the sample app:**

- opening [./sample-java-app](./sample-java-app/) in Intellij
- hitting play on main
