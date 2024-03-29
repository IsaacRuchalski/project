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

  /**
   * Va créer une popup Leaflet.js au contact de la map.
   * Le souci des popups de Leaflet.js, c'est qu'elles n'acceptent pas les composants Angular.
   * Je dois donc décrire leur HTML/CSS plus bas, dans une chaîne de caractères. Ce n'est pas beau, mais c'est fonctionnel ! :D
   * @param name le nom du pays cible
   * @param instruments Les instruments correspondants
   * @returns une chaîne de caractères d'HTML CSS comprenant la popup entière
   */
  makePopup(name : string, instruments : Instrument[]): string {
    var html: string = "<h3>" + name + "</h3>";
    html += "<div id = 'grid'>";

    instruments.forEach((instrument) => {
      var name = instrument.name
        ? instrument.name.charAt(0).toUpperCase() + instrument.name.substr(1).toLowerCase()
        : "";
      html += "<a href = '/instruments/" + instrument.name + "' target = ''><div id = 'grid-element'><p>" + name + "</p>";
      html += "<img src = '" + instrument.img + "'>" + "</div></a>";
    });
    html += "</div>";

    //Mise en forme de la popup
    html += "<style>";
    html += ".popupCustom .leaflet-popup-tip, .popupCustom .leaflet-popup-content-wrapper {background-color: var(--main-txt); color: var(--main-background);}";
    html += ".leaflet-popup-content-wrapper {border: 1px solid var(--main-background); width: 100%;}";
    html += ".mat-h3, .mat-subheading-2, .mat-typography h3 {font-family: 'Itim';}";
    html += ".leaflet-container a.leaflet-popup-close-button {color: var(--main-background);}";
    html += ".popupCustom a {text-decoration: none; color: var(--main-txt); border: 1px solid var(--main-txt); border-radius: 10px;}";
    html += ".popupCustom a:hover {text-decoration: underline;}";
    html += "#grid-element p {color: var(--main-background); font-size: 1.25em; margin: 10px; }";
    html += "img{ max-height: 95px; max-width: 80px;}";
    html += "#grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(45%, 2fr)); min-width: 200px; gap: 10px; max-height: 330px; overflow-y: auto;}";
    html += "#grid-element { display: flex; flex-direction: column; align-items:center; width: 100%; height: auto;}";
    html += ".popupCustom a:hover {border: 1px solid var(--main-background);}";
    html += "::-webkit-scrollbar {width: 10px; background: #555555} ::-webkit-scrollbar-track {background: #555555);}";
    html += "::-webkit-scrollbar-thumb {background: var(--main-background);} ::-webkit-scrollbar-thumb:hover {background: var(main--background); cursor: pointer;}";
    html += "</style>";
    return html;
  }
}
