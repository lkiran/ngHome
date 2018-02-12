import {Component, Input, OnInit} from '@angular/core';
import {DeviceModel} from "../../../Models/DeviceModel";
import {FunctionModel} from "../../../Models/FunctionModel";
import {HttpService} from "../../../Services/http.service";
import {FormGroup, NgForm, FormBuilder, FormArray} from "@angular/forms";

@Component(
  {
    selector: 'device',
    templateUrl: 'device.component.html',
    providers: []
  }
)
export class Device implements OnInit {
  @Input('device') public Device: DeviceModel;

  deviceForm: FormGroup;

  constructor(private httpService: HttpService, private _fb: FormBuilder) { }

  get FunctionArray(): FormArray {
    return <FormArray> this.deviceForm.get("Functions");
  }

  get PropertyArray(): FormArray {
    return <FormArray> this.FunctionArray.get("Properties");
  }

  ngOnInit() {
    this.deviceForm = this._fb.group(
      {
        Id: this.Device.Id,
        Name: this.Device.Name,
        Functions: this._fb.array([]),
      }
    );

    if (this.Device.Id == "") { }
    else {
      this.httpService.getFunctions(this.Device.Id).subscribe(
        (data: FunctionModel[]) => {
          this.Device.Functions = data;

          for (let f of this.Device.Functions) {
            this.FunctionArray.push(
              this._fb.group(
                {
                  Id: f.Id,
                  Name: f.Name,
                  Properties: this._fb.array([])
                }
              )
            );
          }
        }
      );
    }
  }

  Save(form: NgForm) {
    console.log("posting device form");
    this.httpService.saveDevice(this.deviceForm.value).subscribe(
      (data) => {
        console.log("form data is posted:" + data);
      }
    );
  }
}
