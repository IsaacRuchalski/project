import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {InstrumentService} from "../core/services/http/instrument.service";
import {Instrument} from "../core/models/instrument";
import {Observable} from "rxjs";
import {WikipediaService} from "../core/services/http/wikipedia.service";

@Component({selector: "app-instrument-details", templateUrl: "./instrument-details.component.html", styleUrls: ["./instrument-details.component.scss"]})

//Pour que l'encapsulation n'ait pas lieu, j'utilise encapsulation.None
export class InstrumentDetailsComponent implements OnInit {
  public instrument: Instrument;
  public name = "abc";
  public instrument$: Observable<Instrument>;
  public descWiki: boolean = true;
  constructor(private route : ActivatedRoute, private location : Location, private instrumentService : InstrumentService, private wikipedia : WikipediaService) {}

  wikipediaDescription;
  ngOnInit(): void {
    this.getInstrument();
  }

  getInstrument(): void {
    const id = this.route.snapshot.paramMap.get("id");

    this.instrumentService.getInstrument(id).subscribe((instrument) => (this.instrument = instrument[0]));
    this.wikipedia.getArticle("fr", id);
  }

  formatWiki(desc : string) {
    if (desc === "Pas de description wikipedia") {
      this.descWiki = false;
    }
  }
}
