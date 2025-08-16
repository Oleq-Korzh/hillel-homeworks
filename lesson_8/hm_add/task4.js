// 4. Преобразование данных о товарах

const items = [{
		name: "apple",
		quantity: 2,
		price: 30
	},
	{
		name: "banana",
		quantity: 5,
		price: 10
	},
	{
		name: "orange",
		quantity: 3,
		price: 20
	},
];

// Задание:

// 1. С помощью map создать новый массив, где к каждому товару добавлено поле total = quantity * price.

const itemsWithTotal = items.map(el => ({
	...el,
	total: el.price * el.quantity
}));

console.log(itemsWithTotal);

// 2. С помощью reduce найти общую стоимость всех товаров.

const totalCost = itemsWithTotal.reduce((acc, current) => acc += current.total, 0);

console.log(totalCost);
