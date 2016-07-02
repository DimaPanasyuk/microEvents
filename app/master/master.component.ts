import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { IEvent } from '../utils/event';
import { Router } from '@angular/router';

@Component({
  selector: 'master',
  templateUrl: 'app/master/master.component.html'
})
export class MasterComponent {
  events: IEvent[];
  constructor(private _eventsService: EventsService, 
              private _router: Router) {}
  ngOnInit(): void {
    this.events = this._eventsService.getEvents();
  }
  toggleLike(eventId: number):void {
    this._eventsService.like(eventId);
  }
  getDetails(event: IEvent): void {
    this._router.navigate(['/events', event.id]);
  }
}