//Promises 🤞 --
/*
Promise is for "eventual" completion of task. It is an object in JS.
it is a solution to callback hell.
let promise =new Promise((resolve,reject)=>{
    .....
})
function with 2 handlers.
*resolve & reject are callbacks provided by JS
*/
//panding,resolve rejected.
//so basically the example shown below will create an error.
//ex--1) code......
/*
let promise=new Promise((resolve,reject)=>
{
    console.log("I am a promise");
    reject("some error occurred");

});
*/

//ex--2) code......

/*

function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
            if(getNextData){
                getNextData();
            }
        },5000);
    });
}

*/

//Notes===

//Promises---
/*
A JavaScript Promise object can be:
* Pending: the result is undefined
* Resolved: the result is a value (fulfilled) resolve(result)
* Rejected:the result is an error object . reject(error)
--Promise has state (pending,fulfilled) & some result (result for resolve & error for reject).
*/

/*
some more methods---
.then()&.catch()
promise.then((res)=>{...})
promise.catch((err))=>{...})
*/

//ex--3)

/*

const getPromise=()=>{
    return new Promise ((resolve,reject)=>{
        console.log('I am a Promise');
        resolve("success");
    });
};
let promise=getPromise();
promise.then((res)=>{
    console.log("promise fulfilled",res);
});
promise.catch((err)=>{
    console.log("rejected",err);
});

*/

//code with asynchronous promise.--
/*

function asyncFunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success");
        },4000);
    });
}
console.log("fetching data1....");
let p1=asyncFunc();
p1.then((res)=>{
    console.log(res);
});

*/
//Chaining in promise....code1)..

/*

function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success");
        },4000);
    });
}
function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success");
        },4000);
    });
}
console.log("fetching data1....");
let p1=asyncFunc1();
p1.then((res)=>{
    console.log("fetching data2.....")
   let p2=asyncFunc2();
   p2.then((res)=>{});
});

*/

//code--2) promise chain

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
        },2000);
    });
}
console.log("getting data1.");
getData(1)
.then((res)=>{
    console.log("getting data2.");
    return getData(2);
})
.then((res)=>{
    console.log("getting data3.");
    return getData(3);
})
.then((res)=>{
    console.log("here we are.")
    console.log(res);
});



