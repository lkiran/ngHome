import {Component, OnInit, Input, forwardRef, OnChanges} from '@angular/core';
import {HttpService} from "../../../Services/http.service";
import {FormControl, FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS} from "@angular/forms";
import {DeviceModel} from "../../../Models/DeviceModel";
import {FunctionModel} from "../../../Models/FunctionModel";
import {PropertyModel} from "../../../Models/PropertyModel";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PropertyInfoModel} from "../../../Models/PropertyInfoModel";

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PropertySelectorControl),
  multi: true
};

@Component(
  {
    selector: 'property-selector',
    templateUrl: 'property-selector.component.html',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
  }
)
export class PropertySelectorControl implements OnInit,ControlValueAccessor
{
  Devices: DeviceModel[] = [];
  Device: DeviceModel = null;
  Function: FunctionModel = null;
  propagateChange: any = () => {
  };
  @Input("property") public Prop: PropertyInfoModel = new PropertyInfoModel;

  constructor(private modalService: NgbModal, private httpService: HttpService) {
  }

  writeValue(obj: any): void {
    console.log("writeValue", obj);

  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  ngOnInit() {
    console.log(this.Prop);
    this.httpService.getDevices()
      .subscribe(
        (data: DeviceModel[]) => {
          this.Devices = data;
        }
      );
  }

  open(content) {
    this.modalService.open(content).result.then(
      (result) => {
        // console.log("result", result);
      },
      (reason) => {
        // console.log("reason", reason);
      }
    );
  }

  Apply() {
    this.propagateChange(this.Prop.Id);
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