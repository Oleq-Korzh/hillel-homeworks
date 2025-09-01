const setHandleForButtons = () => {
	const wrapper = document.querySelector('.wrapper');

	if (!wrapper) {
		return;
	}

	wrapper.addEventListener('click', (event)	 => {
		if (event.target && event.target.tagName === 'BUTTON') {
			const dataCount = event.target.dataset.count;

			alert(`Кликнуто на кнопку: Кнопка ${dataCount}`);
		}
	});
}

setHandleForButtons();