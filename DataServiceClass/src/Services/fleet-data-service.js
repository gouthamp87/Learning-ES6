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
                    this.loadDrones(data);
                    break;
                case 'car':
                    //this.cars.push(data);
                    this.loadCars(data);
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
}
