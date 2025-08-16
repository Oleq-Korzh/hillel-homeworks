// Дан массив объектов с книгами:

const books = [{
		title: "JS для начинающих",
		price: 500,
		genre: "programming"
	},
	{
		title: "CSS в деталях",
		price: 300,
		genre: "design"
	},
	{
		title: "React быстро",
		price: 800,
		genre: "programming"
	},
	{
		title: "Всё про JS",
		price: 1200,
		genre: "programming"
	},
];

// Задание:

// 1. С помощью filter выбрать только книги жанра "programming".
const programmingBooks = books.filter(el => el.genre === 'programming');

console.log(programmingBooks);

// 2. С помощью map получить массив только с названиями этих книг.

const booksNameArray = books.map(el => el.title);

console.log(booksNameArray);

// 3. С помощью reduce посчитать общую стоимость выбранных книг.

const totalCost = books.reduce((acc, current) => acc += current.price, 0);

console.log(totalCost);