//Callback Hell😈---
/*
callback Hell: Nested callbacks stacked below one another forming a pyramind structure.(Pyramid of Doom)
Thsi style of programming becomes difficult to understand & manage.
*/
function getData(dataId,getNextData){
//2s
setTimeout(()=>{
    console.log("data",dataId);
    if(getNextData){
        getNextData();
    }
},2000);
}
//callback hell
getData(1,()=>{
    console.log("getting data2....");
    getData(2,()=>{
        console.log("getting data3....");
        getData(3,()=>{
            console.log("getting data4....");
            getData(4,()=>{
                console.log("getting data5....");
                getData(5);
            });
        });
    });
});
