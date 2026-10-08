// ASSIGNMENT: JAVASCRIPT OPERATORS

// A] ARITHMETIC OPERATORS


// 1. ADDITION (+)

console.log("========== ADDITION(+) ==========");

// 1
console.log("1. Total collection:", 15000 + 12500);

// 2
console.log("2. Total pages:", 18 + 25);

// 3
console.log("3. Total items sold:", 125 + 178);

// 4
let a1 = "10";
let b1 = 5;
let result1 = a1 + b1;
console.log("4. Output:", result1);

// 5
let x1 = 5;
let y1 = "3";
let result2 = x1 + y1;
console.log("5. Output:", result2);

// 6
console.log("6. Output:", 15 + 27);

// 7
console.log("7. Total price:", 350 + 45);

// 8
console.log("8. Output:", "25" + 10);

// 9
let totalSpent = 750 + 320;
let remainingBalance = 2000 - totalSpent;

console.log("9. Total spent:", totalSpent);
console.log("9. Remaining balance:", remainingBalance);

// 10
console.log("10a:", 5 + "5" + 5);
console.log("10b:", 5 + 5 + "5");
console.log("10c:", "5" + 5 + 5);


// 2. SUBTRACTION (-)

console.log("\n========== SUBTRACTION (-) ==========");

// 1
console.log("1. Empty seats:", 80 - 53);

// 2
console.log("2. Final marks:", 500 - 35);

// 3
console.log("3. Remaining boxes:", 2500 - 875);

// 4
let a2 = "10";
let b2 = 3;
let result3 = a2 - b2;
console.log("4. Output:", result3);

// 5
let x2 = "20";
let y2 = "5";
let result4 = x2 - y2;
console.log("5. Output:", result4);

// 6
console.log("6. Output:", 100 - 37);

// 7
console.log("7. Water left:", 500 - 175, "litres");

// 8
console.log('8a. "50" - 20 =', "50" - 20);
console.log('8b. "50" - "20" =', "50" - "20");

// 9
let apples = 240;
let applesLeft = apples - 95 - 67;
console.log("9. Apples left:", applesLeft);

// 10
console.log('10a. "100" - 50 =', "100" - 50);
console.log('10b. "abc" - 10 =', "abc" - 10);
console.log('10c. 10 - "5" - "2" =', 10 - "5" - "2");
console.log('10d. "10" - "5" - "2" =', "10" - "5" - "2");


// 3. MULTIPLICATION (*)

console.log("\n========== MULTIPLICATION (*) ==========");

// 1
console.log("1. Cost of 8 notebooks:", 45 * 8);

// 2
console.log("2. Bottles produced:", 120 * 6);

// 3
console.log("3. Total plants:", 7 * 15);

// 4
let a3 = "5";
let b3 = 4;
let result5 = a3 * b3;
console.log("4. Output:", result5);

// 5
let x3 = "10";
let y3 = "2";
let result6 = x3 * y3;
console.log("5. Output:", result6);

// 6
console.log("6. Output:", 12 * 8);

// 7
console.log("7. Cost of 4 pizzas:", 299 * 4);

// 8
console.log('8a. "7" * 6 =', "7" * 6);
console.log('8b. "7" * "6" =', "7" * "6");

// 9
let unitsProduced = 45 * 8;
console.log("9. Units produced:", unitsProduced);

// 10
console.log('10a. "5" * 3 * "2" =', "5" * 3 * "2");
console.log('10b. "abc" * 4 =', "abc" * 4);
console.log('10c. 10 * "2.5" =', 10 * "2.5");
console.log('10d. "10" * "2.5" * "0" =', "10" * "2.5" * "0");

// 4. DIVISION (/)

console.log("\n========== DIVISION (/) ==========");

// 1
console.log("1. Pencils per student:", 144 / 12);

// 2
console.log("2. Distance per hour:", 360 / 6, "km/hour");

// 3
console.log("3. Amount per department:", 72000 / 9);

// 4
let a4 = "20";
let b4 = 4;
let result7 = a4 / b4;
console.log("4. Output:", result7);

// 5
let x4 = "100";
let y4 = "5";
let result8 = x4 / y4;
console.log("5. Output:", result8);

// 6
console.log("6. Output:", 144 / 12);

// 7
console.log("7. Students per classroom:", 360 / 9);

// 8
console.log('8a. "100" / 4 =', "100" / 4);
console.log('8b. "100" / "4" =', "100" / "4");

// 9
let billShare = 2400 / 6;
console.log("9. Each friend's share:", billShare);

// 10
console.log("10a. 10 / 0 =", 10 / 0);
console.log("10b. -10 / 0 =", -10 / 0);
console.log("10c. 0 / 0 =", 0 / 0);
console.log('10d. "20" / "4" / 2 =', "20" / "4" / 2);
console.log('10e. "abc" / 5 =', "abc" / 5);

// 5. MODULUS (%)

console.log("\n========== MODULUS (%) ==========");

// 1
console.log("1. Students left:", 53 % 5);

// 2
console.log("2. Candies left:", 128 % 10);

// 3
console.log("3. Toys left:", 237 % 6);

// 4
console.log("4. People left:", 185 % 40);

// 5
let a5 = 10;
let b5 = 0;
let result9 = a5 % b5;
console.log("5. Output:", result9);

// 6
console.log("6. Output:", 29 % 5);

// 7
console.log("7. Chocolates left:", 23 % 4);

// 8
console.log("8a. 0 % 7 =", 0 % 7);
console.log("8b. 15 % 0 =", 15 % 0);

// 9
let pages = 47;
let pagesPerSheet = 6;

let fullSheets = Math.floor(pages / pagesPerSheet);
let leftoverPages = pages % pagesPerSheet;

console.log("9. Full sheets:", fullSheets);
console.log("9. Leftover pages:", leftoverPages);

// 10
console.log("10a. 17 % 5 =", 17 % 5);
console.log("10b. -17 % 5 =", -17 % 5);
console.log("10c. 17 % -5 =", 17 % -5);
console.log("10d. -17 % -5 =", -17 % -5);
console.log("10e. 10 % 0 =", 10 % 0);

// 6. EXPONENTIATION (**)

console.log("\n========== EXPONENTIATION (**) ==========");

// 1
let cubeSide = 6;
console.log("1. Cube volume:", cubeSide ** 3, "cm³");

// 2
let squareSide = 9;
console.log("2. Total cells:", squareSide ** 2);

// 3
console.log("3. 5 ** 4 =", 5 ** 4);

// 4
let pixels = 1024;
console.log("4. Total pixels:", pixels ** 2);

// 5
let base = 2;
let power = -1;
let result10 = base ** power;
console.log("5. Output:", result10);

// 6
console.log("6. 3 ** 4 =", 3 ** 4);

// 7
let side = 9;
console.log("7. Square area:", side ** 2);

// 8
console.log("8a. 2 ** 5 =", 2 ** 5);
console.log("8b. 5 ** 2 =", 5 ** 2);

// 9
console.log("9a. 2 ** 3 ** 2 =", 2 ** 3 ** 2);
console.log("9b. (2 ** 3) ** 2 =", (2 ** 3) ** 2);
console.log("9c. 2 ** -3 =", 2 ** -3);
console.log("9d. (-2) ** 2 =", (-2) ** 2);
console.log("9e. 4 ** 0.5 =", 4 ** 0.5);

// 10
let number = 10;
let exponent = 0;
let result11 = number ** exponent;

console.log("10. 10 ** 0 =", result11);
