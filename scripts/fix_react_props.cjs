const fs = require('fs');
let html = fs.readFileSync('src/app/content.ts', 'utf8');

html = html.replace(/fetchpriority=/g, 'fetchPriority=');

// While we're at it, let's also fix any other common React DOM property warnings if they exist, like `class=` (though html-react-parser usually handles `class` to `className` automatically or it's allowed in newer React for web components). The error specifically highlights `fetchpriority`.

fs.writeFileSync('src/app/content.ts', html);
console.log('Fixed fetchpriority DOM property error!');
