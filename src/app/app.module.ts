import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from "@angular/http";
import {AppComponent} from './app.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {TaskComponent} from "./control/task/task.component";
import {ControlComponent} from './control/control.component';
import {PropertyEditorControl} from "./control/property-editor/property-editor.component";
import {PropertySelectorControl} from './control/property-selector/property-selector.component';
import {ConditionComponent} from './control/condition/condition.component';
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
      ControlComponent,
      TaskComponent,
      ConditionComponent
    ],
    imports: [
      ColorPickerModule,
      UiSwitchModule,
      BrowserModule,
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
