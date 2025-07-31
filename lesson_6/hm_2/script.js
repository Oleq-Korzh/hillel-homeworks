// function getNumbersAverageFromArray(array) {
// 	const arrayLength = array.length; // Кстати, для небольшой оптимизации можем закешировать длинну массива, чтобы при каждой итерации не обращаться к свойству массива
// 	let arraySum = 0;

// 	for (let i = 0; i < arrayLength; i++) {
// 		if (typeof array[i] === 'number') {
// 			arraySum += array[i];
// 		}
// 	}

// 	return Math.round(arraySum / arrayLength); // Среднее арифметичное вроде бы может быть только целым
// }

function getNumbersAverageFromArray(array) {
	return Math.round(array.reduce((acc, current) => typeof current === 'number' ? acc += current : acc += 0, 0) / array.length);
}

const result = getNumbersAverageFromArray([1, 2, 3, 4, 5, 6, 'test', 4, 'Oleg']);

console.log(result);