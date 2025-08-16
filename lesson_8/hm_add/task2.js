// 2. Список студентов и средний балл

const students = [{
		name: "Аня",
		grades: [5, 4, 4, 5]
	},
	{
		name: "Петя",
		grades: [3, 4, 4, 3]
	},
	{
		name: "Ира",
		grades: [5, 5, 5, 5]
	},
];

// Задание:

// 1. Используя map и стрелочные функции, получить массив объектов с именем и средним баллом студента.

const studentsAverageArray = students.map(student => {
	return {
		name: student.name,
		average: Math.round(student.grades.reduce((acc, current) => acc+current, 0) / student.grades.length),
	}
})

console.log(studentsAverageArray);

// 2. Отфильтровать тех, у кого средний балл меньше 4.5.

const studentsOverFour = studentsAverageArray.filter(el => el.average > 4);

console.log(studentsOverFour);
