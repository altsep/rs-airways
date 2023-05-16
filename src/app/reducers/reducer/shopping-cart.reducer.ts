import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { addFlightToCart, deleteFlightFromCart } from '../actions/shopping-cart.action';
import { SHOPPING_CART } from '../actions/shopping-cart.action';
import { FLIGHTS } from 'src/app/cart/MOCK_DATA';
import { IFlight } from 'src/app/cart/interfaces';

export interface IFlightsStore {
  flights: Array<IFlight>;
}

export const INITIAL_STORE: IFlightsStore = {
  flights: FLIGHTS,
};

export const shoppingCartReducer = createReducer<IFlightsStore>(
  INITIAL_STORE,
  on(addFlightToCart, (state, { flight }): IFlightsStore => ({ flights: [...state.flights, flight] })),
  on(
    deleteFlightFromCart,
    (state, { flight }): IFlightsStore => ({
      flights: state.flights.filter((_flight) => _flight.number !== flight.number),
    })
  )
);

export const selectShoppingCart = createFeatureSelector<IFlightsStore>(SHOPPING_CART);

export const selectFlights = createSelector(selectShoppingCart, (state) => state.flights);
