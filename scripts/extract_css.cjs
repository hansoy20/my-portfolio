const fs = require('fs');
const htmlPath = 'public/home.html';
const cssPath = 'src/app/globals.css';

let html = fs.readFileSync(htmlPath, 'utf8');

const styleRegex = /<style[^>]*>(.*?)<\/style>/gis;
let cssContent = '';

html = html.replace(styleRegex, (match, css) => {
  cssContent += css + '\n';
  return ''; // Remove the style tag from HTML
});

// Append to existing globals.css or replace
let existingCss = '';
if (fs.existsSync(cssPath)) {
  existingCss = fs.readFileSync(cssPath, 'utf8');
}

fs.writeFileSync(cssPath, existingCss + '\n/* Extracted from home.html */\n' + cssContent);
fs.writeFileSync(htmlPath, html);

console.log(`Extracted CSS to ${cssPath}.`);
console.log(`New HTML file size: ${html.length} bytes.`);
