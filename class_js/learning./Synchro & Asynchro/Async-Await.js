/*
Async-Await---
async function always returns a Promise.
async function myFun(){...}
await pauses the execution of its surrounding async functionuntil the promise is settled.Async

*/

//Asynch-Await function used
//code--1)

/*
function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);

        },2000);
    })
}
async function getWeatherData(){
    await api();//1st
    await api();//2nd.
}
*/

//code-2)
function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
        },2000);
    });
}
async function getAllData(){
    console.log("getting data1...");
    await getData(1);
    console.log("getting data2...");
    await getData(2);
    console.log("getting data3...");
    await getData(3);
}
