import {JsonPipe} from "@angular/common";
import {Component, Input, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {Country} from "../../models/country";

import {CountryService} from "../../services/http/country.service";

@Component({selector: "app-country", templateUrl: "./country.component.html", styleUrls: ["./country.component.scss"]})
export class CountryComponent implements OnInit {
  public flag$ !: Observable<Country>;
  public flag !: string;
  @Input()name: string;
  constructor(private countryService : CountryService) {}
/**
 * Ce component va gérer le drapeau, en utilisant CountryService pour afficher le drapeau correspondant à un nom de pays demandé.
 * Ici, il y a une gestion de cas particuliers , par exemple la Corée du Sud est appelée "Korea (Republic of)" sur l'API RestCountries.
 * Il faut donc gérer les cas où l'utilisateur va par exemple noter "South Korea"
 */
  ngOnInit(): void {
    if (this.name !== undefined) {
      if (this.name == "South Korea") 
        this.name = "Korea (Republic of)"; //cas spécial Corée du sud avec API
      this.flag$ = this.countryService.getFlag(this.name);
      this.flag$.subscribe((country : Country) => {
        this.flag = country[0].flag;
      });
    }
  }
}
