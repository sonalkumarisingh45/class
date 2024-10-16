const arr=["jarvis","the"];
arr.push("Developer");
//array printing
console.log(arr);
//array to  string
console.log(arr.toString());
//slice method returns the peace of code.
console.log(arr.slice(1,2));

//shift-->returns the removed array.
console.log(arr.shift());

//map method-->targets each individual element and works according to the given input.

let numbers=[1,2,3,4,5];
// let number1=numbers.map(x=> x*2);
// console.log(number1);
let num = numbers.pop();
//pop method-removes the element from the last element.
console.log(numbers);
//filter...
//returns the value according to the applied condition.
let num1=numbers.filter(x=> x>2);
console.log(num1);

