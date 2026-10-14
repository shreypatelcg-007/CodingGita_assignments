// Part G: typeof Operator

// Part A

// 1.
let name = "Rahul";
console.log(typeof name)  // string

// 2.
let age = 25;
console.log(typeof age)  // number

// 3.
let isStudent = true;
console.log(typeof isStudent)  // boolean

// 4.
let city;
console.log(typeof city)  // undefined

// 5.
console.log(typeof null)  // object


// Part B

// 6.
console.log(typeof 42)  // number
console.log(typeof "Hello")  // string
console.log(typeof true)  // boolean
console.log(typeof undefined)  // undefined

// 7.
console.log(typeof null)  // object
console.log(typeof {})  // object
console.log(typeof [])  // object

// 8.
console.log(typeof NaN)  // number
console.log(typeof Infinity)  // number
console.log(typeof function(){})  // function

// 9.
let price = 99.99;
let message = "Welcome";
let isActive = false;

console.log("Type of price:", typeof price)  // Type of price: number
console.log("Type of message:", typeof message)  // Type of message: string
console.log("Type of isActive:", typeof isActive)  // Type of isActive: boolean

// 10.
let value = null;
console.log(typeof value)  // object
console.log(typeof value === "object")  // true


// Part C

// 11.
console.log(typeof typeof 100)  // string
console.log(typeof typeof "Hi")  // string
console.log(typeof typeof true)  // string

// 12.
let a = 10;
let b = "10";

console.log(typeof a === typeof b)  // false
console.log(typeof a == typeof b)  // true

// 13.
console.log(typeof null === "object")  // true
console.log(typeof [] === "object")  // true
console.log(typeof {} === "object")  // true

// 14.
let x;
console.log(typeof x)  // undefined

x = null;
console.log(typeof x)  // object

x = 0;
console.log(typeof x)  // number

// 15.
console.log(typeof NaN === "number")  // true
console.log(typeof Infinity === "number")  // true
console.log(typeof (1 / 0))  // number
