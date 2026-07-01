const fs = require('fs');

let html = fs.readFileSync('public/home.html', 'utf8');

// Extract the body content
const bodyMatch = html.match(/<body[^>]*>([\s\S]*)/i);
if (bodyMatch) {
  html = bodyMatch[1];
}

// Remove scripts and noscript tags
html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
html = html.replace(/<noscript\b[^<]*(?:(?!<\/noscript>)<[^<]*)*<\/noscript>/gi, '');

// Escape backticks and dollar signs for template literal
const escapedHtml = html.replace(/`/g, '\\`').replace(/\$/g, '\\$');

const content = `export const portfolioHtml = \`${escapedHtml}\`;\n`;

fs.writeFileSync('src/app/content.ts', content);
console.log('Successfully wrote src/app/content.ts');
