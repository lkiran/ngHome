import {Component, OnInit, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {PropertySelectorControl} from '../property-selector/property-selector.component';
import {TaskModel} from '../../../../Models/TaskModel';
import {HttpService} from '../../../../Services/http.service';
import {PropertyInfoModel} from '../../../../Models/PropertyInfoModel';
import {Enums} from '../../../Enums';

@Component(
  {
    selector: 'control-task',
    templateUrl: 'task.component.html',
    providers: [PropertySelectorControl]
  }
)
export class TaskComponent implements OnInit {
  public typeEnum = Enums.TypeEnum;
  @Input('task') public Task: TaskModel;
  @Input('taskGroup') public taskGroup: FormGroup;
  public PropertyInfo: PropertyInfoModel = new PropertyInfoModel;

  constructor(private httpService: HttpService, private selector: PropertySelectorControl) {
    if (this.PropertyInfo == null)
      this.PropertyInfo = new PropertyInfoModel();
  }

  ngOnInit() {
    if (this.Task.PropertyId == '') return;

    this.httpService.getPropertyInfo(this.Task.PropertyId).subscribe(
      (data: PropertyInfoModel) => {
        this.PropertyInfo = data;
      }
    );
  }

  PropChanged(PropInfo: PropertyInfoModel) {
    this.PropertyInfo = PropInfo;
  }
}
