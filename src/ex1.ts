// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:

//   sumDigits(10);  // Returns 1
//   sumDigits(99);  // Returns 18
//   sumDigits(-32); // Returns 5

function sumDigits(n: number): number {
	const number = Math.abs(n)
		.toString()
		.split("")
		.reduce((a, b) => a + +b, 0)
	// console.log(number);
	return number
}

sumDigits(10) // Returns 1
sumDigits(99) // Returns 18
sumDigits(-32) // Returns 5
