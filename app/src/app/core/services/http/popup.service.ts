import {Injectable} from "@angular/core";
import {FeatureGroup} from "leaflet";
import {BehaviorSubject, Observable} from "rxjs";
import {timeout} from "rxjs/operators";
import {Instrument} from "../../models/instrument";
import {InstrumentService} from "./instrument.service";

@Injectable({providedIn: "root"})
export class PopupService {
  public instruments?: Instrument[];
  public instruments$?: Observable<Instrument[]>;
  public instrs: string[];
  public html: string = "";
  constructor(private instrumentService : InstrumentService) {
    this.instrs = [];
  }

  makePopup(name : string, instruments : Instrument[]): string {
    var html: string = "<h3>" + name + "</h3>";
    html += "<div id = 'grid'>";

    instruments.forEach((instrument) => {
      html += "<div id = 'grid-element'><a href = 'https://www.google.com/search?q=" + instrument.name + "' target = '_blank'>" + instrument.name + "</a>";
      html += "<img src = '" + instrument.img + "'>" + "</div>";
    });
    html += "</div>";

    html += "<style>";
    html += ".popupCustom .leaflet-popup-tip, .popupCustom .leaflet-popup-content-wrapper {background-color: #333333; color: #C2185B;}";
    html += ".leaflet-popup-content-wrapper {border: 1px solid #C2185B; width: 100%;}";
    html += ".leaflet-container a.leaflet-popup-close-button {color: #C2185B;}";
    html += "#grid-element a {color: #C2185B; font-size: 1.25em;}";
    html += "img{ max-height: 75px;}";
    html += "#grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(45%, 2fr)); width: 300px; gap: 10px; max-height: 250px; overflow-y: auto;}";
    html += "#grid-element { display: flex; flex-direction: column; align-items:center; width: 100%; height: auto;}";
    html += "</style>";
    return html;
  }
}

/*

 makePopup(name : any): string {
        var html = "";
    name.forEach((instrument : Instrument) => {
      html += instrument.name;
    });

    this.procPromise(name);
    console.log("HTML APRES " + this.html);
    return name + this.html;
  }

  procPromise(name : string): void {
    this.makePromise(name).then((instruments) => {
      instruments.forEach((instrument : Instrument) => {
        this.html += instrument.name;
      });
    });
  }

  makePromise(name : string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.instrumentService.getByOrigin(name).subscribe((instruments) => resolve(instruments));
    });
  }*/
