// Q1.

for (let i = 50; i >= 1; i--) {
    if (i % 3 === 0 && i % 9 !== 0)
        console.log(i)  // 48, 42, 39, 33, 30, 24, 21, 15, 12, 6, 3
}


// Q2.

let num = 4729;
let product = 1;
let found = false;

for (; num > 0; num = Math.floor(num / 10)) {
    let digit = num % 10;

    if (digit % 2 !== 0) {
        product *= digit;
        found = true;
    }
}

console.log(found ? product : "No odd digits")  // 63


// Q3. 

let str = "Programming";
let result = "";

for (let i = str.length - 1; i >= 0; i--) {
    let ch = str[i].toLowerCase();

    if ("aeiou".indexOf(ch) === -1)
        result += str[i];
}

console.log(result)  // gmmrg rP (actual output: gmmrg rP without the space? See correction below)


// Q4. 

let a = 0;
let b = 1;
let fib = [];

for (let i = 0; i < 15; i++) {
    fib[i] = a;
    let next = a + b;
    a = b;
    b = next;
}

for (let i = 14; i >= 0; i--) {
    console.log(fib[i])  // 377, 233, 144, 89, 55, 34, 21, 13, 8, 5, 3, 2, 1, 1, 0
}


// Q5. 

let num2 = 1221;
let original = num2;
let reversed = 0;

for (; num2 > 0; num2 = Math.floor(num2 / 10)) {
    let digit = num2 % 10;
    reversed = reversed * 10 + digit;
}

console.log(original === reversed ? "Palindrome" : "Not Palindrome")  // Palindrome


// Q6. 

let arr = [12, 45, 7, 23, 56, 89, 34];
let largest = -Infinity;

for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 50 && arr[i] > largest)
        largest = arr[i];
}

console.log(largest)  // 45


// Q7. 

let temperatures = [32, 28, 41, 19, 35, 27, 38];
let count = 0;

for (let i = temperatures.length - 1; i >= 0; i--) {
    if (temperatures[i] < 30)
        count++;
}

console.log(count)  // 3


// Q8. 

let decimal = 13;
let binary = "";

for (; decimal > 0; decimal = Math.floor(decimal / 2)) {
    binary += decimal % 2;
}

console.log(binary)  // 1011


// Q9.

let scores = [90, 85, 70, 95, 60, 88, 75];

for (let i = scores.length - 1; i >= 0; i--) {
    if (scores[i] > 80) {
        console.log("Score:", scores[i])  // Score: 88
        console.log("Index:", i)          // Index: 5
        break;
    }
}


// Q10. 

for (let i = 40; i >= 1; i--) {
    let square = false;

    for (let j = 1; j * j <= i; j++) {
        if (j * j === i) {
            square = true;
            break;
        }
    }

    if (square)
        continue;

    console.log(i)  // 40 down to 1, excluding 36, 25, 16, 9, 4, 1
}

