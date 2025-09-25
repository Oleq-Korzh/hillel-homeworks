class Coach {
	constructor(name, spec, rating) {
		this._name = Coach.stringValidate(name);
		this.spec = Coach.stringValidate(spec);
		this.rating = Coach.ratingValidate(rating);
	}

	static regexes = {
		name: /^[A-Za-z\s]+$/,
	}

	static stringValidate(name) {
		if (typeof name === 'string' && Coach.regexes.name.test(name)) {
			return name;
		}

		return null;
	}

	static ratingValidate(rating) {
		if (!isNaN(parseFloat(rating))) {
			return rating;
		}

		return null;
	}

	displayInfo() {
		return `Coach: ${this._name}, Specialization: ${this.spec}, Rating: ${this.rating}`
	}
}

const coach1 = new Coach('Oleg Korzh', 'fitness', '4.3');

console.log(coach1.displayInfo());
