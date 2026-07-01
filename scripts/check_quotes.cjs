const fs = require('fs');
const html = fs.readFileSync('src/app/content.ts', 'utf8');

const matches = html.match(/<[^>]+>/g) || [];
for (const m of matches) {
    // Check if there is an attribute starting with a quote, e.g. `<div "something" >` or just `<a "`
    if (m.match(/\s\"[^\s=>]+[\s=>]/) || m.match(/\s\"[\s>]/) || m.includes('="\"') || m.includes("='\"")) {
        console.log('Found rogue quote in tag:', m.substring(0, 200));
    }
}
console.log('Quote check done.');
