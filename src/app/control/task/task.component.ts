import {Component, OnInit, Input} from '@angular/core';
import {FormArray, FormGroup, FormBuilder} from "@angular/forms";
import {TaskModel} from "../../../Models/TaskModel";
import {HttpService} from "../../../Services/http.service";
import {PropertyInfoModel} from "../../../Models/PropertyInfoModel";

@Component(
  {
    selector: 'control-task',
    templateUrl: 'task.component.html'
  }
)
export class TaskComponent implements OnInit {

  @Input('task') public Task: TaskModel;
  @Input('taskGroup') public taskGroup: FormGroup;
  public PropertyInfo: PropertyInfoModel = new PropertyInfoModel;

  constructor(private httpService: HttpService, private _fb: FormBuilder) {
    if (this.PropertyInfo == null)
      this.PropertyInfo = new PropertyInfoModel();
  }

  ngOnInit() {
    if (this.Task.PropertyId == "") return;

    this.httpService.getPropertyInfo(this.Task.PropertyId).subscribe(
      (data: PropertyInfoModel) => {
        this.PropertyInfo = data;
      }
    );
  }
}
