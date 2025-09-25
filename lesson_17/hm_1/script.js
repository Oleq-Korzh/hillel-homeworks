class Calculator {
	constructor() {
		this.lastValue = null;
	}

	static validateNumbers(a, b) {
		return !isNaN(a) && !isNaN(b);
	}

	getValue(a, b, separator) {
		if (!Calculator.validateNumbers(a, b)) {
			return 'Введите корректное число!';
		}

		let math = null;
		const firstNum = parseInt(a);
		const secondNum = parseInt(b);

		switch (separator) {
			case '+': {
				math = firstNum + secondNum;
				break;
			}
			case '-': {
				math = firstNum - secondNum;
				break;
			}
			case '*': {
				math = firstNum * secondNum;
				break;
			}
			case '/': {
				math = firstNum / secondNum;
			}
		}

		this.lastValue = math;

		return math;
	}

	add(a, b) {
		return this.getValue(a, b, '+');
	}

	subtract(a, b) {
		return this.getValue(a, b, '-');
	}

	multiply(a, b) {
		return this.getValue(a, b, '*');
	}

	divide(a, b) {
		return this.getValue(a, b, '/');
	}
}

const calc = new Calculator();

console.log(calc.add(2, '5'));