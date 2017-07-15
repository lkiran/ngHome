import {Component, OnInit} from '@angular/core';
import {ControlModel} from "../Models/ControlModel";
import {HttpService} from "../Services/http.service";

@Component(
  {
    selector: 'app-root',
    templateUrl: 'app.component.html',
    providers: []
  }
)
export class AppComponent implements OnInit {
  Controls: ControlModel[] = [];

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getControls()
      .subscribe(
        (data: ControlModel[] ) => {
          this.Controls = data;
        }
      );
  }
}
