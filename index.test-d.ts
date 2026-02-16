import {expectType, expectError} from 'tsd';
import detectRuntime, {
	type Runtime,
	isBun,
	isDeno,
	isNode,
	isEdgeLight,
	isCloudflareWorkers,
	isServiceWorker,
	isBrowser,
} from './index.js';

expectType<Runtime>(detectRuntime());
expectType<boolean>(isBun);
expectType<boolean>(isDeno);
expectType<boolean>(isNode);
expectType<boolean>(isEdgeLight);
expectType<boolean>(isCloudflareWorkers);
expectType<boolean>(isServiceWorker);
expectType<boolean>(isBrowser);

expectError(detectRuntime('arg'));
