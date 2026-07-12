import fs from 'fs/promises';

const CLOUDINARY_URL = process.env.CLOUDINARY_URL;
if (!CLOUDINARY_URL) {
  console.error('Set CLOUDINARY_URL environment variable (cloudinary://API_KEY:API_SECRET@CLOUD_NAME)');
  process.exit(1);
}

const m = CLOUDINARY_URL.match(/^cloudinary:\/\/([^:]+):([^@]+)@(.+)$/);
if (!m) {
  console.error('CLOUDINARY_URL malformed');
  process.exit(1);
}
const [, apiKey, apiSecret, cloudName] = m;
const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');

async function fetchResources() {
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/upload?max_results=500`;
  const res = await fetch(url, { headers: { Authorization: `Basic ${auth}` } });
  if (!res.ok) throw new Error(`Cloudinary API error ${res.status}`);
  return res.json();
}

function extractPublicIdFromUrl(url) {
  // match last /v<digits>/<public_id>(.jpg)? optionally with = padding
  const m = url.match(/\/v\d+\/(.+?)(?:\.jpg)?$/);
  return m ? decodeURIComponent(m[1]) : null;
}

(async () => {
  try {
    console.log('Fetching Cloudinary resources...');
    const data = await fetchResources();
    const resources = data.resources || [];
    const map = new Map(resources.map(r => [r.public_id, r.secure_url]));

    const filePath = 'src/assets/data.js';
    let content = await fs.readFile(filePath, 'utf-8');

    // Find all res.cloudinary.com URLs in file
    const urlRegex = /https:\/\/res\.cloudinary\.com\/[^"']+\/(v\d+\/.+?)(?:'|")/g;
    let match;
    const replaced = new Set();
    while ((match = urlRegex.exec(content)) !== null) {
      const fullSegment = match[1]; // v12345/<public_id>(.jpg)?
      const publicId = extractPublicIdFromUrl('/' + fullSegment);
      if (!publicId) continue;
      const secure = map.get(publicId);
      if (secure) {
        // replace the whole URL in content (match[0] contains up to the quote)
        const oldUrl = match[0].slice(0, -1); // remove trailing quote char included
        content = content.replace(oldUrl, secure);
        replaced.add(publicId);
      }
    }

    await fs.writeFile(filePath, content, 'utf-8');
    console.log(`Updated ${filePath}. Replaced ${replaced.size} images.`);
    if (replaced.size === 0) console.warn('No matching public_id found in Cloudinary resources.');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
