import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import "rxjs/Rx";

@Injectable()
export class HttpService
{

  constructor(private http: Http) {

  }

  getDevices() {
    return this.http.get("http://localhost:43992/Devices")
      .map((response: Response) => response.json());
  }

  getFunctions(deviceId: string) {
    return this.http.get("http://localhost:43992/Functions/DeviceFunctions?deviceId=" + deviceId)
      .map((response: Response) => response.json());
  }

  getProperties(functionId: string) {
    return this.http.get("http://localhost:43992/Properties/FunctionProperties?functionId=" + functionId)
      .map((response: Response) => response.json());
  }
}
