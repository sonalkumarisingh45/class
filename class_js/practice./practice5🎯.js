//qs. for a given array with marks of student-> [85,97,44,37,76,60]find the average of the entire class.
let marks= [85,97,44,37,76,60];
let sum=0;
for(let i of marks){
    sum=sum+i;
    
}
let avg=sum/marks.length;
console.log(`avg. marks of the class=${avg}`);
// next question--for a given array with prices of 5 items->[250,645,300,900,50] all items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
let items=[250,645,300,900,50];
 for(let i=0;i<items.length;i++){
    let offer=items[i]/10;
    items[i]-=offer;
 }
 console.log(items);