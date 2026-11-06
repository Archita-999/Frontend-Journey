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
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

// Day 3 FizzBuzz
for (let i = 1; i <= 15; i++) {
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

// Day 4 Functions

function greet(name) {
    return "Hello, " + name + "!" ;
}

console.log(greet("Archita"));
console.log(greet("Asmita"));

function square(n) {
    return n * n;
}

console.log(square(4));

function largerOfTwo(a,b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log (largerOfTwo(7,14));

// Self-made Function

function cube(n) {
    return n * n * n;
}

console.log (cube(10));

// Arrays

const fruits = ["Apple", "Banana", "Orange", "Grapes"];

console.log(fruits[0]);
console.log (fruits.length);

fruits.push("Papaya");
console.log(fruits);

fruits.pop();
console.log(fruits.includes("Mango"));

for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]); 
}

for (const fruit of fruits) {
    console.log(fruit);
}

// Day4 Function + array

function sumArray(numbers) {
    let total = 0;
    for (const n of numbers) {
        total = total + n; 
    }
    return total;
}

console .log (sumArray ([21, 45, 12, 65]));

// Challenge

function largestNumber(numbers) {
   let biggest = numbers[0];
   for (let i = 1; i < numbers.length; i++){
       if (numbers[i] > biggest) {
           biggest = numbers[i];
       }
   }
   return biggest;
}

 console.log(largestNumber ([10, 25, 107, 28]));