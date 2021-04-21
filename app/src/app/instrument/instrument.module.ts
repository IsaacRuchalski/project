import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {InstrumentRoutingModule} from "./instrument-routing.module";
import {InstrumentComponent} from "./instrument.component";

import {CoreModule} from "../core/core.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [InstrumentComponent],
  imports: [CommonModule, InstrumentRoutingModule, SharedModule, CoreModule]
})
export class InstrumentModule {}
