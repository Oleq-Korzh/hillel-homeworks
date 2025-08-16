// 5. Фильтрация и группировка по первой букве

const words = ["apple", "banana", "avocado", "blueberry", "apricot"];

// Задание:

// 1. С помощью filter оставить только слова, начинающиеся на букву "a".

const wordsStartWithA = words.filter(el => el[0].toLowerCase() === 'a');

// console.log(wordsStartWithA);

// 2. С помощью reduce сгруппировать все слова по первой букве в объект, где ключ — буква, значение — массив слов.

const wordsObj = words.reduce((acc, current) => {
	acc[current[0]] ? acc[current[0]].push(current) : acc[current[0]] = [current];
	return acc;
}, {});

console.log(wordsObj);

