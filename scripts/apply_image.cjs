const fs = require('fs');

// 1. Copy image
const sourceImage = 'C:\\Users\\sagui\\.gemini\\antigravity\\brain\\db640eb9-521b-4140-a136-5e3bc496b7d6\\dramatic_portrait_1782359679186.png';
const targetImage = 'c:\\Users\\sagui\\Downloads\\portfolio\\portfolio\\public\\assets\\dramatic_portrait.png';
fs.copyFileSync(sourceImage, targetImage);

// 2. Update globals.css
let css = fs.readFileSync('c:\\Users\\sagui\\Downloads\\portfolio\\portfolio\\src\\app\\globals.css', 'utf8');

// Replace formal pic with dramatic_portrait
css = css.replace(/url\('\/assets\/formal%20pic\.jpeg'\)/g, "url('/assets/dramatic_portrait.png')");

// Remove camouflage CSS
const splitIndex = css.indexOf('/* Custom camouflage for the hero portrait */');
if (splitIndex !== -1) {
    css = css.substring(0, splitIndex);
}

fs.writeFileSync('c:\\Users\\sagui\\Downloads\\portfolio\\portfolio\\src\\app\\globals.css', css);
console.log('Image copied and CSS updated successfully');
