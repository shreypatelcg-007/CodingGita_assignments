// Part H: Type Coercion

// Part A

// 1.
let num1 = Number("25");
console.log(num1 + 10)  // 35

// 2.
let num2 = String(100);
console.log(num2 + " rupees")  // 100 rupees

// 3.
console.log(Boolean(0))  // false

// 4.
console.log(Boolean("Hello"))  // true

// 5.
console.log(+"50" * 2)  // 100


// Part B

// 6.
console.log("10" - 5)  // 5
console.log("10" + 5)  // 105
console.log("10" * 2)  // 20
console.log("10" / 2)  // 5

// 7.
console.log("5" - "2")  // 3
console.log("5" + "2")  // 52
console.log("5" * "2")  // 10
console.log("5" / "2")  // 2.5

// 8.
console.log(Number("123"))  // 123
console.log(Number("123abc"))  // NaN
console.log(Number(true))  // 1
console.log(Number(false))  // 0
console.log(Number(null))  // 0
console.log(Number(undefined))  // NaN

// 9.
console.log(Boolean(0))  // false
console.log(Boolean(""))  // false
console.log(Boolean("0"))  // true
console.log(Boolean([]))  // true
console.log(Boolean({}))  // true
console.log(Boolean(null))  // false

// 10.
console.log(String(100))  // 100
console.log(String(true))  // true
console.log(String(null))  // null
console.log(String(undefined))  // undefined
console.log(100 + "")  // 100


// Part C

// 11.
console.log("5" + 3 + 2)  // 532
console.log(5 + 3 + "2")  // 82
console.log("5" - 3 + 2)  // 4
console.log(5 - "3" + "2")  // 22

// 12.
console.log(true + true)  // 2
console.log(true + false)  // 1
console.log(true + "false")  // truefalse
console.log(false + "true")  // falsetrue

// 13.
console.log(null + 5)  // 5
console.log(undefined + 5)  // NaN
console.log(null + "5")  // null5
console.log(undefined + "5")  // undefined5

// 14.
console.log([] + [])  // ""
console.log([] + {})  // [object Object]
console.log({} + [])  // [object Object]
console.log({} + {})  // [object Object][object Object]

// 15.
let a15 = "10";
let b15 = 5;
let c15 = a15 + b15;
let d15 = a15 - b15;
let e15 = +a15 + b15;

console.log(c15, typeof c15)  // 105 string
console.log(d15, typeof d15)  // 5 number
console.log(e15, typeof e15)  // 15 number

// 16.
console.log(!!"Hello")  // true
console.log(!!"")  // false
console.log(!!0)  // false
console.log(!!1)  // true
console.log(!!null)  // false
console.log(!!undefined)  // false

// 17.
console.log(Number(""))  // 0
console.log(Number(" "))  // 0
console.log(Number("0"))  // 0
console.log(Number("  25  "))  // 25
console.log(Number("25px"))  // NaN

// 18.
let val1 = "5";
let val2 = 2;

console.log(val1 + val2)  // 52
console.log(+val1 + val2)  // 7
console.log(val1 - val2)  // 3
console.log(val1 * val2)  // 10
console.log(val1 / val2)  // 2.5


// Bonus Mixed Practice Questions

// 19.
let count = 5;

console.log(typeof count++)  // number
console.log(count)  // 6
console.log(typeof ++count)  // number
console.log(count)  // 7

// 20.
let x20 = "10";
let y20 = ++x20;

console.log(x20, y20, typeof x20, typeof y20)  // 11 11 number number

// 21.
let a21 = "5";
let b21 = a21++;

console.log(a21, b21, typeof a21, typeof b21)  // 6 5 number number

// 22.
console.log(typeof (1 + "2"))  // string
console.log(typeof (1 - "2"))  // number
console.log(typeof (1 * "2"))  // number
console.log(typeof (1 / "2"))  // number

// 23.
let val = null;

console.log(typeof val)  // object
console.log(val + 1)  // 1
console.log(val - 1)  // -1
console.log(val * 1)  // 0
console.log(Boolean(val))  // false
