import { IEvent, Event } from '../utils/event';
import { UsersService } from './users.service';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class EventsService {
  events: IEvent[] = [
    new Event(1, 'Title 1', 'Description 1', new Date().getTime(), new Date().getTime(), 'Ternopil', '', [], this._usersService.getUsers()[0], 'http://ichef.bbci.co.uk/naturelibrary/images/ic/credit/640x395/m/mo/mountain/mountain_1.jpg', false, 1.4),
    new Event(2, 'Title 2', 'Description 2', new Date().getTime(), new Date().getTime(), 'Ternopil', '', [], this._usersService.getUsers()[1], 'http://www.telegraph.co.uk/content/dam/Travel/galleries/travel/activityandadventure/The-worlds-most-beautiful-mountains/mountains-matterho_3374098a-large.jpg', true, 120),
    new Event(3, 'Title 3', 'Description 3', new Date().getTime(), new Date().getTime(), 'Ternopil', '', [], this._usersService.getUsers()[2], 'http://vignette1.wikia.nocookie.net/prydain/images/7/7f/Mountains.jpg/revision/latest?cb=20130328022425', true, 500),
  ];
  constructor(private _usersService: UsersService) {}
  getEvents(): IEvent[] {
    return this.events;
  }

  // Refactor 
  createEvent(event:IEvent) {
    this.events.push(new Event(event.id, event.title, event.description, event.creationDate, event.eventDate, event.address, event.geoPosition, event.tags, event.creator, event.picture, event.liked, event.distance));
  }
  like(id: number): void {
    let event = _.find(this.events, {id: id});
    event.liked = !event.liked;
  }
}
