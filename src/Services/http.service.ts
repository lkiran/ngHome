import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import "rxjs/Rx";

@Injectable()
export class HttpService
{
  private _baseUrl = "http://localhost:43992/";

  constructor(private http: Http) {
  }

  getControls() {
    return this.http.get(this._baseUrl + "Controls")
      .map((response: Response) => response.json());
  }

  getTasks(controlId) {
    return this.http.get(this._baseUrl + "Tasks/ControlTasks?controlId=" + controlId)
      .map((response: Response) => response.json());
  }

  getConditions(controlId) {
    return this.http.get(this._baseUrl + "Conditions/ControlConditions?controlId=" + controlId)
      .map((response: Response) => response.json());
  }

  getAndConditions(conditionId: string) {
    return this.http.get(this._baseUrl + "Conditions/AndConditions?conditionId=" + conditionId)
      .map((response: Response) => response.json());
  }

  getDevices() {
    return this.http.get(this._baseUrl + "Devices")
      .map((response: Response) => response.json());
  }

  getFunctions(deviceId: string) {
    return this.http.get(this._baseUrl + "Functions/DeviceFunctions?deviceId=" + deviceId)
      .map((response: Response) => response.json());
  }

  getProperties(functionId: string) {
    return this.http.get(this._baseUrl + "Properties/FunctionProperties?functionId=" + functionId)
      .map((response: Response) => response.json());
  }

  getProperty(propertyId: string) {
    return this.http.get(this._baseUrl + "Properties/Details/" + propertyId)
      .map((response: Response) => response.json());
  }

  getPropertyInfo(propertyId: string) {
    return this.http.get(this._baseUrl + "Properties/Info/" + propertyId)
      .map((response: Response) => response.json());
  }
}
