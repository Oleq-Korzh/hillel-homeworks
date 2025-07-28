const UAH_CURRENCY = 26;

for (let i = 10; i <= 100; i+= 10) {
	console.log(`${i}$ переводим в гривны... Это будет ${i * UAH_CURRENCY}грн`);
}