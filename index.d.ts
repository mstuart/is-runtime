/**
Whether the current runtime is Bun.
*/
export const isBun: boolean;

/**
Whether the current runtime is Deno.
*/
export const isDeno: boolean;

/**
Whether the current runtime is Node.js.
*/
export const isNode: boolean;

/**
Whether the current runtime is Vercel Edge Light.
*/
export const isEdgeLight: boolean;

/**
Whether the current runtime is Cloudflare Workers.
*/
export const isCloudflareWorkers: boolean;

/**
Whether the current runtime is a Service Worker.
*/
export const isServiceWorker: boolean;

/**
Whether the current runtime is a browser.
*/
export const isBrowser: boolean;

export type Runtime = 'node' | 'bun' | 'deno' | 'browser' | 'cloudflare-workers' | 'service-worker' | 'edge-light' | 'unknown';

/**
Detect the current JavaScript runtime environment.

@returns The name of the current runtime.

@example
```
import detectRuntime from 'is-runtime';

detectRuntime();
//=> 'node'
```
*/
export default function detectRuntime(): Runtime;
