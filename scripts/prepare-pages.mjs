import { copyFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const outDir = "docs";

await copyFile(join(outDir, "index.html"), join(outDir, "404.html"));
await writeFile(join(outDir, ".nojekyll"), "");
