const fs = require('fs');

const extraCss = `
/* Zoom out the dramatic portrait */
.elementor-element-64df1c4 > .elementor-widget-wrap {
    background-size: auto 65% !important; /* Scale it down to 65% height to zoom out */
    background-position: center 40% !important; /* Shift it slightly up/center */
    background-repeat: no-repeat !important;
}
`;

fs.appendFileSync('src/app/globals.css', extraCss);
console.log('Appended zoom out CSS');
