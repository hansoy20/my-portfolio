const fs = require('fs');
let content = fs.readFileSync('src/app/content.ts', 'utf8');

function hideSectionByParentContainer(html, heading) {
    const headingIndex = html.indexOf(heading);
    if (headingIndex === -1) {
        console.log(`Could not find heading: ${heading}`);
        return html;
    }
    
    // Find the closest preceding `e-con e-parent` container
    const parentIdx = html.lastIndexOf('e-con e-parent', headingIndex);
    if (parentIdx === -1) {
        console.log(`Could not find parent container for heading: ${heading}`);
        return html;
    }
    
    // The tag looks like <div class="... e-con e-parent ..." data-id=...
    // Let's find the start of this <div
    const divIdx = html.lastIndexOf('<div', parentIdx);
    
    // Inject display:none right after <div
    return html.substring(0, divIdx + 4) + ' style="display:none !important;" ' + html.substring(divIdx + 4);
}

// Re-hide "Readings", "Education", and "Awards &amp; features"
content = hideSectionByParentContainer(content, 'Readings<span');
content = hideSectionByParentContainer(content, 'Education<span');
content = hideSectionByParentContainer(content, 'Awards &amp; features<span');

fs.writeFileSync('src/app/content.ts', content);
console.log('Sections properly hidden!');
