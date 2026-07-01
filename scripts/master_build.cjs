const fs = require('fs');

let html = fs.readFileSync('public/home.html', 'utf8');

// 1. Extract Body
const bodyMatch = html.match(/<body[^>]*>([\s\S]*)/i);
if (bodyMatch) {
  html = bodyMatch[1];
}
// Remove trailing </body></html>
html = html.replace(/<\/body>[\s\S]*/i, '');
// Clean up basic Next.js parsing requirements
html = html.replace(/<\/?(script|link|meta|style)[^>]*>/g, '');
html = html.replace(/<svg[^>]*>[\s\S]*?<\/svg>/g, '');

// 2. Hero Text Fix
html = html.replace(/Currently, <span class=hl-text>VP of Design<\/span> at <a [^>]+>Rappi<\/a>/g, '<span class=hl-text>Aspiring Software Engineer</span>');

// 3. Precise Slide Extraction
// We know slides start with <div class="elementor-element ... e-con-full e-flex ... e-con e-child" 
// which is a direct child of the main page container.
// To avoid string index mess, we'll split the content by the known slide signatures.
// Actually, it's safer to identify the headers and extract their parent containers.

function getSlideRange(titleStr) {
    const titleIdx = html.indexOf(titleStr);
    if (titleIdx === -1) return null;
    const startIdx = html.lastIndexOf('e-con e-child', titleIdx);
    if (startIdx === -1) return null;
    const slideStart = html.lastIndexOf('<div', startIdx);
    
    // Find the next slide start
    let nextStart = html.indexOf('e-con e-child', titleIdx);
    if (nextStart !== -1) {
        nextStart = html.lastIndexOf('<div', nextStart);
    } else {
        nextStart = html.lastIndexOf('</div>'); // End of document
    }
    return { start: slideStart, end: nextStart };
}

const pStart = html.indexOf('Some projects<span');
const projectsStart = html.lastIndexOf('e-con e-child', pStart);
const projectsDivStart = html.lastIndexOf('<div', projectsStart);

const wStart = html.indexOf('Writing<span');
const writingStart = html.lastIndexOf('e-con e-child', wStart);
const writingDivStart = html.lastIndexOf('<div', writingStart);

const fStart = html.indexOf('Fragments of me<span');
const fragStart = html.lastIndexOf('e-con e-child', fStart);
const fragDivStart = html.lastIndexOf('<div', fragStart);

const eStart = html.indexOf('Education<span');
const eduStart = html.lastIndexOf('e-con e-child', eStart);
const eduDivStart = html.lastIndexOf('<div', eduStart);

const xStart = html.indexOf('Experience<span');
const expStart = html.lastIndexOf('e-con e-child', xStart);
const expDivStart = html.lastIndexOf('<div', expStart);

const rStart = html.indexOf('Readings<span');
const readStart = html.lastIndexOf('e-con e-child', rStart);
const readDivStart = html.lastIndexOf('<div', readStart);

// We now have the exact bounds!
const beforeProjects = html.substring(0, projectsDivStart);
const projectsSlide = html.substring(projectsDivStart, writingDivStart);
const writingSlide = html.substring(writingDivStart, fragDivStart);
const fragSlide = html.substring(fragDivStart, eduDivStart);
const eduSlide = html.substring(eduDivStart, expDivStart);
const expSlide = html.substring(expDivStart, readDivStart);

// Create Certificates slide from Education
const certSlide = eduSlide.replace(/Education<span/g, 'Certificates<span');

// 4. Assemble clean layout (Skipping Readings and Awards)
let newHtml = beforeProjects + projectsSlide + writingSlide + fragSlide + eduSlide + expSlide + certSlide + '\n </div></div></div>';

// 5. Rename Section Headers
newHtml = newHtml.replace(/Some projects<span/g, 'Projects<span');
newHtml = newHtml.replace(/Writing<span/g, 'Skills<span');
newHtml = newHtml.replace(/Fragments of me<span/g, 'About Me<span');
newHtml = newHtml.replace(/Experience<span/g, 'Work Experience<span');

