const toggleTitleColor = (textEl) => {
	return () => {
		textEl.classList.toggle('red');
	}
};

const setHandleForButtonAndText = () => {
	const text = document.querySelector('.text');
	const button = document.querySelector('.button');

	if (!text || !button) {
		return;
	}

	button.addEventListener('click', toggleTitleColor(text));

	return {
		text,
		button
	}
}

const {
	text,
	button
} = setHandleForButtonAndText();

button.click();