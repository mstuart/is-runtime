import process from 'node:process';

export const isBun = globalThis.Bun !== undefined;

export const isDeno = globalThis.Deno !== undefined;

export const isNode = process.versions?.node !== undefined && !isBun && !isDeno;

export const isEdgeLight = globalThis.EdgeRuntime === undefined ? false : typeof globalThis.EdgeRuntime === 'string';

export const isCloudflareWorkers = globalThis.caches !== undefined && globalThis.HTMLRewriter !== undefined;

export const isServiceWorker = globalThis.ServiceWorkerGlobalScope !== undefined;

export const isBrowser = globalThis.window !== undefined && globalThis.document !== undefined && !isNode;

export default function detectRuntime() {
	if (isBun) {
		return 'bun';
	}

	if (isDeno) {
		return 'deno';
	}

	if (isEdgeLight) {
		return 'edge-light';
	}

	if (isCloudflareWorkers) {
		return 'cloudflare-workers';
	}

	if (isServiceWorker) {
		return 'service-worker';
	}

	if (isNode) {
		return 'node';
	}

	if (isBrowser) {
		return 'browser';
	}

	return 'unknown';
}
