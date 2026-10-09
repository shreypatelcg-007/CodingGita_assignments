// 1. Simple Assignment (=)

// 1.

let nameofstd = priya;
let marksofstd = 92;

// 2.

let score = 0;

// 3. 

let a =b =c = 50;

// 4. 

let x;
x = 100;
console.log(x);

// Outpput:
// 100

// 5. 

let p = 15;
let q = p;
q = 30;
console.log(p, q);

// Output:
// 15 30

// 2. Add and Assign (+=)

// 1.

let score = 80;
score += 25;
console.log(score) // 105

// 2. 

let balance = 1500;
balance += 120;

console.log(balance) // 1620

// 3. 

let count = 10;
count += 5;
console.log(count); // Output: 15

// 4. 

let msg = "Good";
msg += " Morning";
console.log(msg);  // Output: Good Morning

// 5.

let n = 20; 
n += "5"; // Output will be "205"
// Explanation : String + number -> string concatenation (not addition)

// 3. Subtract and Assign (-=)

// 1.

let health = 100;
health-=35;
console.log(health)

// 2.

let stock = 300;
stock-=45;
console.log(stock)

// 3.

let lives = 5;
lives -= 2;
console.log(lives); //3

// 4.

let num = "40";
num -= 15;
console.log(num); //25

// 5.

let x = "abc";
x-=5;
console.log(x) //NaN

// 4. Multiply and Assign (*=)

// 1.

let itemPrice = 500;
itemPrice*=1.18;
console.log(itemPrice)

// 2.

let quantity = 8;
quantity*=3;
console.log(quantity)

// 3.

let amount = 200;
amount *= 1.1;
console.log(amount); //220

// 4.

let val = "7";
val *= 3;
console.log(val); //21

// 5.

let y = "hello";
y*=2;
console.log(y) //NaN


// 5. Divide and Assign (/=)

// 1.

let totalChocolates = 180;
totalChocolates/=6;
console.log(totalChocolates)

// 2.

let distance = 300;
distance/=5;
console.log(distance)

// 3.

let total = 400;
total /= 8;
console.log(total); //50

// 4.

let num = "100";
num /= 4;
console.log(num); // 25

// 5.

let z=50;
z/=0;
console.log(z) //Infinity

// 6. Modulus and Assign {%=)

// 1.

let number = 47;
number%=6
console.log(number)

// 2.

let counter = 23;
counter%=12;
console.log(counter)

// 3.

let num = 29;
num %= 5;
console.log(num); //4

// 4.

let x = "17";
x %= 3;
console.log(x); // 2

// 5.

let m = 15;
m %=0;
console.log(m) //NaN

// 7. Exponentiation and Assign (**=)

// 1.

let cubeSide=5;
cubeSide**=3;
console.log(cubeSide)

// 2.

let num = 4;
num**=2;
console.log(num)

// 3.

let base = 2;
base **= 5;
console.log(base); //32

// 4.

let n = 4;
n **= 0.5;
console.log(n); // 2

// 5.

let p = 2;
p**=-1;
console.log(p) // 0.5
// Explantion : a -ve exponent relLS you to take the reciprocal.

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
