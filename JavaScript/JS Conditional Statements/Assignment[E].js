// 1.

let month = 5;

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 days");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 days");
        break;
    case 2:
        console.log("28 days");
        break;
    default:
        console.log("Invalid month");
}


// 2.

let ch = "a";

switch (ch) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vowel");
        break;
    default:
        console.log("Consonant");
}


// 3.

let num = 3;

switch (num) {
    case 1:
    case 2:
        console.log("Winter");
        break;
    case 3:
    case 4:
        console.log("Summer");
        break;
    default:
        console.log("Invalid number");
}


// 4.

let marks = 85;

switch (true) {
    case marks >= 75:
        console.log("Distinction");
        break;
    case marks >= 60:
        console.log("1st class");
        break;
    case marks >= 50:
        console.log("2nd class");
        break;
    case marks >= 35:
        console.log("3rd class");
        break;
    default:
        console.log("Failed");
}


// 5.

let role = "admin";
let action = "create";

switch (role) {
    case "admin":
        switch (action) {
            case "create":
                console.log("Create action performed");
                break;
            case "edit":
                console.log("Edit action performed");
                break;
            case "delete":
                console.log("Delete action performed");
                break;
            default:
                console.log("Invalid action");
        }
        break;
    case "user":
        console.log("Limited Access");
        break;
    default:
        console.log("Invalid role");
}


// 6.

// Output:
// Mango is yellow
// Banana is yellow
// Unknown fruit

// Corrected code:

let fruit = "mango";

switch (fruit) {
    case "apple":
        console.log("Apple is red");
        break;
    case "mango":
        console.log("Mango is yellow");
        break;
    case "banana":
        console.log("Banana is yellow");
        break;
    default:
        console.log("Unknown fruit");
}


// 7.

let value = 0;

switch (value) {
    case 0:
        console.log("Number zero");
        break;
    case "0":
        console.log("String zero");
        break;
    case false:
        console.log("Boolean false");
        break;
    case null:
        console.log("Null value");
        break;
    case undefined:
        console.log("Undefined value");
        break;
    default:
        console.log("Other value");
}

// switch uses strict comparison (===).
// Therefore, 0, "0", and false are different values.


// 8.

let a = 10;
let operator = "**";
let b = 2;

switch (operator) {
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    case "*":
        console.log(a * b);
        break;
    case "/":
        if (b === 0) {
            console.log("Cannot divide by zero");
        } else {
            console.log(a / b);
        }
        break;
    case "%":
        if (b === 0) {
            console.log("Cannot find remainder with zero divisor");
        } else {
            console.log(a % b);
        }
        break;
    case "**":
        console.log(a ** b);
        break;
    default:
        console.log("Invalid operator");
}


// 9.

let day = 25;

switch (true) {
    case day >= 1 && day <= 10:
        console.log("Beginning of the month");
        break;
    case day >= 11 && day <= 20:
        console.log("Middle of the month");
        break;
    case day >= 21 && day <= 31:
        console.log("End of the month");
        break;
    default:
        console.log("Invalid day");
}


// 10.

let category = "veg";
let item = "paneer";
let size = "full";
let price = 0;

switch (category) {
    case "veg":
        switch (item) {
            case "paneer":
                switch (size) {
                    case "half":
                        price = 120;
                        break;
                    case "full":
                        price = 220;
                        break;
                    default:
                        price = -1;
                }
                break;

            case "pizza":
                switch (size) {
                    case "half":
                        price = 150;
                        break;
                    case "full":
                        price = 280;
                        break;
                    default:
                        price = -1;
                }
                break;

            default:
                price = -1;
        }
        break;

    case "nonveg":
        switch (item) {
            case "chicken":
                switch (size) {
                    case "half":
                        price = 180;
                        break;
                    case "full":
                        price = 320;
                        break;
                    default:
                        price = -1;
                }
                break;

            case "fish":
                switch (size) {
                    case "half":
                        price = 200;
                        break;
                    case "full":
                        price = 350;
                        break;
                    default:
                        price = -1;
                }
                break;

            default:
                price = -1;
        }
        break;

    default:
        price = -1;
}

if (price > 0) {
    console.log("Category:", category);
    console.log("Item:", item);
    console.log("Size:", size);
    console.log("Price: ₹" + price);
} else {
    console.log("Invalid order");
}
