import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { InstrumentRoutingModule } from './instrument-routing.module';
import { InstrumentComponent } from './instrument.component';

@NgModule({
  declarations: [InstrumentComponent],
  imports: [
    CommonModule,
    InstrumentRoutingModule,
    MatTableModule
  
  ]
})
export class InstrumentModule { }
