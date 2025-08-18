console.log(orders);

const structuredUsers = (orders) => {
	if (orders.length === 0) {
		return;
	}

	return Object.values(orders.reduce((acc, current) => {
		const userName = current.user;
		if (acc[userName]) {
			acc[userName].items = [...acc[userName].items, ...current.items];
		} else {
			acc[userName] = structuredClone(current);
		}

		return acc;
	}, {}));
}

const addTotalSumToUser = (users) => {
	if (users.length === 0) {
		return;
	}

	return users.map(obj => {
		return {
			...obj,
			items: [...obj.items],
			totalSum: obj.items.reduce((acc, current) => acc + current.price, 0),
		}
	});
}

const getUniqueProducts = (users) => {
	if (users.length === 0) {
		return;
	}

	return new Set(users.reduce((acc, current) => {
		return [...acc, ...current.items];
	}, []).map(el => el.name));
}

const getUserWhoSpentMost = (users) => {
	if (users.length === 0) {
		return;
	}

	return users.reduce((acc, current) => {
		return acc.totalSum < current.totalSum ? current : acc;
	});
}

const users = structuredUsers(orders);
const usersWithTotal = addTotalSumToUser(users);
const uniqueProducts = getUniqueProducts(usersWithTotal);
const userSpentMost = getUserWhoSpentMost(usersWithTotal);

console.log(users);
console.log(usersWithTotal);
console.log(uniqueProducts);
console.log(`${userSpentMost.user} потратил больше всех $${userSpentMost.totalSum}`);