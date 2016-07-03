import { IEvent, Event } from '../utils/event';
import { UsersService } from './users.service';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class EventsService {
  
  // Better to pass object
  // Replace mocked data into api folder
  events: IEvent[] = [
    new Event(1, 'Title 1', 'Description 1', new Date().getTime(), new Date().getTime(), 'Ternopil', '', [], this._usersService.getUsers()[0], 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Transantarctic_mountain_hg.jpg', false, 1.4),
    new Event(2, 'Title 2', 'Description 2', new Date().getTime(), new Date().getTime(), 'Ternopil', '', [], this._usersService.getUsers()[1], 'http://www.betterfood.co.uk/wp-content/uploads/2010/12/cafe-muffins.jpg', true, 120),
    new Event(3, 'Title 3', 'Description 3', new Date().getTime(), new Date().getTime(), 'Ternopil', '', [], this._usersService.getUsers()[2], 'http://kingofwallpapers.com/mountain/mountain-024.jpg', true, 500),
  ];
  constructor(private _usersService: UsersService) {}
  getEvents(): IEvent[] {
    return this.events;
  } 
  createEvent(event:IEvent) {
    this.events.push(new Event(event.id, event.title, event.description, 
      event.creationDate, event.eventDate, event.address, event.geoPosition, 
      event.tags, event.creator, event.picture, event.liked, event.distance));
  }
  like(id: number): void {
    let event = _.find(this.events, {id: id});
    event.liked = !event.liked;
  }
}
