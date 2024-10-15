// Functions
//Block of code that perform a specific task,can be invoked whenever needed.
/*
function definition--function functionName(){code} */
function myfunction(){
    console.log("Welocme to Sonal's coding.");
    console.log("i'm learning coding here.")
}
//function call.call the function many times as you want.
myfunction();
myfunction();
myfunction();
myfunction();
//function parameter.
function myFunciton(msg){
    console.log(msg);
}
myFunciton("i'm loving coding these days.");
let s;
function calculator(a,b){
     s=a+b; 
     return s;  
}
let val=calculator(3,4);
console.log(val);
//Arrow function
console.log("Arrow functions.")
/*const functionName=(param1,param2...)=>{

} */
const sonal=(a,b)=>{
    console.log(a+b);
};
sonal(4,3);

const mul=(x,y)=>{
    console.log(x*y);
}
mul(5,6);
mul(9,10);
mul(4,5);
//if there is single line we could also print arrow function without curly braces.
//for ex-
const withoutCurly=console.log("hii");
//forEach loop in Arrays
//arr.forEach(callBackFunction)
//callbackFunction:Here,it's a function to execute for each element in the array.
/*
A callback is a function passed as an argument to another function.
*/
/*
arr.forEach((val)=>{
    console.log(val):
})
*/
let arr=["pune","Mumbai","Delhi","Bihar"];

arr.forEach(function printVal(val)
{console.log(val.toUpperCase());})

let brr=["pune","Mumbai","Delhi","Bihar"];
brr.forEach((val,idx,arr)=>{
    console.log(val.toUpperCase(),idx,arr);
});
//for each functions are the higher order function/method --interview question.
//heigher funtion----take-another functions as a parameter,or return another function as their output.