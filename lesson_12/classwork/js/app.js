const createHtmlElement = ({
	tagName = 'div',
	text,
	attrs
}) => {
	const element = document.createElement(tagName);

	if (text) {
		element.textContent = text;
	}

	if (attrs && Object.keys(attrs).length !== 0) {
		Object.entries(attrs).forEach(([key, val]) => {
			element.setAttribute(key, val);
		});
	}

	return element;
}

const renderCategoriesList = categories => {
	const list = createHtmlElement({
		tagName: 'ul'
	});

	categories.forEach(category => {
		const liElement = createHtmlElement({
			tagName: 'li',
			text: category.name,
			attrs: {
				'data-category': category.id,
			}
		});

		list.appendChild(liElement);
	});

	return list;
}

const renderProductsList = category => {
	const list = createHtmlElement({
		tagName: 'ul'
	});

	category.products.forEach(product => {
		const element = createHtmlElement({
			tagName: 'li',
			text: `${product.name} - $${product.price}`,
			attrs: {
				'data-product': product.id,
			}
		})

		list.appendChild(element);
	});

	return list;
}

const renderProductInfoList = product => {
	const list = createHtmlElement({
		tagName: 'ul'
	});

	list.innerHTML = `
		${product.name && `<li>Название: ${product.name}</li>`}
		${product.id && `<li>ID: ${product.id}</li>`}
		${product.description && `<li>Описание: ${product.description}</li>`}
		${product.price && `<li>Цена: ${product.price}$</li>`}
	`;

	const buttonBuy = createHtmlElement({
		tagName: 'button',
		text: 'Купить этот товарыч!'
	});

	list.appendChild(buttonBuy);

	return list;
}

const productTableInit = () => {
	const categoriesCol = document.querySelector('.categories');
	const productsCol = document.querySelector('.products');
	const infoCol = document.querySelector('.info');
	const orderEl = document.querySelector('.order-details');

	if (!categoriesCol || !productsCol || !infoCol || !orderEl) {
		return;
	}

	const showCategories = () => {
		const categoriesList = renderCategoriesList(Object.values(categories));

		categoriesCol.appendChild(categoriesList);

		categoriesList.addEventListener('click', event => {
			if (event.target && event.target.closest('li')) {
				const categoryId = event.target.dataset.category;

				if (!categoryId) {
					return
				}

				const category = categories[categoryId];

				if (!category) {
					return;
				}

				showProductsByCategory(category);
			}
		});
	}

	const showProductsByCategory = category => {
		[productsCol, infoCol, orderEl].forEach(el => el.replaceChildren());

		const productsList = renderProductsList(category);

		productsCol.appendChild(productsList);

		productsList.addEventListener('click', event => {
			if (event.target && event.target.closest('li')) {
				const productId = parseInt(event.target.dataset.product);

				if (!productId) {
					return;
				}

				const product = category.products.find(product => product.id === productId);

				if (!product) {
					return;
				}

				showProductInfo(product);
			}
		});
	}

	const showProductInfo = product => {
		[infoCol, orderEl].forEach(el => el.replaceChildren());
		const infoList = renderProductInfoList(product);

		infoCol.appendChild(infoList);

		infoList.addEventListener('click', event => {
			if (event.target && event.target.closest('button')) {
				orderEl.textContent = `Поздравляю! Вы успешно купили ${product.name}`;
			}
		});
	}

	showCategories();
}

productTableInit();