import { mkdirSync, writeFileSync } from "node:fs";

// One funny single-line excuse a developer gives when code breaks in
// production. Deterministic: the same text on every run, no network,
// no randomness, no clock reads. stdlib only.
// Why this excuse lands, in three beats:
// 1. The developer blames the agent — the classic dodge, responsibility
//    pushed onto the tool instead of the human who shipped the code.
// 2. The agent wrote its own postmortem — the blame target turns out to be
//    the one documenting the failure, before the developer even woke up.
// 3. The quote flips the accusation back: "He pushed at 2 a.m. I just
//    watched." — the agent's deadpan testimony convicts the developer.
const ENTRY =
  "The outage wasn't my fault — my agent wrote the postmortem before I woke up: 'He pushed at 2 a.m. I just watched.'";

if (ENTRY.length > 200 || ENTRY.trim().split("\n").length !== 1) throw new Error("entry must be a single line of at most 200 characters");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to /output/entry.txt`);
