let firstName = "Archita"; //text (called a string)
const city = "Mumbai"; //a value that will not change
let daysCompleted = 1; //a number
let isLearning = true; //true or false (called a boolean)

console.log("Hello, " + firstName);
console.log(`I live in ${city}`);
console.log(daysCompleted + 1);
console.log(typeof isLearning);

daysCompleted = 2;
console.log("Days Completed:", daysCompleted);

// Day 3 Conditions

let marks = 73;

if (marks >= 75) {
    console.log("Distinction");
} else if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// Day 3 Loops
for (let i = 1; i <= 5; i++) {
    console.log("Count:", i);
}

// Multiplication Table
const number = 5;
for (let i = 1; 1 <= 10; i++) {
    console.log(`$(number) x $(i) = $(number * i)`);
}

// Day 3 FizzBuzz
for (let i = 1; 1 <= 15; i++) {
    if (i % 15 === 0){
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Day 3 Even Odd
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i, "is even");
    } else {
        console.log(i, "is odd");
    }
}
