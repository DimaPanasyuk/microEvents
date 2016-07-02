import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent, Event } from '../utils/event';
import { IUser } from '../utils/user';
import { EventsService } from '../services/events.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'create-event',
  templateUrl: 'app/create.event/create.event.component.html'
})
export class CreateEventComponent implements OnInit {
  tagName: string;
  newEvent: IEvent = {
    id: this.randomise(9999),
    title: '',
    description: '',
    creationDate: new Date().getTime(),
    eventDate: new Date().getTime(),
    address: '',
    geoPosition: '',
    tags: [],
    picture: '',
    liked: false,
    distance: this.randomise(800)
  };
  constructor(private _usersService: UsersService, 
              private _eventsService: EventsService,
              private _router: Router) { }
  
  ngOnInit(): void {
    let index = this.randomise(2);
    this.newEvent.creator = this._usersService.getUsers()[index];
  }
  
  createEvent(): void {
    this._eventsService.createEvent(this.newEvent);
    this._router.navigate(['']);
  }
  
  addTag(event: any): void {
    if (event.keyCode === 13) {      
      this.newEvent.tags.push(this.tagName);
      this.tagName = '';
    }
  }
  
  removeTag(index: number): void {
    this.newEvent.tags.splice(index, 1);
  }
  
  randomise(index: number): number {
    return Math.round(Math.random() * index);
  }
}