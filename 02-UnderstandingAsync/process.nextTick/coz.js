const events = require('events');

function getEmitter() {
	let emitter = new events.EventEmitter();
	emitter.emit('start');
	return emitter;
}

let myEmitter = getEmitter();

myEmitter.on('start', () => {
	console.log('started');
});

/*
Nothing logs! coz..
The event emitter instantiated within getEmitter emits start previous to being returned,
wrongfooting the subsequent assignment of a listener, which arrives a step late, missing
the event notification.
*/