function monthOfTheYear (date = new Date()) {
	const months = [
  	'January',   'February',
  	'March',     'April',
  	'May',       'June',
  	'July',      'August',
  	'September', 'October',
  	'November',  'December'
	];

	const fullNameOfMonth = new Intl.DateTimeFormat('en-US', {month: 'long'}).format(date);
	return months[date.getMonth()];
}

console.log(monthOfTheYear());

try {
	document.getElementById('month').innerHTML = monthOfTheYear();
} catch(err) {}

module.exports = monthOfTheYear;
