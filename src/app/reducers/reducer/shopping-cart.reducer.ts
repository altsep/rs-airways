import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { FLIGHTS } from 'src/app/cart/MOCK_DATA';
import { ISummaryTrip } from 'src/app/booking/interface/flight';
import { addFlightToCart, deleteFlightFromCart } from '../actions/shopping-cart.action';
import { SHOPPING_CART } from '../actions/shopping-cart.action';

export interface ISummaryFlightsStore {
  flights: Array<ISummaryTrip>;
}

export const INITIAL_STORE: ISummaryFlightsStore = {
  flights: FLIGHTS,
};

export const shoppingCartReducer = createReducer<ISummaryFlightsStore>(
  INITIAL_STORE,
  on(addFlightToCart, (state, { flight }): ISummaryFlightsStore => ({ flights: [...state.flights, flight] })),
  on(
    deleteFlightFromCart,
    (state, { flight }): ISummaryFlightsStore => ({
      flights: state.flights.filter((_flight) => _flight.trip[0].number === flight.trip[0].number),
    })
  )
);

export const selectShoppingCart = createFeatureSelector<ISummaryFlightsStore>(SHOPPING_CART);

export const selectFlights = createSelector(selectShoppingCart, (state) => state.flights);
