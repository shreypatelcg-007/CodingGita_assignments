// Increment / Decrement Operators (++ / --)

// PART A:

// 1. 

let count = 5;
count++;
console.log(count) // 6

// 2.

let lives = 3;
lives--;
console.log(lives); // 2


// 3.

let score = 10;
score++;
console.log(score); // 11


// 4.

let items = 8;
items--;
console.log(items); // 7


// 5.

let count = 0;
count++;
count++;
console.log(count); // 2

// PART B:

// 6.

let x = 5;
let y = x++;
console.log(x, y); // 6 5

// EXPLAINATIO:
// x++ is post-increment so, first the old value 5 is assigned to y then x is increased to 6.



// 7.

let a = 5;
let b = ++a;
console.log(a, b); // 6 6
// EXPLAINATIO:
// ++a is pre-increment so first a is increased to 6 then the new value 6 is assigned to b.




// 8.

let lives2 = 3;
let previousLives = lives2--;
console.log(lives2, previousLives); // 2 3
// EXPLAINATIO:
// lives2-- is post-decrement so first the old value 3 is assigned to previousLives then lives2 becomes 2.


// 9.

let attempts = 0;
let currentAttempts = ++attempts;
console.log(attempts, currentAttempts); // 1 1
// EXPLAINATIO:
// ++attempts is pre-increment so first attempts becomes 1 then 1 is assigned to currentAttempts.



// 10.

let points = 100;
points++;
points--;
console.log(points); // 100
// EXPLAINATIO:
// ++ increases 100 to 101.
// -- decreases 101 back to 100.

// PART C:

// 11.

let x = 10;
let y = x++;
let z = ++x;

console.log(x, y, z); // 12 10 12


// 12.

let a = 5;
let b = a-- + ++a;

console.log(a, b); // 5 10


// 13.

let m = 7;
let n = --m + m++;

console.log(m, n); // 7 12


// 14.

let p = 3;
let q = p++ + ++p + p;  

console.log(p, q); // 5 13


// 15.

let val = 0;
val = val++ + ++val;

console.log(val); // 2


