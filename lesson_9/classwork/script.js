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

// console.log(users);
// console.log(usersWithTotal);
// console.log(uniqueProducts);
// console.log(`${userSpentMost.user} потратил больше всех $${userSpentMost.totalSum}`);

// MAP

const getValuesOfOrdersEachUsers = (orders) => {
	if (orders.length === 0) {
		return;
	}

	return orders.reduce((acc, current) => {

		if (acc.has(current.user)) {
			acc.set(current.user, acc.get(current.user) + current.items.length);
		} else {
			acc.set(current.user, current.items.length);
		}

		return acc;

	}, new Map());
}

const getSumEachUsers = (orders) => {
	if (orders.length === 0) {
		return;
	}

	return orders.reduce((acc, current) => {
		if (acc.has(current.user)) {
			acc.set(current.user, acc.get(current.user) + current.items.reduce((a, c) => a += c.price, 0));
		} else {
			acc.set(current.user, current.items.reduce((a, c) => a += c.price, 0));
		}	

		return acc;
	}, new Map());
}

const getUniqueProductsWithSet = (orders) => {
	if (orders.length === 0) {
		return;
	}

	// Пришёл к менее избыточному решению чем выше

	return orders.reduce((acc, current) => {
		current.items.forEach(element => {
			acc.add(element.name);
		});

		return acc;
	}, new Set());
}

const getUserWhoSpentMostMap = (users) => {
	if (users.size === 0) {
		return;
	}

	return [...users].reduce((acc, current) => {
		return current[1] > acc[1] ? current : acc;
	});
}

const resultOrders = getValuesOfOrdersEachUsers(orders);
const sumEachUsers = getSumEachUsers(orders);
const uniqueProductsSet = getUniqueProductsWithSet(orders);
const userSpentMostMap = getUserWhoSpentMostMap(sumEachUsers);
console.log(`${userSpentMostMap[0]} потратил больше всех $${userSpentMostMap[1]}`);