import {List} from "linqts";
import {DeviceModel} from "../Models/DeviceModel";
import {HttpService} from "./http.service";
import {Injectable} from "@angular/core";
import {FunctionModel} from "../Models/FunctionModel";

@Injectable()
export class Cache {
  constructor(private httpService: HttpService) {
  }

  private CacheDictionary = {};

  private populateDevices() {
    this.httpService.getDevices().subscribe(
      (data: DeviceModel[]) => {
        this.CacheDictionary["Devices"] = data;
      }
    );
  }

  public getDevices() {
    if (this.CacheDictionary["Devices"] == null)
      this.populateDevices();

    return this.CacheDictionary["Devices"];
  }
}

