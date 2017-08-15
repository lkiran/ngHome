import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../Services/http.service";
import {DeviceModel} from "../../Models/DeviceModel";

@Component(
  {
    selector: 'devices-page',
    templateUrl: 'devices.page.html',
    providers: []
  }
)
export class DevicesPage implements OnInit {
  public Devices: DeviceModel[];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getDevices()
      .subscribe(
        (data: DeviceModel[]) => {
          this.Devices = data;
        }
      );
  }
}
