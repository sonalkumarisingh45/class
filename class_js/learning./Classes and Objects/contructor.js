class ToyotaCar{
    constructor(brand,milege){
        console.log("creating new object.")
        this.brand=brand;
        this.milege=milege;
    }
    start(){
        console.log("start");
    }
    
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brandName=brand;
    }
    }
    
    let fortuner=new ToyotaCar("fortuner",10);// contructor invoke
    let lexus= new ToyotaCar("lexus",12);
//contructor invoke
    