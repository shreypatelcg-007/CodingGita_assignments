// F]:LOGICAL OPERATORS

//1. Logical AND &&

// 1.

let username = "admin";
let password = 1234;
let isValid = (username === "admin" && password === 1234);
console.log("1.",isValid)

// 2.

let isLoggedIn = true;
let hasPermission = true;
let accessPage = isLoggedIn && hasPermission;
console.log("2.",accessPage)

// 3.

let inStock = true;
let price = 800;
let bought = inStock && (price<1000);
console.log("3.",bought)

// 4.

let studentMarks = 75;
let studentAttendance = 80;
let passing = (studentMarks>65) && (studentAttendance>70);
console.log("4.",passing)

// 5.

let isWeekend = true;
let isHoliday = false;
let partyHappens = isWeekend && isHoliday;
console.log("5.",partyHappens)

// 6.

let a = 0;
let b = 10;
let result = a && b;
console.log("6.",result); //0

// 7.

let x = 5;
let y = 10;
let result = (x > 3 && y) || 0;
console.log("7.",result); //10

// 8.

let p = "Hello";
let q = "";
let r = "World";
let result = p && q && r;
console.log("8.",result //""

// 9.
            
let val = 5;
let condition = val && (val = 0);
console.log(condition);
console.log("9.",val); //0,0

// 10.

let x = 10;
let y = 20;
let result = (x && y) && (x > y);
console.log("10.",result); //false

// 2. Logical OR (||)

// 1.

let passwordCorrect = true;
let otpValid = false;
let loginAllowed = passwordCorrect || otpValid;
console.log("1.",loginAllowed)

// 2.

let isMember = false;
let hasCoupon = true;
let discountApplies = isMember || hasCoupon;
console.log("2.",discountApplies)

// 3.

let age = 16;
let height = 155;
let entryAllowed = (age>18) || (height>150);
console.log("3.",entryAllowed)

// 4.

let emailGiven = true;
let phoneGiven = false;
let formValid = emailGiven || phoneGiven;
console.log("4.",formValid)

// 5.

let score = 900;
let timeBonus = true;
let gameLevelOpens = (score>1000) || timeBonus;
console.log("5.",gameLevelOpens)

// 6.

let a = 0;
let b = false;
let c = "";
let d = null;
let e = 42;
let result = a || b || c || d || e;
console.log("6.",result); //42

// 7.

let x = "Hello" || 0;
let y = 0 || "Hi";
console.log("7.",x, y); //Hello, Hi

// 8.

let a = 10;
let b = 20;
let result = (a < 5) || (b > 15);
console.log("8.",result); //true

// 9.

let val = 5;
let condition = val || (val = 0);
console.log(condition);
console.log("9.",val); //5,5

// 10.

let x = "" || 0 || false || null || undefined || "OK";
console.log("10.",x); //OK

// 3. Logical NOT (!)

// 1.

let isBanned = false;
let canLogin = !isBanned;
console.log("1.",canLogin)

// 2.

let isCompleted = false;
let isPending = !isCompleted;
console.log("2.",isPending)

// 3.
let isOn = true;
let isOff = !isOn;
console.log("3.",isOff)

// 4.

let isActive = false;
let cannotAccess = !isActive;
console.log("4.",cannotAccess)

// 5.

let isReadyOnly = false;
let canEdit = !isReadyOnly;
console.log("5.",canEdit)

// 6.

let a = 0;
let b = 1;
console.log("6.",!a, !b); //true,false

// 7.

let x = "Hello";
let y = "";
console.log("7.",!x, !y); //false,true

// 8.

let val = 5;
let result = !val;
console.log("8.",result); //false

//  9.

let a = 10;
let b = 20;
let result = !(a && b);
console.log("9.",result); //false

// 10.

let x = 0;
let y = 1;
let result = !(x || y);
console.log("10.",result); //false
