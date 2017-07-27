import {Component, OnInit, Input} from '@angular/core';
import {NgForm, FormGroup, FormBuilder, FormArray} from '@angular/forms';
import {HttpService} from "../../Services/http.service";
import {FormInitializer} from "../Initializers"
import {ControlModel} from "../../Models/ControlModel";
import InitConditionGroup = FormInitializer.InitConditionGroup;
import {TaskModel} from "../../Models/TaskModel";
import {ConditionModel} from "../../Models/ConditionModel";

@Component(
  {
    selector: 'control',
    templateUrl: 'control.component.html',
    providers: [HttpService]
  }
)
export class ControlComponent implements OnInit {
  @Input() public Control: ControlModel;
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
    console.log("Control", this.Control);

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

  save(form: NgForm) {
    let changedProperties = [];

    Object.keys(form.controls).forEach(
      (name) => {
        let currentControl = form.controls[name];

        if (currentControl.dirty)
          changedProperties.push(currentControl);
      }
    );

    console.log(changedProperties);
  }
}
