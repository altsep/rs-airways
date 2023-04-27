import { Component } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { selectFlights } from 'src/app/reducers/reducer/shopping-cart.reducer';
import { Store } from '@ngrx/store';
import { FLIGHTS, SHOPPING_CART_COLUMNS } from '../MOCK_DATA';
import { IFlight } from '../interfaces';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  public displayedColumns: string[] = SHOPPING_CART_COLUMNS;

  private flightsData: Array<IFlight> = [];

  public flights = new MatTableDataSource<IFlight>(this.flightsData);

  public selection = new SelectionModel<IFlight>(true, []);

  private count = 0;

  public promocode = '';

  constructor(private store: Store) {
    store.select(selectFlights).subscribe((data) => {
      this.flightsData = data;
      return true;
    });
  }

  public getTotalPrice(): number {
    return this.selection.selected.map((flight) => flight.price).reduce((acc, value) => acc + value, 0);
  }

  public addTrip(): void {
    console.log('add new trip to ', this.flights);
  }

  public showControlMenu(): void {
    console.log('control menu ', this.flights);
  }

  public isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.flights.data.length;
    return numSelected === numRows;
  }

  public toggleAllRows(): void {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.flights.data);
  }

  public editWithCheckbox(flight: IFlight): void {
    this.count += 1;
    console.log('Edit - ', flight);
  }

  public deleteWithCheckbox(flight: IFlight): void {
    this.count += 1;
    console.log('Delete - ', flight);
  }

  public applyPromoCode(): void {
    this.count += 1;
    console.log('Promocode - ', this.promocode);
  }

  private checkboxLabel(row?: IFlight): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.number}`;
  }
}
