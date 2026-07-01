const fs = require('fs');
let html = fs.readFileSync('src/app/content.ts', 'utf8');

// Replace the specific URLs for the Kabooom project
html = html.replace(/https:\\\/\\\/hansvz\.com\\\/projects\\\/mustache-ds\\\//g, 'https:\\/\\/kaboooom.vercel.app\\/');

fs.writeFileSync('src/app/content.ts', html);
console.log('Project link updated!');
