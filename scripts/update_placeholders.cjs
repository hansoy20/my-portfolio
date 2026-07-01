const fs = require('fs');

let html = fs.readFileSync('src/app/content.ts', 'utf8');

// 1. Placeholder 1 (New add to cart)
html = html.replace(/>New add to cart<\/h4>/g, '>Future Project 1</h4>');
html = html.replace(/>Redesign the interaction to improve the usability\.<\/h2>/g, '>Coming soon... project details will be added here.</h2>');

// 2. Placeholder 2 (Roostfy)
html = html.replace(/>Roostfy<\/h4>/g, '>Future Project 2</h4>');
html = html.replace(/>Largest Hispanic freestyle platform in the world\.<\/h2>/g, '>Coming soon... project details will be added here.</h2>');

// 3. Placeholder 3 (Clash Royale)
html = html.replace(/>Clash Royale<\/h4>/g, '>Future Project 3</h4>');
html = html.replace(/>The famous game reactions made by me\.<\/h2>/g, '>Coming soon... project details will be added here.</h2>');

// 4. Hide the images for Placeholder 1 & 2
// The "New add to cart" image is src="/assets/asset_edc70281.webp" or similar
// The "Roostfy" image is src="/assets/asset_74db5e6c.png" or similar
// It's safer to just find the img tags within the card boundaries or simply replace specific known src's if we can.
// Let's just use regex to match the image tags that appear right before "Future Project 1" and "Future Project 2".
// Actually, hiding all images in the projects section that aren't kabooom or bcs is hard.
// Instead of complex regex, let's just find the specific src strings. We can use a regex to match all <img ...> in these cards.
// The easiest is just finding the ones with wp-image-22839 and wp-image-21558 (I can see from earlier extractions or I can just use a wildcard).
// Let's replace any img tag between the `data-premium-element-link` and `Future Project 1` with an empty string, OR simply inject `style="display:none;"`.

// A very safe way to remove images from the placeholder cards:
html = html.replace(/<img[^>]*src="\/assets\/asset_edc70281\.webp"[^>]*>/g, '');
html = html.replace(/<img[^>]*src="\/assets\/asset_74db5e6c\.png"[^>]*>/g, '');
html = html.replace(/<img[^>]*src="\/assets\/asset_b5e52643\.webp"[^>]*>/g, '');
// Just in case I got the names wrong, I'll also try a broader regex for those specific cards.
// It's easier to just do a blanket regex for any image inside those specific containers if we knew them.
// Let's let the text changes apply first. If the images are still there, I'll do a follow up.

fs.writeFileSync('src/app/content.ts', html);
console.log('Successfully updated the placeholders.');
