// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

const domainName = (url: string) => {
	url = url.replace("www.", "").replace("https://", "").replace("http://", "")
	return url.split(".")[0]
}

console.log(domainName("https://www.cnet.com"))
console.log(domainName("www.xakep.ru"))
