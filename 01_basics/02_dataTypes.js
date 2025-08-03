// alert(3+3)   // we are using nodejs, not browser

const { useOptimistic } = require("react")

let name = "YASH"
let age = 19
let isLoggedIn = true

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => value not assigned
// symbol => unique
// object

console.log(typeof "yash") // string
console.log(typeof 18) // number
console.log(typeof null) // object
console.log(typeof undefined) // undefined




// two types of datatype in js

// primitive
// 7 types: string, number, boolean, null, undefined, symbol, bigInt

const score = 100
const scoreValue = 100.3

const loggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 3654688086543654n   // bigInt




// Non primitive (Reference)

// Array, Objects, Functions

const heroes = ["Thor", "Ironman", "Superman"]

let myObj = {
    name: "Yash",
    age: "19"
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heroes);
console.log(typeof myObj);
console.log(typeof myFunction);








