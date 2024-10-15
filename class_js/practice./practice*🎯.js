//Qs. You are creating a website for your college.Create a class User with 2 properties,name & email.it also has a method called viewData() that allows user to view website data.
//to run the code remove comments...

//code 1.--)

/*
let DATA="secret information";
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("data=",DATA);
    }
}
let student1=new User("sonal","sonalkrsingh@email.com");
let student2=new User("Mohit","devasteted@email.com");
let teacher1=new User("Savita Goswami","savita@email.com")
*/

//Create a new class called Admin which inherits from User.Add a new method called editData to Admin that allows it to edit website data.

let DATA="secret information";
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("data=",DATA);
    }
}
class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA="some new value";
    }
}
let student1=new User("sonal","sonalkrsingh@email.com");
let student2=new User("Mohit","devasteted@email.com");
let teacher1=new User("Savita Goswami","savita@email.com")
let admin1=new Admin("sonal","sonal@email.com");