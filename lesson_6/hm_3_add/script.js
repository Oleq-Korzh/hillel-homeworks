// const arrayOfNumbersEver2000 = [];
// let sumOfBalanceAllUsers = 0;

// for (let i = 0; i < users.length; i++) {
// 	const {
// 		balance,
// 		phone
// 	} = users[i];

// 	if (balance >= 2000) {
// 		arrayOfNumbersEver2000.push(phone);
// 	}

// 	sumOfBalanceAllUsers += balance;
// }

// console.log(arrayOfNumbersEver2000);
// console.log(sumOfBalanceAllUsers);

const arrayOfNumbersEver2000 = users.filter(({balance}) => balance > 2000).map(({phone}) => phone);
const sumOfBalanceAllUsers = users.reduce((acc, {balance}) => acc+balance, 0);
console.log(arrayOfNumbersEver2000);
console.log(sumOfBalanceAllUsers);

