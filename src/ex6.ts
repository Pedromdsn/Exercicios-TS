// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

//     i increments the value (initially 0)
//     d decrements the value
//     s squares the value
//     o outputs the value into the return array

// Invalid characters should be ignored.

// parse("iiisdoso") => [8, 64]

export function parse(data: string) {
	let soma = 0
	const array = []
	for (const i of data.split("")) {
		switch (i) {
			case "i":
				soma += 1
				break
			case "d":
				soma -= 1
				break
			case "s":
				soma *= soma
				break
			case "o":
				array.push(soma)
				break
		}
	}
	return array
}

console.log(parse("iiisdoso"))
