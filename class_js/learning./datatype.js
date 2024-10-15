//Data types in Js.
//primitive datatypes
//Number ,String,Bollean,Undefined,Null<BigInt,Symbol.

let name="sonal";
let age =21;
let cgpa=8.1;
let isPass=true;
console.log(typeof name);
console.log(typeof age);
console.log(typeof cgpa);
console.log(typeof isPass);
let x=null;
let y;
console.log(typeof x);
console.log(typeof y);
let x1=BigInt(123);
console.log(typeof x1);
let y1=Symbol("&");
console.log(typeof y1);
//Object--storing different values in a collection.
let student={
    fullName:"sonal",
    age:21,
    cgpa:8.1,
    address:"tyagin market",
    isPass:true,

};
//to print the name we'll use name of the object.
console.log(student);
// i only want the name of the student.+ want to increase the value of the age.
student.age=student.age+1;
console.log(student.age);

console.log(student["fullName"]);
