import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../utils/event';
import { EventsService } from '../services/events.service';
import * as _ from 'lodash';

@Component({
  selector: 'event-details',
  templateUrl: 'app/event.details/event.details.component.html'
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  constructor(private _route: ActivatedRoute, 
              private _eventsService: EventsService) {}
  
  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.event = _.find(this._eventsService.getEvents(), {id: parseInt(params['id'], 10)});
    })
  }
}