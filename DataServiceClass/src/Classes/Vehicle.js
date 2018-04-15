export class Vehicle{
    // From Fleet data both Cars and drones have Model, license and latLong as common.
    // Create properties for them in Vehicle class.
    
    constructor(license, model, latLong){
        this.license = license;
        this.model = model;
        this.latLong = latLong;
        
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