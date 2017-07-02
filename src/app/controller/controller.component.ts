import {Component, OnInit} from '@angular/core';
import {NgForm, FormGroup, FormBuilder} from '@angular/forms';
import {HttpService} from "./http.service";
import {FormInitializations}from "app/Initializations"

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
      Task: FormInitializations.InitTaskGroup(this._fb),
      Condition: FormInitializations.InitConditionGroup(this._fb)
    });

    console.log("controllerForm",this.controllerForm);
  }

  save(form:NgForm) {
    console.log(form.value);
  }


}
