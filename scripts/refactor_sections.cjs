const fs = require('fs');
let content = fs.readFileSync('src/app/content.ts', 'utf8');

// 1. Rename "Some projects." to "Projects."
content = content.replace(/Some projects<span/g, 'Projects<span');

// 2. Rename "Writing." to "Skills."
content = content.replace(/Writing<span/g, 'Skills<span');

// 3. Rename "Fragments of me." to "About Me."
content = content.replace(/Fragments of me<span/g, 'About Me<span');

// 4. Rename "Experience." to "Experience, Education &amp; Certificates." (or similar)
// Let's use regular "Experience, Education &amp; Certificates"
content = content.replace(/Experience<span/g, 'Experience, Education &amp; Certificates<span');

// Helper to hide a section based on a heading
function hideSectionByHeading(html, heading) {
    const headingIndex = html.indexOf(heading);
    if (headingIndex === -1) {
        console.log(`Could not find heading: ${heading}`);
        return html;
    }
    
    // Find the closest preceding <section
    const sectionIndex = html.lastIndexOf('<section', headingIndex);
    if (sectionIndex === -1) {
        console.log(`Could not find <section for heading: ${heading}`);
        return html;
    }
    
    // Inject display:none
    // It looks like <section class="...
    const classIndex = html.indexOf('class="', sectionIndex);
    if (classIndex !== -1 && classIndex < headingIndex) {
        // Just inject style="display:none !important;" right after <section 
        return html.substring(0, sectionIndex + 8) + ' style="display:none !important;" ' + html.substring(sectionIndex + 8);
    }
    return html;
}

// 5. Hide "Readings."
content = hideSectionByHeading(content, 'Readings<span');

// 6. Hide "Education."
content = hideSectionByHeading(content, 'Education<span');

// 7. Hide "Awards &amp; features."
content = hideSectionByHeading(content, 'Awards &amp; features<span');

fs.writeFileSync('src/app/content.ts', content);
console.log('Sections renamed and hidden successfully!');
