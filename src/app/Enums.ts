export module Enums {
  export enum ComparerEnum {
    Equal = 0,
    NotEqual = 1,
    Greater = 2,
    EqualOrGreater = 3,
    Smaller = 4,
    EqualOrSmaller = 5,
  }

  export enum ClassEnum {
    Error = 0,
    Integer = 1,
    String = 2,
    Boolean = 3,
    Color = 4,
    DayOfWeeks = 5,
    Date = 6,
    Time = 7,
    Empty = 8
  }

  export enum TypeEnum {
    Error = 0,
    ReadOnly = 1,
    WriteOnly = 2,
    ReadOrWrite = 3
  }
}
