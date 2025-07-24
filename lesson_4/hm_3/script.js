const firstCapital = 'Київ';
const secondCapital = 'Вашингтон';
const thirdCapital = 'Лондон';

const firstSport = 'Футбол';
const firstSportsman = 'Ліонель Мессі';

const secondSport = 'Бокс';
const secondSportsman = 'Олександр Усик';

const thirdSport = 'Баскетбол';
const thirdSportsman = 'Майкл Джордан';

const userBirthday = prompt('Ваш рік народження', '');

if (userBirthday === null || userBirthday.trim() === '') {
	alert('Шкода, що Ви не захотіли ввести свій рік народження');
} else {
	alert(`Твій рік народження ${userBirthday}`);
}

const userCity = prompt('Вкажіть ваше місто', '');

if (userCity === null || userCity.trim() === '') {
	alert(`Шкода, що Ви не захотіли ввести своє місто`);
} else if (userCity === firstCapital || userCity === secondCapital || userCity === thirdCapital) {
	alert(`Ти живеш у столиці ${userCity}`);
} else {
	alert(`Ти живеш у місті ${userCity}`);
}

const userSport = prompt('Введіть ваш улюблений спорт', '');

if (userSport === null || userSport.trim() === '') {
	alert(`Шкода, що Ви не захотіли ввести свій улюбленний спорт`);
} else {
	if (userSport === firstSport) {
		alert(`Круто! Ваш улюбленний спорт ${firstSport}. Хочеш стати як ${firstSportsman}?`);
	} else if (userSport === secondSport) {
		alert(`Круто! Ваш улюбленний спорт ${secondSport}. Хочеш стати як ${secondSportsman}?`);
	} else if (userSport === thirdSport) {
		alert(`Круто! Ваш улюбленний спорт ${thirdSport}. Хочеш стати як ${thirdSportsman}?`);
	} else {
		alert(`Твій улюбленний спорт ${userSport}`);
	}
}

// Можно было бы оптимизировать код тем, что данные хранить в объектах (стукртурировать), и сделать функцию для получения значения/вывода ошибки