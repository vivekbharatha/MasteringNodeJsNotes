setTimeout(function a() {
	console.log('a');
}, 1000);
setTimeout(function b() {
	console.log('b');
}, 1000);

/*
The execution order of a and b are predictable in this case. Node essentially
maintains an object map grouping callbacks with identical timeout lengths
*/