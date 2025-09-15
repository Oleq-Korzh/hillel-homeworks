function Student(firstName, lastName, age, ratingArr = []) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.ratingArr = ratingArr;
	const MAX_LESSONS = 25;
	const attendance = new Array(MAX_LESSONS);
	let increment = 0;

	this.present = () => {
		if (increment < MAX_LESSONS) {
			attendance[increment] = true;
			increment++;
		}
	};
	this.absent = () => {
		if (increment < MAX_LESSONS) {
			attendance[increment] = false;
			increment++;
		}
	};
	this.getAttendanceList = () => {
		return [...attendance];
	};
	this.summary = () => {
		const averageRating = this.countAverageFromArray(this.ratingArr);
		const averageAttendance = this.countAttendance(attendance);

		if (averageRating > 90 && averageAttendance > 0.9) {
			return 'Молодец!';
		} else if (averageRating > 90 || averageAttendance > 0.9) {
			return 'Добре, але можна краще';
		} else {
			return 'Редиска!';
		}
	}
}

Student.prototype = {
	getAge: function () {
		if (!this.age) {
			return 'Возраст ещё не добавили!';
		}

		return this.age;
	},
	getAverageRating: function () {
		if (!this.ratingArr.length) {
			return 'Оценок ещё нет!';
		}

		return this.countAverageFromArray(this.ratingArr);
	},
	countAverageFromArray: function (array) {
		return Math.round(array.reduce((a, b) => a + b, 0) / array.length);
	},
	countAttendance: function (array) {
		const attendanceObj = array.reduce((a, b) => {
			if (b === true) a.att += 1;
			if (b === false) a.notAtt += 1;

			return a;
		}, {
			att: 0,
			notAtt: 0
		});
		const totalLessons = attendanceObj.att + attendanceObj.notAtt;
		const attendanceAverage = totalLessons !== 0 ? attendanceObj.att / totalLessons : 0;

		return attendanceAverage;
	}
}

const student = new Student('Oleg', 'Korzh', 25, [100, 100, 100, 90, 100, 80, 100]);

console.log(student.getAge());
console.log(student.getAverageRating());

student.present();
student.present();
// student.absent();
student.present();
student.present();
// student.absent();
// student.absent();

console.log(student.getAttendanceList());
console.log(student.summary());;