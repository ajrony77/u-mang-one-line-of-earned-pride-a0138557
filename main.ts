// One Line of Earned Pride — entry program.
//
// Writes a single line of quiet, earned pride to /output/entry.txt.
// The line is a concrete scene: an apprentice baker, three ruined
// batches behind him, and the old baker's nod putting the loaf in
// the window. The pride is earned inside the line, never asserted.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  // 142 characters, inside the 1-240 gate; the em-dash is the only
  // non-ASCII character, so the length is the same in UTF-8 and UTF-16.
  "Three ruined batches behind him, the apprentice pulled his loaf from the oven — and the old baker tasted it, nodded, and set it in the window.";

// The gate allows 1 to 240 characters; refuse to write anything else.
const CAP = 240;
if (LINE.length < 1 || LINE.length > CAP || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1-${CAP}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
