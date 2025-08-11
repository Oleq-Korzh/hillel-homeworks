function addToSum() {
	let sum = 0;

	return function (val) {
		if (!isNaN(val)) {
			return sum += val;
		}
	}
}

const sum1 = addToSum();
console.log(sum1(5));
console.log(sum1(5));
console.log(sum1(3));