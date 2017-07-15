import {PropertyModel} from "./PropertyModel";

export class PropertyInfoModel extends PropertyModel {
  constructor(
    public FunctionName: string = "",
    public FunctionId: string = "",
    public DeviceName: string = "",
    public DeviceId: string = "",
  ) {
    super();
  }
}
