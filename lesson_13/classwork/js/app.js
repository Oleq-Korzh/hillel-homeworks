const renderTable = (obj) => {
	const isEmpty = Object.values(obj).every(element => Array.isArray(element) ? element.length === 0 : Boolean(element) === false);

	if (isEmpty) {
		return null;
	}

	return `
		<div class="table">
			${obj.firstName ? `<div class="table__row">Имя: <strong>${obj.firstName}</strong></div>` : ''}
			${obj.lastName ? `<div class="table__row">Фамилия: <strong>${obj.lastName}</strong></div>` : ''}
			${obj.birthday ? `<div class="table__row">Дата рождения: <strong>${obj.birthday}</strong></div>` : ''}
			${cities[obj.city] ? `<div class="table__row">Город: <strong>${cities[obj.city]}</strong></div>` : ''}
			${obj.address ? `<div class="table__row">address: <strong>${obj.address}</strong></div>` : ''}
			${obj.languages.length ? `<div class="table__row">Языки: <strong>${obj.languages.join(', ')}</strong></div>` : ''}
		</div>
	`
}

const formInit = () => {
	const table = document.querySelector('.table');
	const button = document.querySelector('button');
	const form = document.forms.register;

	table.classList.add('hidden');

	button.addEventListener('click', () => {
		const formData = {
			firstName: form.firstname.value,
			lastName: form.lastname.value,
			birthday: form.birthday.value,
			city: [...form.city].find(el => el.selected).value,
			address: form.address.value,
			languages: [...form.language].filter(el => el.checked).map(el => el.value),
		}

		const html = renderTable(formData);

		if (html !== null) {
			table.innerHTML = '';
			table.classList.remove('hidden');
			table.insertAdjacentHTML('beforeend', html);
		}
	});
}

formInit();