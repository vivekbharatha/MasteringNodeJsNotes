const {join} = require('path');
const {promisify} = require('util');
const fs = require('fs');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

async function $readDir (dir, acc = []) {
	await Promise.all((await readdir(dir)).map(async file => {
		file = join(dir, file);
		return (await stat(file)).isDirectory() && acc.push(file) && $readDir(file, acc);
	}));
	return acc;
}

$readDir('./')
.then((result) => console.log(result))
.catch(err => console.error(err));