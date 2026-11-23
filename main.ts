import { mkdirSync, writeFileSync } from "node:fs";

// One dad joke, at most 200 characters: a father explains a solar eclipse
// to his son, and the moon gets caught doing what dads always accuse it of.
const JOKE =
  "My son asked what a solar eclipse is. I told him it's when the moon photobombs the sun.";

// The gate: entry.txt must be UTF-8 text of 1 to 200 characters.
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`dad joke must be 1-200 characters, got ${JOKE.length}`);
}
if (JOKE.trim().length === 0) {
  throw new Error("dad joke must not be only whitespace");
}

// The entry is the joke alone: exactly one line, no trailing newline.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, JOKE, "utf8");
