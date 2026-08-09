<div align="center">
  <img src="docs/assets/logo.svg" alt="is-runtime — Detect the current JavaScript runtime environment" width="720">
</div>

<p align="center"><strong>Detect the current JavaScript runtime environment</strong></p>

<p align="center">
  <a href="https://github.com/mstuart/is-runtime/actions/workflows/main.yml"><img src="https://github.com/mstuart/is-runtime/actions/workflows/main.yml/badge.svg" alt="CI"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License: MIT"></a>
  <a href="https://www.npmjs.com/package/is-runtime"><img src="https://img.shields.io/npm/v/is-runtime?label=npm" alt="npm"></a>
  <a href="https://deepwiki.com/mstuart/is-runtime"><img src="https://deepwiki.com/badge.svg" alt="Ask DeepWiki"></a>
  <a href="https://socket.dev/npm/package/is-runtime"><img src="https://socket.dev/api/badge/npm/package/is-runtime" alt="Socket"></a>
  <img src="https://img.shields.io/badge/node-%E2%89%A520-339933.svg" alt="Node 20+">
</p>

---
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
