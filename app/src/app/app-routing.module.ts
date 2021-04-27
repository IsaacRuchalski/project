import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthPageModule} from "./auth-page/auth-page.module";
import {HomeComponent} from "./core/components/home/home.component";

import {InstrumentDetailsComponent} from "./instrument-details/instrument-details.component";
import {InstrumentComponent} from "./instrument/instrument.component";
import {MapComponent} from "./map/map.component";

const routes: Routes = [
  {
    path: "instruments",
    loadChildren: () => import ("./instrument/instrument.module").then((m) => m.InstrumentModule)
  }, {
    path: "map",
    component: MapComponent
  }, {
    path: "instruments/:id",
    component: InstrumentDetailsComponent
  }, {
    path: "",
    component: HomeComponent
  }, {
    path: "auth",
    loadChildren: () => import ("./auth-page/auth-page.module").then((m) => m.AuthPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
