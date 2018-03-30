const db = {
	getFullName: Promise.resolve('Vivek'),
	getAddress: Promise.resolve('Hyderabad'),
	getFavorites: Promise.resolve('Bike')
};

Promise.all([
		db.getFullName,
		db.getAddress,
		db.getFavorites
	])
	.then(results => {
		console.log(results);
	})
	.catch(err => {
		console.error(err);
	});