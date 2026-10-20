// 1.

let num = 15;

if (num > 10) {
    if (num % 3 == 0) {
        console.log("Greater than 10 and Divisible by 3");
    } else {
        console.log("Greater than 10 but Not Divisible by 3");
    }
} else {
    console.log("Number is Not Greater than 10");
}

// 2. 

let age = 20;
let voterID = true;

if (age >= 18) {
    if (voterID == true) {
        console.log("Can Vote");
    } else {
        console.log("Voter ID Required");
    }
} else {
    console.log("Not Eligible to Vote");
}

// 3. 

let marks = 85;

if (marks >= 40) {
    if (marks >= 80) {
        console.log("Passed with Distinction");
    } else {
        console.log("Passed");
    }
} else {
    console.log("Failed");
}

// 4. ATM System
let pin = 1234;
let correctPin = 1234;
let balance = 5000;
let withdrawal = 2000;

if (pin == correctPin) {
    if (balance >= withdrawal) {
        console.log("Withdrawal Successful");
        console.log("Remaining Balance:", balance - withdrawal);
    } else {
        console.log("Insufficient Balance");
    }
} else {
    console.log("Incorrect PIN");
}

// 5. 

let year = 2024;

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log("Leap Year");
        } else {
            console.log("Not a Leap Year");
        }
    } else {
        console.log("Leap Year");
    }
} else {
    console.log("Not a Leap Year");
}

// 6. 

let email = "student123@gmail.com";

if (email.includes("@")) {
    if (email.endsWith(".com")) {
        if (email.length > 10) {
            console.log("Valid Email");
        } else {
            console.log("Email Length Must Be Greater Than 10");
        }
    } else {
        console.log("Email Must End With .com");
    }
} else {
    console.log("Email Must Contain @");
}

// 7. 

let total = 1500;
let premium = true;
let finalAmount;

if (total >= 1000) {
    if (premium == true) {
        finalAmount = total - total * 0.20;
    } else {
        finalAmount = total - total * 0.10;
    }
} else {
    finalAmount = total;
}

console.log("Final Amount: ₹" + finalAmount);

// 8. 

let number = 8;

if (number > 0) {
    if (number % 2 == 0) {
        if (number % 4 == 0) {
            console.log("Positive Even and Divisible by 4");
        } else {
            console.log("Positive Even but Not Divisible by 4");
        }
    } else {
        console.log("Positive Odd");
    }
} else {
    console.log("Number is Not Positive");
}

