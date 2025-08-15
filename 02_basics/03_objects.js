// Singleton
// 

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Yash",
    "full name": "Hitesh Choudhary",
    age: 19,
    [mySym]: "mykey1",
    email: "yash@google.com",
    location: "Gujarat",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof mySym)

JsUser.email = "yash@chatgpt.com"
//Object.freeze(JsUser)     // Using this we can't change any value
JsUser.email = "yash@microsoft.com"
//console.log(JsUser)



JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())

















