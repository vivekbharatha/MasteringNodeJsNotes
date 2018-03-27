// Inter-Process Communication practice
console.log('pid is:', process.pid);
setInterval(()=> {

}, 600000);

/* SIGUSR1 (and SIGUSR2) are user-defined signals, triggered by no specific action
known to the operating system */

process.on('SIGUSR1', () => {
	console.log('Got signal!');
});


/*
To know the pid `ps aux | grep ipc.js`
 We can send signal using the kill command: $ kill –s SIGUSR1 {pid} */