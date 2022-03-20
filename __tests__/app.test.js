const monthOfTheYear = require('../src/app');

test('Return the full name of current month', () => {
	expect(monthOfTheYear(new Date(2022, 2, 20))).toBe('March');
});

test('Return the full name of current month', () => {
	expect(monthOfTheYear(new Date(2022, 3, 20))).toBe('April');
});

test('Return the full name of current month', () => {
	expect(monthOfTheYear(new Date(2022, 11, 20))).toBe('December');
});
