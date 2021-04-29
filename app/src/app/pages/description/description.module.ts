import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {WikipediaService} from "../../core/services/http/wikipedia.service";
import {DescriptionComponent} from "./description.component";
import {SharedModule} from "../../shared/shared.module";
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  declarations: [DescriptionComponent],
  imports: [CommonModule, WikipediaService, SharedModule, MatGridListModule]
})
export class DescriptionModule {}
