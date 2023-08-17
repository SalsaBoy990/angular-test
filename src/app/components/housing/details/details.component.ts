import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

import {HousingService} from "../../../services/housing/housing.service";
import {HousingLocation} from "../../../interfaces/housing/housinglocation";
import {ActivatedRoute} from "@angular/router";
import {CommonModule} from "@angular/common";
import {HousingBase} from "../../../classes/HousingBase";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass'],
})
export class DetailsComponent extends HousingBase {

  // housing data service
  housingService: HousingService = inject(HousingService);

  // get route object
  route: ActivatedRoute = inject(ActivatedRoute);

  // an instance of a housing location
  housingLocation: HousingLocation | undefined;

  // the form to apply to acquire the given housing
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    super();
    // initialize
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingService.getHousingLocationById(housingLocationId).then((housingLocation: HousingLocation | undefined) => {
      this.housingLocation = housingLocation
    });
  }

  // submit the application form
  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
