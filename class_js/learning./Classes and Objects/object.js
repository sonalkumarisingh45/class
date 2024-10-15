/* All Power is Within You;
You Can Do Anything
And Everything.
-Swami Vivekananda

*/
//Classes & Objects.
/*const student={
    fullName:"Sonal singh",
    marks:94.4,
    printMarks:function(){
        console.log("marks=",this.marks);
    },
}; */
const employee={
    calcTax1(){
        console.log("tax rate is 10%");
    },

};
const karanArjun={
    salary:50000,
};
const karanArjun1={
    salary:50000,//in this case the block of this code will shown firstly .
    calcTax1(){
        console.log("tax rate is 20%");
    }
};
const karanArjun2={
    salary:50000,
};
const karanArjun3={
    salary:50000,
};
const karanArjun4={
    salary:50000,
};
//is used to set a prototype 
karanArjun.__proto__ = employee;
karanArjun1.__proto__ = employee;
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee;
