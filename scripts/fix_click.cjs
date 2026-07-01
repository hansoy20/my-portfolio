const fs = require('fs');
let html = fs.readFileSync('src/app/content.ts', 'utf8');

// Find the data-premium-element-link for kabooom
const searchStr = `data-premium-element-link='{"type":"url","link":{"url":"https:\\/\\/kaboooom.vercel.app\\/","is_external":"","nofollow":"","custom_attributes":""},"href":"https:\\/\\/kaboooom.vercel.app\\/"}'`;
const replaceStr = searchStr + ` onclick="window.open('https://kaboooom.vercel.app/', '_blank')"`;

if (html.includes(searchStr)) {
    html = html.replace(searchStr, replaceStr);
    fs.writeFileSync('src/app/content.ts', html);
    console.log('Successfully added onclick handler to the Kabooom card.');
} else {
    // Maybe try a regex to catch any data-premium-element-link containing kaboooom
    const regex = /data-premium-element-link='[^']*kaboooom\.vercel\.app[^']*'/g;
    html = html.replace(regex, (match) => {
        return match + ` onclick="window.open('https://kaboooom.vercel.app/', '_blank')"`;
    });
    fs.writeFileSync('src/app/content.ts', html);
    console.log('Successfully added onclick handler to the Kabooom card using regex.');
}
