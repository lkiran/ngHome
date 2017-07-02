export class PropertyModel {
  constructor(public Id: string,
              public Name: string,
              public Value: string,
              public Type: TypeEnum,
              public Class: ClassEnum,
  ) {  }
}
