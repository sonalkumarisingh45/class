//The super keyword is used to call the costructor of its parent class to access the parent's properties and methods.
/* super(args)//calls Parent's constructor
super.parentMethod(args) */

//code1----)

/*

class Person{
    constructor(){
        console.log("enter parent constructor.")
        this.species="hono sapiens";
    }
    eat(){
        console.log("eat");
    }
}
class Engineer extends Person{
    constructor(branch){
        console.log("enter child constructor.")
        super();//to invoke parent class constructor.
        this.branch=branch;
        console.log("exit child constructor.")
    }
    work(){
        console.log("solve problems,build something.")
    }
}
let engObj=new Engineer("chemical Engineer");
*/

//code----2)

class Person{
    constructor(name){
        
        this.species="hono sapiens";
        this.name=name;
    }
    eat(){
        console.log("eat");
    }
}
class Engineer extends Person{
    constructor(name){
       
        super(name);//to invoke parent class constructor.
        
    }
    work(){
        super.eat();
        console.log("solve problems,build something.")
    }
}
let engObj=new Engineer("sonal");