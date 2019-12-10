const btn = document.createElement('div');
btn.style.width = '20px';
btn.style.height = '20px';
btn.style.backgroundColor = 'red';
document.body.appendChild(btn);

const moveRight = (elem, amount, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const w = document.body.clientWidth;
			const elRight = elem.getBoundingClientRect().right;
			const elLeft = elem.getBoundingClientRect().left;

			if (elRight + amount > w) {
				reject();
			} else {
				elem.style.transform = `translateX(${elLeft + amount}px)`;
				resolve();
			}
		}, delay);
	});
};
moveRight(btn, 100, 1000)
	.then(() => moveRight(btn, 100, 1000))
	.then(() => moveRight(btn, 100, 1000))
	.then(() => moveRight(btn, 100, 1000))
	.then(() => moveRight(btn, 100, 1000))
	.then(() => moveRight(btn, 100, 1000))
	.then(() => moveRight(btn, 100, 1000))
	.catch((err) => console.log('NOROOM              ', err));
