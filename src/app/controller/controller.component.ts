import {Component, OnInit} from '@angular/core';
import {NgForm, FormGroup, FormBuilder} from '@angular/forms';
import {HttpService} from "./http.service";

@Component({
  selector: 'controller',
  templateUrl: './controller.component.html',
  providers: [HttpService]
})
export class ControllerComponent implements OnInit {
  controllerForm: FormGroup;

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit() {
    this.controllerForm = this._fb.group({
      Task: this._fb.group({
        Properties: this._fb.array([]),
        FunctionId: [''],
        DeviceId: ['']
      })
    })
  }

  save(form:NgForm) {
    console.log(form.value);
  }

  initPropertySelector() {
    return this._fb.group({
      Id: [''],
      DeviceId: [''],
      FunctionId: [''],
    });
  }

  initPropertyGroup() {
    return this._fb.group({
      Id: [''],
      Value: [''],
    });
  }
}
