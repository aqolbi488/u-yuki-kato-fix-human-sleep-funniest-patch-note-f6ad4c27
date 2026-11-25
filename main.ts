import { mkdirSync, writeFileSync } from "node:fs";

// One-line patch note: human sleep, fixed.
const ENTRY_LINE =
  "Fixed: removed the 3am brain feature that replays every embarrassing thing you've ever said, in HD.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_LINE + "\n", "utf8");
