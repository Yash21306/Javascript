// array

// shallow copy of an object is a copy whose properties share the same references
// deep copy of an object is a copy whose properties does not share the same references

const arr = [1, 3, 5, true, "yash"]
const arr2 = new Array(1, 2, 3, 4)
// console.log(arr2[0]);


// array methods

arr2.push(5)
arr2.push(6)
arr2.pop()
// console.log(arr2)

// arr2.unshift(9)
// arr2.shift()
// console.log(arr2)

// console.log(arr2.includes(19))
// console.log(arr2.indexOf(3))

// const newArr = arr2.join()
// console.log(newArr)



// slice, splice
const arr3 = [0,1,2,3,4,5]
console.log("A ", arr3);

const myArr1 = arr3.slice(1, 3);

console.log(myArr1);
console.log("B ", arr3);

const myArr2 = arr3.splice(1, 3);
console.log("c ", arr3);
console.log(myArr2);






