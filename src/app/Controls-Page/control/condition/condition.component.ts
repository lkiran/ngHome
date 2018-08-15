import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormBuilder, FormArray} from '@angular/forms';
import {ConditionModel} from '../../../../Models/ConditionModel';
import {PropertyInfoModel} from '../../../../Models/PropertyInfoModel';
import {HttpService} from '../../../../Services/http.service';
import {Enums} from '../../../Enums';

@Component(
  {
    selector: 'control-condition',
    templateUrl: 'condition.component.html'
  }
)
export class ConditionComponent implements OnInit
{
  @Input('conditionGroup') public conditionGroup: FormGroup;
  @Input('condition') public Condition: ConditionModel;

  public PropertyInfo: PropertyInfoModel = new PropertyInfoModel;
  comparerEnum = Enums.ComparerEnum;
  typeEnum = Enums.TypeEnum;

  get AndConditionArray(): FormArray {
    return <FormArray> this.conditionGroup.get('AndConditions');
  }

  constructor(private httpService: HttpService, private _fb: FormBuilder) { }

  populateAndConditions() {
    for (const andCondition of this.Condition.AndConditions)
      this.AndConditionArray.push(
        this._fb.group(
          {
            Id: andCondition.Id,
            PropertyId: andCondition.PropertyId,
            Value: andCondition.Value,
            Operator: andCondition.Operator,
            AndConditions: this._fb.array([])
          }
        )
      );
  }

  ngOnInit() {
    if (this.Condition.Id == '') {

    }
    else {
      this.httpService.getPropertyInfo(this.Condition.PropertyId).subscribe(
        (data: PropertyInfoModel) => {
          this.PropertyInfo = data;
        }
      );

      if (this.Condition.AndConditions == null)
        this.httpService.getAndConditions(this.Condition.Id).subscribe(
          (data: ConditionModel[]) => {
            this.Condition.AndConditions = data;
            this.populateAndConditions();
          }
        );
      else
        this.populateAndConditions()
    }
  }

  AddAndCondition() {
    this.AndConditionArray.push(
      this._fb.group(
        {
          Id: '',
          PropertyId: '',
          Value: '',
          Operator: 0,
          AndConditions: this._fb.array([])
        }
      )
    );

    this.Condition.AndConditions.push(new ConditionModel);
  }

  RemoveAndCondition(index: number) {
    this.AndConditionArray.removeAt(index);
    this.Condition.AndConditions.splice(index, 1);
  }

  PropChanged(PropInfo: PropertyInfoModel) {
    this.PropertyInfo = PropInfo;
  }
}
