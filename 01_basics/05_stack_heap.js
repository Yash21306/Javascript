// Stack(Primitive) , Heap(Non-Primitive)

let myYoutubename = "yashpatel.com"

let anothername = myYoutubename
anothername = "practice.com"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "yhp@google.com"

console.log(userOne.email);
console.log(userTwo.email);