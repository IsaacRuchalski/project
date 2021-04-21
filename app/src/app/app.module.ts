import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {CoreModule} from "./core/core.module";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

//import { MatTableModule } from '@angular/material/table';
import {MatTabsModule} from "@angular/material/tabs";
import {MapComponent} from "./map/map.component";
import {InstrumentDetailsComponent} from "./instrument-details/instrument-details.component";
import {DescriptionComponent} from "./description/description.component";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent, MapComponent, InstrumentDetailsComponent, DescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    MatTabsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
