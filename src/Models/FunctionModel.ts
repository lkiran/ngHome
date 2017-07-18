import {PropertyModel} from "./PropertyModel";

export class FunctionModel {
  constructor(
    public Id: string = "",
    public Name: string = "",
    public Properties: PropertyModel[] = []
  ) {
  }
}
