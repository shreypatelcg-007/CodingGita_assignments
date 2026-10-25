//Part F]: Do-While Loop

//1
let i = 10;

do{
    console.log(i);
    i--;
} while (i >= 1);

//2
let i = 2;

do{
    console.log(i);
    i += 2;
} while (i <= 20);

//3
let n = 5;
let i = 1;
let sum = 0;

do{
    sum += i;
    i++;
} while (i <= n);

console.log("Sum:", sum);

//4
let num = 234;
let product = 1;

do{
    product *= num % 10;
    num = Math.floor(num / 10);
} while (num > 0);

console.log("Product:", product);

//5
let num = 58372;

do{
    if (num < 10) {
        break;
    }

    num = Math.floor(num / 10);
} while (num > 0);

console.log("First digit:", num);

//6
let base = 3;
let exponent = 4;
let result = 1;
let i = 1;

do{
    result *= base;
    i++;
} while (i <= exponent);

console.log("Power:", result);

//7
let i = 1;

do{
    if (i % 4 === 0 && i % 8 !== 0){
        console.log(i);
    }

    i++;
} while (i <= 100);

//8
let num = 1221;
let original = num;
let reverse = 0;

do{
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
} while (num > 0);

if (original === reverse){
    console.log("Palindrome number");
} else {
    console.log("Not a palindrome number");
}

//9
let a = 48;
let b = 18;
let i = 1;
let gcd = 1;

do{
    if (a % i === 0 && b % i === 0) {
        gcd = i;
    }

    i++;
} while (i <= a && i <= b);

console.log("GCD:", gcd);

//10
let num = 13;
let binary = "";

do{
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
} while (num > 0);

console.log("Binary:", binary);
