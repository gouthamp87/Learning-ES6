class Drone{
    // Constructor with Instance Variables.
    constructor(id, name, cost){
        this.id = id;
        this.name = name;
        // Example for getter
        this._cost = cost;   // The _ means private in prog convention
                            // JS doesn't have private.
        this._tax = 0.15 * this._cost;
    }
    
    // Instance Methods
    fly(){
        console.log(this.name + " is Flying"); // Always use this keyword when accessing instance properties. 
    }
    
    //Static Methods
    static getCompany(){
        console.log("The company belongs to Stupids");
        // Can't access instance variables too.
        console.log(this.id + "Belong to Stupids");
    }
    
    // Getters and setters
    get cost(){
        console.log("Getting drone cost");
        return (this._cost + this._tax);
    }
    
    set cost(value){
        console.log("Setting drone cost");
        this._cost = value;
    }
    
    set tax(value){
        console.log("Setting drone tax");
        this._tax = (value/100)*this._cost;
    }
}
//console.log(typeof Drone);
//console.log(typeof drone);
//console.log(drone instanceof Drone);

let drone =  new Drone("2134", "Goutham", 100);
// Accessing iNstance variables.
console.log("Drone id: " + drone.id + "\nDrone Name: " + drone.name);
// They would be different for different instances.
let drone2 =  new Drone("2349", "Peepala", 120);
console.log("Drone id: " + drone2.id + "\nDrone Name: " + drone2.name);

// Class Property
Drone.maxHeight = "1000m";
console.log("Drone Max height is ", Drone.maxHeight);
// Can't be accessed from instances.

console.log("Drone id: " + drone2.id + " with Drone Name: " + drone2.name + "Max height is:" + drone2.maxHeight);
drone.fly();
drone2.fly();

// Similar to Class Properties
// Like Class Methods in Obj-C
Drone.getCompany();

//drone.getCompany(); -> Can't be used Will give error.
drone.tax = 12;
drone2.tax = 15;
console.log("Cost of" + drone.name + "is :" + drone.cost);
console.log("Cost of" + drone2.name + "is :" + drone2.cost);
