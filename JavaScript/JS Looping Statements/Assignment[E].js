//Part E] Nested For Loop Questions

//1

let num = 1;

for (let i = 1; i <= 4; i++){
        let row = "";

        for (let j = 1; j <= i; j++){
            row += num + " ";
            num++;
        }

        console.log(row)
    }

//2
for (let i = 1; i <= 4; i++){
        let row = "";

        for (let j = 1; j <= i; j++){
            row += i + " ";
        }

        console.log(row);
    }

//3
let num = 1;

for (let i = 1; i <= 4; i++){
        let row = "";

        for (let j = 1; j <= i; j++){
            row += num + " ";
            num++;
        }

        console.log(row)
    }

//4
for (let i = 1; i <= 4; i++){
        let row = "";

        for (let j = 1; j <= 4; j++){
            if (i === 1 || i === 4 || j === 1 || j === 4){
                row += "* ";
            } else {
                row += "  ";
            }
        }

        console.log(row)
    }

//5
for (let i = 1; i <= 6; i++){
        let row = "";

        for (let j = 1; j <= i; j++){
            if (i % 2 !== 0){
                row += "# ";
            } else {
                row += "$ ";
            }
        }

        console.log(row);
    }

//6
for (let i = 1; i <= 5; i++){
        let row = "";

        for (let j = 0; j < i; j++){
            row += String.fromCharCode(65 + j) + " ";
        }

        console.log(row);
    }

//7
for (let i = 1; i <= 5; i++){
        let row = "";

        for (let j = 1; j <= i; j++){
            if (j === 1 || j === i || i === 5){
                row += "* ";
            } else {
                row += "  ";
            }
        }

        console.log(row)
    }

//8
for (let i = 5; i >= 1; i--){
        let row = "";

        for (let j = 1; j <= i; j++){
            row += "*";
        }

        console.log(row);
    }

//9
for (let i = 5; i >= 1; i--){
        let row = "";

        for (let j = 1; j <= i; j++){
            row += i + " ";
        }

        console.log(row);
    }

//10
for (let i = 5; i >= 1; i--){
        let row = "";

        for (let j = 1; j <= i; j++){
            row += j + " ";
        }

        console.log(row);
    }

//11
let num = 15;

for (let i = 5; i >= 1; i--){
        let row = "";

        for (let j = 1; j <= i; j++){
            row += num + " ";
            num--;
        }

        console.log(row);
    }

//12
for (let i = 5; i >= 1; i--){
        let row = "";

        for (let j = 1; j <= i; j++){
            if (i === 5 || j === 1 || j === i){
                row += "* ";
            } else {
                row += "  ";
            }
        }

        console.log(row);
    }

//13
for (let i = 1; i <= 5; i++){
        let row = "";

        for (let j = 1; j <= 5; j++){
            if (i === j){
                row += "  ";
            } else {
                row += "* ";
            }
        }

        console.log(row);
    }

//14
for (let i = 1; i <= 5; i++){
        console.log("Table of " + i);

        for (let j = 1; j <= 10; j++){
            let product = i * j;

            if (product % 2 === 0){
                console.log(i + " x " + j + " = " + product);
            }
        }
    }

//15
for (let i = 1; i <= 3; i++){
        let row = "";

        for (let j = 1; j <= 3 - i; j++){
            row += " ";
        }

        for (let j = 1; j <= i; j++){
            row += j + " ";
        }

        for (let j = i - 1; j >= 1; j--){
            row += j + " ";
        }

        console.log(row);
    } 
