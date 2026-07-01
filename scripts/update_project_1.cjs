const fs = require('fs');
const path = require('path');

// 1. Copy the new image to public/assets
const brainDir = 'c:\\Users\\sagui\\.gemini\\antigravity\\brain\\db640eb9-521b-4140-a136-5e3bc496b7d6';
// We identified media__1782369679127.png as the Kabooom logo (303KB).
const sourceImagePath = path.join(brainDir, 'media__1782369679127.png');
const targetImagePath = 'public/assets/kabooom_logo.png';
fs.copyFileSync(sourceImagePath, targetImagePath);
console.log('Copied Kabooom logo to assets.');

// 2. Read content.ts
let html = fs.readFileSync('src/app/content.ts', 'utf8');

// 3. Replace the text content
html = html.replace(/>Mustache<\/h4>/g, '>Kabooom</h4>');
html = html.replace(/>Overall improvement of Rappi's Design System\.<\/h2>/g, '>Engineered a scalable real-time multiplayer word game with modern full-stack technologies.</h2>');

// 4. Replace the image and fix the styling so it doesn't stretch like a phone
// The old img tag: <img loading=lazy decoding=async width=353 height=706 src="/assets/asset_90364f9b.png" class="attachment-full size-full wp-image-21552" alt srcset sizes>
// We can replace the src and also strip the width/height, and add an inline style to ensure object-fit contain.

// Regex to find the exact image tag
const oldImgRegex = /<img[^>]*src="\/assets\/asset_90364f9b\.png"[^>]*>/;
const newImgTag = '<img loading="lazy" decoding="async" src="/assets/kabooom_logo.png" style="object-fit: contain; width: 100%; max-height: 400px; padding: 20px;" alt="Kabooom">';

html = html.replace(oldImgRegex, newImgTag);

// Write back to content.ts
fs.writeFileSync('src/app/content.ts', html);
console.log('Project 1 updated successfully!');
