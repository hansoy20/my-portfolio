const fs = require('fs');
const path = require('path');

// 1. Copy the BCS logo
const brainDir = 'c:\\Users\\sagui\\.gemini\\antigravity\\brain\\db640eb9-521b-4140-a136-5e3bc496b7d6';
const sourceImagePath = path.join(brainDir, 'media__1782370931933.png');
const targetImagePath = 'public/assets/bcs_logo.png';
fs.copyFileSync(sourceImagePath, targetImagePath);
console.log('Copied BCS logo to assets.');

// 2. Read content.ts
let html = fs.readFileSync('src/app/content.ts', 'utf8');

// 3. Replace text
html = html.replace(/>Rappi Mix<\/h4>/g, '>Barangay Complaint System</h4>');
html = html.replace(/>Add products to your restaurant order\.<\/h2>/g, '>File and track complaints in your community.</h2>');

// 4. Replace Image
const oldImgRegex = /<img[^>]*src="\/assets\/asset_96c77f73\.webp"[^>]*>/;
const newImgTag = '<img loading="lazy" decoding="async" src="/assets/bcs_logo.png" style="object-fit: contain; width: 100%; max-height: 400px; padding: 20px;" alt="Barangay Complaint System">';
html = html.replace(oldImgRegex, newImgTag);

// 5. Inject the link overlay (with # as href for now since none was provided)
const targetDivPrefix = `data-premium-element-link='{"type":"url","link":{"url":"https:\\/\\/hansvz.com\\/projects\\/rappimix","is_external":"","nofollow":"","custom_attributes":""},"href":"https:\\/\\/hansvz.com\\/projects\\/rappimix"}'`;

const index = html.indexOf(targetDivPrefix);
if (index !== -1) {
    const endOfDivTag = html.indexOf('>', index);
    const linkOverlay = `<a href="#" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 10;"></a>`;
    html = html.substring(0, endOfDivTag + 1) + linkOverlay + html.substring(endOfDivTag + 1);
    console.log('Successfully injected overlay link for BCS card.');
} else {
    console.log('Could not find BCS card for link overlay injection.');
}

// Write back
fs.writeFileSync('src/app/content.ts', html);
console.log('Project 2 updated successfully!');
