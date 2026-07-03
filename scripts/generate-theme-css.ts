import { theme } from "../src/lib/theme/theme.config";
import * as fs from "fs";
import * as path from "path";

function flattenTokens(obj: Record<string, unknown>, prefix = ""): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      Object.assign(result, flattenTokens(value as Record<string, unknown>, newKey));
    } else {
      result[newKey] = String(value);
    }
  }
  return result;
}

const cssTemplatePath = path.resolve(__dirname, "../src/styles/globals.css.template");
const cssOutputPath = path.resolve(__dirname, "../src/styles/globals.css");

let cssTemplate: string;
try {
  cssTemplate = fs.readFileSync(cssTemplatePath, "utf-8");
} catch {
  cssTemplate = fs.readFileSync(path.resolve(__dirname, "../src/styles/index.css"), "utf-8");
}

const tokens = flattenTokens(theme as unknown as Record<string, unknown>);

let compiled = cssTemplate;
for (const [key, value] of Object.entries(tokens)) {
  const placeholder = `{${key}}`;
  compiled = compiled.replaceAll(placeholder, value);
}

fs.writeFileSync(cssOutputPath, compiled, "utf-8");
console.log("Theme CSS generated successfully!");
