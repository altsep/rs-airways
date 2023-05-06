/* eslint-disable no-underscore-dangle */
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { passengersValidator } from '../../directives/passengers-validator.directive';
import { FlightSearchFormValue } from '../../models/flight-search.model';
import { AirportForm } from '../../models/main.interfaces';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss'],
})
export class MainFormComponent {
  public searchForm: FormGroup;

  constructor(fb: FormBuilder, private router: Router, private searchService: SearchService) {
    this.searchForm = fb.group({
      oneWay: fb.control<boolean>(false, Validators.required),
      airport: fb.group({
        from: fb.control<AirportForm | null>(null, Validators.required),
        to: fb.control<AirportForm | null>(null, Validators.required),
      }),
      dates: fb.group({
        from: fb.control<Date | null>(null, Validators.required),
        to: fb.control<Date | null>(null, Validators.required),
        oneWay: fb.control<Date | null>(null),
      }),
      passengers: fb.group({
        adult: fb.control<number>(0, [Validators.required, Validators.min(1), passengersValidator]),
        child: fb.control<number>(0, Validators.required),
        infant: fb.control<number>(0, Validators.required),
      }),
    });
  }

  public onSubmit(): void {
    this.searchService.update(this.searchForm.value as FlightSearchFormValue);
    this.router.navigate(['/booking']).catch(console.error);
  }
}
