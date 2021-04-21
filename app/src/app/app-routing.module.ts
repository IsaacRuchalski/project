import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
