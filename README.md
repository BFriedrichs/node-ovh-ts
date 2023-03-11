# TypeScript wrapper for the OVH API
**A wrapper class for the OVH API which wraps every route into a strongly typed signature.**

All handlers and models are generated directly from the API specification received from OVH themselves.

*This is an unofficial project and not affiliated with OVH!*

## Installation
### npm
```
npm install node-ovh-ts
```

### yarn
```
yarn add node-ovh-ts
```

### pnpm
```
pnpm add node-ovh-ts
```

## Usage
A full list of API routes is available at the [OVH API Console](https://api.ovh.com/console/). View this projects [API documentation](./DOCS.md) to see how it maps the route calls.

```ts
class OVH {
  constructor(
    appKey: string,
    appSecret: string,
    consumerKey: string,
    options?: {
      endpoint: 'ovh-eu'
    }
  )
)
```

### Example
```ts
import OVH from 'node-ovh-ts';

const ovhClient = new OVH(
  '<appKey>',
  '<appSecret>',
  '<consumerKey>',
)

// GET /me
const me = ovhClient.me.get()
```

## Known issues

* `/auth` for consumer key refetching is currently not implemented
* The API has some generics in it's type definition, these are currently typed as `any`