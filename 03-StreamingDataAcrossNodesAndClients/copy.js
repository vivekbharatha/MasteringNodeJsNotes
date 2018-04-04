// Blunt Attempt - Sync
let fs = require('fs');
/*
console.log('copying..');
var fileBuffer = fs.readFileSync('dummy.txt');
console.log('Size:', fileBuffer.length);
fs.writeFileSync('dummyCopied.js', fileBuffer);
console.log('copying done!');
*/

// Async
console.log('copying..');
fs.readFile('dummy.txt', (readErr, fileBuffer) => {
	if (readErr) throw readErr;
	console.log('Size:', fileBuffer.length);
	fs.writeFile('dummyCopied.txt', fileBuffer, (writeErr) => {
		if (writeErr) throw writeErr;
		console.log('copying done!');
	});
});