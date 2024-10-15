//Conditional Statement
//to implement some condition in the code.
// syntax(rules) --1st conditional statement--if(condition){code}//only if
//writing a code for looking an eligible person for voting.

console.log("value of age is 24.")
let age=24;
if(age>=18){
    console.log("you can vote.")
}
//if there is only condition then we could remove curly braces too.
let gender="girl";
if(gender=="girl") console.log(gender);

//let's change the screen colour
// syntax(rules) --2nd conditional statement--if(condition){code}else{code}//if-else

//find even or odd
console.log("find even or odd no. is 45.");
let num=45;
if(num%2==0){
    console.log("number is even");
}
else{
    console.log(" no. is odd.")
}
//// syntax(rules) --3rd conditional statement--else if---if(condition){code}else if(condition){code} else if(condition){code} else{last code}
let mode="pink";
let color;
if (mode==="dark"){
    color="black";
}
else if(mode==="blue"){
     color="blue";
}
else if(mode==="pink"){
    color="pink";
}
else{
    color="white";
}

console.log(color);
// switch statement
const drink="Maaza";
switch(drink){
    case 'due':
        console.log("enjoy you due.");
        break;
        case 'limka':
            console.log("enjoy you limka.");
        break;
        case 'Maaza':
            console.log("enjoy you Maaza.");
        break;
        default:
            console.loge("go with hot drinks dear one.");
}
//nesting if-else.

/*
let age=19;
if(age>=18){
    if(age>=18){
        console.log("senior");
    }else{
        console.log("middle");
    }
}else{
    console.log("child");
}
*/