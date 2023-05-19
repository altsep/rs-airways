import { IFlight } from 'src/app/cart/interfaces';
import { ITrip } from 'src/app/booking/interface/flight';
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { USER_PROFILE, addFlightToProfile, deleteFlightFromProfile } from '../actions/user-flight-history.action';

export interface IFlightsStore {
  flights: Array<ITrip>;
}

export const INITIAL_STORE: IFlightsStore = {
  flights: [],
};

export const userProfileReducer = createReducer<IFlightsStore>(
  INITIAL_STORE,
  on(addFlightToProfile, (state, { flight }): IFlightsStore => ({ flights: [...state.flights, flight] })),
  on(
    deleteFlightFromProfile,
    (state, { flight }): IFlightsStore => ({
      flights: state.flights.filter((_flight) => _flight.from.number !== flight.from.number),
    })
  )
);

export const selectShoppingCart = createFeatureSelector<IFlightsStore>(USER_PROFILE);

export const selectFlightsToProfile = createSelector(selectShoppingCart, (state) => state.flights);
