function inputMoreThanHundred() {
	let lastInput = 'Пользователь ничего не ввёл';

	for (let i = 0; i < 10; i++) {
		const userInput = prompt('Введите число больше 100', '').trim();
		const isNumber = Number(userInput);

		if (userInput === null) {
			return lastInput;
		}

		if (userInput === '') {
			continue;
		}

		lastInput = userInput;

		if (!isNaN(isNumber)) {
			if (isNumber > 100) {
				return isNumber;
			} 

			continue;
		} else {
			return lastInput;
		}
	}

	return lastInput;
}

const result = inputMoreThanHundred();

console.log(result);
