import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingPageComponent } from './pages/booking-page/booking-page.component';
import { SharedModule } from '../shared/shared.module';
import { SummaryPageComponent } from './pages/summary-page/summary-page.component';
import { InformationAboutPassengerComponent } from './components/information-about-passenger/information-about-passenger.component';
import { SummaryPassengerCardComponent } from './components/summary-passenger-card/summary-passenger-card.component';
import { TotalPriceElementComponent } from './components/total-price-element/total-price-element.component';
import { TotalPriceComponent } from './components/total-price/total-price.component';
import { CurrencySymbolService } from './service/currency-symbol.service';

@NgModule({
  declarations: [
    BookingPageComponent,
    SummaryPageComponent,
    InformationAboutPassengerComponent,
    SummaryPassengerCardComponent,
    TotalPriceElementComponent,
    TotalPriceComponent,
  ],
  imports: [CommonModule, BookingRoutingModule, SharedModule, TranslateModule],
  providers: [CurrencySymbolService],
})
export class BookingModule {}
