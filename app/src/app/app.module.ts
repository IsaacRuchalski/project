import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {CoreModule} from "./core/core.module";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AngularFireModule} from "@angular/fire";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFirestoreModule} from "@angular/fire/firestore";
//import { MatTableModule } from '@angular/material/table';
import {MatTabsModule} from "@angular/material/tabs";
import {MapComponent} from "./pages/map/map.component";

import {DescriptionComponent} from "./description/description.component";
import {SharedModule} from "./shared/shared.module";
import {environment} from "src/environments/environment";
import { InstrumentDetailsComponent } from "./pages/instrument-details/instrument-details.component";


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
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
