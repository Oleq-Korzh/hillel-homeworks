// у меня фантазия не большая, поэтому сгенерировал массив contacts через GPT

const phoneBook = {
	contacts: [{
			name: "John Smith",
			phone: "+380501234001",
			email: "john.smith@example.com"
		},
		{
			name: "Emma Johnson",
			phone: "+380501234002",
			email: "emma.johnson@example.com"
		},
		{
			name: "Michael Brown",
			phone: "+380501234003",
			email: "michael.brown@example.com"
		},
		{
			name: "Olivia Davis",
			phone: "+380501234004",
			email: "olivia.davis@example.com"
		},
		{
			name: "Daniel Wilson",
			phone: "+380501234005",
			email: "daniel.wilson@example.com"
		},
		{
			name: "Sophia Taylor",
			phone: "+380501234006",
			email: "sophia.taylor@example.com"
		},
		{
			name: "James Anderson",
			phone: "+380501234007",
			email: "james.anderson@example.com"
		},
		{
			name: "Ava Thomas",
			phone: "+380501234008",
			email: "ava.thomas@example.com"
		},
		{
			name: "William Moore",
			phone: "+380501234009",
			email: "william.moore@example.com"
		},
		{
			name: "Isabella Martin",
			phone: "+380501234010",
			email: "isabella.martin@example.com"
		},
		{
			name: "Benjamin Lee",
			phone: "+380501234011",
			email: "benjamin.lee@example.com"
		},
		{
			name: "Mia Harris",
			phone: "+380501234012",
			email: "mia.harris@example.com"
		},
		{
			name: "Ethan Clark",
			phone: "+380501234013",
			email: "ethan.clark@example.com"
		},
		{
			name: "Charlotte Lewis",
			phone: "+380501234014",
			email: "charlotte.lewis@example.com"
		},
		{
			name: "Alexander Walker",
			phone: "+380501234015",
			email: "alexander.walker@example.com"
		},
		{
			name: "Amelia Hall",
			phone: "+380501234016",
			email: "amelia.hall@example.com"
		},
		{
			name: "Henry Allen",
			phone: "+380501234017",
			email: "henry.allen@example.com"
		},
		{
			name: "Harper Young",
			phone: "+380501234018",
			email: "harper.young@example.com"
		},
		{
			name: "Lucas King",
			phone: "+380501234019",
			email: "lucas.king@example.com"
		},
		{
			name: "Evelyn Scott",
			phone: "+380501234020",
			email: "evelyn.scott@example.com"
		},
		{
			name: "David Green",
			phone: "+380501234021",
			email: "david.green@example.com"
		},
		{
			name: "Abigail Baker",
			phone: "+380501234022",
			email: "abigail.baker@example.com"
		},
		{
			name: "Matthew Adams",
			phone: "+380501234023",
			email: "matthew.adams@example.com"
		},
		{
			name: "Ella Nelson",
			phone: "+380501234024",
			email: "ella.nelson@example.com"
		},
		{
			name: "Joseph Carter",
			phone: "+380501234025",
			email: "joseph.carter@example.com"
		},
		{
			name: "Lily Mitchell",
			phone: "+380501234026",
			email: "lily.mitchell@example.com"
		},
		{
			name: "Samuel Perez",
			phone: "+380501234027",
			email: "samuel.perez@example.com"
		},
		{
			name: "Grace Roberts",
			phone: "+380501234028",
			email: "grace.roberts@example.com"
		},
		{
			name: "Christopher Turner",
			phone: "+380501234029",
			email: "chris.turner@example.com"
		},
		{
			name: "Victoria Phillips",
			phone: "+380501234030",
			email: "victoria.phillips@example.com"
		}
	],
	setNewUser({
		name,
		phone,
		email
	}) {

		// Понятное дело, что в реальных проектах будет сложная валидация через библиотеки и тд, но я сделаю что мы хотя бы что-то ввели
		if (!name.trim().length || !phone.trim().length || !email.trim().length) {
			return 'Вы ввели не все данные';
		}

		this.contacts.push({
			name,
			phone,
			email
		});
	},
	getUserByName(name) {
		if (!name.trim().length) {
			return 'Введите имя!!!';
		}

		return this.contacts.find(user => user.name.split(' ')[0].toLowerCase() === name.toLowerCase()) || 'Такого юзера нет';
	}
};

phoneBook.setNewUser({
	name: 'Test',
	phone: '0509999999',
	email: 'test@gmail.com'
});

console.log(phoneBook.contacts);

console.log(phoneBook.getUserByName('Grace'));
