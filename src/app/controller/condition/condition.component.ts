import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import {Enums} from "../../Enums";

@Component({
  selector: 'controller-condition',
  templateUrl: 'condition.component.html'
})
export class ConditionComponent implements OnInit
{
  @Input('condition') public conditionComponent: FormGroup;
  comparerEnum = Enums.ComparerEnum;

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit() {

  }

}
