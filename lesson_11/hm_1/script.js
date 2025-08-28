const table = document.querySelector('.table');

const renderRow = () => {
	const row = document.createElement('div');
	row.classList.add('row');

	return row;
}

const renderItem = () => {
	const item = document.createElement('div');
	item.classList.add('item');

	return item;
}

const renderPifagorTable = () => {
	const row = renderRow();

	for (let i = 1; i < 10; i++) {
		const item = renderItem();

		if (i !== 1) {
			item.textContent = i;
		}

		row.appendChild(item);
	}

	table.appendChild(row);

	for (let i = 2; i < 10; i++) {
		const row = renderRow();

		for (let j = 1; j < 10; j++) {
			const item = renderItem();

			item.textContent = i * j;

			row.appendChild(item);
		}

		table.appendChild(row);
	}
};

renderPifagorTable();