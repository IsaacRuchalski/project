import {Component, OnInit, Input} from "@angular/core";
import {CountryService} from "../../services/http/country.service";

@Component({selector: "app-traduction", templateUrl: "./traduction.component.html", styleUrls: ["./traduction.component.scss"]})
export class TraductionComponent implements OnInit {
  constructor(private countryService : CountryService) {}

  @Input()country: string;
  ngOnInit(): void {
    if (this.country !== undefined) {
      if (this.country == "South Korea") 
        this.country = "Korea (Republic of)"; //cas spécial Corée du sud avec API
      this.countryService.getTraduction(this.country).toPromise().then((trad) => (this.country = trad[0].translations.fr));
    }
  }
}
