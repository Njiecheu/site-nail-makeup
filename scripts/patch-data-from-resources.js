import fs from 'fs/promises';

const resourcesPath = 'scripts/cloudinary-resources.json';
const dataPath = 'src/assets/data.js';

function tryBase64Decode(s) {
  try {
    // ensure padding
    let str = s.replace(/\s+/g, '');
    const pad = str.length % 4;
    if (pad === 2) str += '==';
    else if (pad === 3) str += '=';
    else if (pad === 1) return null;
    const buf = Buffer.from(str, 'base64');
    return buf.toString('utf-8');
  } catch (e) {
    return null;
  }
}

(async () => {
  const resourcesRaw = await fs.readFile(resourcesPath, 'utf-8');
  const resources = JSON.parse(resourcesRaw);
  const map = new Map(resources.map(r => [r.public_id, r.secure_url]));

  let content = await fs.readFile(dataPath, 'utf-8');

  const regex = /https:\/\/res\.cloudinary\.com\/[^"']+\/(v\d+\/([A-Za-z0-9_+=-]+))(?:\.jpg)?/g;
  let match;
  let replaced = 0;
  while ((match = regex.exec(content)) !== null) {
    const fullSegment = match[1]; // e.g., v12345/ENCODED
    const encoded = match[2];
    const decoded = tryBase64Decode(encoded);
    if (!decoded) continue;
    // Some decoded strings may contain 'App_' vs '_App' variations; try direct match and a few normals
    const candidates = [decoded, decoded.replace(/App_App/g, 'App_'), decoded.replace(/App_/g, 'WhatsApp_'), decoded.replace(/\s+/g, '_')];
    let found = null;
    for (const c of candidates) {
      if (map.has(c)) { found = map.get(c); break; }
    }
    if (found) {
      const oldUrl = match[0].replace(/\"|\'/g, '');
      content = content.replace(oldUrl, found);
      replaced++;
    }
  }

  await fs.writeFile(dataPath, content, 'utf-8');
  console.log(`Replaced ${replaced} URLs in ${dataPath}`);
})();
