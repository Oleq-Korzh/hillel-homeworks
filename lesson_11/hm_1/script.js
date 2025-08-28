const app = document.querySelector('.app');

const createElementWithClass = (element, className) => {
	const item = document.createElement(element);
	item.classList.add(className);

	return item;
}

const renderPifagorTable = (size) => {
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