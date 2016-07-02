import { provideRouter, RouterConfig } from '@angular/router';
import { EventDetailsComponent } from '../event.details/event.details.component';
import { CreateEventComponent } from '../create.event/create.event.component';
import { MasterComponent } from '../master/master.component';

export const routes: RouterConfig = [
  {path: 'events/:id', component: EventDetailsComponent},
  {path: 'create', component: CreateEventComponent},
  {path: '', component: MasterComponent}
]

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];

