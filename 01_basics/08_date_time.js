// Dates

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)


// // In javascript month starts from 0 means january
// let myCreateDate = new Date(2023, 0, 15)
// let myCreateDate = new Date(2023, 0, 15, 5, 3)
// let myCreateDate = new Date("2023-01-14")
// let myCreateDate = new Date("01-14-2023")
// console.log(myCreateDate.toLocaleString())

// let myTimeStamp = Date.now()   // in milisecond for comparison
// console.log(myTimeStamp)
// console.log(myCreateDate.getTime())
// console.log(Math.floor(Date.now()/1000))  // seconds in milisecond

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

// for customize ctrl+space
newDate.toLocaleString('default', {
    weekday: "long"
})
