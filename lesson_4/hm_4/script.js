let numOrStr = prompt('input number or string');
let message = '';

if (numOrStr === null) {
	message = 'ви скасували';
} else if (numOrStr.trim() === '') {
	message = 'Empty String';
} else if (isNaN(+numOrStr)) {
	message = ' number is Ba_NaN';
} else {
	message = 'OK!';
}

switch (message) {
	case 'ви скасували': 
		console.log('ви скасували');
		break;
	case 'Empty String':
		console.log('Empty String');
		break;
	case ' number is Ba_NaN': 
		console.log(' number is Ba_NaN');
		break;
	default:
		console.log('OK!'); // Break не обязателен
}

// Я не придумал, как в свитче проверить isNan, наверное никак