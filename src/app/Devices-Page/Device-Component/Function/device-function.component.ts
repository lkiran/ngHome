import {Component, OnInit, Input} from "@angular/core";
import {FormGroup, FormBuilder} from "@angular/forms";
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

  ngOnInit() {
    console.log(this.Function);
    if (this.Function.Id == "") { }
    else { }
  }
}
