const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let sumPositiveDigit = 0;
let countPositiveDigit = 0;

let minDigit = array[0];
let minDigitIndex = 0;

let maxDigit = array[0];
let maxDigitIndex = 0;

let countNegativeDigit = 0;

let sumNoDoubleDigit = 0;
let sumDoubleDigit = 0;

let sumPositiveDoubleDigit = 0;
let sumPositiveNoDoubleDigit = 0;

let sumAdditionalDigit = 1;

for (let i = 0; i < array.length; i++) {
	if (i !== 0 && maxDigit < array[i]) {
		maxDigit = array[i];
		maxDigitIndex = i;
	}

	if (i !== 0 && minDigit > array[i]) {
		minDigit = array[i];
		minDigitIndex = i;
	}

	if (array[i] > 0) {
		sumPositiveDigit += array[i];
		countPositiveDigit += 1;
		sumAdditionalDigit *= array[i];

		if (array[i] % 2 === 0) {
			sumDoubleDigit += 1;
			sumPositiveDoubleDigit += array[i];
		} else {
			sumNoDoubleDigit += 1;
			sumPositiveNoDoubleDigit += array[i];
		}
	} else {
		countNegativeDigit += 1;
	}
}

document.write(`Текущий рабочий массив [${array}]`);

document.write(`
	<h3>Сума и количество положительных элементов</h3>
	<p>Сума: <strong>${sumPositiveDigit}</strong></p>
	<p>Количество: <strong>${countPositiveDigit}</strong></p>
	<br />
`);

document.write(`
	<h3>Минимальный элемент массива и его индекс</h3>
	<p>Минимальный элемент: <strong>${minDigit}</strong></p>
	<p>Индекс: <strong>${minDigitIndex}</strong></p>
	<br />
`);

document.write(`
	<h3>Максимальный элемент массива и его индекс</h3>
	<p>Максимальный элемент: <strong>${maxDigit}</strong></p>
	<p>Индекс: <strong>${maxDigitIndex}</strong></p>
	<br />
`);

document.write(`
	<h3>Количество отрицательных чисел</h3>
	<p>Количество: <strong>${countNegativeDigit}</strong></p>
	<br />
`);


document.write(`
	<h3>Количество нечетных чисел</h3>
	<p>Количество: <strong>${sumNoDoubleDigit}</strong></p>
	<br />
`);

document.write(`
	<h3>Количество чётных чисел</h3>
	<p>Количество: <strong>${sumDoubleDigit}</strong></p>
	<br />
`);

document.write(`
	<h3>Сума чётных положительных чисел</h3>
	<p>Количество: <strong>${sumPositiveDoubleDigit}</strong></p>
	<br />
`);

document.write(`
	<h3>Сума нечётных положительных чисел</h3>
	<p>Количество: <strong>${sumPositiveNoDoubleDigit}</strong></p>
	<br />
`);

document.write(`
	<h3>Умноженное число</h3>
	<p>Число: <strong>${sumAdditionalDigit}</strong></p>
	<br />
`);

for (let i = 0; i < array.length; i++) {
	if (i === maxDigitIndex) {
		continue;
	}

	array[i] = 0;
}

document.write(`Изменённый массив [${array}]`);
