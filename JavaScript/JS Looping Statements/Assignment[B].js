//Part B] For Loop (Additional advanced questions)

// 1.
let temperatures = [28, 32, 25, 40, 18, 35];
let count = 0;

for (let i = 0; i < temperatures.length; i++){
    if (temperatures[i] > 30){
        count++;
    }
}
console.log("Days hotter than 30°C:", count)

// 2.
let num = 4729;
let sum = 0;

for (let num > 0; num = Math.floor(num / 10)){
    sum += num % 10;
}
console.log("Sum of digits:", sum)

// 3.
for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0 && i % 7 !== 0){
        console.log(i)
    }
}

// 4.
let str = "JavaScript";
let newStr=""
for(let i=0; i<=str.length-1; i++){
    if(str[i]!="a" && str[i]!="e" && str[i]!="i" && str[i]!="o" && str[i]!="u"){
        newStr+=str[i];
    }
}
console.log(newStr)

// 5.
let numbers = [12, 45, 23, 89, 34, 67];
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest){
        largest = numbers[i];
    }
}
console.log("Largest number:", largest)

// 6.
let num = 28;
let sum = 0;

for(let i = 1; i < num; i++){
    if (num % i === 0) {
        sum = sum + i;
    }
}
if (sum === num){
    console.log("Perfect number")
} else {
    console.log("Not a perfect number")
}

// 7.
let num = 1;

for (let i = 1; i <= 8; i++){
    console.log(num);
    num = num * 2;
}

// 8.
num=4729;
numStr=String(num);
let sum = 0 ;
for(i=1; i<=numStr.length; i++){
    let last_dig = num%10;
    sum+=last_dig;
    num = Math.floor(num/10);
}
console.log(sum)

// 9.
let marks = [45, 78, 90, 32, 56, 88];
let sum = 0;

for (let i = 0; i < marks.length; i++){
    sum = sum + marks[i];
}

let average = sum / marks.length;
let count = 0;

for (let i = 0; i < marks.length; i++){
    if (marks[i] > average) {
        count++;
    }
}
console.log("Average:", average)
console.log("Students above average:", count)


