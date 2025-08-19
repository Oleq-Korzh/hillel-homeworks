function deepSearchAllSalary(obj, value) {
	const array = Array.isArray(obj) ? obj : Object.values(obj);
	let acc = 0; 

	for (let el of array) {
		if (el.salary) {
			acc += el.salary;
		} else if (typeof el === 'object') {
			acc += deepSearchAllSalary(el);
		}
	}

	return acc;
}

const result = deepSearchAllSalary(company);

console.log(result);