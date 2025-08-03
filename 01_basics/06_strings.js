const name = "yash"
const repoCount = 50

// console.log(name + " " + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('yash-Game')

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))
console.log(gameName.indexOf('s'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const str = new String("JavaScriptMaster");
const sliced = str.slice(-13, -3);
console.log(sliced);

const newStringOne = "     Yash   "
console.log(newStringOne.trim())

const url = "https://yash.com/yash%20patel"
console.log(url.replace('%20', '-'))

console.log(url.includes('hello'))

console.log(gameName.split('-'))    // string to array



