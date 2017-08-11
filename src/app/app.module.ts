import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from "@angular/http";
import {AppComponent} from './app.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {HttpService} from "../Services/http.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ColorPickerModule} from "ngx-color-picker";
import {UiSwitchModule} from "angular2-ui-switch";

import {PropertySelectorControl} from "./Controls-Page/control/property-selector/property-selector.component";
import {PropertyEditorControl} from "./Controls-Page/control/property-editor/property-editor.component";
import {ControlComponent} from "./Controls-Page/control/control.component";
import {TaskComponent} from "./Controls-Page/control/task/task.component";
import {ConditionComponent} from "./Controls-Page/control/condition/condition.component";
import {DOWPickerControl} from "./Controls-Page/control/property-editor/dow-picker/dow-picker.component";
import {ControlsPage} from "./Controls-Page/controls.page";
import {DevicesPage} from "./Devices-Page/devices.page";
import {Routing} from "./app.routes";

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
