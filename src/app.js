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

try {
	setInterval(() => {
		// Returns a random integer from 0 to 11:
		const random = Math.floor(Math.random() * 10) + 2;
		const randomMonth = monthOfTheYear(new Date(2022, random, 4));
		const currentMonth = monthOfTheYear();
		const monthSpan = document.getElementById('month');

		if(randomMonth === currentMonth) {
			monthSpan.innerHTML = `is ${randomMonth}`;
			monthSpan.style.cssText = "color: #FFC92F;";
		} else {
			monthSpan.innerHTML = `is not ${randomMonth}`;
			monthSpan.style.cssText = "color: red;";
		}
	}, 3000);
} catch(err) {}

module.exports = monthOfTheYear;
