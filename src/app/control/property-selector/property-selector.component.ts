import {Component, OnInit, Input} from '@angular/core';
import {HttpService} from "../../../Services/http.service";
import {FormControl, FormGroup} from "@angular/forms";
import {DeviceModel} from "../../../Models/DeviceModel";
import {FunctionModel} from "../../../Models/FunctionModel";
import {PropertyModel} from "../../../Models/PropertyModel";

@Component(
  {
    selector: 'property-selector',
    templateUrl: 'property-selector.component.html',
  }
)
export class PropertySelectorComponent implements OnInit
{
  Devices: DeviceModel[] = [];
  @Input() Device: DeviceModel = null;
  @Input() Function: FunctionModel = null;
  @Input('property') public propertyGroupControl: FormGroup;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getDevices()
      .subscribe(
        (data: DeviceModel[]) => {
          this.Devices = data;
        }
      );
  }

  populateFunctions(deviceId: string) {
    this.Function = null;

    if (deviceId == null || deviceId == "")
      this.Function = null;

    this.Device = this.Devices.filter(d => d.Id === deviceId)[0];

    if (this.Device.Functions != null)
      return;

    this.httpService.getFunctions(deviceId)
      .subscribe(
        (data: FunctionModel[]) => {
          this.Device.Functions = data;
        }
      );
  }

  populateProperties(functionId: string) {
    this.Function = this.Device.Functions.filter(f => f.Id === functionId)[0];

    if (this.Function.Properties != null)
      return;

    this.httpService.getProperties(functionId)
      .subscribe(
        (data: PropertyModel[]) => {
          this.Function.Properties = data;
        }
      );
  }
}
