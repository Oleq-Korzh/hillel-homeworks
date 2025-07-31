// function removeCharsFromString(string, array) {
// 	let str = '';

// 	for (let i = 0; i < string.length; i++) {
// 		let shouldKeep = true;

// 		for (let j = 0; j < array.length; j++) {
// 			if (string[i] === array[j]) {
// 				shouldKeep = false;
// 			}
// 		}

// 		if (shouldKeep) {
// 			str += string[i];
// 		}
// 	}

// 	return str;
// }

function removeCharsFromString(string, array) {
	return [...string].filter(el => !array.includes(el)).join('');
}

const newString = removeCharsFromString('hello world', ['l', 'd']);

console.log(newString);

