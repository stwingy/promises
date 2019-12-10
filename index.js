const fakeRequest = (url) => {
	const pages = {
		'/users': [ { name: 'john', id: 1 }, { name: 'tonelly', id: 2 } ],
		'/about': 'this is about',
		'/users/1': { info: 'somestuff', url: 'someaddress' }
	};
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const data = pages[url];
			if (data) {
				resolve({ status: 200, data });
			} else {
				reject({ status: 404, msg: 'Failed to load' });
			}
		}, 5000);
	});
};

fakeRequest('/users')
	.then((res) => {
		console.log(res.status, res.data);
		const id = res.data[0].id;
		return fakeRequest(`/users/${id}`);
	})
	.then((res) => {
		console.log(res.data);
	})
	.catch((res) => console.log(res.status, res.msg));
