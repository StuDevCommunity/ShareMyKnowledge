#!/usr/bin/env node

/**
 * check-render.mjs
 *
 * Validates that every Markdown file in the data/ folder is:
 *   1. Encoded in UTF-8 (flags non-UTF-8 files)
 *   2. Free of a leading BOM (warns if present, since renderMarkdown strips it)
 *   3. Parseable by the same fenced-code-block regex used in index.html
 *   4. Free of unbalanced code fences that would break rendering
 *   5. Free of risky single-$ math blocks that marked + KaTeX may misparse
 *
 * Usage:
 *   node scripts/check-render.mjs            # scan data/
 *   node scripts/check-render.mjs path/to    # scan a specific directory
 *   node scripts/check-render.mjs --fix      # auto-fix encoding issues
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const shouldFix = args.includes("--fix");
const scanTarget = args.find((a) => !a.startsWith("--")) || "data";
const scanDir = path.resolve(rootDir, scanTarget);

const SEVERITY = { ERROR: "ERROR", WARN: "WARN", INFO: "INFO" };

const findings = [];

function report(severity, filePath, message, line = null) {
  const rel = path.relative(rootDir, filePath) || filePath;
  findings.push({ severity, file: rel, message, line });
}

// ── Encoding check ──────────────────────────────────────────────────────────

function detectEncoding(filePath) {
  try {
    const result = execSync(`file --brief --mime-encoding "${filePath}"`, {
      encoding: "utf8",
    }).trim();
    return result;
  } catch {
    return "unknown";
  }
}

async function fixEncoding(filePath, detectedEncoding) {
  if (!shouldFix) return false;

  const iconvFrom = detectedEncoding.includes("utf-16le")
    ? "UTF-16LE"
    : detectedEncoding.includes("utf-16be")
      ? "UTF-16BE"
      : null;

  if (!iconvFrom) return false;

  try {
    const result = execSync(
      `iconv -f ${iconvFrom} -t UTF-8 "${filePath}"`,
    );
    await writeFile(filePath, result);
    report(SEVERITY.INFO, filePath, `Auto-fixed encoding from ${iconvFrom} to UTF-8.`);
    return true;
  } catch (error) {
    report(SEVERITY.ERROR, filePath, `Failed to fix encoding: ${error.message}`);
    return false;
  }
}

// ── Markdown structural checks ──────────────────────────────────────────────

function checkBom(text, filePath) {
  if (text.charCodeAt(0) === 0xfeff) {
    report(SEVERITY.WARN, filePath, "File starts with a UTF-8 BOM (U+FEFF). The reader strips it at runtime, but the source should be clean.");
  }
}

function checkUnbalancedFences(text, filePath) {
  const lines = text.split("\n");
  const fenceStack = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const fenceMatch = line.match(/^(`{3,}|~{3,})/);
    if (!fenceMatch) continue;

    const marker = fenceMatch[1];
    const char = marker[0];
    const len = marker.length;

    if (fenceStack.length > 0 && fenceStack[fenceStack.length - 1].char === char && fenceStack[fenceStack.length - 1].len <= len) {
      // closing fence
      fenceStack.pop();
    } else if (line.trim() === marker || /^(`{3,}|~{3,})\s*\w/.test(line)) {
      // opening fence (plain or with language tag)
      fenceStack.push({ char, len, line: i + 1 });
    }
  }

  for (const unclosed of fenceStack) {
    report(SEVERITY.ERROR, filePath, `Unclosed code fence (${unclosed.char.repeat(unclosed.len)}) opened here.`, unclosed.line);
  }
}

function checkRiskySingleDollarBlocks(text, filePath) {
  const fencePattern = /(^|\n)(`{3,}|~{3,})[^\n]*\n[\s\S]*?\n\2[ \t]*(?=\n|$)/g;
  let lastIndex = 0;
  let match;
  const markdownSegments = [];

  while ((match = fencePattern.exec(text)) !== null) {
    const fenceStart = match.index + match[1].length;
    if (lastIndex < fenceStart) {
      markdownSegments.push({ content: text.slice(lastIndex, fenceStart), offset: lastIndex });
    }
    lastIndex = fencePattern.lastIndex;
  }
  if (lastIndex < text.length) {
    markdownSegments.push({ content: text.slice(lastIndex), offset: lastIndex });
  }

  const riskyPattern = /(^|\n)([ \t]*(?:[*+-]|\d+\.)[ \t]+)\$[ \t]*\n([\s\S]+?)\n[ \t]*\$[ \t]*(?=\n|$)/g;

  for (const seg of markdownSegments) {
    let m;
    while ((m = riskyPattern.exec(seg.content)) !== null) {
      const absIndex = seg.offset + m.index + (m[1] === "\n" ? 1 : 0);
      const line = text.slice(0, absIndex).split("\n").length;
      report(SEVERITY.WARN, filePath, "Multi-line single-$ math block inside a list item. May misrender — use $$ on one line instead.", line);
    }
  }
}

function checkLargeFile(text, filePath) {
  const lines = text.split("\n").length;
  if (lines > 2000) {
    report(SEVERITY.WARN, filePath, `File is very large (${lines} lines). May cause slow rendering in the browser.`);
  }
}

// ── File collection ─────────────────────────────────────────────────────────

async function collectMarkdownFiles(dirPath) {
  const entries = await readdir(dirPath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectMarkdownFiles(fullPath)));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
      files.push(fullPath);
    }
  }

  return files.sort((a, b) => a.localeCompare(b, "vi"));
}

// ── Main ────────────────────────────────────────────────────────────────────

async function main() {
  const files = await collectMarkdownFiles(scanDir);

  if (files.length === 0) {
    console.log(`No markdown files found in ${path.relative(rootDir, scanDir) || scanDir}.`);
    return;
  }

  console.log(`Scanning ${files.length} markdown file(s) in ${path.relative(rootDir, scanDir) || scanDir}/...\n`);

  for (const filePath of files) {
    const encoding = detectEncoding(filePath);

    if (!encoding.startsWith("utf-8") && encoding !== "us-ascii") {
      report(SEVERITY.ERROR, filePath, `Non-UTF-8 encoding detected: ${encoding}. The browser will show garbled text.`);
      const fixed = await fixEncoding(filePath, encoding);
      if (!fixed && !shouldFix) {
        report(SEVERITY.INFO, filePath, "Run with --fix to auto-convert to UTF-8.");
      }
      if (!fixed) continue;
    }

    let text;
    try {
      text = await readFile(filePath, "utf8");
    } catch (error) {
      report(SEVERITY.ERROR, filePath, `Cannot read file: ${error.message}`);
      continue;
    }

    checkBom(text, filePath);
    checkUnbalancedFences(text, filePath);
    checkRiskySingleDollarBlocks(text, filePath);
    checkLargeFile(text, filePath);
  }

  // Print results
  if (findings.length === 0) {
    console.log("✅ All files passed rendering checks.\n");
    return;
  }

  const grouped = {};
  for (const f of findings) {
    (grouped[f.file] ||= []).push(f);
  }

  for (const [file, items] of Object.entries(grouped)) {
    console.log(`\n📄 ${file}`);
    for (const item of items) {
      const lineInfo = item.line ? `:${item.line}` : "";
      const icon = item.severity === SEVERITY.ERROR ? "❌" : item.severity === SEVERITY.WARN ? "⚠️" : "ℹ️";
      console.log(`  ${icon} ${item.severity}${lineInfo}: ${item.message}`);
    }
  }

  const errors = findings.filter((f) => f.severity === SEVERITY.ERROR).length;
  const warnings = findings.filter((f) => f.severity === SEVERITY.WARN).length;
  const infos = findings.filter((f) => f.severity === SEVERITY.INFO).length;

  console.log(`\n${"─".repeat(50)}`);
  console.log(`Summary: ${errors} error(s), ${warnings} warning(s), ${infos} info(s).`);

  if (errors > 0) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
