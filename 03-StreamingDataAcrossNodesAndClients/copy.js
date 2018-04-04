// Blunt Attempt - Sync
let fs = require('fs');
/*
console.log('copying..');
var fileBuffer = fs.readFileSync('dummy.txt');
console.log('Size:', fileBuffer.length);
fs.writeFileSync('dummyCopied.js', fileBuffer);
console.log('copying done!');
*/

// Async - which will cause issue if it's big size which blocks the memory
/*
console.log('copying..');
fs.readFile('dummy.txt', (readErr, fileBuffer) => {
	if (readErr) throw readErr;
	console.log('Size:', fileBuffer.length);
	fs.writeFile('dummyCopied.txt', fileBuffer, (writeErr) => {
		if (writeErr) throw writeErr;
		console.log('copying done!');
	});
});
*/

// With streams which can support any size of file
console.log('copying..');
fs.createReadStream('dummy.txt')
.pipe(fs.createWriteStream('dummyCopied.txt'))
.on('close', () => {
	console.log('copying done!');
});