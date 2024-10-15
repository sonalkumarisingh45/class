//get user to input a number using propmt("enter a number:"). check if the number is a multiple of 5 or not.
let user=prompt("Hii buddy ,Enter a number here:");
console.log(user);
if(user%5==0){
    console.log("the number is multiple of 5.");
}
else{
    console.log("number isn't a multiple of 5.");
}
//Qs2. Write a code which can give grades to students according to their scores:

/*  90-100, A

* 70-89, B

* 60-69, C

* 50-59, D

* 0-49, F  */ 
console.log("next question");
let studentScore=99;

if(studentScore>90 && studentScore<100){
    console.log("Grade-A");
    
}else
if(studentScore>70 && studentScore<90){
    console.log("Grade-B");
    
}
else if(studentScore>60 && studentScore<70){
    console.log("Grade-C");
    
}
else if(studentScore>50 && studentScore<60){
    console.log("Grade-D");
    
}
else{
    console.log("Grade-F");
}