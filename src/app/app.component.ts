import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component(
  {
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: []
  }
)
export class AppComponent {
  constructor(router:Router) {
    router.navigate(['/home']);
  }
}
