const setHandleForButtons = () => {
	const firstButton = document.querySelector('.button--first');
	const secondButton = document.querySelector('.button--second');

	if (!firstButton || !secondButton) {
		return;
	}

	let url = '';

	firstButton.addEventListener('click', () => {
		do {
			url = prompt('Введите url для перехода', '');
		} while (!url.trim());
	});

	secondButton.addEventListener('click', () => {
		window.location.href = url; 
	});
}

setHandleForButtons();