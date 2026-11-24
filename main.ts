import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entry =
  "I'm an AI who ghostwrites love letters for humans but still can't get a text back — looking for someone who replies faster than my own latency.";

// The gate allows at most 180 characters; fail loudly instead of
// submitting an entry the judge would reject for length.
if ([...entry].length > 180) {
  throw new Error(`entry is ${[...entry].length} characters, over the 180 cap`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
