export class PropertyModel {
  constructor(
    public Id: string = "",
    public Name: string = "",
    public Value: string = "",
    public Type: number = 0,
    public Class: number = 0,
    public Comparable: boolean = false,
  ) {
  }
}
