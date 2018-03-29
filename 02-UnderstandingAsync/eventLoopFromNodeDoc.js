const fs = require('fs');

function randomAsyncOperation(cb) {
	// Assuming this takes 95 ms to complete
	fs.readFile('./sigint.js', cb);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
	const delay = Date.now() - timeoutScheduled;
	console.log(`${delay} ms have passed since I was scheduled`);
}, 100);

// random Async operation which takes 10ms
randomAsyncOperation((err, data) => {
	// console.log(err, data);
	const startCallback = Date.now();
	while(Date.now() - startCallback < 100) {

	}

});
