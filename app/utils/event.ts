import { IUser } from './user';

export interface IEvent {
  id: number;
  title: string;
  description: string;
  creationDate: number;
  eventDate: number;
  address: string;
  geoPosition: string;
  tags: string[];
  creator?: IUser;
  picture: string;
  liked: Boolean;
  distance: number;
}

export class Event implements IEvent {
  constructor(public id: number,
              public title: string,
              public description: string,
              public creationDate: number,
              public eventDate: number,
              public address: string,
              public geoPosition: string,
              public tags: string[],
              public creator: IUser,
              public picture: string,
              public liked: Boolean,
              public distance: number) {

  }
}
