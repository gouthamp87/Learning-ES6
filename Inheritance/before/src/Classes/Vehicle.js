export class Vehicle{
    constructor(model){
        this.model = model;
//        console.log("Vehicle Model is ", this.model);   
        this.gpsEnabled = true;
    }
    // Methods in  Inheritance
    start (){
        console.log("Vehicle is starting");
    }
    
    // Static Methods
    static getClassName(){
        console.log("this is vehicle class");
    }
}