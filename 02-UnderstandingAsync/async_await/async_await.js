const db = {
	getFullName: Promise.resolve('Vivek'),
	getAddress: Promise.resolve('Hyderabad'),
	getFavorites: Promise.resolve('Bike')
};

async function profile() {
	let fullName = await db.getFullName
	let address = await db.getAddress
	let favorites = await db.getFavorites

	return {fullName, address, favorites};
}

profile()
	.then(res => console.log(res))
	.catch(err => console.error(err));

/*
You'll note that profile() returned a Promise. An async function
always returns a Promise, though as we see here, the function itself can return
anything it would like.
*/