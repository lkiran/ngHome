import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Enums} from '../app/Enums';

@Injectable()
export class HttpService {
  private _baseUrl = 'http://127.0.0.1:8000/';

  constructor(private http: Http) {
  }

  getControls() {
    return this.http.get(this._baseUrl + 'controls')
      .map((response: Response) => response.json());
  }

  saveControl(data) {
    return this.http.post(this._baseUrl + 'controls', data)
      .map((response: Response) => response.json());
  }

  getInterfaces() {
    return this.http.get(this._baseUrl + 'interfaces')
      .map((response: Response) => response.json());
  }

  callInterfaceEditor(interfaceId: string, value: string) {
    return this.http.put(this._baseUrl + 'interfaces', {interfaceId, value});
  }

  saveInterface(data) {
    return this.http.post(this._baseUrl + 'interfaces', data)
      .map((response: Response) => response.json());
  }

  getTasks(controlId) {
    return this.http.get(this._baseUrl + 'tasks?controlId=' + controlId)
      .map((response: Response) => response.json());
  }

  getConditions(controlId) {
    return this.http.get(this._baseUrl + 'conditions?controlId=' + controlId)
      .map((response: Response) => response.json());
  }

  getAndConditions(conditionId: string) {
    return this.http.get(this._baseUrl + 'andConditions?conditionId=' + conditionId)
      .map((response: Response) => response.json());
  }

  getDevices() {
    return this.http.get(this._baseUrl + 'Devices')
      .map((response: Response) => response.json());
  }

  saveDevice(data) {
    return this.http.put(this._baseUrl + 'Devices', data)
      .map((response: Response) => response.json());
  }

  getFunctions(deviceId: string) {
    return this.http.get(this._baseUrl + 'Functions?deviceId=' + deviceId)
      .map((response: Response) => response.json());
  }

  getProperties(functionId: string, type: Enums.TypeEnum) {
    return this.http.get(this._baseUrl + 'Properties?functionId=' + functionId + '&type=' + type)
      .map((response: Response) => response.json());
  }

  getProperty(propertyId: string) {
    return this.http.get(this._baseUrl + 'Properties?propertyId=' + propertyId)
      .map((response: Response) => response.json());
  }

  getPropertyInfo(propertyId: string) {
    return this.http.get(this._baseUrl + 'PropertyInfo?propertyId=' + propertyId)
      .map((response: Response) => response.json());
  }
}
