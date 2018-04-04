let fs = require('fs');
let http = require('http');

let theClient = null;
let clientPos = 0;

let tweetFile = 'tweets.txt';
let writeStream = fs.createWriteStream(tweetFile, {
	flags: 'a'
});

http.createServer((req, res) => {
	res.writeHead(200, {
		'Content-Type': 'text/event-stream',
		'Cache-Control': 'no-cache',
		'Access-Control-Allow-Origin': '*'
	});

	theClient = res;

	res.write(':' + Array(2049).join('') + '\n');
	res.write('retry: 2000\n');

	res.socket.on('close', () => {
		theClient = null;
	});

}).listen(8080);

/*
The response argument implements the writable stream interface, allowing us to write messages to the client
*/

let sendNext = function (fd) {
	let buffer = Buffer.alloc(140);
	fs.read(fd, buffer, 0, 140, clientPos * 140, (err, bytesRead) => {
		if (!err && bytesRead > 0 && theClient) {
			++clientPos;
			theClient.write(`data: ${buffer.toString('utf-8', 0, bytesRead)}\n\n`);
			return process.nextTick(() => {
				sendNext(fd);
			});
		}
	});
};

function start() {
	fs.open(tweetFile, 'r', (err, fd) => {
		if (err) {
			return setTimeout(start, 1000);
		}

		fs.watch(tweetFile, (event, filename) =>  {
			if (event === 'change') {
				sendNext(fd);
			}
		});
	});
}

start();

// Alternate to twitter - genrating random String

let cleanBuffer = function (len) {
	let buf = Buffer.alloc(len);
	buf.fill('\0');
	return buf;
};

let check = function () {
	let buffer = cleanBuffer(140);
	let randomString = require('crypto').randomBytes(70).toString('Hex');
	buffer.write(randomString, 0, 140);
	writeStream.write(buffer);
	setTimeout(check, 3000); // 3 sec
};

check();
