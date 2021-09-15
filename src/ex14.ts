// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

const high = (x: string) => {
	const words = x.split(" ")
	const score = words.map((e) => e.split("").reduce((a, b) => a + b.charCodeAt(0) - "a".charCodeAt(0) + 1, 0))
	const maxScore = score.indexOf(Math.max(...score))
	return words[maxScore]
}

console.log(high("man i need a taxi up to ubud")) //taxi
