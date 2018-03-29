

/**
* Main context
*/
setTimeout(() => {
	console.log('timeout main context');
});

setImmediate(() => {
	console.log('immediate main context\n');
});
/*
The order in which the two timers are executed is non-deterministic,
*/


/**
* I/O context
*/
const fs = require('fs');

fs.readFile('./sigint.js', () => {
	setTimeout(() => {
		console.log('timeout I/O callback');
	});

	setImmediate(() => {
		console.log('immediate I/O callback');
	});
});
/*
The main advantage to using setImmediate() over setTimeout() is setImmediate() will always be executed
before any timers if scheduled within an I/O cycle, independently of how many timers are present.
*/