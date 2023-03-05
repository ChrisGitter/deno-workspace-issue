import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const content = fs.readdirSync(dirname);

console.log("The following files were built:");
console.log(content.map((item) => ` - ${item}`).join("\n"));
