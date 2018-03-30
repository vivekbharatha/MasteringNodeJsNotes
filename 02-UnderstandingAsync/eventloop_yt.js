const EventEmitter = require('events');

const e = new EventEmitter();

console.log('Start');

// process.nextTick
process.nextTick(() => {
	console.log('nextTick: after current process');
});

// setTimeout
setTimeout(() => {
	console.log('setTimeout: end of event loop');
}, 0);

// setImmediate
setImmediate(() => {
	console.log('setImmediate: start of next event loop');
});

e.on('e-1', () => {
	console.log(1);
});

e.on('e-2', () => {
	console.log(2);
});

e.on('e-3', () => {
	console.log(3);
});

e.emit('e-1');

e.emit('e-2');

e.emit('e-3');

console.log('End');