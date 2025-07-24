const inputName = prompt("ім'я користувача", "");

// Считается ли хорошей практикой так писать? По моим ощущениям не очень
alert(inputName ? `Hello, ${inputName}! How are you?` : "Ви не ввели ім'я:(");

// Способ обычный

// const inputName = prompt("ім'я користувача", "");

// if (inputName) {
// 	alert(`Hello, ${inputName}! How are you?`);
// } else {
// 	alert("Ви не ввели ім'я:(");
// }