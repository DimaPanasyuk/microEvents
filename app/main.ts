import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import {  APP_ROUTER_PROVIDERS } from './app/app.routes';
import { EventsService } from './services/events.service';
import { UsersService } from './services/users.service';

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  EventsService,
  UsersService
])
.catch(err => console.log(err));
