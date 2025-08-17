function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

//console.log(calculateCartPrice(200, 400, 500, 3000));



const user = {
    username: "Yash",
    price: 199
}

function handleObject(anyObject){
    console.log(
    `Username is ${anyObject.username} and Price is ${anyObject.price}`)
}

//handleObject(user)
handleObject({
    username: "sam",
    price: 399
})



const myNewArray = [20, 30, 40, 50]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))


