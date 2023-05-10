import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { BookingRoutingModule } from './booking-routing.module';
import { FlightComponent } from './components/flight/flight.component';
import { FlightsCalendarComponent } from './components/flights-calendar/flights-calendar.component';
import { FlightsFormComponent } from './components/flights-form/flights-form.component';
import { SecondMenuComponent } from './components/flights-second-menu/second-menu.component';
import { InformationAboutPassengerComponent } from './components/summary-information-about-passenger/information-about-passenger.component';
import { SummaryPassengerCardComponent } from './components/summary-passenger-card/summary-passenger-card.component';
import { TotalPriceElementComponent } from './components/summary-total-price-element/total-price-element.component';
import { TotalPriceComponent } from './components/summary-total-price/total-price.component';
import { SeatsBgcDirective } from './directives/seats-bgc.directive';
import { BookingPageComponent } from './pages/booking-page/booking-page.component';
import { SummaryPageComponent } from './pages/summary-page/summary-page.component';
import { CurrencySymbolService } from './services/currency-symbol.service';

@NgModule({
  declarations: [
    BookingPageComponent,
    SummaryPageComponent,
    InformationAboutPassengerComponent,
    SummaryPassengerCardComponent,
    TotalPriceElementComponent,
    TotalPriceComponent,
    SecondMenuComponent,
    FlightsFormComponent,
    FlightsCalendarComponent,
    FlightComponent,
    SeatsBgcDirective,
  ],
  imports: [CommonModule, BookingRoutingModule, SharedModule, ReactiveFormsModule],
  providers: [CurrencySymbolService],
})
export class BookingModule {}
