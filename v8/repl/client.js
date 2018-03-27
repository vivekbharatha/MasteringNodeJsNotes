let net = require('net');
let sock = net.connect(5555);
process.stdin.pipe(sock);
sock.pipe(process.stdout);