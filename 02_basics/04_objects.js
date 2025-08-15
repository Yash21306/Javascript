// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Rocky"
tinderUser.isLoggedIn = false

//console.log(tinderUser)


const regularUser = {
    email: "some@google.com",
    fullname: {
        userfullname: {
            firstname: "Yash",
            lastname: "patel"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname)


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 3: "b"}
const obj3 = {5: "a", 6: "b"}

//const obj4 = {obj1, obj2}   // dont use like this
//const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2}
//console.log(obj4)


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"        
    }
]

//console.log(users[1].id)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLog'))




const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "Yash"
}

//console.log(course.courseInstructor)

// const {courseInstructor} = course
// console.log(courseInstructor)

//Destructuring
const {courseInstructor: instructor} = course
console.log(instructor)




// json API (Syntax)

// {
//     "name": "Yash",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]


