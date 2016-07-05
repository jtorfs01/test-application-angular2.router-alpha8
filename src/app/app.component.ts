import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { BannerComponent } from './banner/banner.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    HeaderComponent,
    BannerComponent,
    HowItWorksComponent
  ]
})
export class AppComponent {
  title = 'app works!';
}
