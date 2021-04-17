import {Component, OnInit} from "@angular/core";
import {Instrument} from "../core/models/instrument";
import {Observable, of} from "rxjs";
import {InstrumentService} from "../core/services/http/instrument.service";
import {map} from "rxjs/operators";
import {CountryComponent} from "../core/components/country/country.component";

@Component({selector: "app-instrument", templateUrl: "./instrument.component.html", styleUrls: ["./instrument.component.scss"]})
export class InstrumentComponent implements OnInit {
  displayedColumns: string[] = [
    "id",
    "Name",
    "Description",
    "Image",
    "Famille",
    "Origine"
  ];
  instruments: Instrument[] = [];
  instruments$: Observable<Instrument[]> = this.InstrumentService.get();

  constructor(private InstrumentService : InstrumentService) {}

  ngOnInit(): void {}
}
