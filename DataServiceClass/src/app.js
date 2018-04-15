import {Car} from './Classes/Car.js'
import {Drone} from './Classes/Drone.js'
import {fleet} from './fleet-data.js'   // Imports Data
import {FleetDataService} from './Services/fleet-data-service.js'
//console.log(fleet);

// Loading Core Data
let data = new FleetDataService();
data.loadData(fleet);
console.log("Cars licences are :");
for(let car of data.cars){
    console.log(car.license);   
}
console.log("Data loading errors are :");
for(let err of data.errors){
    console.log(err);   
}
console.log("Drones data is :", data.drones);

