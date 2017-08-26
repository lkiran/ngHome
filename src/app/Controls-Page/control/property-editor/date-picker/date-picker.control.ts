import {Component, OnInit, forwardRef, EventEmitter, Output, OnChanges, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {NgbDateStruct, NgbDateParserFormatter, NgbDatepickerConfig} from "@ng-bootstrap/ng-bootstrap";
import {isNullOrUndefined} from "util";

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
  public model: NgbDateStruct;
  @Output() changeEvent: EventEmitter<string> = new EventEmitter();

  constructor(private config: NgbDatepickerConfig, private pf: NgbDateParserFormatter) {}

  propagateChange = (_: any) => { };

  writeValue(Value: string): void {
    if (isNullOrUndefined(Value))
      return;
    this.model = this.pf.parse(Value);
  }

  registerOnChange(fn: any): void { this.propagateChange = fn; }

  registerOnTouched(fn: any): void { }

  onDateChange(event) {
    this.model = event;
    this.changeEvent.emit(
      this.model.year.toString() + "-" +
      this.model.month.toString() + "-" +
      this.model.day.toString()
    );
  }

  ngOnInit() { }
}
