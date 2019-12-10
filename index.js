const fakeRequest = (url) => {
	const pages = {
		'/users': [ { name: 'john', id: 1 }, { name: 'tonelly', id: 2 } ],
		'/about': 'this is about'
	};
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const rand = Math.random();
			if (rand < 0.7) {
				const data = pages[url];
				resolve({ status: 200, data });
			} else {
				reject({ status: 404, msg: 'Failed to load' });
			}
		}, 5000);
	});
};

fakeRequest('/users').then((res) => console.log(res.status, res.data)).catch((res) => console.log(res.status, res.msg));
