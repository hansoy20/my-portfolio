const fs = require('fs');

const extraCss = `
/* Feather the edges of the portrait to hide the image boundaries */
.elementor-element-64df1c4 > .elementor-widget-wrap {
    -webkit-mask-image: radial-gradient(ellipse 60% 80% at 50% 50%, black 60%, transparent 100%) !important;
    mask-image: radial-gradient(ellipse 60% 80% at 50% 50%, black 60%, transparent 100%) !important;
}
`;

fs.appendFileSync('src/app/globals.css', extraCss);
console.log('Appended mask CSS');
