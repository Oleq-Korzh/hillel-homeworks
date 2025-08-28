const app = document.querySelector('.app');

const createElementWithClass = (element = 'div', className = '') => {
	const item = document.createElement(element);

	item.classList.add(className);

	return item;
}

const renderPifagorTable = (size) => {
	if (size <= 2) {
		const title = createElementWithClass('h1', 'title');
		title.textContent = 'Ошибка! Введите число больше 2х';

		return title;
	}

	const table = createElementWithClass('div', 'table');
	const row = createElementWithClass('div', 'row');

	for (let i = 1; i < size; i++) {
		const item = createElementWithClass('div', 'item');

		if (i !== 1) {
			item.textContent = i;
		}

		row.appendChild(item);
	}

	table.appendChild(row);

	for (let i = 2; i < size; i++) {
		const row = createElementWithClass('div', 'row');

		for (let j = 1; j < size; j++) {
			const item = createElementWithClass('div', 'item');

			item.textContent = i * j;

			row.appendChild(item);
		}

		table.appendChild(row);
	}

	return table;
};

const table = renderPifagorTable(10);
app.appendChild(table);