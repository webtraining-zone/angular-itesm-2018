import {AfterViewInit, Component, OnInit} from '@angular/core';
import {VehiclesService} from './services/vehicles.service';


@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit, AfterViewInit {

  vehicles: Array<Vehicle> = [];

  // IoC | Dependency Injection
  constructor(public vehiclesService: VehiclesService
  ) {
  }

  ngOnInit() {
    this.vehiclesService.getAllVehicles().subscribe(
      (data) => {
        this.vehicles = data;
      },
      (error) => {
        console.error(error);
      },
      () => {
        console.log('Finished!');
      }
    );
  }

  ngAfterViewInit(): void {

  }

}
