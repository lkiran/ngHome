import {PropertyModel} from "./PropertyModel";

export class ConditionModel {
  constructor(
    public Id: string,
    public Value: string,
    public Operator: number,
    public PropertyId: string,
    public AndConditions: ConditionModel[]
  ) {
  }
}
