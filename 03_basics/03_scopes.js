//var c = 300
let a = 100

if(true){
    let a = 20
    const b = 30
    var c = 40  // don't use var because it scope is outside of its scope
    //console.log("INNER a: ", a)
}

// console.log(a)
// console.log(b)
// console.log(c)




if(true){
    const username = "Yash"
    if(username === "Yash"){
        const website = "Youtube"
        console.log(username+website)
    }
    //console.log(website)
}

//console.log(username)



console.log(addOne(5))
function addOne(num){
    return num+1
}


console.log(addTwo(5))
const addTwo = function(num){
    return num+2
}
