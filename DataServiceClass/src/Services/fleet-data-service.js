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
}
