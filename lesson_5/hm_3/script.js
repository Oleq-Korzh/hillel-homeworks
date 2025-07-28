const numInput = parseInt(prompt('Введите число', ''));

for (let i = 1; i <= 100; i++) {
	const x = i * i;

	if (x <= numInput) {
		console.log(i);
	}
}