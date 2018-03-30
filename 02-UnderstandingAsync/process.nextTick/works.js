const events = require('events');

function getEmitter() {
	let emitter = new events.EventEmitter();
	process.nextTick(() => {
		emitter.emit('start');
	});
	return emitter;
}

let myEmitter = getEmitter();

myEmitter.on('start', () => {
	console.log('started');
});

/*
This code attaches the on("start") handler before Node gives us the start event, and works properly.
*/