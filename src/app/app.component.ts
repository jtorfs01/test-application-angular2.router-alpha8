import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { BannerComponent } from './banner/banner.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    HeaderComponent,
    BannerComponent,
    HowItWorksComponent,
    ROUTER_DIRECTIVES
  ]
})
export class AppComponent {
  title = 'app works!';
}
