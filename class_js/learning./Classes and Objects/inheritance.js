/*
Inheritance in Js--
inheritance is passing down properties & mehtods from parent class to child class.
class Parent{

}
class Child extends Parent{

}
if Child & Parent have same method,child's method will be used.[Method Overriding]
*/
class Parent{
    constructor(){
        this.species="hono sapiesns";
    }
    hello(){
        console.log("hello");
    }
}
class Child extends Parent{}
let obj= new Child();

class Person extends Child{
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}
class Engineer extends Person{
    work(){
        console.log("solve problems,build something");
    }
}
class Doctor extends Engineer{
    checkUp(){
        console.log("Check the patients.");
    }
}
 
let sona=new Doctor();
