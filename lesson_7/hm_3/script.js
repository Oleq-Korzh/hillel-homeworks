function inputMoreThanHundred() {
	let lastInput;

	for (let i = 0; i < 10; i++) {
		const userInput = +prompt('Введите число больше 100', '');
		lastInput = userInput;

		if (userInput > 100) {
			return lastInput
		}
	}

	return lastInput;
}

const result = inputMoreThanHundred();

console.log(result);
