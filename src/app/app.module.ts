import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from "@angular/http";
import {AppComponent} from './app.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {HttpService} from "../Services/http.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ColorPickerModule} from "ngx-color-picker";

import {Device} from "./Devices-Page/Device-Component/device.component";
import {ControlsPage} from "./Controls-Page/controls.page";
import {DevicesPage} from "./Devices-Page/devices.page";
import {Routing} from "./app.routes";
import {UiSwitchModule} from "angular2-ui-switch";
import {FunctionComponent} from "./Devices-Page/Device-Component/Function/device-function.component";
import {DOWPickerControl} from "./Controls-Page/control/property-editor/dow-picker/dow-picker.component";
import {ConditionComponent} from "./Controls-Page/control/condition/condition.component";
import {TaskComponent} from "./Controls-Page/control/task/task.component";
import {ControlComponent} from "./Controls-Page/control/control.component";
import {PropertyEditorControl} from "./Controls-Page/control/property-editor/property-editor.component";
import {PropertySelectorControl} from "./Controls-Page/control/property-selector/property-selector.component";

@NgModule(
  {
    declarations: [
      AppComponent,
      PropertySelectorControl,
      PropertyEditorControl,
      ControlComponent,
      TaskComponent,
      ConditionComponent,
      DOWPickerControl,
      ControlsPage,
      DevicesPage,
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
