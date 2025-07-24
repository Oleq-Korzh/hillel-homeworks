// First task
const firstNum = parseInt(prompt('Ввведите первое число'), '');
const secondNum = parseInt(prompt('Ввведите второе число'), '');
let message = null;

if (isNaN(firstNum) || isNaN(secondNum)) {
  alert('Ошибка, вы ввели не число!');
} else if (firstNum > secondNum) {
  message = `Первое число больше: ${firstNum}`;
} else if (firstNum === secondNum) {
  message = 'Числа равны';
} else {
  message = `Второе число больше: ${secondNum}`;
}

// Second task
// const distanceKm = parseInt(prompt('Ввведите второе в км'), '');
// const distanceFeet = parseInt(prompt('Ввведите расстояние в футах'), '');
//
// const kmToMetr = distanceKm * 1000;
// const feetToMetr = distanceFeet * 0.305;
//
// if (kmToMetr > feetToMetr) {
//   alert(`Км больше чем foot на ${kmToMetr - feetToMetr} метров`);
// } else if (kmToMetr === feetToMetr) {
//   alert(`Они равны`);
// } else {
//   alert(`Фут больше чем км на ${feetToMetr - kmToMetr} метров`);
// }

// Third task

// const a = parseInt(prompt('Ввведите первое число'), '');
// const b = parseInt(prompt('Ввведите второе число'), '');
//
// if (a > b) {
//   if (a % b === 0) {
//     alert(`Число ${b} является делителем ${a}`);
//   } else {
//     alert(`Число ${b} не является делителем ${a}`);
//   }
// } else if (b > a) {
//   if (b % a === 0) {
//     alert(`Число ${a} является делителем ${b}`);
//   } else {
//     alert(`Число ${a} не является делителем ${b}`);
//   }
// } else {
//   alert('Ошибка');
// }

// Fourth task

// const num = parseInt(prompt('Введите число', ''));
//
// if (!isNaN(num)) {
//   const lastNum = num % 10;
//
//   if (lastNum % 2 === 0) {
//     alert(`Число ${lastNum} является чётным`);
//   } else {
//     alert(`Число ${lastNum} НЕ является чётным`);
//   }
// } else {
//   alert('Ошибка, введите число');
// }

// Fifth task

// const num = parseInt(prompt('Введите двозначное число'), '');
//
// if(!isNaN(num)) {
//   const firstDigit = num % 10;
//   const secondDigit = Math.floor((num / 10) % 10);
//
//   if(firstDigit > secondDigit) {
//     alert(`Первая цифра ${firstDigit} > чем вторая ${secondDigit}`);
//   } else if (firstDigit === secondDigit) {
//     alert('Цифры равны');
//   } else {
//     alert(`Вторая цифра ${secondDigit} > чем первая ${firstDigit}`);
//   }
// }

// Sixth task

// const num = parseInt(prompt('Введите тризначне число'), '');
//
// if (!isNaN(num)) {
//   const firstDigit = Math.floor((num / 100) % 10);
//   const secondDigit = Math.floor((num / 10) % 10);
//   const thirdDigit = num % 10;
//
//   const sum = firstDigit + secondDigit + thirdDigit;
//
//   if (sum % 2 === 0) {
//     alert(`Сума числ ${firstDigit} + ${secondDigit} + ${thirdDigit} = ${sum} и является парными`);
//   } else {
//     alert(`Сума числ ${firstDigit} + ${secondDigit} + ${thirdDigit} = ${sum} и НЕ является парными`);
//   }
//
//   if (sum % 5 === 0) {
//     alert(`Сума числ ${firstDigit} + ${secondDigit} + ${thirdDigit} = ${sum} и является кратной 5`);
//   } else {
//     alert(`Сума числ ${firstDigit} + ${secondDigit} + ${thirdDigit} = ${sum} и НЕ является кратной 5`);
//   }
//
//   if (sum > 100) {
//     alert(`Сума числ ${firstDigit} + ${secondDigit} + ${thirdDigit} = ${sum} и больше 100`);
//   } else {
//     alert(`Сума числ ${firstDigit} + ${secondDigit} + ${thirdDigit} = ${sum} не больше 100`);
//   }
//
//   if (firstDigit === secondDigit && secondDigit === thirdDigit) {
//     alert(`Все числа равны, используется цифра ${firstDigit}`);
//   } else {
//     alert('Числа не равны');
//   }
//
//   if (firstDigit === secondDigit || firstDigit === thirdDigit || secondDigit === thirdDigit) {
//     alert('Среди числа есть одинаковые цифры');
//   } else {
//     alert('Среди чисел нет одинаковых');
//   }
// }

// Seventh task

// const num = parseInt(prompt('Введите шестизначное число'), '');
//
// if (!isNaN(num)) {
//   const firstDigit = Math.floor((num / 100000) % 10);
//   const secondDigit = Math.floor((num / 10000) % 10);
//   const thirdDigit = Math.floor((num / 1000) % 10);
//   const fourthDigit = Math.floor((num / 100) % 10);
//   const fifthDigit = Math.floor((num / 10) % 10);
//   const sixthDigit = num % 10;
//
//   const firstHalf = `${thirdDigit}${secondDigit}${firstDigit}`;
//   const secondHalf = `${fourthDigit}${fifthDigit}${sixthDigit}`;
//   const total = firstHalf + secondHalf;
//
//   if(firstHalf === secondHalf) {
//     alert(`Число зеркальное ${total}`);
//   } else {
//     alert(`Число не есть зеркальным ${total}`);
//   }
// }
