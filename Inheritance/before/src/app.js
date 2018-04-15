import {Car} from './Classes/Car.js'
import {Drone} from './Classes/Drone.js'

let maruthi = new Car("Dzire");
let vayu = new Drone("test");

console.log("Class Maruthi is instance of Car: ", (maruthi instanceof Car));
// It is also an instance of the Class from which it's class is derived from.
//console.log("Class Maruthi is instance of Vehicle: ", (maruthi instanceof Vehicle));
// All classes inherit from base class Object in JS.
console.log("Class Maruthi is instance of Object: ", (maruthi instanceof Object));

// Undertanding Constructors
console.log("maruthi has model :", maruthi.model);

// Accessing a class variable.
console.log(vayu.model + " is GPS Enabled :" + vayu.gpsEnabled);
// A Super class property can be overridden in a subclass.
console.log(maruthi.model + " is GPS Enabled :" + maruthi.gpsEnabled);

// MEthod Inheritance
vayu.start();   //If there is no class method then super class method is called.
maruthi.start();//The subclass can override the method in Super Class

// If you want both the Superclass method also to be called you can add super.<method name> in method

Drone.getClassName();   // Calling a static method from derived class will work fine.
Car.getClassName();     // However it can still be overridden. Static Methods get inherited and are similar to normal methods. 
