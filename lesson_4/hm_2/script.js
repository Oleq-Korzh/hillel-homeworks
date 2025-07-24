// const NUM_THREE_DIGIT = 444;
// const numFirst = Math.floor(NUM_THREE_DIGIT / 100) % 10;
// const numSecond = Math.floor(NUM_THREE_DIGIT / 10) % 10;
// const numThird = NUM_THREE_DIGIT % 10;

// if (numFirst === numSecond && numSecond === numThird) {
// 	alert('Да, все цифры одинаковые!');
// } else if (numFirst === numSecond || numFirst === numThird || numSecond === numThird) {
// 	alert('Да, тут есть одинаковые цифры среди цифр!');
// } else {
// 	alert('Все цифры разные');
// }

const NUM_THREE_DIGIT = 421;
const numbersArray = [...String(NUM_THREE_DIGIT)].map(n => parseInt(n));
const isAll = numbersArray.every(n => n === numbersArray[0]);
const isSame = new Set(numbersArray).size != numbersArray.length;

if (isAll) {
	alert('Да, все цифры одинаковые!');
} else if (isSame) {
	alert('Да, тут есть одинаковые цифры среди цифр!');
} else {
	alert('Все цифры разные');
}