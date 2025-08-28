const setHandleForButtonAndText = () => {
	const text = document.querySelector('.text');
	const button = document.querySelector('.button');

	if (!text || !button) {
		return;
	}

	button.addEventListener('click', () => {
		text.classList.toggle('red');
	});
}

setHandleForButtonAndText();