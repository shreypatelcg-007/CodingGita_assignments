// [C] COMPARISON OPERATORS

// 1. Loose Equality (==)

// 1.

console.log("25"==25)

// 2.

console.log(0==false) //true

// 3.

console.log(10 == "10"); //true
console.log(null == undefined); //true

// 4.

console.log("" == 0); //true
console.log([] == false); true

// 5.

console.log(NaN==NaN) //false beacuse NaN is not equal to anything, including another NaN.

// 2. Loose Inequality (!=)

// 1.

console.log("18"!=18) //false

// .2.

console.log("1234"!=1234) //false

// 3.

console.log(5 != "5"); //false
console.log(0 != false); //false

// 4.

console.log(null != undefined); //false
console.log("" != 0); //false

console.log(NaN!=NaN) //true

// 3. Strict Equality (===)

// 1.
console.log("25"===25) //false because "25" is a string, while 25 is a number.

// 2.

console.log(0===false) //false
console.log(null===undefined) //false

// 3.

console.log(10 === "10"); //false
console.log(true === 1); //false

// 4.

console.log("" === 0); //false
console.log([] === false); //false

// 5.

//=== checks both value and data type.

// 4. Strict Inequality (!==)

// 1.

console.log("18"!==18) //true

// 2.

console.log(0!==false) //true
console.log(null!==undefined) //true

// 3.

console.log(5 !== "5"); //true
console.log(true !== 1); //true

// 4.

console.log("" !== 0); //true
console.log(NaN !== NaN); //true

// 5..

let input = "5";

if (input !== "0") {
    console.log("5. Input is not equal to string 0");
}

// [ when both the elements are in the string than it will check FSSAI value of 1st character of string 
// so, FSSAI value of "1' compares with FSSAI value of "2" so value of 2 will be greater than 1 so "10" > "2" output will be false
// but 10>2 will give true bcz this will check only number and 10 is greater than 2 ]

