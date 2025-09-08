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

const renderOrderInfo = (product, objData) => {
	const orderTable = createHtmlElement({
		tagName: 'div',
		attrs: {
			'class': 'order-table'
		}
	});

	orderTable.innerHTML = `
			<h2>Ваш заказ: </h2>
			<div>
				<div class="order-table__row">Название товара: <strong>${product.name}</strong></div>
				<div class="order-table__row">Полное имя: <strong>${objData.fullName}</strong></div>
				<div class="order-table__row">Город: <strong>${objData.city}</strong></div>
				<div class="order-table__row">Доставка: <strong>${objData.payment}</strong></div>
				<div class="order-table__row">Комментарий: <strong>${objData.comment}</strong></div>
			</div>
			<h3>Сумма к оплате ${product.price}$</h3>
	`;

	return orderTable;
};

const resetForm = (form, formParent, className) => {
	const formError = formParent.querySelectorAll('.error');
	form.reset();
	formParent.classList.add(className);

	formError.forEach(el => el.remove());
}

const createError = (text) => {
	if (!text) {
		return;
	}

	return createHtmlElement({
		tagName: 'span',
		text: text,
		attrs: {
			'class': 'error'
		}
	});
}

const validateFormValue = (string) => {
	const regex = /^.+$/;

	return regex.test(string.trim());
}

const productTableInit = () => {
	const categoriesCol = document.querySelector('.categories');
	const productsCol = document.querySelector('.products');
	const infoCol = document.querySelector('.info');
	const orderFormWrapperEl = document.querySelector('.order-form');
	const orderForm = document.forms.order;
	const orderFormSubmit = orderForm.querySelector('button');
	const orderEl = document.querySelector('.order-details');
	const FORM_HIDDEN_CLASS = 'hidden';

	if (!categoriesCol || !productsCol || !infoCol || !orderEl || !orderFormWrapperEl || !orderForm) {
		return;
	}

	orderFormWrapperEl.classList.add(FORM_HIDDEN_CLASS);

	const showForm = (product) => {
		orderFormWrapperEl.classList.remove(FORM_HIDDEN_CLASS);

		orderFormSubmit.addEventListener('click', () => {
			const formData = {
				fullName: orderForm.fullname.value,
				city: [...orderForm.city].find(el => el.selected).value,
				delivery: orderForm.delivery.value,
				payment: [...orderForm.payment].find(el => el.checked).value,
				comment: orderForm.comment.value,
			}

			const isNotValidate = !Object.values(formData).every(formVal => validateFormValue(formVal));

			if (isNotValidate) {
				const errorEl = orderFormWrapperEl.querySelector('.error');

				if (!errorEl) {
					const error = createError('Ошибка, проверьте форму на правильность!');

					orderFormWrapperEl.appendChild(error);
				}

				return;
			}

			const orderInfoEl = renderOrderInfo(product, formData);

			orderEl.appendChild(orderInfoEl);
		});
	}

	const showProductsByCategory = category => {
		[productsCol, infoCol, orderEl].forEach(el => el.replaceChildren());
		resetForm(orderForm, orderFormWrapperEl, FORM_HIDDEN_CLASS);
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

	const showProductInfo = product => {
		[infoCol, orderEl].forEach(el => el.replaceChildren());
		resetForm(orderForm, orderFormWrapperEl, FORM_HIDDEN_CLASS);
		const infoList = renderProductInfoList(product);

		infoCol.appendChild(infoList);

		infoList.addEventListener('click', event => {
			if (event.target && event.target.closest('button')) {
				showForm(product);
			}
		});
	}

	showCategories();
}

productTableInit();