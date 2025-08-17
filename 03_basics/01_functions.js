function sayMyName(){
    console.log("Y")
    console.log("a")
    console.log("s")
    console.log("h")
}

//sayMyName()




// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }
function addTwoNumbers(number1, number2){
    return number1+number2
}

const result = addTwoNumbers(3,6)
//console.log("Result: ", result)



function loginUserMesaage(username){
    if(!username){
        console.log("Please enter a username: ")
        return
    }
    return `${username} just logged in.`
}

//console.log(loginUserMesaage("Yash"))
console.log(loginUserMesaage(""))






