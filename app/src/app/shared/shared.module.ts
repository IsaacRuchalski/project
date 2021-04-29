import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatTabsModule} from "@angular/material/tabs";
import {MatSliderModule} from "@angular/material/slider";
import {MatTableModule} from "@angular/material/table";
import {FamillePipe} from "./pipes/famille.pipe";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ResumePipe} from "./pipes/resume.pipe";
import {CountryTradPipe} from "./pipes/country-trad.pipe";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {FilterPipe} from "./pipes/filter.pipe";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatMenuModule} from "@angular/material/menu";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatInputModule} from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
@NgModule({
  declarations: [
    FamillePipe, ResumePipe, CountryTradPipe, FilterPipe
  ],
  imports: [CommonModule],
  exports: [
    MatTabsModule,
    MatSliderModule,
    MatTableModule,
    FamillePipe,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    ResumePipe,
    CountryTradPipe,
    MatPaginatorModule,
    MatFormFieldModule,
    FormsModule,
    FilterPipe,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatMenuModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class SharedModule {}
