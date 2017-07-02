import {Component, OnInit, Input} from '@angular/core';
import {FormArray, FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'controller-task',
  templateUrl: 'task.component.html'
})

export class TaskComponent implements OnInit {

  @Input('task') public taskFormGroup: FormGroup;
  constructor( private _fb: FormBuilder) { }

  ngOnInit() {
  }

}
