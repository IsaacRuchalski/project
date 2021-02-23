import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import { InstrumentService } from './services/http/instrument.service';
@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatTabsModule
  
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MatToolbarModule

  ],
  providers: [

    InstrumentService
    
  ]
})
export class CoreModule { }
