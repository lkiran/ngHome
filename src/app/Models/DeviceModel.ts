import {FunctionModel} from "./FunctionModel";

export class DeviceModel{
  constructor(
    public Id:string,
    public Name:string,
    public Functions:FunctionModel[]
  ){}
}
