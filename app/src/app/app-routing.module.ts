import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthPageModule} from "./pages/auth-page/auth-page.module";
import {HomeComponent} from "./core/components/home/home.component";

import {InstrumentDetailsComponent} from "./pages/instrument-details/instrument-details.component";
import {InstrumentComponent} from "./pages/instrument/instrument.component";
import {MapComponent} from "./pages/map/map.component";

const routes: Routes = [
  {
    path: "instruments",
    loadChildren: () => import ("./pages/instrument/instrument.module").then((m) => m.InstrumentModule)
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
    loadChildren: () => import ("./pages/auth-page/auth-page.module").then((m) => m.AuthPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
