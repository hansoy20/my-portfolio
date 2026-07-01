const fs = require('fs');

let content = fs.readFileSync('src/app/content.ts', 'utf8');

// The pink box path is: <path fill=rgb(194,94,141) fill-opacity=1 d=" M-42,-12 C-42,-12 42,-12 42,-12 C42,-12 42,12 42,12 C42,12 -42,12 -42,12 C-42,12 -42,-12 -42,-12z"></path>
// We want to append a <text> element right after it.
const pinkBoxPath = '<path fill=rgb(194,94,141) fill-opacity=1 d=" M-42,-12 C-42,-12 42,-12 42,-12 C42,-12 42,12 42,12 C42,12 -42,12 -42,12 C-42,12 -42,-12 -42,-12z"></path>';
const replacement = pinkBoxPath + '<text x="-25" y="5" font-family="Helvetica, Arial, sans-serif" font-weight="bold" font-size="15" fill="black">hans</text>';

content = content.replace(pinkBoxPath, replacement);

// Now remove all the black paths that draw "Diegovz"
// They look like: <g opacity=1 transform=matrix(...)><path fill=rgb(0,0,0) fill-opacity=1 d="..."></path></g>
// Since there might be nested tags, it's safer to just remove any path with fill=rgb(0,0,0) inside the svg.
// Wait, we need to make sure we only replace in the specific SVG to avoid breaking other things.
const svgStart = content.indexOf('url=https://hansvz.com/wp-content/uploads/2025/12/cursor-hansvz-2026-vectors.json><svg');
const svgEnd = content.indexOf('</svg>', svgStart) + 6;

let svgContent = content.substring(svgStart, svgEnd);

// Remove all <g> elements that contain black paths
svgContent = svgContent.replace(/<g opacity=1 transform=matrix\([^>]*\)><path fill=rgb\(0,0,0\) fill-opacity=1 d="[^"]*"><\/path><\/g>/g, '');

content = content.substring(0, svgStart) + svgContent + content.substring(svgEnd);

fs.writeFileSync('src/app/content.ts', content);
console.log('Cursor text replaced!');
