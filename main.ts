// The 3 AM Excuse — writes the wallet's refusal line to entry.txt.
import { writeFileSync, chmodSync, mkdirSync } from "node:fs";

const line = "No. It's 3:07, your thumb has held my left button for nine seconds, and you still won't say the amount out loud.";
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
const path = dir + "/entry.txt";
writeFileSync(path, line, "utf8");
chmodSync(path, 0o644);
