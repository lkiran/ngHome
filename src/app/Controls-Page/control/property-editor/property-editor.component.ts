import {Component, OnInit, Input, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {PropertyInfoModel} from '../../../../Models/PropertyInfoModel';
import {Enums} from '../../../Enums';

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PropertyEditorControl),
  multi: true
};

@Component(
  {
    selector: 'property-editor',
    templateUrl: 'property-editor.component.html',
    styleUrls: ['property-editor.css'],
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
  }
)
export class PropertyEditorControl implements OnInit, ControlValueAccessor {

  public Value: string;
  @Input('property') public Prop: PropertyInfoModel;
  @Input('ShowName') public ShowName = true;
  public classEnum = Enums.ClassEnum;

  constructor() { }

  propagateChange = (_: any) => { };

  onChange: any = (event) => {
    this.propagateChange(event);
  };

  onColorChange(color) {
    this.propagateChange(color);
  }

  writeValue(Value: string): void { this.Value = Value}

  registerOnChange(fn: any): void { this.propagateChange = fn; }

  registerOnTouched(fn: any): void { }

  ngOnInit() { }
}
