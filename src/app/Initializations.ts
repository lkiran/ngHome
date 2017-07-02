import {FormBuilder} from "@angular/forms";

export module  FormInitializations
{
  export function InitConditionGroup(_fb: FormBuilder) {
    return _fb.group({
      Property: InitPropertyGroup(_fb),
      Operator: [''],
      Value: [''],
    });
  }

  export function InitPropertySelector(_fb: FormBuilder) {
    return _fb.group({
      Id: [''],
      DeviceId: [''],
      FunctionId: [''],
    });
  }

  export function InitPropertyGroup(_fb: FormBuilder) {
    return _fb.group({
      Id: [''],
      Value: [''],
    });
  }

  export function InitTaskGroup(_fb: FormBuilder) {
    return _fb.group({
      Properties: _fb.array([]),
      FunctionId: [''],
      DeviceId: ['']
    })
  }
}
