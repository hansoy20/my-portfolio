const fs = require('fs');

let html = fs.readFileSync('public/home.html', 'utf8');

// Extract the body content
const bodyMatch = html.match(/<body[^>]*>([\s\S]*)/i);
if (!bodyMatch) {
  console.error("No body found");
  process.exit(1);
}

let bodyHtml = bodyMatch[1];

// Remove scripts and noscript tags
bodyHtml = bodyHtml.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
bodyHtml = bodyHtml.replace(/<noscript\b[^<]*(?:(?!<\/noscript>)<[^<]*)*<\/noscript>/gi, '');

// Basic HTML to JSX conversions
let jsx = bodyHtml
  .replace(/class=/g, 'className=')
  .replace(/for=/g, 'htmlFor=')
  .replace(/tabindex=/g, 'tabIndex=')
  .replace(/datetime=/g, 'dateTime=')
  .replace(/autoplay=/g, 'autoPlay=')
  .replace(/playsinline=/g, 'playsInline=')
  .replace(/srcset=/g, 'srcSet=')
  .replace(/crossorigin=/g, 'crossOrigin=')
  .replace(/viewbox=/g, 'viewBox=')
  .replace(/preserveaspectratio=/g, 'preserveAspectRatio=')
  .replace(/clip-path=/g, 'clipPath=')
  .replace(/fill-opacity=/g, 'fillOpacity=')
  .replace(/stroke-width=/g, 'strokeWidth=')
  .replace(/stroke-linecap=/g, 'strokeLinecap=')
  .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
  .replace(/stroke-dashoffset=/g, 'strokeDashoffset=')
  .replace(/stroke-dasharray=/g, 'strokeDasharray=')
  .replace(/<!--[\s\S]*?-->/g, '') // remove comments
  // Replace style strings
  .replace(/style="([^"]*)"/gi, (match, p1) => {
    const styles = p1.split(';').filter(s => s.trim()).map(s => {
      const parts = s.split(':');
      if (parts.length < 2) return '';
      const key = parts[0];
      const val = parts.slice(1).join(':').trim(); // value might contain colons
      
      // Convert key to camelCase
      let camelKey = key.trim();
      if (camelKey.startsWith('-webkit-') || camelKey.startsWith('-moz-') || camelKey.startsWith('-ms-') || camelKey.startsWith('-o-')) {
         camelKey = camelKey.replace(/^-([a-z])/g, g => g[1].toUpperCase());
      }
      camelKey = camelKey.replace(/-([a-z])/g, g => g[1].toUpperCase());
      
      // Escape inner quotes and backslashes
      const escapedVal = val.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
      return `${camelKey}: "${escapedVal}"`;
    }).filter(s => s).join(', ');
    return `style={{${styles}}}`;
  });

// Handle unquoted attributes
jsx = jsx.replace(/([a-zA-Z-]+)=([^"'\s>]+)(\s|>)/g, (match, p1, p2, p3) => {
  // Don't quote react prop bindings like ={ or ="
  if (p2.startsWith('{')) return match;
  return `${p1}="${p2}"${p3}`;
});

// Close unclosed tags
const selfClosingTags = ['img', 'br', 'hr', 'input', 'meta', 'link', 'source', 'path', 'rect', 'circle'];
selfClosingTags.forEach(tag => {
  const regex = new RegExp(`<${tag}\\b([^>]*?)(?<!/)>`, 'gi');
  jsx = jsx.replace(regex, `<${tag}$1 />`);
});

const pageContent = `export default function PortfolioPage() {
  return (
    <div className="portfolio-wrapper">
      ${jsx}
    </div>
  );
}`;

fs.writeFileSync('src/app/page.tsx', pageContent);
console.log('Successfully wrote src/app/page.tsx');
