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
    this.httpService.getTasks(this.Control.Id).subscribe(
      (data: TaskModel[]) => {
        this.Control.Tasks = data;

        for (let task of this.Control.Tasks)
          this.TaskArray.push(this._fb.group({Id: task.Id, Value: task.Value}));
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

    console.log("Control", this.Control);

    this.controlForm = this._fb.group(
      {
        Tasks: this._fb.array([]),
        Conditions: this._fb.array([]),
      }
    );

  }

  save(form: NgForm) {
    console.log(form.value);
  }
}