//Question -no. 1 ------------

let month = 4;

if (month == 12 || month == 1 || month == 2) {
    console.log("Winter");
} else if (month >= 3 && month <= 5) {
    console.log("Summer");
} else if (month >= 6 && month <= 8) {
    console.log("Monsoon");
} else if (month >= 9 && month <= 11) {
    console.log("Autumn");
} else {
    console.log("Invalid Month");
}


//Question -no. 2 ------------

let income = 500000;
let tax;

if (income < 300000) {
    tax = 0;
} else if (income <= 700000) {
    tax = income * 0.05;
} else if (income <= 1000000) {
    tax = income * 0.10;
} else {
    tax = income * 0.15;
}

console.log("Tax Amount = ₹" + tax);


//Question -no. 3 ------------

let score = 85;

if (score >= 90) {
    console.log("Outstanding");
} else if (score >= 70) {
    console.log("Good");
} else if (score >= 40) {
    console.log("Average");
} else {
    console.log("Needs Improvement");
}


//Question -no. 4 ------------

let speed = 60;

if (speed < 40) {
    console.log("Slow");
} else if (speed <= 80) {
    console.log("Normal");
} else {
    console.log("Fast");
}


//Question -no. 5 ------------

let height = 165;

if (height < 150) {
    console.log("Short");
} else if (height <= 170) {
    console.log("Average");
} else {
    console.log("Tall");
}


//Question -no. 6 ------------

let day = 6;

if (day >= 1 && day <= 5) {
    console.log("Weekday");
} else if (day == 6 || day == 7) {
    console.log("Weekend");
} else {
    console.log("Invalid Day");
}


//Question -no. 7 ------------

let units = 100;
let bill;

if (units <= 50) {
    bill = units * 2;
} else if (units <= 150) {
    bill = units * 4;
} else {
    bill = units * 6;
}

console.log("Total Bill = ₹" + bill);


//Question -no. 8 ------------

let attendance = 80;

if (attendance >= 90) {
    console.log("Excellent");
} else if (attendance >= 75) {
    console.log("Good");
} else if (attendance >= 50) {
    console.log("Satisfactory");
} else {
    console.log("Poor");
}


//Question -no. 9 ------------

let marks1 = 75;
let marks2 = 90;
let marks3 = 85;

if (marks1 > marks2 && marks1 > marks3) {
    console.log("Highest Mark = " + marks1);
} else if (marks2 > marks1 && marks2 > marks3) {
    console.log("Highest Mark = " + marks2);
} else {
    console.log("Highest Mark = " + marks3);
}


//Question -no. 10 ------------

let number = -7;

if (number > 0 && number % 2 == 0) {
    console.log("Positive Even");
} else if (number > 0 && number % 2 != 0) {
    console.log("Positive Odd");
} else if (number < 0 && number % 2 == 0) {
    console.log("Negative Even");
} else if (number < 0 && number % 2 != 0) {
    console.log("Negative Odd");
} else {
    console.log("Zero");
}
