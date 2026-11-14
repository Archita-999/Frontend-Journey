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
   //biggest = numbers[0];
   //let biggest = 0;
   for (let i = 1; i < numbers.length; i++){
       if (numbers[i] > biggest) {
           biggest = numbers[i];
       }
   }
   return biggest;
}

 console.log(largestNumber ([10, 25, 107, 28]));
 //console.log(largestNumber ([-10, -25, -107, -28]));
 //console.log(largestNumber ([-5, -2, -9]));

 // Day 5 Objects

 const student = {
    name: "Archita Patel",
    city: "Mumbai",
    college: "RJ College",
    skills: ["Html", "CSS", "JavaScript"]
 };

 console.log(student.name)
 console.log(student["city"]);
 console.log(student.college);
 console.log(student.skills[0]);

 student.course = "MSC-IT" ;
 console.log(student);

 for (const skill of student.skills) {
    console.log("skill:", skill);
 }

 //Day 5 (Part 2) DOM

 const button = document.getElementById("greetBtn");
 const message = document.getElementById("message");

 button.addEventListener("click", function (){
//message.textContent = "Hello, " + student.name + "! JavaScript is working.";
message.textContent = "Hello, " + student.name + "! I am studying at " + student.college;
});

// Day 5 (Part 3) Counter

let count = 0;
const counterBtn = document.getElementById("counterBtn");

counterBtn.addEventListener("click", function () {
    count = count + 1;
    counterBtn.textContent = "Clicked: " + count;
});

// Day 5 (Part 4) Reset Button

const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", function () {
    count = 0;
    counterBtn.textContent = "Clicked: " + count;
});

// Day 6: To-Do List

/*const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
    const text = taskInput.value.trim();
    if (text === "") {
        return;
    }
    const li = document.createElement("li");
   
    const span = document.createElement("Span");
    span.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent ="Delete";
    deleteBtn.className ="deleteBtn";
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
}); */

// Day 7 

/*function addTask() {
    const text = taskInput.value.trim();
    if (text === "") {
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("Span");
    span.textContent = text;
    span.addEventListener("click", function () {
        span.classList.toggle("done");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn";
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
}); */

//Day 8: To-Do List with saved tasks

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML ="";
    
    tasks.forEach(function (task, index) {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = task.text;
        if (task.done) {
            span.classList.add("done");
        }
        span.addEventListener("click", function () {
            tasks[index].done = !tasks[index].done;
            saveTasks();
            renderTasks();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "deleteBtn";
        deleteBtn.addEventListener("click", function() {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

function addTask() {
    const text = taskInput.value.trim();
    if (text === "") {
        return;
    }
    tasks.push({text: text, done: false});
    saveTasks();
    renderTasks();
    taskInput.value ="";
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

// Day 8: Part 2 Clear All Button (Challenge)

const clearallbtn = document.getElementById("button");
clearallbtn.addEventListener("click", function () {
    tasks = [];
    saveTasks();
    renderTasks();
});

// Day 9: Weather API

const weatherBtn = document.getElementById("weatherBtn");
const weatherResult = document.getElementById("weatherResult");
async function getWeather() {
    weatherResult.textContent = "Loading....";
    const [latitude, longitude] = document.getElementById("citySelect").value.split(",").map(Number);

    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&timezone=auto`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        weatherResult.textContent = `🌡️ Temperature: ${data.current.temperature_2m}°C, 🍃 Wind: ${data.current.wind_speed_10m} km/h`;
    } catch (error) {
        weatherResult.textContent = "Could not load weather. Please try again.";
        console.log(error);
    }
}
weatherBtn.addEventListener("click", getWeather);

// Day 11: Quiz App

const questions = [
    {
        question: "Which tag is used for the main heading of a page?",
        options: ["<h1>", "<p>", "<div>", "<span>"],
        answer: 0
    },
    {
        question: "Which CSS property changes the text color?",
        options: ["font-style", "color", "background", "text-align"],
        answer: 1
    },
    {
        question: "Which keyword creates a variable that cannot be reassigned?",
        options: ["let", "var", "const", "function"],
        answer: 2
    },
    {
        question: "What does DOM stand for?",
        options: ["Data Object Model", "Document Object Model", "Display Order Method", "Digital Output Map"],
        answer: 1
    },
    {
        question: "Which method adds an item to the end of an array?",
        options: ["pop()", "shift()", "push()", "splice()"],
        answer: 2
    }
];

const quizProgress = document.getElementById("quizProgress");
const questionText = document.getElementById("questionText");
const optionsBox = document.getElementById("optionsBox");
const quizFeedback = document.getElementById("quizFeedback");
const nextBtn = document.getElementById("nextBtn");

let currentQuestion = 0;
let score = 0;
let quizFinished = false;

let bestScore = Number(localStorage.getItem("bestScore")) || 0;
const bestScoreText = document.getElementById("bestScore");
bestScoreText.textContent = "Best Score: " + bestScore;

function showQuestion() {
    const q = questions[currentQuestion];
    quizProgress.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    questionText.textContent = q.question;
    quizFeedback.textContent = "";
    optionsBox.innerHTML = "";
    nextBtn.style.display = "none";

    q.options.forEach(function (optionText, index) {
        const btn = document.createElement("button");
        btn.textContent = optionText;
        btn.className = "option";
        btn.addEventListener("click", function () {
            checkAnswer(index);
        });
        optionsBox.appendChild(btn);
    });
}

// Stage B

function checkAnswer(selectedIndex) {
    const q = questions[currentQuestion];
    const optionButtons = optionsBox.querySelectorAll(".option");

    optionButtons.forEach(function (btn, index) {
        btn.disabled = true;
        if (index === q.answer) {
            btn.classList.add("correct");
        }
    });

    if (selectedIndex === q.answer) {
        score = score + 1;
        quizFeedback.textContent = "Correct!";
    } else {
        optionButtons[selectedIndex].classList.add("wrong");
        quizFeedback.textContent = "Not quite. The correct answer is highlighted.";
    }

    nextBtn.style.display = "inline-block";
    nextBtn.textContent = currentQuestion === questions.length - 1 ? "See Result" : "Next";
}

showQuestion();

// Stage C


function showResult() {
    quizProgress.textContent = "Quiz finished";
    questionText.textContent = `Your score: ${score} out of ${questions.length}`;
    optionsBox.innerHTML = "";
    quizFeedback.textContent = score === questions.length ? "Perfect score!" : "Good try! Play again to improve.";
    nextBtn.textContent = "Play Again";
    nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", function () {
    if (quizFinished) {
        currentQuestion = 0;
        score = 0;
        quizFinished = false;
        showQuestion();
    } else if (currentQuestion === questions.length - 1) {
        quizFinished = true;
        showResult();

        function showResult() {
    quizProgress.textContent = "Quiz finished";
    questionText.textContent = `Your score: ${score} out of ${questions.length}`;
    optionsBox.innerHTML = "";
    quizFeedback.textContent = score === questions.length ? "Perfect score!" : "Good try! Play again to improve.";
    nextBtn.textContent = "Play Again";
    nextBtn.style.display = "inline-block";

    if (score > bestScore) {
        bestScore = score;
        localStorage.setItem("bestScore", bestScore);
        bestScoreText.textContent = "Best Score: " + bestScore;
    }
}
    } else {
        currentQuestion = currentQuestion + 1;
        showQuestion();
    }
});



