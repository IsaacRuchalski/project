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

@NgModule({
  declarations: [
    HeaderComponent, FooterComponent, CountryComponent
  ],
  imports: [
    CommonModule, HttpClientModule, MatToolbarModule, MatTabsModule
  ],
  exports: [
    HeaderComponent, FooterComponent, MatToolbarModule, CountryComponent
  ],
  providers: [InstrumentService, ShapeService, PopupService]
})
export class CoreModule {}
