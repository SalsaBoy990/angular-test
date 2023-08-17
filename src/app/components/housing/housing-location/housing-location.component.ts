import {Component, Input} from '@angular/core';
import {HousingLocation} from "../../../interfaces/housing/housinglocation";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HousingBase} from "../../../classes/HousingBase";

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.sass']
})
export class HousingLocationComponent extends HousingBase {
  // pass by property
  @Input() housingLocation!: HousingLocation

  constructor() {
    super();
  }
}
