import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";

const html = readFileSync(new URL("../404.html", import.meta.url), "utf8");
const script = html.match(/<script>([\s\S]*?)<\/script>/i)?.[1];
assert.ok(script, "redirect script exists");

function redirect(pathname, search = "", hash = "") {
  let destination = "";
  const location = {
    pathname,
    search,
    hash,
    replace(value) {
      destination = value;
    },
  };
  vm.runInNewContext(script, { location });
  return destination;
}

const cases = [
  [
    "keeps percent-encoded deep-link paths",
    "/aigovops-foundation/old%20report",
    "",
    "",
    "https://www.aigovops-foundation.com/old%20report",
  ],
  [
    "rejects encoded traversal",
    "/aigovops-foundation/%2e%2e/x",
    "",
    "",
    "https://www.aigovops-foundation.com/",
  ],
  [
    "rejects malformed percent escapes",
    "/aigovops-foundation/%E0%A4%A",
    "",
    "",
    "https://www.aigovops-foundation.com/",
  ],
  [
    "preserves query and hash",
    "/aigovops-foundation/report",
    "?topic=old",
    "#overview",
    "https://www.aigovops-foundation.com/report?topic=old#overview",
  ],
];

for (const [name, pathname, search, hash, expected] of cases) {
  assert.equal(redirect(pathname, search, hash), expected, name);
  console.log(`ok ${name}`);
}
