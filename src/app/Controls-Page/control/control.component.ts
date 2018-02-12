import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {NgForm, FormGroup, FormBuilder, FormArray} from '@angular/forms';
import InitConditionGroup = FormInitializer.InitConditionGroup;
import {HttpService} from "../../../Services/http.service";
import {ControlModel} from "../../../Models/ControlModel";
import {TaskModel} from "../../../Models/TaskModel";
import {ConditionModel} from "../../../Models/ConditionModel";
import {FormInitializer} from "../../Initializers";

@Component(
  {
    selector: 'control',
    templateUrl: 'control.component.html',
    providers: [HttpService]
  }
)
export class ControlComponent implements OnInit {
  @Input() public Control: ControlModel;
  @Input() public Index: number;
  @Output() removeEvent: EventEmitter<number> = new EventEmitter();

  controlForm: FormGroup;

  constructor(private httpService: HttpService, private _fb: FormBuilder) {
  }

  get TaskArray(): FormArray {
    return <FormArray> this.controlForm.get("Tasks");
  }

  get ConditionArray(): FormArray {
    return <FormArray> this.controlForm.get("Conditions");
  }

  ngOnInit() {
    this.controlForm = this._fb.group(
      {
        Id: this.Control.Id,
        Name: this.Control.Name,
        Tasks: this._fb.array([]),
        Conditions: this._fb.array([]),
      }
    );
    if (this.Control.Id == "") {
      this.AddNewTask();
      this.AddNewCondition();
    }
    else {
      this.httpService.getTasks(this.Control.Id).subscribe(
        (data: TaskModel[]) => {
          this.Control.Tasks = data;
          for (let task of this.Control.Tasks)
            this.TaskArray.push(
              this._fb.group(
                {
                  Id: task.Id,
                  Value: task.Value,
                  PropertyId: task.PropertyId
                }
              )
            );
        }
      );

      this.httpService.getConditions(this.Control.Id).subscribe(
        (data: ConditionModel[]) => {
          this.Control.Conditions = data;
          for (let condition of this.Control.Conditions)
            this.ConditionArray.push(
              this._fb.group(
                {
                  Id: condition.Id,
                  PropertyId: condition.PropertyId,
                  Value: condition.Value,
                  Operator: condition.Operator,
                  AndConditions: this._fb.array([])
                }
              )
            );
        }
      );
    }
  }

  AddNewTask() {
    this.TaskArray.push(
      this._fb.group(
        {
          Id: "",
          Value: "",
          PropertyId: ""
        }
      )
    );
    this.Control.Tasks.push(new TaskModel);
  }

  RemoveTask(index:number){
    this.TaskArray.removeAt(index);
    this.Control.Tasks.splice(index, 1);
  }

  AddNewCondition() {
    this.ConditionArray.push(
      this._fb.group(
        {
          Id: "",
          PropertyId: "",
          Value: "",
          Operator: "",
          AndConditions: this._fb.array([])
        }
      )
    );
    this.Control.Conditions.push(new ConditionModel);
  }

  RemoveCondition(index:number){
    this.ConditionArray.removeAt(index);
    this.Control.Conditions.splice(index, 1);
  }

  Remove(){
    this.removeEvent.emit(this.Index);
  }

  save(form: NgForm) {
    console.log("save form data");
    this.httpService.saveControl(this.controlForm.value).subscribe(
      (data) => {
        console.log("form data is posted:" +data);
      }
    );
  }
}
