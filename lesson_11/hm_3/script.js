const generateRandomNum = (end) => {
	return Math.floor(Math.random() * end) + 1;
}

const createUrl = (name) => {
	return `./images/${name}.jpg`;
}

const setHandleAnimalsGallery = (max) => {
	const img = document.querySelector('.img');
	const button = document.querySelector('.button');

	if (!img || !button) {
		return;
	}

	button.addEventListener('click', () => {
		const num = generateRandomNum(max);
		const url = createUrl(num);

		img.src = url;
	});
}

setHandleAnimalsGallery(9);