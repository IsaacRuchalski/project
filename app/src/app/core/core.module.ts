import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {CountryComponent} from "./components/country/country.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {MatTabsModule} from "@angular/material/tabs";
import {InstrumentService} from "./services/http/instrument.service";
import {ShapeService} from "./services/map/shape.service";
import {PopupService} from "./services/http/popup.service";
import {FamilleService} from "./services/http/famille.service";
import {TraductionComponent} from "./components/traduction/traduction.component";
import {HomeComponent} from "./components/home/home.component";
import {AuthServiceService} from "./services/firebase/auth-service.service";
import {SharedModule} from "../shared/shared.module";
import { LogNotFoundComponent } from './components/log-not-found/log-not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CountryComponent,
    TraductionComponent,
    TraductionComponent,
    HomeComponent,
    LogNotFoundComponent
  ],
  imports: [
    CommonModule, HttpClientModule, MatToolbarModule, MatTabsModule, SharedModule
  ],
  exports: [
    HeaderComponent, FooterComponent, MatToolbarModule, CountryComponent, TraductionComponent, LogNotFoundComponent
  ],
  providers: [InstrumentService, ShapeService, PopupService, FamilleService, AuthServiceService]
})
export class CoreModule {}
