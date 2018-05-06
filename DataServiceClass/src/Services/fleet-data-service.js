import {Car} from '../Classes/Car.js';
import {Drone} from '../Classes/Drone.js';
import {DataError} from './data-error.js';

export class FleetDataService{
    constructor(){
        this.cars = [];
        this.drones = [];
        this.errors = [];
    }
    // Loading Core Data
    loadData(fleet){
        for(let data of fleet){
            switch(data.type){
                case 'drone':
                    //this.drones.push(data); //This would be raw way of sending data.
                    // We weren't doing any kind of data validation, hence errors creep in.
                    if(this.validateDroneData(data)){
                        this.loadDrones(data);
                    } else {// Log the error data
                        let err = new DataError("Invalid Drone Type", data);
                        this.errors.push(err);
                    }
                    break;
                case 'car':
                    if(this.validateCarData(data)){
                        //this.cars.push(data);
                        this.loadCars(data);
                    } else {// Log the error data
                        let err = new DataError("Invalid Car Type", data);
                        this.errors.push(err);
                    }
                    break;
                default:
                    let err = new DataError("Invalid Vehicle Type", data);
                    this.errors.push(err);
            }
        }
    }
    loadDrones(data){
        try{
            let drone = new Drone(data.license, data.model, data.latLong);
            drone.airTimeHours = data.airTimeHours;
            drone.base = data.base;
            this.drones.push(drone);
        } catch(err){
            this.errors.push("Error loading Drones", data);
        }
    }
    loadCars(data){
        try{
            let car = new Car(data.license, data.model, data.latLong);
            car.miles = data.miles;
            car.make = data.make;
            this.cars.push(car);
        } catch(err){
            this.errors.push("Error loading cars", data);
        }
    }
    
    validateCarData(data){
        let reqs = 'license model latLong miles make'.split(' ');
        let isCar = true;
        for(let req of reqs){
            //console.log(data[req]);
            if(!data[req]){
                this.errors.push(new DataError(`Invalid field ${req}`, data)); 
                isCar = false;
            }
        }
        return isCar;
    }
    validateDroneData(data){
        let reqs = 'license model latLong airTimeHours base'.split(' ');
        let isDrone = true;
        for(let req of reqs){
            if(!data[req]){
                this.errors.push(new DataError(`Invalid field ${req}`, data)); 
                isDrone = false;
            }
        }
        return isDrone;
    }
    
    // This would return fine and return car by License number.
    getCarByLicense(license){
        // Since cars is a array object we can use Find.
        // Syntax for find is like below.
        return this.cars.find(function(car){
            return car.license === license;
        });
    }
    
    getCarsSortedByLicense(){
        // We can use Array sort function to sort
        return this.cars.sort(function(car1, car2){
            if(car1.license < car2.license)
                return -1;      // Car1 License should be alphabetically before car2
            if(car2.license < car1.license)
                return 1;       // Dont swap if they are of the same order.
            return 0            // If they are same don't change.
        });
    }
    filterCarsByMake(str){
        // We can use filter method of Arrays and fat arrow notation.
        return this.cars.filter(car => car.make.indexOf(str) >= 0);
    }
}
