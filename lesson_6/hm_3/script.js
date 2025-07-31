// function removeElement(array, item) {
// 	const arr = [];
// 	let index = 0;

// 	for (let i = 0; i < array.length; i++) {
// 		if (array[i] !== item) {
// 			arr[index] = array[i];
// 			index++; // можно было и пуш, но если уже без методов, то пусть будет так
// 		}
// 	}

// 	return arr;
// }

// function removeElement(array, item) { // Сначала в голову пришёл этот способ, но как по мне он не очень, подойдёт лишь для поиска и удаления только одного вхождения
// 	array.splice(array.indexOf(item), 1); // Если у нас будет вхождений несколько, то не подходит такой способ
// 	return array;
// }

function removeElement(array, item) {
	return array.filter(el => el !== item);
}

const result = removeElement([1, 3, 4, 6, 2, 5, 7], 4);

console.log(result);
