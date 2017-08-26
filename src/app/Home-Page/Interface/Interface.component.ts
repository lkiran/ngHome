import {Component, OnInit, Input} from '@angular/core';
import {HttpService} from "../../../Services/http.service";
import {InterfaceModel} from "../../../Models/Interfaces";
import {PropertyInfoModel} from "../../../Models/PropertyInfoModel";

@Component(
  {
    selector: 'interface',
    templateUrl: 'Interface.component.html',
    styleUrls:['Interface.component.css'],
    providers: []
  }
)
export class InterfaceComponent implements OnInit {

  @Input("Interface") public Interface: InterfaceModel;
  public Property: PropertyInfoModel= new PropertyInfoModel;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    if (this.Interface == null) return;

    this.httpService.getPropertyInfo(this.Interface.Property.Id)
      .subscribe(
        (data: PropertyInfoModel) => {
          this.Property = data;
        }
      );
  }
}
