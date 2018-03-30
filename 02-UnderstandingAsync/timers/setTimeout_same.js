setTimeout(function a() {
	console.log('a');
}, 1001);
setTimeout(function b() {
	console.log('b');
}, 1000);

/*
One would expect that function b would execute after function a. However, this
cannot be guaranteed — a may follow b, or the other way around.
Additionally, there exists a minimum wait time of one millisecond for a timeout.
Passing a value of zero, -1, or a non-number will be translated into this minimum
value.
*/