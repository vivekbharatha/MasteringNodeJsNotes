setInterval(() => {
	// runs after 10 minutes
}, 600000);

/* SIGINT signal is sent to a process when its controlling terminal detects
a Ctrl + C (or equivalent) keystroke. */

process.on('SIGINT', () => {
	console.log('Received SIGINT signal!');
	process.exit(1);
});