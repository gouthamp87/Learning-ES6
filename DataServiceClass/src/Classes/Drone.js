// Another Sub Class from Vehicle.
// Can have more than one class extending a super class.
import {Vehicle} from './Vehicle.js'

export class Drone extends Vehicle{
    // Drone inherits from Vehicle but still has the following as unique.
    // Like airtime and base, create properties in this class.
    constructor(license, model, latLong){
        super(license, model, latLong);
        this.airTimeHours = null;
        this.base = null;
    }
}
