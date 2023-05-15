import { TranslateService } from '@ngx-translate/core';
import { Component, Input, OnInit } from '@angular/core';
import { ISummaryFare, ISummaryFlight, ISummaryLang } from '../../interfaces/summary-flight';
import { CurrencySymbolService } from '../../services/currency-symbol.service';
import { SummaryService } from '../../services/summary.service';

@Component({
  selector: 'app-total-price',
  templateUrl: './total-price.component.html',
  styleUrls: ['./total-price.component.scss'],
})
export class TotalPriceComponent implements OnInit {
  @Input() public flights!: Array<ISummaryFlight>;

  public summaryByAge?: Array<ISummaryFare>;

  constructor(
    public summaryService: SummaryService,
    public currencyService: CurrencySymbolService,
    private translate: TranslateService
  ) {}

  public ngOnInit(): void {
    this.summaryByAge = this.summaryService.getSummaryByAge(this.flights);
  }

  public getCaption(count: number, index: number): string {
    let res = ['', '', ''];
    this.translate.get('SUMMARY').subscribe((el: ISummaryLang) => {
      res = [el['ADULT'], el['CHILD'], el['INFANT']];
    });
    return `${count} x ${res[index]}`;
  }

  public getTotalPrice(): number {
    const totalSum = this.summaryByAge?.reduce((_sum, el) => _sum + el.fare + el.tax, 0) || 0;
    return totalSum;
  }
}
