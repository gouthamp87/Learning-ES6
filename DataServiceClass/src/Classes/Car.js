// Sub Class from Vehicle.
import {Vehicle} from './Vehicle.js'

export class Car extends Vehicle{
    
    // Car inherits from Vehicle but still has the following as unique.
    // Like miles and make, create properties in this class.
    constructor(license, model, latLong){
        super(license, model, latLong);
        this.miles = null;
        this.make = null;
    }

    start(){
        console.log("Car is starting");
        super.start();  // Unlike in constructor super can be called anywhere in method overriding.
    }
    
    
    // Overriding Static Methods
    static getClassName(){
        super.getClassName();   // You can even do this, similar to method.
        console.log("this is Car class");
    }

}
