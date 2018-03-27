/**
* What actually happens
*/

/* 1 - A V8 process object is created in C++ using the V8 API. Nodejs runtime is then imported into a V8 process. */

const fs = require('fs');

/* 	2 - `fs` module is attached to node runtime. V8 exposes C++ to javascript. This provides access to native filesystem bindings for js code. */

/* 	3 - `fs.readFile` method has passed instructions and js callback. Through `fs.binding`, `libuv` is notified of the file read request, and
    	is passed a specially prepared version of the callback sent by the original program. */

/* 	4 - `libuv` invokes the OS level functions necessary to read a file. */

fs.readFile('./thisOneNeverStops.js', {encoding: 'utf8'}, function (err, fileData) {
	/* 	6 - When the file descriptor has been fully read by OS, `libuv` (via internal mechanisms) is informed, and the callback passed to libuv is invoked,
		   	which essenstially prepares the original js callback for re-entrance into the main (V8) thread.
	
	   	7 - The original js callback is pushed onto the event loop, and is invoked on a near-future tick of the loop.
	
	   	8 - `Then the file contents are available` are printed to the console. */
	
	console.log('Then the file contents are available\n', fileData);
});
/* 	9 - As there are no further callbacks in flight, the process exists.

	5 - js program continues to print `This triggers first!`.
     Because there is a callback outstanding, the event loop continues to spin, waiting for that callback to resolve. */
console.log('This triggers first!');