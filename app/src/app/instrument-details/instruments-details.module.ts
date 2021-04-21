import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {InstrumentDetailsComponent} from "./instrument-details.component";

import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [InstrumentDetailsComponent],
  imports: [CommonModule, SharedModule]
})
export class InstrumentsDetailsModule {}
