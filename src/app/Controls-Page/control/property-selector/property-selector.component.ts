import {Component, OnInit, Input, forwardRef, Output, EventEmitter} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import TypeEnum = Enums.TypeEnum;
import {Enums} from "../../../Enums";
import {DeviceModel} from "../../../../Models/DeviceModel";
import {FunctionModel} from "../../../../Models/FunctionModel";
import {PropertyInfoModel} from "../../../../Models/PropertyInfoModel";
import {HttpService} from "../../../../Services/http.service";
import {PropertyModel} from "../../../../Models/PropertyModel";

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


  @Input("property") public Prop: PropertyInfoModel;
  @Input("type") public Type: Enums.TypeEnum;
  @Output() changeEvent: EventEmitter<PropertyInfoModel> = new EventEmitter();

  constructor(private modalService: NgbModal, private httpService: HttpService) { }

  onChange: any = () => { };

  writeValue(PropertyId: string): void { }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void { }

  ngOnInit() { }

  Open(content) {
    this.modalService.open(content).result.then(
      (result) => {
        this.httpService.getPropertyInfo(this.Prop.Id)
          .subscribe(
            (data: PropertyInfoModel) => {
              this.Prop = data;
              this.onChange(data.Id);
              this.changeEvent.emit(data);
            }
          );
      },
      (reason) => { }
    );
    this.httpService.getDevices()
      .subscribe(
        (data: DeviceModel[]) => {
          this.Devices = data;
          this.populateFunctions(this.Prop.DeviceId);
        }
      );
  }

  populateFunctions(deviceId: string) {
    if (deviceId == null || deviceId == "")
      this.Function = null;

    this.Device = this.Devices.filter(d => d.Id === deviceId)[0];

    if (this.Device == null || this.Device.Functions != null)
      return;

    this.httpService.getFunctions(deviceId)
      .subscribe(
        (data: FunctionModel[]) => {
          this.Device.Functions = data;
          this.populateProperties(this.Prop.FunctionId);
        }
      );
  }

  populateProperties(functionId: string) {
    this.Function = this.Device.Functions.filter(f => f.Id === functionId)[0];

    if (this.Function == null || this.Function.Properties != null)
      return;

    this.httpService.getProperties(functionId, this.Type)
      .subscribe(
        (data: PropertyModel[]) => {
          this.Function.Properties = data;
        }
      );
  }
}
