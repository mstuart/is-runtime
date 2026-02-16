# is-runtime

> Detect the current JavaScript runtime environment

## Install

```sh
npm install is-runtime
```

## Usage

```js
import detectRuntime, {isNode, isBun, isDeno} from 'is-runtime';

detectRuntime();
//=> 'node'

isNode;
//=> true

isBun;
//=> false
```

## API

### detectRuntime()

Returns a `string` identifying the current runtime: `'node'` | `'bun'` | `'deno'` | `'browser'` | `'cloudflare-workers'` | `'service-worker'` | `'edge-light'` | `'unknown'`.

Detection order (first match wins): bun, deno, edge-light, cloudflare-workers, service-worker, node, browser, unknown.

### isBun

Type: `boolean`

Whether the current runtime is Bun.

### isDeno

Type: `boolean`

Whether the current runtime is Deno.

### isNode

Type: `boolean`

Whether the current runtime is Node.js.

### isEdgeLight

Type: `boolean`

Whether the current runtime is Vercel Edge Light.

### isCloudflareWorkers

Type: `boolean`

Whether the current runtime is Cloudflare Workers.

### isServiceWorker

Type: `boolean`

Whether the current runtime is a Service Worker.

### isBrowser

Type: `boolean`

Whether the current runtime is a browser.

## Related

- [abort-timer](https://github.com/mstuart/abort-timer) - Create an AbortSignal that aborts after a timeout

## License

MIT
