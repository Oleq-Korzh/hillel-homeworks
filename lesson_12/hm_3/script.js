const createHtmlElement = (elementText, parametrs = {}) => {
	const element = document.createElement(elementText);

	if (parametrs.text) {
		element.textContent = parametrs.text;
	}

	if (parametrs.className) {
		element.classList.add(parametrs.className)
	}

	if (parametrs.attrs) {
		Object.entries(parametrs.attrs).forEach(([key, value]) => {
			element.setAttribute(key, value);
		});
	}

	return element;
}

const createTodoElement = (todoText) => {
	const listEl = createHtmlElement('li', {
		text: todoText,
		className: 'list__item',
	});
	const buttonEl = createHtmlElement('button', {
		text: 'Удалить',
		className: 'button-remove',
		attrs: {
			type: 'button',
		},
	});

	listEl.append(buttonEl);

	return listEl;
};

const initTodo = () => {
	const input = document.querySelector('.input');
	const buttonAdd = document.querySelector('.button-add');
	const list = document.querySelector('.list');

	if (!input || !buttonAdd || !list) {
		return;
	}

	const setTodoElement = () => {
		if (!input.value.trim()) {
			return;
		}

		const todoEl = createTodoElement(input.value);

		list.append(todoEl);

		input.value = '';
	};

	const removeTodoElement = (event) => {
		if (event.target && event.target.closest('button')) {
			const parent = event.target.closest('li');

			if (!parent) {
				return;
			}

			parent.remove();
		}
	};

	buttonAdd.addEventListener('click', setTodoElement);
	input.addEventListener('keydown', (event) => {
		if (event.key === 'Enter') setTodoElement();
	});
	list.addEventListener('click', removeTodoElement);
};

initTodo();