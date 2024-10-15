// 1. print all even numbers from 0 to 100.
console.log("print all even no. from 1-100.")
for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log("even num=",i);
    }
    
}
//2. create a game where you start with any random game number. ask the user to keep guessing the game number until the user enters correct value.
let num=25;
let user=prompt("hii buddy ,guess a number.");
console.log("user");
while(user!=num)
{
    user=prompt("sorry you loose ,try again.");
}
console.log("congrats,you won.");



