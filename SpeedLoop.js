const cycles = 1000000000;
let start = Date.now();
for (let i=0; i<cycles; i++) {

}

let duration = (Date.now() - start)/1000;
console.log(`looped %d times in %d seconds`,  cycles, duration);