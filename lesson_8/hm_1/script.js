let ladder = {
	step: 0,
	up: function () {
		this.step += 1;
		return this;
	},
	down: function () {
		if (this.step > 0) {
			this.step -= 1;
		}

		return this;
	},
	showStep: function () {
		console.log(this.step);
		return this;
	}
};

ladder.up().up().down().showStep();