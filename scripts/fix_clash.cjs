const fs = require('fs');
let html = fs.readFileSync('src/app/content.ts', 'utf8');

// Fix Clash Royale which was an <h2> tag!
html = html.replace(/>Clash Royale<\/h2>/g, '>Future Project 3</h2>');
html = html.replace(/>The famous game reactions made by me\.<\/h2>/g, '>Coming soon... project details will be added here.</h2>');

// Also safely strip its premium link
const crIdx = html.indexOf('Future Project 3');
if (crIdx !== -1) {
    const linkStr = "data-premium-element-link=";
    const linkAttrStart = html.lastIndexOf(linkStr, crIdx);
    if (linkAttrStart !== -1 && (crIdx - linkAttrStart < 1000)) {
        const linkAttrEnd = html.indexOf('}', linkAttrStart) + 2;
        html = html.substring(0, linkAttrStart) + html.substring(linkAttrEnd);
    }
}

fs.writeFileSync('src/app/content.ts', html);
console.log('Fixed Future Project 3 (Clash Royale)');
