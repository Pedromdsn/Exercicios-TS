// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

//     Only lower case letters will be used (a-z). No punctuation or digits will be included.
//     Performance needs to be considered

// Input strings s1 and s2 are null terminated.

// Examples

// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

const scramble = (str1: string, str2: string) => {
	let count = Object.create(null)
	str1.split("").forEach((e) => {
		count[e] = (count[e] || 0) + 1
	})
	return str2.split("").every(e => count[e]--)
	
}

console.log(scramble("rkqodlw", "world"))
console.log(scramble("katasa", "steak"))
console.log(scramble("a", "aa"));

