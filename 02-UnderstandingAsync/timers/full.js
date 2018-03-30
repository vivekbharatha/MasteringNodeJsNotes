const fs = require('fs');
const EventEmitter = require('events').EventEmitter;

let pos = 0;
let messenger = new EventEmitter();

messenger.on('message', (message) => {
	console.log(`${++pos} Message: ${message}`);
});

console.log(`${++pos} A First`);

process.nextTick(() => {
	console.log(`${++pos} B Next`);
});

setTimeout(() => {
	console.log(`${++pos} C Quick Timer`);
},0);

setTimeout(() => {
	console.log(`${++pos} D Long Timer`);
},10);

setImmediate(() => {
	console.log(`${++pos} E Immediate`);
});

messenger.emit('message', 'F Heya!');

fs.stat('./ref_unref.js', () => {
	console.log(`${++pos} G First Stat`);
});

fs.stat('./ref_unref.js', () => {
	console.log(`${++pos} H Last Stat`);
});

console.log(`${++pos} I Last`);

/*
Output:
-------
1 A First
2 Message: F Heya!
3 I Last
4 B Next
5 C Quick Timer
6 G First Stat
7 H Last Stat
8 E Immediate
9 D Long Timer
*/


/*
Explaination
------------
A, F, and I execute in the main program flow, and as such, they will have the
first priority in the main thread. This is obvious; your JavaScript executes its
instructions in the order they are written, including the synchronous execution of
the emit callback.

With the main call stack exhausted, the event loop is now almost reading to
process I/O operations. This is the moment when nextTick requests are honored,
slotting in at the head of the event queue. This is when B is displayed.

The rest of the order should be clear. Timers and I/O operations will be
processed next, (C, G, H) followed by the results of the setImmediate callback (E),
always arriving after any I/O and timer responses are executed.
Finally, the long timeout (D) arrives, being a relatively far-future event.
*/