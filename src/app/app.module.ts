import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpModule} from "@angular/http";
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TaskComponent} from "./controller/task/task.component";
import {ControllerComponent} from './controller/controller.component';
import {PropertyEditorComponent} from "./controller/property-editor/property-editor.component";
import {PropertySelectorComponent} from './controller/property-selector/property-selector.component';
import { ConditionComponent } from './controller/condition/condition.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertySelectorComponent,
    PropertyEditorComponent,
    ControllerComponent,
    TaskComponent,
    ConditionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
