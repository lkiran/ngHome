import {Component, OnInit, Input} from '@angular/core';
import {FormArray, FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'task',
  templateUrl: 'task.component.html'
})

export class TaskComponent implements OnInit {

  @Input('group') public taskFormGroup: FormGroup;
  constructor( private _fb: FormBuilder) { }

  ngOnInit() {
  }

}
