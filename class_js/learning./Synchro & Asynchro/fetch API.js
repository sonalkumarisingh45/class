// The fetch API provides an interface for fetching (sending/receiving)resources.
//It uses Request and Response objects.
// The fetch() method is used to fetch a resource(data).
//let promise=fetch(url,[options])
 const URL ="https://cat-fact.herokuapp.com/facts";
 const getFacts=async()=>{
    console.log("getting data....");
    let response=await fetch(URL);
    console.log(response);
 }