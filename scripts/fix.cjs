const fs = require('fs');

// Fix globals.css
let css = fs.readFileSync('src/app/globals.css', 'utf8');
css = css.replace(/url\(\/assets\/asset_6dab91cb\.webp\)/g, "url('/assets/formal%20pic.jpeg')");
fs.writeFileSync('src/app/globals.css', css);

// Fix content.ts
let content = fs.readFileSync('src/app/content.ts', 'utf8');

// Replace the stretched formal pic back with the original particle backgrounds
const searchStr = `<canvas class=particles-js-canvas-el width=1901 height=912 style="width:100%;height:100%;background-blend-mode:normal!important;background-clip:content-box!important;background-position:center center!important;background-color:rgba(0,0,0,0)!important;background-image:url('/assets/formal%20pic.jpeg')!important;background-size:contain!important;background-origin:content-box!important;background-repeat:no-repeat!important;"></canvas></div><div id=particles-js_8bf15b0 class=wavo-particles-effect><canvas class=particles-js-canvas-el width=1901 height=912 style="width:100%;height:100%;background-blend-mode:normal!important;background-clip:content-box!important;background-position:center center!important;background-color:rgba(0,0,0,0)!important;background-image:url('/assets/formal%20pic.jpeg')!important;background-size:contain!important;background-origin:content-box!important;background-repeat:no-repeat!important;"></canvas>`;

const replaceStr = `<canvas class=particles-js-canvas-el width=1901 height=912 style="width:100%;height:100%;background-blend-mode:normal!important;background-clip:content-box!important;background-position:center center!important;background-color:rgba(0,0,0,0)!important;background-image:url(/assets/asset_8ecc633a.png)!important;background-size:100% 100%!important;background-origin:content-box!important;background-repeat:no-repeat!important"></canvas></div><div id=particles-js_8bf15b0 class=wavo-particles-effect><canvas class=particles-js-canvas-el width=1901 height=912 style="width:100%;height:100%;background-blend-mode:normal!important;background-clip:content-box!important;background-position:center center!important;background-color:rgba(0,0,0,0)!important;background-image:url(/assets/asset_5631c687.png)!important;background-size:100% 100%!important;background-origin:content-box!important;background-repeat:no-repeat!important"></canvas>`;

content = content.replace(searchStr, replaceStr);

fs.writeFileSync('src/app/content.ts', content);
console.log('Fixed CSS and HTML!');
