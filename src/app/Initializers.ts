import {FormBuilder, FormGroup} from "@angular/forms";
import {ControlModel} from "../Models/ControlModel";
import {until} from "selenium-webdriver";
import {TaskModel} from "../Models/TaskModel";
import {PropertyModel} from "../Models/PropertyModel";

export module  FormInitializer
{
  import Condition = until.Condition;
  export function InitConditionGroup(_fb: FormBuilder) {
    return _fb.group(
      {
        Property: InitPropertyGroup(_fb),
        Operator: [''],
        Value: [''],
      }
    );
  }

  export function InitPropertySelector(_fb: FormBuilder) {
    return _fb.group(
      {
        Id: [''],
        DeviceId: [''],
        FunctionId: [''],
      }
    );
  }

  export function InitControlGroup(_fb: FormBuilder, value?: ControlModel) {
    return _fb.group(
      {
        Tasks: _fb.array(value.Tasks),
        Conditions: InitConditionGroup(_fb)
      }
    );
  }

  export function InitPropertyGroup(_fb: FormBuilder, value?: PropertyModel) {
    if (value != null)
      return _fb.group(
        {
          Id: [value.Id],
          Value: [value.Value]
        }
      );

    return _fb.group(
      {
        Id: [''],
        Value: [''],
      }
    );
  }

  export function InitTaskGroup(_fb: FormBuilder, value?: TaskModel) {
    if (value != null)
      return this._fb.group(
        {
          Id: [value.Id],
          Value: [value.Value]
        }
      );

    return this._fb.group(
      {
        Id: [''],
        Value: ['']
      }
    );
  }
}
