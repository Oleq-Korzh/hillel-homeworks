const user = {
	firstName: 'Олег',
	lastName: 'Корж',
	age: 25,
	city: 'Харьков',
	country: 'Украина',
	hobbies: ['спортзал', 'программирование', 'шахматы', 'изучение чего-нибудь нового', 'Япония и её культура', 'прогулки на велосипедах'],

	getFullName() {
		return `Меня зовут ${this.firstName} ${this.lastName}`
	},
	getAge() {
		return `Мне ${this.age} лет`;
	},
	getLiving() {
		return `Я живу в городе ${this.city}, страна ${this.country}`
	},
	getHobbiesList() {
		if (!this.hobbies.length) {
			return `Мои хобби: ${[...this.hobbies]}`;
		} else {
			return 'У меня нет хобби:(';
		}
	}
}
console.log(user.getFullName());
console.log(user.getAge());
console.log(user.getLiving());
console.log(user.getHobbiesList());