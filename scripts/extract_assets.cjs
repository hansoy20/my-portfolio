const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const htmlPath = 'public/home.html';
const assetsDir = 'public/assets';

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

let html = fs.readFileSync(htmlPath, 'utf8');

const regex = /data:([a-zA-Z0-9/+-]+);base64,([a-zA-Z0-9+/=]+)/g;

let match;
let count = 0;
const replaced = new Map();

html = html.replace(regex, (fullMatch, mimeType, base64Data) => {
  if (replaced.has(fullMatch)) {
    return replaced.get(fullMatch);
  }

  count++;
  
  // Determine extension
  let ext = 'bin';
  if (mimeType.includes('image/webp')) ext = 'webp';
  else if (mimeType.includes('image/png')) ext = 'png';
  else if (mimeType.includes('image/jpeg')) ext = 'jpg';
  else if (mimeType.includes('image/svg+xml')) ext = 'svg';
  else if (mimeType.includes('font/woff2')) ext = 'woff2';
  else if (mimeType.includes('font/woff')) ext = 'woff';
  else if (mimeType.includes('font/ttf')) ext = 'ttf';
  else if (mimeType.includes('font/otf')) ext = 'otf';
  
  // Generate unique filename based on hash
  const hash = crypto.createHash('md5').update(base64Data).digest('hex').substring(0, 8);
  const filename = `asset_${hash}.${ext}`;
  const filepath = path.join(assetsDir, filename);
  
  // Write file
  if (!fs.existsSync(filepath)) {
    const buffer = Buffer.from(base64Data, 'base64');
    fs.writeFileSync(filepath, buffer);
  }
  
  const newUrl = `/assets/${filename}`;
  replaced.set(fullMatch, newUrl);
  return newUrl;
});

fs.writeFileSync(htmlPath, html);
console.log(`Extracted ${count} unique base64 assets.`);
console.log(`New HTML file size: ${html.length} bytes.`);
