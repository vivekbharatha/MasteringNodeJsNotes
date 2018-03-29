console.log('S1');
//console.log(process)
setImmediate(function SI1() {
// process.nextTick(function () {console.log('sI1');});
    console.log('sI1');
});
setTimeout(function sT1() {
    // process.nextTick(function () {console.log('sT1');});
    console.log('sT1');
},0);



console.log('S2');

setTimeout(function sT2() {
	process.nextTick(function () {console.log('sT2');});
    // console.log('sT2');
},10);

console.log('S3');