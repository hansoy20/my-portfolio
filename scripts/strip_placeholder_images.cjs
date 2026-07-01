const fs = require('fs');

let html = fs.readFileSync('src/app/content.ts', 'utf8');

// Function to find a specific string, and remove the nearest preceding <img ...> tag
function removePrecedingImg(targetStr) {
    const targetIdx = html.indexOf(targetStr);
    if (targetIdx === -1) return;
    
    const imgStart = html.lastIndexOf('<img ', targetIdx);
    if (imgStart !== -1) {
        const imgEnd = html.indexOf('>', imgStart) + 1;
        html = html.substring(0, imgStart) + html.substring(imgEnd);
    }
}

// Remove images for Placeholder 1 and 2
removePrecedingImg('>Future Project 1</h4>');
removePrecedingImg('>Future Project 2</h4>');

// Also remove the data-premium-element-link from these placeholders so they don't link anywhere!
function removeLinks(targetStr) {
    const targetIdx = html.indexOf(targetStr);
    if (targetIdx === -1) return;
    
    // Find the nearest opening div containing data-premium-element-link before the target
    const linkStr = "data-premium-element-link=";
    const startDiv = html.lastIndexOf('<div', targetIdx);
    
    // Actually we just want to remove the 'href="https://..."' from the card, or the data-premium-element-link attribute completely
    // It's safer to just let it be, but if we want to remove the link behavior:
    const linkAttrStart = html.lastIndexOf(linkStr, targetIdx);
    
    // If the link attribute is in the same container (distance < 1000 chars)
    if (linkAttrStart !== -1 && (targetIdx - linkAttrStart < 1000)) {
        const linkAttrEnd = html.indexOf('}', linkAttrStart) + 2; // +2 for }'
        html = html.substring(0, linkAttrStart) + html.substring(linkAttrEnd);
    }
}

removeLinks('>Future Project 1</h4>');
removeLinks('>Future Project 2</h4>');
removeLinks('>Future Project 3</h4>'); // Clash Royale also had a link

fs.writeFileSync('src/app/content.ts', html);
console.log('Successfully stripped images and links from placeholder cards.');
