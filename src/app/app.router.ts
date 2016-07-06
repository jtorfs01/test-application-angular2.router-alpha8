import { provideRouter } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent }  from './login/login.component';
//import { HeaderComponent} from './shared/header/header.component';
import { HeaderRoutes } from './shared/header/header.routes';

export const routes = [
    //Currently not working:
    ...HeaderRoutes,
    //{ path: 'register-commpany',  component: HeaderComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: AppComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];