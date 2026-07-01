const fs = require('fs');
const sourceImage = 'C:\\Users\\sagui\\.gemini\\antigravity\\brain\\db640eb9-521b-4140-a136-5e3bc496b7d6\\basketball_portrait_1782361307837.png';
const targetImage = 'c:\\Users\\sagui\\Downloads\\portfolio\\portfolio\\public\\assets\\dramatic_portrait.png';
fs.copyFileSync(sourceImage, targetImage);
console.log('Successfully updated portrait!');
