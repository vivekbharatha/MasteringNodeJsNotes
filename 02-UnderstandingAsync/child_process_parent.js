const cp = require('child_process');
let child = cp.fork('./child_process_child.js');

child.on('message', (message) => {
	console.log(`Child said: ${message}`);
});

child.send('I Hate you!');