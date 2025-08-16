// 3. Контекст this в объекте

const counter = {
	value: 0,
	increment() {
		setInterval(() => console.log(this.value++), 1000);
		// Здесь внутри вызвать setInterval с использованием стрелочной функции
	},
};

counter.increment();

// Задание:

/* Реализовать метод increment, который увеличивает value на 1 каждую секунду, 
используя стрелочную функцию внутри setInterval(придется погуглить этот метод) для сохранения контекста this.*/