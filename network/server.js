const dgram = require('dgram');

let server = dgram.createSocket('udp4');

server.on('message', msg => {
	process.stdout.write(`Got message ${msg}\n`);
	process.exit();
}).bind(41234);