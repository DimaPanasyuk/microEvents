import { IEvent } from './event';

export interface IUser {
  name: string;
  surname: string;
  nikname: string;
  dateOfBirth: number;
  age: number;
  photo: string;
  events: IEvent[];
};

export class User {
  constructor(public name: string,
              public surname: string,
              public nikname: string,
              public dateOfBirth: number,
              public age: number,
              public photo: string,
              public events: IEvent[]
              ) { }
};
