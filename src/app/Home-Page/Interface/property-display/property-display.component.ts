import {Component, OnInit, Input} from '@angular/core';
import {PropertyInfoModel} from '../../../../Models/PropertyInfoModel';
import {Enums} from '../../../Enums';

@Component(
  {
    selector: 'property-display',
    templateUrl: 'property-display.component.html',
    styleUrls: ['property-display.css'],
    providers: []
  }
)
export class PropertyDisplayControl implements OnInit {

  public Value: string;
  @Input('property') public Prop: PropertyInfoModel;
  @Input('ShowName') public ShowName = true;
  public classEnum = Enums.ClassEnum;

  constructor() {
  }

  ngOnInit() {
  }
}
