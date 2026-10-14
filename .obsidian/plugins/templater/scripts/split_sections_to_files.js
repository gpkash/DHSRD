// .obsidian/plugins/templater/scripts/split_sections_to_files.js
// Usage from a template or command: <%* await tp.user.split_sections_to_files() %>
// Optional: <%* await tp.user.split_sections_to_files("MyOutputFolder") %>

module.exports = async (tp, outputFolderArg) => {
  const { app } = tp;
  const tfile = tp.file.find_tfile(tp.file.path(true));
  if (!tfile) {
    new Notice("Templater: Could not resolve current file.");
    return;
  }

  const sourcePath = tfile.path;
  const parentFolder = tp.file.folder(true);
  const outputFolder = outputFolderArg && outputFolderArg.trim()
    ? `${parentFolder}/${outputFolderArg.trim()}`
    : `${parentFolder}/Sections`;

  // Ensure output folder exists
  const exists = app.vault.getAbstractFileByPath(outputFolder);
  if (!exists) {
    try { await app.vault.createFolder(outputFolder); }
    catch (e) { /* folder might already exist from a race; ignore */ }
  }

  const content = await app.vault.read(tfile);

  // Find all level-2 headings "## ..." and their positions
  const headingRegex = /^##[^\S\r\n]*(.+?)\s*$/gm;
  const matches = [...content.matchAll(headingRegex)];
  if (matches.length === 0) {
    new Notice("No '##' sections found in this file.");
    return;
  }

  // Helpers
  const toCamelCase = (str) => {
    // Keep alphanumerics, treat others as separators
    const words = (str.match(/[A-Za-z0-9]+/g) || []).map(w => w.toLowerCase());
    if (words.length === 0) return "untitled";
    return words[0] + words.slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join("");
  };

  const sanitizeForPath = (name) => {
    // Obsidian disallowed: # ^ [ ] | and also strip slashes/colons
    return name.replace(/[\\/#%^*?[\]|<>:"']/g, "");
  };

  const uniquePath = async (baseFolder, baseName) => {
    let candidate = `${baseFolder}/${baseName}.md`;
    let i = 1;
    while (app.vault.getAbstractFileByPath(candidate)) {
      candidate = `${baseFolder}/${baseName}-${i}.md`;
      i++;
    }
    return candidate;
  };

  const created = [];

  for (let i = 0; i < matches.length; i++) {
    const m = matches[i];
    const next = matches[i + 1];
    const startIdx = m.index;
    const endIdx = next ? next.index : content.length;

    // Raw section text (trim trailing whitespace)
    const section = content.slice(startIdx, endIdx).trim();

    // Heading text
    let headingText = (m[1] || "").trim();
    // If heading had trailing hashes (rare) remove them
    headingText = headingText.replace(/\s*#+\s*$/, "").trim();

    // Compute filename
    const camel = toCamelCase(headingText);
    const safe = sanitizeForPath(camel) || "untitled";
    const filePath = await uniquePath(outputFolder, safe);

    // Optional: add a minimal frontmatter with original file path for traceability
    const header = `---\nsource: ${sourcePath}\nsection: "${headingText.replace(/"/g, '\\"')}"\n---\n\n`;

    await app.vault.create(filePath, header + section + "\n");
    created.push(filePath);
  }

  // Report
  if (created.length) {
    const list = created.map(p => `- ${p}`).join("\n");
    new Notice(`Created ${created.length} files in ${outputFolder}`);
    return `Created ${created.length} files:\n${list}`;
  } else {
    new Notice("No files created.");
    return "No files created.";
  }
};