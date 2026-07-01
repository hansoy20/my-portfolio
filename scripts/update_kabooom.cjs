const fs = require('fs');

let html = fs.readFileSync('src/app/content.ts', 'utf8');

// 1. Update title and description
html = html.replace(/>Mustache<\/h4>/g, '>Kabooom</h4>');
html = html.replace(/>Overall improvement of Rappi's Design System\.<\/h2>/g, '>Engineered a scalable real-time multiplayer word game with modern full-stack technologies.</h2>');

// 2. Update Image
const oldImgRegex = /<img[^>]*src="\/assets\/asset_90364f9b\.png"[^>]*>/;
const newImgTag = '<img loading="lazy" decoding="async" src="/assets/kabooom_logo.png" style="object-fit: contain; width: 100%; max-height: 400px; padding: 20px;" alt="Kabooom">';
html = html.replace(oldImgRegex, newImgTag);

// 3. Update the data-premium-element-link URL (so the hover effects still know it's a link if any)
html = html.replace(/https:\\\/\\\/hansvz\.com\\\/projects\\\/mustache-ds\\\//g, 'https:\\/\\/kaboooom.vercel.app\\/');

// 4. Inject the absolute positioned <a> tag
// Safely find the end of the div tag
const targetDivPrefix = `data-premium-element-link='{"type":"url","link":{"url":"https:\\/\\/kaboooom.vercel.app\\/","is_external":"","nofollow":"","custom_attributes":""},"href":"https:\\/\\/kaboooom.vercel.app\\/"}'`;

const index = html.indexOf(targetDivPrefix);
if (index !== -1) {
    const endOfDivTag = html.indexOf('>', index);
    const linkOverlay = `<a href="https://kaboooom.vercel.app/" target="_blank" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 10;"></a>`;
    html = html.substring(0, endOfDivTag + 1) + linkOverlay + html.substring(endOfDivTag + 1);
}

fs.writeFileSync('src/app/content.ts', html);
console.log('Kabooom project fully updated without breaking HTML!');
