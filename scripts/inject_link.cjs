const fs = require('fs');
let html = fs.readFileSync('src/app/content.ts', 'utf8');

// The main card container we previously edited:
const targetDivPrefix = `data-premium-element-link='{"type":"url","link":{"url":"https:\\/\\/kaboooom.vercel.app\\/","is_external":"","nofollow":"","custom_attributes":""},"href":"https:\\/\\/kaboooom.vercel.app\\/"}'`;

const index = html.indexOf(targetDivPrefix);
if (index !== -1) {
    // Find the end of this opening div tag
    const endOfDivTag = html.indexOf('>', index);
    
    // Also clean up the 'onclick' we injected earlier
    html = html.replace(` onclick="window.open('https://kaboooom.vercel.app/', '_blank')"`, '');
    
    // Inject the absolute positioned <a> tag right after the opening div tag
    const linkOverlay = `<a href="https://kaboooom.vercel.app/" target="_blank" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 10;"></a>`;
    
    // Ensure the parent container has position relative if needed (safest is to just add it inline to the style)
    // We can inject `position:relative;` into the style attribute of the div
    const newHtml = html.substring(0, endOfDivTag + 1) + linkOverlay + html.substring(endOfDivTag + 1);
    
    fs.writeFileSync('src/app/content.ts', newHtml);
    console.log('Successfully injected the overlay link.');
} else {
    console.log('Could not find the Kabooom card container.');
}
