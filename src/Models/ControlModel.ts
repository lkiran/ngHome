import {TaskModel} from './TaskModel';
import {ConditionModel} from './ConditionModel';

export class ControlModel {
  constructor(
    public Id: string = '',
    public Name: string = '',
    public Tasks: TaskModel[] = [],
    public Conditions: ConditionModel[] = []
  ) {}
}
