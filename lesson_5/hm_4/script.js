const numInput = parseInt(prompt('Введите число', ''));

if (numInput > 1) {
	let isSimple = true;

	for (let i = 2; i < numInput; i++) {

		if (numInput % i === 0) {
			isSimple = false;
		}
	}
}

console.log(isSimple ? 'число простое' : 'число НЕ простое');