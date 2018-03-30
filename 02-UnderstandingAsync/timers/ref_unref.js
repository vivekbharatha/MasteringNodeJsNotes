let iId = setInterval(() => {}, 1000);
iId.unref();

setTimeout(() => {
	console.log('now stop last remainging setInterval');
}, 1000);

/*
The unref method allows the developer to assert the following instructions: when
this timer is the only event source remaining for the event loop to process, go
ahead and terminate the process.

*/