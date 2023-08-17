import {Component, inject} from '@angular/core';
import { HousingLocation } from '../../interfaces/housing/housinglocation';
import {HousingService} from "../../services/housing/housing.service";
import {HousingLocationComponent} from "../../components/housing/housing-location/housing-location.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  imports: [
    CommonModule,
    HousingLocationComponent,
  ],
})
export class HomeComponent {
  title: string = 'Homes';

  // List of all housing locations
  housingLocationList: HousingLocation[] = [];

  // Filter results by search term
  filteredLocationList: HousingLocation[] = [];

  housingService: HousingService = inject(HousingService);

  constructor() {

    // async call, Promise in service
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }



}
