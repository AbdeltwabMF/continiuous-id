function sum(a, b, c) {
	return a + (b || null) + (c || null);
}

console.log(sum(1, 2, 3));

module.exports = sum;
