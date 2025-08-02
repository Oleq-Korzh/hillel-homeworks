let userArrayLength;
let isStop = false;

do {
	userArrayLength = parseInt(prompt('Введите длину массива (число)'));

} while (isNaN(userArrayLength));

const array = [];

for (let i = 0; i < userArrayLength; i++) {
	let userArrayValue;

	do {
		userArrayValue = parseInt(prompt(`Нужно ввести ${userArrayLength} числовых элементов. Введите элемент №${i + 1}.`));

		if (!isNaN(userArrayValue)) {
			array.push(userArrayValue);
		}

	} while (isNaN(userArrayValue));
}

document.write(`<div>Текущий список чисел [${array}]</div>`);

array.sort((a, b) => a - b);

document.write(`<div>Отсортированный массив [${array}]</div>`);

if (array.length >= 4) {
	array.splice(1, 3);

	document.write(`<div>Удалили 2-4 элемент из массива [${array}]</div>`);
}