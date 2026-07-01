const fs = require('fs');

let html = fs.readFileSync('src/app/content.ts', 'utf8');

// The exact string that precedes the injected <a> tag for BCS
const searchStr = `data-premium-element-link='{"type":"url","link":{"url":"https:\\/\\/hansvz.com\\/projects\\/rappimix","is_external":"","nofollow":"","custom_attributes":""},"href":"https:\\/\\/hansvz.com\\/projects\\/rappimix"}'`;

const index = html.indexOf(searchStr);
if (index !== -1) {
    // Also update the data-premium-element-link itself to keep it clean
    const replaceStr = `data-premium-element-link='{"type":"url","link":{"url":"https:\\/\\/barangay-complaint.vercel.app\\/login","is_external":"","nofollow":"","custom_attributes":""},"href":"https:\\/\\/barangay-complaint.vercel.app\\/login"}'`;
    html = html.replace(searchStr, replaceStr);

    // Now update the href="#" in the <a> tag that immediately follows the opening div
    // We injected: <a href="#" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 10;"></a>
    const oldAnchor = '<a href="#" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 10;"></a>';
    const newAnchor = '<a href="https://barangay-complaint.vercel.app/login" target="_blank" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 10;"></a>';
    html = html.replace(oldAnchor, newAnchor);
    
    fs.writeFileSync('src/app/content.ts', html);
    console.log('Successfully updated the BCS project link.');
} else {
    console.log('Could not find the BCS card to update.');
}
