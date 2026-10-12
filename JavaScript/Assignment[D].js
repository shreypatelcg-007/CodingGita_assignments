// [D] RELATIONAL OPERATOR

// 5. Greater Than (>)

// 1.

let marks = 78;
let passingMarks = 40;
console.log(marks > passingMarks); // true

// 2. 

let today = 35;
let yesterday = 28;

console.log(today > yesterday); // ture

// 3.
console.log(15 > 10); // true
console.log(10 > 15); // false
console.log(10 > 10); // false


// 4.
console.log("20" > 15); // true
console.log("5" > "10"); // true
console.log("abc" > 10); // false


// 5.
console.log(null > 0); // false { null=0 }
console.log(undefined > 0); // false  { undefined = NaN }


// 6.
let stock = 120;
let customerWants = 85;

console.log(stock > customerWants); // true

// 7.

console.log(true > false); // true
console.log("10" > "2"); // false
console.log(NaN > 5); // false

// 6. Less Than (<)

// 1.
let maximumWeight = 50;
let currentWeight = 42;

console.log(currentWeight < maximumWeight); // true


// 2.

let age = 16;
let minimumAge = 18;

console.log(age < minimumAge); // true


// 3.

console.log(8 < 12); // true
console.log(20 < 10); // false
console.log(7 < 7); // false


// 4.
console.log("8" < 10); // true
console.log("20" < "3"); // true
console.log("hello" < 5); // false { "hello" = NaN }


// 5.

console.log(null < 0); // false because when we convert null into number it is equal too 0.
console.log(undefined < 0); // false when we convert undefined into number it is equal too NaN. 


// 6.

let tankCapacity = 500;
let currentWater = 375;

console.log(currentWater < tankCapacity); // true


// 7.

console.log(false < true); // true
console.log("5" < "15"); // false
console.log(NaN < 10); // false

// 7. GREATER THAN OR EQUAL TO (>=)

// 1.

let studentMarks = 75;
let distinctionMarks = 75;

console.log(studentMarks >= distinctionMarks); // true


// 2.

let ticketPrice = 300;
let availableMoney = 300;

console.log(availableMoney >= ticketPrice); // true


// 3.

console.log(25 >= 25); // true
console.log(30 >= 25); // true
console.log(20 >= 25); // false


// 4.

console.log("25" >= 25); // true
console.log("10" >= "2"); // false
console.log(null >= 0); // true


// 5.

console.log(undefined >= 0); // false


// 6.

let peopleInLift = 8;
let maximumPeople = 8;

console.log(peopleInLift >= maximumPeople); // true


// 7.

console.log(true >= 1); // true
console.log("" >= 0); // true
console.log(NaN >= NaN); // false

// 8. LESS THAN OR EQUAL TO (<=)

// 1.

let vehicleSpeed = 60;
let speedLimit = 60;

console.log(vehicleSpeed <= speedLimit); // true


// 2.

let studentScore = 39;
let passingScore = 40;

console.log(studentScore <= passingScore); // true


// 3.

console.log(15 <= 20); // true
console.log(20 <= 15); // false
console.log(15 <= 15); // true


// 4.

console.log("15" <= 20); // true
console.log("30" <= "5"); // true
console.log(null <= 0); // true


// 5.

console.log(undefined <= 0); // false { undefined = NaN } and NaN <= 0 is give false that's beacuse it give false.

// 6.

let booksInBag = 10;
let maximumBooks = 10;

console.log(booksInBag < maximumBooks); // false


// 7.

console.log(false <= 0); // true
console.log("" <= 0); // true
console.log(NaN <= 5); // false

// MIXED PRACTICE

// 1.

console.log(18 >= 18); // true
console.log(32 < 35); // true
console.log(90 > 85); // true

// 2.

console.log(10 > 5 && 5 < 10);    // true
console.log("10" >= 10);          // true
console.log(null <= undefined);   // false
console.log("5" < "10" && 5 > 2); // false

// 3.

let productPrice = 499;
let customerMoney = 500;

console.log(customerMoney >= productPrice); // true { can buy it}

console.log(customerMoney > productPrice); // true { change will be left }

// 4.

console.log("10" > "2"); // false 
console.log(10 > 2); // true

