import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpModule} from "@angular/http";
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TaskComponent} from "./control/task/task.component";
import {ControlComponent} from './control/control.component';
import {PropertyEditorComponent} from "./control/property-editor/property-editor.component";
import {PropertySelectorComponent} from './control/property-selector/property-selector.component';
import {ConditionComponent} from './control/condition/condition.component';
import {HttpService} from "../Services/http.service";

@NgModule(
  {
    declarations: [
      AppComponent,
      PropertySelectorComponent,
      PropertyEditorComponent,
      ControlComponent,
      TaskComponent,
      ConditionComponent
    ],
    imports: [
      BrowserModule,
      HttpModule,
      ReactiveFormsModule,
    ],

    providers: [HttpService],
    bootstrap: [AppComponent]
  }
)
export class AppModule {
}
