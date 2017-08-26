import {PropertyModel} from "./PropertyModel";

export class InterfaceModel {
  constructor(
    public Id: string = "",
    public Name: string = "",
    public Property: PropertyModel,
    public Monitor: PropertyModel
  ) { }
}
