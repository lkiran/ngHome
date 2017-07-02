import {Component, OnInit, Input} from '@angular/core';
import {HttpService} from "../http.service";
import {FormGroup, FormBuilder, FormControl, FormArray} from "@angular/forms";
import {DeviceModel} from "../../Models/DeviceModel";
import {FunctionModel} from "../../Models/FunctionModel";
import {PropertyModel} from "../../Models/PropertyModel";

@Component({
  selector: 'property-editor',
  templateUrl: 'property-editor.component.html',
})
export class PropertyEditorComponent implements OnInit {
  Devices: DeviceModel[] = [];
  Device: DeviceModel = null;
  Function: FunctionModel = null;
  @Input('group') public propertyEditorGroup: FormGroup;

  constructor(private httpService: HttpService, private _fb: FormBuilder) {
  }

  ngOnInit() {
    this.httpService.getDevices()
      .subscribe(
        (data: DeviceModel[]) => {
          this.Devices = data;
        }
      );
  }

  initPropertyGroup(property: PropertyModel) {
    return this._fb.group({
      Id: [property.Id],
      Value: [property.Value]
    });
  }

  get Properties(): FormArray {
    return <FormArray> this.propertyEditorGroup.get('Properties');
  }

  populateFunctions(deviceId: string) {
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
          var propArray: FormGroup[] = [];
          for (let p of data) {
            this.Properties.push(this.initPropertyGroup(p))
          }
          console.log(this.propertyEditorGroup);
        }
      );
  }
}
