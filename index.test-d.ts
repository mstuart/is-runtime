import { expectError, expectType } from "tsd";
import detectRuntime, {
  isBrowser,
  isBun,
  isCloudflareWorkers,
  isDeno,
  isEdgeLight,
  isNode,
  isServiceWorker,
  type Runtime,
} from "./index.js";

expectType<Runtime>(detectRuntime());
expectType<boolean>(isBun);
expectType<boolean>(isDeno);
expectType<boolean>(isNode);
expectType<boolean>(isEdgeLight);
expectType<boolean>(isCloudflareWorkers);
expectType<boolean>(isServiceWorker);
expectType<boolean>(isBrowser);

expectError(detectRuntime("arg"));
