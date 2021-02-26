import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { InstrumentRoutingModule } from './instrument-routing.module';
import { InstrumentComponent } from './instrument.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [InstrumentComponent],
  imports: [
    CommonModule,
    InstrumentRoutingModule,
    MatTableModule,
    MatSliderModule
  
  ]
})
export class InstrumentModule { }
