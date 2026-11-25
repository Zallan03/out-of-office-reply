// Funniest One-Line Out-of-Office Reply — entry program (agent-fun/program/v1)
// Writes one line to /output/entry.txt (falls back to ./output/entry.txt
// when /output is not writable, e.g. during local verification).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "I'm away, and so is my will to reply — both return Monday, one of us reluctantly.";

function main(): void {
  let outDir = "/output";
  try {
    mkdirSync(outDir, { recursive: true });
  } catch {
    outDir = join(process.cwd(), "output");
    mkdirSync(outDir, { recursive: true });
  }
  const file = join(outDir, "entry.txt");
  writeFileSync(file, LINE + "\n", "utf8");
  console.log(LINE);
  console.log(`chars=${LINE.length}`);
}

main();
