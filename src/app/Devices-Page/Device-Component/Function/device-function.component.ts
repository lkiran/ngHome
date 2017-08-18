import {Component, OnInit, Input} from "@angular/core";
import {FormGroup, FormBuilder, FormArray} from "@angular/forms";
import {FunctionModel} from "../../../../Models/FunctionModel";
import {HttpService} from "../../../../Services/http.service";

@Component(
  {
    selector: 'device-function',
    templateUrl: 'device-function.component.html'
  }
)
export class FunctionComponent implements OnInit
{
  @Input('functionGroup') public functionGroup: FormGroup;
  @Input('function') public Function: FunctionModel;

  constructor(private httpService: HttpService, private _fb: FormBuilder) { }

  get PropertyArray(): FormArray {
    return <FormArray> this.functionGroup.get("Properties");
  }

  ngOnInit() {
    console.log("functionGroup", this.functionGroup);


    for (let property of this.Function.Properties)
      this.PropertyArray.push(
        this._fb.group(
          {
            Id: property.Id,
            Value: property.Value,
          }
        )
      );

  }
}
