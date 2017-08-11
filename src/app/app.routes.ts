import {Routes, RouterModule} from "@angular/router";
import {ControlsPage} from "./Controls-Page/controls.page";
import {DevicesPage} from "./Devices-Page/devices.page";

const APP_ROUTES: Routes = [
  {path: '', component: ControlsPage},
  {path: 'devices', component: DevicesPage},
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
