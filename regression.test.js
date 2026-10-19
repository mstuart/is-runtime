import { execFile } from "node:child_process";
import process from "node:process";
import { promisify } from "node:util";
import test from "ava";

const execute = promisify(execFile);

test("loads the unmodified module in runtimes without Node built-ins", async (t) => {
  const script = `
    import {readFile} from 'node:fs/promises';
    import {createContext, SourceTextModule} from 'node:vm';
    const source = await readFile(new URL(${JSON.stringify(new URL("./index.js", import.meta.url).href)}), 'utf8');
    const environments = [
      {window: {}, document: {}},
      {EdgeRuntime: 'edge-runtime'},
      {caches: {}, HTMLRewriter: class {}},
      {Bun: {}},
      {Deno: {}},
      {},
      {process: {versions: {node: '22.0.0'}}},
    ];
    const results = [];
    for (const globals of environments) {
      const module = new SourceTextModule(source, {context: createContext(globals)});
      await module.link((specifier) => {throw new Error('Unavailable built-in: ' + specifier);});
      await module.evaluate();
      results.push(module.namespace.default());
    }
    console.log(JSON.stringify(results));
  `;
  const { stdout } = await execute(process.execPath, [
    "--experimental-vm-modules",
    "--input-type=module",
    "--eval",
    script,
  ]);
  t.deepEqual(JSON.parse(stdout), [
    "browser",
    "edge-light",
    "cloudflare-workers",
    "bun",
    "deno",
    "unknown",
    "node",
  ]);
});
