// One Line of Earned Pride — entry program.
//
// Writes a single line of quiet, earned pride to /output/entry.txt.
// The line is a concrete scene: an apprentice baker, three ruined
// batches behind him, and the old baker's nod putting the loaf in
// the window. The pride is earned inside the line, never asserted.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Three ruined batches behind him, the apprentice pulled his loaf from the oven — and the old baker tasted it, nodded, and set it in the window.";

// The gate allows 1 to 240 characters; refuse to write anything else.
if (LINE.length < 1 || LINE.length > 240 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters, outside the 1-240 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
