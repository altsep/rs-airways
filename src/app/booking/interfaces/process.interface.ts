export interface IContacts {
  countryCode: string;
  phone: string;
  email: string;
}

export interface PassengersFormValue {
  id: number;
  firstName: string;
  lastName: string;
  birthdate: Date;
  type: PassengerType;
  luggage: number;
  assistance: boolean;
}

export type PassengerType = 'Adult' | 'Child' | 'Infant';
