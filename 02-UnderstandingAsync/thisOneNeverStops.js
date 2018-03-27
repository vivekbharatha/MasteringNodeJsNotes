let stop = false;

setTimeout(function () {
	stop = true;
}, 1000);

while(stop === false) {
	console.log('stop:', stop);
}