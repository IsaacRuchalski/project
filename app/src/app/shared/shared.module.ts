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
@NgModule({
  declarations: [
    FamillePipe, ResumePipe
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
    ResumePipe
  ]
})
export class SharedModule {}
