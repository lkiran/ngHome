import {Component, OnInit, forwardRef, EventEmitter, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {isNullOrUndefined} from "util";
import {NgbTimeStruct} from "@ng-bootstrap/ng-bootstrap";

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TimePickerControl),
  multi: true
};

@Component(
  {
    selector: 'time-picker',
    templateUrl: 'time-picker.control.html',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
  }
)
export class TimePickerControl implements OnInit,ControlValueAccessor {

  public Value: string;
  model: NgbTimeStruct = {hour: 13, minute: 30, second: 0};
  @Output() changeEvent: EventEmitter<string> = new EventEmitter();

  constructor() {}

  propagateChange = (_: any) => { };

  writeValue(Value: string): void {
    if (isNullOrUndefined(Value))
      return;
    this.model = {
      hour: parseInt(Value.split(':')[0]),
      minute: parseInt(Value.split(':')[1]),
      second: 0
    };
    console.log(this.model);
  }

  registerOnChange(fn: any): void { this.propagateChange = fn; }

  registerOnTouched(fn: any): void { }

  onTimeChange(event) {
    this.model = event;
    this.changeEvent.emit(
      this.model.hour.toString() + ":" +
      this.model.minute.toString() + ":" +
      this.model.second.toString()
    );
  }

  ngOnInit() { }
}
