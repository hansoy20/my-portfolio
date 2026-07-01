const fs = require('fs');

const extraCss = `
/* Custom camouflage for the hero portrait */
.elementor-element-64df1c4 > .elementor-widget-wrap {
    -webkit-mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 100%) !important;
    mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 100%) !important;
    filter: grayscale(100%) contrast(1.2) brightness(0.85) !important;
}
`;

fs.appendFileSync('src/app/globals.css', extraCss);
console.log('Appended camouflage CSS');
