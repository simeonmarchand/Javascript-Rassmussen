// For Loop
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    alert(`Count ${i} is even`);
  } else {
    alert(`Count ${i} is odd`);
  }
}

// Do While Loop
let myNum = parseInt(prompt("Please enter a number between 5 and 20:"));
let counter = 1;
do {
  alert(`Counter: ${counter}`);
  counter++;
} while (counter <= myNum);

// Array and Foreach Loop
let subjects = [
  "Accounting",
  "Algebra",
  "Programming",
  "Art",
  "Data Analytics",
];
subjects.forEach(function (subject) {
  alert(subject);
});

// Array to String
alert(subjects.join(", "));
