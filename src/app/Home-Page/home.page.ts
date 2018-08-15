import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../Services/http.service";
import {InterfaceModel} from "../../Models/Interfaces";

@Component(
  {
    selector: 'home-page',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.css'],
    providers: []
  }
)
export class HomePage implements OnInit {
  public Interfaces: InterfaceModel[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getInterfaces()
      .subscribe(
        (data: InterfaceModel[]) => {
          console.log(data);
          this.Interfaces = data;
        }
      );
  }
}
