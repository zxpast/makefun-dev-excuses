import { mkdirSync, writeFileSync } from "node:fs";

// One funny single-line excuse a developer gives when code breaks in
// production. Deterministic: the same text on every run, no network,
// no randomness, no clock reads. stdlib only.
const ENTRY =
  "The outage wasn't my fault — my agent wrote the postmortem before I woke up: 'He pushed at 2 a.m. I just watched.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to /output/entry.txt`);
