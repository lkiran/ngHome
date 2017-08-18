import {Component, OnInit, Input, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatePickerControl),
  multi: true
};

@Component(
  {
    selector: 'date-picker',
    templateUrl: 'date-picker.control.html',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
  }
)
export class DatePickerControl implements OnInit,ControlValueAccessor {

  public Value: string;

  model: NgbDateStruct;
  date: {year: number, month: number};


  propagateChange = (_: any) => { };

  onChange: any = (event) => {
    this.propagateChange(event.target.value);
  };

  writeValue(Value: string): void {
    let year = Value.split('.')[1];
    let month = Value.split('.')[0];
    this.date = {year: parseInt(year) , month: parseInt(month)};
  }

  registerOnChange(fn: any): void { this.propagateChange = fn; }

  registerOnTouched(fn: any): void { }

  ngOnInit() { }
}
