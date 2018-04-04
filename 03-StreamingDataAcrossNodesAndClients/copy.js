// Blunt Attempt
let fs = require('fs');
console.log('copying..');
var fileBuffer = fs.readFileSync('dummy.txt');
console.log('Size:', fileBuffer.length);
fs.writeFileSync('dummyCopied.js', fileBuffer);
console.log('copying done!');