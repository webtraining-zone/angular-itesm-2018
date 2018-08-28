import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor() {
  }

  getAllVehicles(): Array<Vehicle> {
    return [
      {
        year: 2018,
        name: 'XV',
        numberOfDoors: 4
      },
      {
        year: 2018,
        name: 'Acura'
      }
    ];
  }

}
