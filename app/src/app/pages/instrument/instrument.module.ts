import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InstrumentRoutingModule} from "./instrument-routing.module";
import {InstrumentComponent} from "./instrument.component";

import {CoreModule} from "../../core/core.module";
import {SharedModule} from "../../shared/shared.module";
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [InstrumentComponent, AddDialogComponent],
  imports: [CommonModule, InstrumentRoutingModule, SharedModule, CoreModule,FormsModule,ReactiveFormsModule,MatSelectModule]
})
export class InstrumentModule {}
