import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { IEvent } from '../utils/event';

@Component({
  selector: 'master',
  templateUrl: 'app/master/master.component.html'
})
export class MasterComponent {
  events: IEvent[];
  constructor(private _eventsService: EventsService) {}
  ngOnInit(): void {
    this.events = this._eventsService.getEvents();
  }
}