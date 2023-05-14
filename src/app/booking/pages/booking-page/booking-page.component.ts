import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ControlService } from '../../../core/services/control.service';
import { Flight } from '../../../shared/models/flight-search.interfaces';
import { SearchService } from '../../../shared/services/search.service';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss'],
})
export class BookingPageComponent implements OnDestroy {
  public flights?: Flight[];

  public showSearchForm = false;

  public flightsConfirmed: boolean[] = [];

  private subs = new Subscription();

  public isLoading$;

  constructor(private controlService: ControlService, searchService: SearchService) {
    const flightsSub = searchService.flights$.subscribe((v) => {
      if (v != null) {
        this.flights = v;
        this.flightsConfirmed = <boolean[]>Array(v.length).fill(false);
      }
    });

    this.subs.add(flightsSub);

    this.isLoading$ = searchService.isLoading$;
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public back(): void {
    this.controlService.stepper.previous();
  }

  public forward(): void {
    this.controlService.stepper.next();
  }

  public onFlightConfirmed(i: number, v: boolean): void {
    this.flightsConfirmed[i] = v;
  }

  public checkAllFlights(): boolean {
    return this.flightsConfirmed.every(Boolean);
  }
}
