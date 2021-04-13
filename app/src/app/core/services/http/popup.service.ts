import {Injectable} from "@angular/core";
import {FeatureGroup} from "leaflet";
import {Observable} from "rxjs";
import {Instrument} from "../../models/instrument";
import {InstrumentService} from "./instrument.service";

@Injectable({providedIn: "root"})
export class PopupService {
  public instruments?: Instrument[];
  public html: string = "";
  constructor(private instrumentService : InstrumentService) {}

  makePopup(name : string): string {
    this.instruments = [];
    var html = "";
    this.instrumentService.getByOrigin(name).subscribe((instruments) => {
      this.instruments = instruments;
      console.log(instruments);

      instruments.forEach((instrument) => {
        html += '<div id = "grid-element">' + '<a href = "#">' + instrument.name + '</a><img src = "' + instrument.img + '">' + "</div>";
      });
    });

    return name + html;
  }
}
