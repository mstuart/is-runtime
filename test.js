import test from 'ava';
import detectRuntime, {
	isBun,
	isDeno,
	isNode,
	isEdgeLight,
	isCloudflareWorkers,
	isServiceWorker,
	isBrowser,
} from './index.js';

test('detectRuntime() returns a string', t => {
	const result = detectRuntime();
	t.is(typeof result, 'string');
});

test('detectRuntime() returns "node" in Node.js environment', t => {
	t.is(detectRuntime(), 'node');
});

test('isNode is true in Node.js environment', t => {
	t.true(isNode);
});

test('isBun is false in Node.js environment', t => {
	t.false(isBun);
});

test('isDeno is false in Node.js environment', t => {
	t.false(isDeno);
});

test('isBrowser is false in Node.js environment', t => {
	t.false(isBrowser);
});

test('isEdgeLight is false in Node.js environment', t => {
	t.false(isEdgeLight);
});

test('isCloudflareWorkers is false in Node.js environment', t => {
	t.false(isCloudflareWorkers);
});

test('isServiceWorker is false in Node.js environment', t => {
	t.false(isServiceWorker);
});

test('detectRuntime is a function', t => {
	t.is(typeof detectRuntime, 'function');
});

test('detectRuntime returns one of the known runtime strings', t => {
	const validRuntimes = new Set([
		'node',
		'bun',
		'deno',
		'browser',
		'cloudflare-workers',
		'service-worker',
		'edge-light',
		'unknown',
	]);
	t.true(validRuntimes.has(detectRuntime()));
});

test('boolean flags are all booleans', t => {
	t.is(typeof isNode, 'boolean');
	t.is(typeof isBun, 'boolean');
	t.is(typeof isDeno, 'boolean');
	t.is(typeof isBrowser, 'boolean');
	t.is(typeof isEdgeLight, 'boolean');
	t.is(typeof isCloudflareWorkers, 'boolean');
	t.is(typeof isServiceWorker, 'boolean');
});

test('exactly one primary runtime flag is true', t => {
	const trueFlags = [isNode, isBun, isDeno].filter(Boolean);
	t.is(trueFlags.length, 1);
});

test('detectRuntime() is the default export', t => {
	t.is(typeof detectRuntime, 'function');
	t.is(detectRuntime.length, 0);
});
