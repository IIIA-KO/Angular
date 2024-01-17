import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.css']
})
export class VehicleInfoComponent {
  selectedVehicle: any;

  showCar() {
    this.selectedVehicle = {
      name: 'Найбільший автомобіль',
      dimensions: '500x200x150 см',
      weight: '10 тонн'
    };
  }

  showPlane() {
    this.selectedVehicle = {
      name: 'Найбільший літак',
      dimensions: '80x79 м',
      weight: '640 тонн'
    };
  }

  showShip() {
    this.selectedVehicle = {
      name: 'Найбільший корабель',
      dimensions: '400x59 м',
      weight: '228,000 тонн'
    };
  }
}
