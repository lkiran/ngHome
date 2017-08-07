export module Enums
{
  export enum ComparerEnum
  {
    Equal,
    NotEqual,
    Greather,
    EqualOrGreather,
    Smaller,
    EqualOrSmaller,
  }

  export enum ClassEnum
  {
    Error = 0,
    Integer = 1,
    String = 2,
    Boolean = 3,
    Color = 4,
    DayOfWeeks = 5,
    Date = 6
  }

  export enum TypeEnum {
    ReadOnly,
    WriteOnly,
    ReadOrWrite
  }
}
