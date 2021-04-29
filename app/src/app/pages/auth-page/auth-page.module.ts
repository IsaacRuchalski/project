import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AuthPageComponent} from "./auth-page.component";
import {DialogComponent} from "./dialog/dialog.component";
import {AuthPageRoutingModule} from "./auth-page-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [
    AuthPageComponent, DialogComponent
  ],
  imports: [CommonModule, AuthPageRoutingModule, SharedModule]
})
export class AuthPageModule {}