// 6. Kabooom & BCS Project Fixes
newHtml = newHtml.replace(/>Mustache<\/h4>/g, '>Kabooom</h4>');
newHtml = newHtml.replace(/>Overall improvement of Rappi's Design System\.<\/h2>/g, '>Engineered a scalable real-time multiplayer word game with modern full-stack technologies.</h2>');
newHtml = newHtml.replace(/<img[^>]*src="\/assets\/asset_90364f9b\.png"[^>]*>/g, '<img loading="lazy" decoding="async" src="/assets/kabooom_logo.png" style="object-fit: contain; width: 100%; max-height: 400px; padding: 20px;" alt="Kabooom">');

newHtml = newHtml.replace(/>Rappi Mix<\/h4>/g, '>Barangay Complaint System</h4>');
newHtml = newHtml.replace(/>Add products to your restaurant order\.<\/h2>/g, '>File and track complaints in your community.</h2>');
newHtml = newHtml.replace(/<img[^>]*src="\/assets\/asset_96c77f73\.webp"[^>]*>/g, '<img loading="lazy" decoding="async" src="/assets/bcs_logo.png" style="object-fit: contain; width: 100%; max-height: 400px; padding: 20px;" alt="Barangay Complaint System">');

// 7. Inject Link Overlays safely for Kabooom and BCS
function injectOverlay(htmlStr, targetUrl, linkValue) {
    const searchStr = `data-premium-element-link='{"type":"url","link":{"url":"${targetUrl}","is_external":"","nofollow":"","custom_attributes":""},"href":"${targetUrl}"}'`;
    const idx = htmlStr.indexOf(searchStr);
    if (idx !== -1) {
        const endOfDiv = htmlStr.indexOf('>', idx);
        const overlay = `<a href="${linkValue}" target="_blank" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 10;"></a>`;
        return htmlStr.substring(0, endOfDiv + 1) + overlay + htmlStr.substring(endOfDiv + 1);
    }
    return htmlStr;
}
newHtml = injectOverlay(newHtml, 'https:\\/\\/hansvz.com\\/projects\\/mustache-ds\\/', 'https://kaboooom.vercel.app/');
newHtml = injectOverlay(newHtml, 'https:\\/\\/hansvz.com\\/projects\\/rappimix', 'https://barangay-complaint.vercel.app/login');

// 8. Placeholders Fixes
newHtml = newHtml.replace(/>New add to cart<\/h4>/g, '>Future Project 1</h4>');
newHtml = newHtml.replace(/>Roostfy<\/h4>/g, '>Future Project 2</h4>');
newHtml = newHtml.replace(/>Clash Royale<\/h2>/g, '>Future Project 3</h2>');

const oldDesc1 = 'Redesign the interaction to improve the usability.';
const oldDesc2 = 'Largest Hispanic freestyle platform in the world.';
const oldDesc3 = 'The famous game reactions made by me.';
const newDesc = 'Coming soon... project details will be added here.';

newHtml = newHtml.replace(new RegExp(`>${oldDesc1}<\/h2>`, 'g'), `>${newDesc}</h2>`);
newHtml = newHtml.replace(new RegExp(`>${oldDesc2}<\/h2>`, 'g'), `>${newDesc}</h2>`);
newHtml = newHtml.replace(new RegExp(`>${oldDesc3}<\/h2>`, 'g'), `>${newDesc}</h2>`);

// Strip Placeholder Images safely
newHtml = newHtml.replace(/<img[^>]*src="\/assets\/asset_edc70281\.webp"[^>]*>/g, '');
newHtml = newHtml.replace(/<img[^>]*src="\/assets\/asset_74db5e6c\.png"[^>]*>/g, '');
// Strip legacy links safely
function stripLegacyLink(htmlStr, title) {
    const tIdx = htmlStr.indexOf(title);
    if (tIdx === -1) return htmlStr;
    const startDiv = htmlStr.lastIndexOf('<div', tIdx);
    const linkMatch = htmlStr.substring(startDiv, tIdx).match(/data-premium-element-link='[^']+'/);
    if (linkMatch) {
        return htmlStr.replace(linkMatch[0], '');
    }
    return htmlStr;
}
newHtml = stripLegacyLink(newHtml, '>Future Project 1</h4>');
newHtml = stripLegacyLink(newHtml, '>Future Project 2</h4>');
newHtml = stripLegacyLink(newHtml, '>Future Project 3</h2>');

// 9. React property fixes
newHtml = newHtml.replace(/class=/g, 'className=');
newHtml = newHtml.replace(/fetchpriority=/g, 'fetchPriority=');

const finalTs = `export const portfolioHtml = \`\n${newHtml}\n\`;\n`;
fs.writeFileSync('src/app/content.ts', finalTs);
console.log('Master Build completed!');
