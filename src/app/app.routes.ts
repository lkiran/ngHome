import {Routes, RouterModule} from "@angular/router";
import {ControlsPage} from "./Controls-Page/controls.page";
import {DevicesPage} from "./Devices-Page/devices.page";
import {HomePage} from "./Home-Page/home.page";

const APP_ROUTES: Routes = [
  {path: 'controls', component: ControlsPage},
  {path: 'devices', component: DevicesPage},
  {path: 'home', component: HomePage},
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
