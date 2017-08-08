import {Component, OnInit, forwardRef, Output, EventEmitter, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DOWPickerControl),
  multi: true
};

@Component(
  {
    selector: 'dow-picker',
    templateUrl: './dow-picker.component.html',
    styleUrls: ['./dow-picker.component.css'],
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
  }
)
export class DOWPickerControl implements OnInit, ControlValueAccessor {
  public Monday: boolean = true;
  public Tuesday: boolean = true;
  public Wednesday: boolean = true;
  public Thursday: boolean = true;
  public Friday: boolean = true;
  public Saturday: boolean = true;
  public Sunday: boolean = true;

  @Output() changeEvent: EventEmitter<string> = new EventEmitter();
  public Id: string = Math.random().toString();

  constructor() { }

  ngOnInit() { }

  writeValue(value: string): void {
    if (value == null) return;

    this.Monday = value[0] == '1';
    this.Tuesday = value[1] == '1';
    this.Wednesday = value[2] == '1';
    this.Thursday = value[3] == '1';
    this.Friday = value[4] == '1';
    this.Saturday = value[5] == '1';
    this.Sunday = value[6] == '1';
  }

  onChange: any = () => { };

  registerOnChange(fn: any): void {this.onChange = fn;}

  registerOnTouched(fn: any): void { }

  OnDowChanged() {
    this.changeEvent.emit(
      DOWPickerControl.BoolToNumString(this.Monday) +
      DOWPickerControl.BoolToNumString(this.Tuesday) +
      DOWPickerControl.BoolToNumString(this.Wednesday) +
      DOWPickerControl.BoolToNumString(this.Thursday) +
      DOWPickerControl.BoolToNumString(this.Friday) +
      DOWPickerControl.BoolToNumString(this.Saturday) +
      DOWPickerControl.BoolToNumString(this.Sunday)
    );
  }

  private static BoolToNumString(bool: boolean) {
    return bool ? '1' : '0';
  }
}
