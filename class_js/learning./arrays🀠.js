//Arrays--collection of items.
//create Array
let heroes=["ironman","hulk","thor","batman"];
let marks=[89,56,78,88,77,65];
let info=["rahul",86,"Delhi"];
//lenght of array.
//well i tried accessing tries array in a single line and it worked.
console.log(heroes,heroes.length,typeof heroes,marks,marks.length,typeof marks,info,info.length,typeof info); 
heroes[0]="spiderman";
console.log(heroes,heroes[3]);
//Looping over an Array.
//print all elements of an array.
console.log("using loop to print array.")
for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
}
console.log("\n")
//let's use for-of loop to print array.
console.log("let's use for-of loop to print array.");

for(let i of heroes){
    console.log(i,i.toUpperCase());
}
console.log("\n")
for(let j of marks){
    console.log(j);
}
/* methods in js---
push():add to end.
pop():delete from end & return.
toString(): converts array to string.

*/
console.log("\n");
console.log("Methods in Js.")

let arr=["sonal","mohit","ayush","ankit"];
arr.push("prince","prachi","kittu");
console.log(arr);
arr.pop("kittu");
//converting array to string.
console.log(arr,arr.toString());
//more array methods.
/* concat():joins multiple arrays * returns result.
unshift():add to start.
shift():delete from start & return
*/
console.log("more methods in array");
let arr3=["ironman","hulk","thor","batman"];
let dcHeroes=["tony stark","thenos","dead pool"];
// concat method--
let hero=arr3.concat(dcHeroes);
console.log(hero);
//unshift method--adds element in starting
arr3.unshift("captain america");
console.log(arr3);
//shift method--del element from starting.
arr3.shift();
console.log(arr3);
arr3.shift();
console.log(arr3);
//two more methods in Array.
// slice(startIdx,endIdx):returns a piece of the array.
//splice(startIdx,delCount,new el1..):change original array (add,remove,replace).
console.log(hero.slice(1,3));
//using splice method
console.log(hero.splice(2,2));
let sonal=[3,4,5,6,6,7,7,75,3,5,];
//using splice method again

sonal.splice(3,0,101);
console.log(sonal);

//Some More Array Methods.
//Map
//Creates a new array with the results of some operation.The value its callback returns are used to form new array
//arr.map(callbackFnx(value,index,array))
// let newArr=arr.map((val)=>{
 //   return val*2;
//})
console.log("map method");
let nums=[60,50,54];
let newArr=nums.map((val)=>{
    return val*2;
});
console.log(newArr);
//Filter Method
console.log("filter Method");
//creates a new array of elements that give true for a condition/filter ex--all even elements.
//let newArr-arr.filter((va)=>{return val%2==0;})
let mohit=[1,2,3,4,5,6,7];
let evenArr=mohit.filter((val)=>
{
return val%2==0;
});
console.log(evenArr);
//reduce method
console.log("reduce method.");
//performs some operations & reduces the array to a single value.it returns that single value.
let ankit_arr=[1,2,3,4];
const output=ankit_arr.reduce((res,curr)=>{
    return res+curr;
});
console.log(output);
//find largest using reduce method
let max=[4,5,2,4,5,6,9];
const output1=max.reduce((prev,curr)=>
{
    return prev>curr?prev:curr;
});
console.log(output);