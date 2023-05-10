import { IPassenger } from './summary-passenger';

export interface ISummaryFlight {
  number: string;
  dates: string;
  times: string;
  from: string;
  to: string;
  passengers: Array<IPassenger>;
}

export interface ISummaryFare {
  count: number;
  fare: number;
  tax: number;
}

export const INIT_SUMMARY_FARE = {
  count: 0,
  fare: 0,
  tax: 0,
};
