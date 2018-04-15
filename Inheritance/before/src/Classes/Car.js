// Sub Class from Vehicle.
import {Vehicle} from './Vehicle.js'

export class Car extends Vehicle{
    
//    The below is fine for most, but would cause a issue with JS. To resolve that use super().
//    constructor(){
//        console.log("This is the constructor for Car");   
//    }
    
//    Assuming vehicle has no constructor but Car has we still need to call super as there is a default constructor present for all classes.
    constructor(model){
        super(model);   // super has to be the first thing in a constructor body.
        console.log("This is the constructor for Car");
        this.gpsEnabled = false;
    }

    start (){
        console.log("Car is starting");
        super.start();  // Unlike in constructor super can be called anywhere in method overriding.
    }
    
    
    // Overriding Static Methods
    static getClassName(){
        super.getClassName();   // You can even do this, similar to method.
        console.log("this is Car class");
    }

}
