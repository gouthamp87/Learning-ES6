import {Car} from './Classes/Car.js'
import {Drone} from './Classes/Drone.js'
import {fleet} from './fleet-data.js'   // Imports Data
import {FleetDataService} from './Services/fleet-data-service.js'
//console.log(fleet);

// Loading Core Data
let data = new FleetDataService();
data.loadData(fleet);
//Querying and Sorting Data
//let car = data.getCarByLicense('AT9900');
//console.log(car);
//
//// Sorting the cars based on licenses
//console.log("Before sorting Cars are like this:", data.cars);
//let cars = data.getCarsSortedByLicense();
//console.log("After sorting Cars are like this:");
//console.log(cars);

// Filtering Data
// Example if we just type U uber cars should come etc.
// Or searching for e should return Tesla and Uber but not lyft.

let cars = data.filterCarsByMake('e');

console.log(cars);