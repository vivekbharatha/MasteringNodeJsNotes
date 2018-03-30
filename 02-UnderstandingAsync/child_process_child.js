process.on('message', (message) => {
	console.log(`Parent said: ${message}`);
	process.send('But, I Love you! :(');
});