const user = {
    username: "Yash",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website.`)
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)



// const one = function(){
//     let username = "Rocky"
//     console.log(this.username)
// }

const one = () => {
    let username = "Rocky"
    console.log(this.username)
}

// one()



// three ways to write arrow function
// 1
// const add = (num1, num2) => {
//     return num1 + num2
// }

// 2
// const add = (num1, num2) => num1+num2

// 3
// const add = (num1, num2) => (num1+num2)

const add = (num1, num2) => ({username: "tom"})
console.log(add(3, 5))









