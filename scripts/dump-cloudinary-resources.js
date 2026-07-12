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

async function fetchResources(next_cursor) {
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/upload?max_results=500${next_cursor?`&next_cursor=${next_cursor}`:''}`;
  const res = await fetch(url, { headers: { Authorization: `Basic ${auth}` } });
  if (!res.ok) throw new Error(`Cloudinary API error ${res.status}`);
  return res.json();
}

(async () => {
  try {
    console.log('Fetching Cloudinary resources...');
    let all = [];
    let next;
    do {
      const data = await fetchResources(next);
      all = all.concat(data.resources || []);
      next = data.next_cursor;
    } while (next && all.length < 2000);

    const outPath = 'scripts/cloudinary-resources.json';
    await fs.writeFile(outPath, JSON.stringify(all, null, 2), 'utf-8');
    console.log(`Wrote ${all.length} resources to ${outPath}`);
    console.log('Sample public_ids:');
    all.slice(0,20).forEach(r => console.log(r.public_id));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
