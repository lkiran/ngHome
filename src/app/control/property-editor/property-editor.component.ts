import {Component, OnInit, Input} from '@angular/core';
import {HttpService} from "../../../Services/http.service";
import {FormGroup, FormBuilder, FormControl} from "@angular/forms";
import {DeviceModel} from "../../../Models/DeviceModel";
import {FunctionModel} from "../../../Models/FunctionModel";
import {PropertyModel} from "../../../Models/PropertyModel";

@Component(
  {
    selector: 'property-editor',
    templateUrl: 'property-editor.component.html',
  }
)
export class PropertyEditorComponent implements OnInit {
  Device: DeviceModel = null;
  Function: FunctionModel = null;
  public propertyEditorGroup: FormGroup;
  @Input('property') public Property: PropertyModel;

  constructor(private httpService: HttpService, private _fb: FormBuilder) {
  }

  ngOnInit() {

  }
}
