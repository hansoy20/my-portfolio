const fs = require('fs');

try {
  const html = fs.readFileSync('public/home.html', 'utf8');
  console.log('Total length:', html.length);
  
  const base64Matches = html.match(/data:[^;]+;base64,[^"'\s)]+/g) || [];
  const base64Len = base64Matches.reduce((acc, val) => acc + val.length, 0);
  console.log('Base64 data URIs length:', base64Len);
  console.log('Number of Base64 URIs:', base64Matches.length);

  const styleMatches = html.match(/<style[^>]*>.*?<\/style>/gs) || [];
  const styleLen = styleMatches.reduce((acc, val) => acc + val.length, 0);
  console.log('Styles length:', styleLen);
  console.log('Number of style tags:', styleMatches.length);

  const scriptMatches = html.match(/<script[^>]*>.*?<\/script>/gs) || [];
  const scriptLen = scriptMatches.reduce((acc, val) => acc + val.length, 0);
  console.log('Scripts length:', scriptLen);
  console.log('Number of script tags:', scriptMatches.length);

  const svgMatches = html.match(/<svg[^>]*>.*?<\/svg>/gs) || [];
  const svgLen = svgMatches.reduce((acc, val) => acc + val.length, 0);
  console.log('SVGs length:', svgLen);
  console.log('Number of SVG tags:', svgMatches.length);
  
  const bodyMatch = html.match(/<body[^>]*>(.*?)<\/body>/is);
  if (bodyMatch) {
    console.log('Body length:', bodyMatch[1].length);
  }
} catch (e) {
  console.error(e);
}
