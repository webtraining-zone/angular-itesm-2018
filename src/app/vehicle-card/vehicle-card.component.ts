import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.css']
})
export class VehicleCardComponent implements OnInit {

  @Input() vehicle: Vehicle;

  constructor() {
  }

  ngOnInit() {
  }

}
