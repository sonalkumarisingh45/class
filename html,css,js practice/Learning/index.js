/*
function getGrade(marks) {
    switch (true) {
        case marks >= 11 && marks <= 20:
            return 'D';
        case marks >= 21 && marks <= 30:
            return 'C';
        case marks >= 31 && marks <= 40:
            return 'B';
        case marks >= 41 && marks <= 50:
            return 'A';
        default:
            return 'Invalid marks. Please enter marks between 0 and 50.';
    }
}

const marks = parseInt(prompt("Enter marks out of 50: "), 10);

const grade = getGrade(marks);
console.log(`Your grade is: ${grade}`);
*/
let marks = parseInt(window.prompt("Enter your marks out of 50: "));

switch (true) {
  case (marks >= 11 && marks <= 20):
    alert("Your grade is: D");
    break;
  case (marks >= 21 && marks <= 30):
    alert("Your grade is: C");
    break;
  case (marks >= 31 && marks <= 40):
    alert("Your grade is: B");
    break;
  case (marks > 40 && marks <= 50):
    alert("Your grade is: A");
    break;
  default:
    alert("Invalid marks entered. Please enter marks between 0 and 50.");
}
