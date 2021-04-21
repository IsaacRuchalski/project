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

  ngOnInit(): void {
    if (this.name !== undefined) {
      this.flag$ = this.countryService.getFlag(this.name);
      this.flag$.subscribe((country : Country) => {
        this.flag = country[0].flag;
      });
    }
  }
}
