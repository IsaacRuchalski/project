import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {InstrumentDetailsComponent} from "../instrument-details/instrument-details.component";
import {AuthPageComponent} from "./auth-page.component";

const routes: Routes = [
  {
    path: "",
    component: AuthPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthPageRoutingModule {}
