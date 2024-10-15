/* Loops in Js.
Loops are used to execute a piece of code again and again .

*/
//loop 1.) syntax--for(let i=1;i<=5;i++){code}
// i wanna print the counting 1-100.
for(let count=0;count<=10;count++){
    console.log(count);
    console.log("sonal");
}
console.log("loop ended.")
//sum of n numbers.
console.log("sum of n numbers.")
let sum=0;
for(let i=0;i<=20;i++){
    sum=sum+i;
    
}
console.log(sum);

//loop 2.) syntax--while loop(codition){code}
console.log("loop no. 2 while loop.");
let cnt=1;
while(cnt<=100){
    console.log("sonal");
    cnt++;
    
}
//loop 3.) syntax-(do-while loop)--do{condition}while()
console.log("do-while loop.")
let j=100;
do{

   
    console.log(j);
    j--;
}while(0<j);
// loop 4. (for-of loop) syntax--for(let val of strVar){ code}//use for string and arrays not for object.
console.log("for-of loop");
let bunty="bunty";
let size=0;
for(let i of bunty){
    console.log("i=",i);
    size++;
    
}
console.log("string size",size);
// loop 5. for-in loop which is used for objects ,syntax--for(let key of objVar){code}
const profile={
    name:"sonal",
    posts:4453,
    follower:34534,
    following:2,
    isFollow:true,
};
for(let i in profile){
    console.log("key=",i,"value=",profile[i]);
}
/*
//nested loops
for (let i=0;i<5;i++){
    let str="";
    for(let j=0;j<5;j++){
        str=str+j;
    }
    console.log(i,str);
}
*/