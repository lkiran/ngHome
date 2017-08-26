import {HomePage} from "./Home-Page/home.page";
import {ControlsPage} from "./Controls-Page/controls.page";
import {DevicesPage} from "./Devices-Page/devices.page";
import {Routing} from "./app.routes";
import {Device} from "./Devices-Page/Device-Component/device.component";
import {FunctionComponent} from "./Devices-Page/Device-Component/Function/device-function.component";
import {DOWPickerControl} from "./Controls-Page/control/property-editor/dow-picker/dow-picker.component";
import {ConditionComponent} from "./Controls-Page/control/condition/condition.component";
import {TaskComponent} from "./Controls-Page/control/task/task.component";
import {ControlComponent} from "./Controls-Page/control/control.component";
import {PropertyEditorControl} from "./Controls-Page/control/property-editor/property-editor.component";
import {PropertySelectorControl} from "./Controls-Page/control/property-selector/property-selector.component";
import {DatePickerControl} from "./Controls-Page/control/property-editor/date-picker/date-picker.control";
import {TimePickerControl} from "./Controls-Page/control/property-editor/time-picker/time-picker.control";
import {InterfaceComponent} from "./Home-Page/Interface/Interface.component";

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from "@angular/http";
import {AppComponent} from './app.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {HttpService} from "../Services/http.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ColorPickerModule} from "ngx-color-picker";
import {UiSwitchModule} from "angular2-ui-switch";

@NgModule(
  {
    declarations: [
      AppComponent,
      PropertySelectorControl,
      PropertyEditorControl,
      DatePickerControl,
      TimePickerControl,
      ControlComponent,
      InterfaceComponent,
      TaskComponent,
      ConditionComponent,
      DOWPickerControl,
      ControlsPage,
      DevicesPage,
      HomePage,
      FunctionComponent,
      Device
    ],
    imports: [
      Routing,
      BrowserModule,
      ColorPickerModule,
      UiSwitchModule,
      FormsModule,
      HttpModule,
      ReactiveFormsModule,
      NgbModule.forRoot(),
    ],

    providers: [HttpService],
    bootstrap: [AppComponent]
  }
)
export class AppModule {
}
