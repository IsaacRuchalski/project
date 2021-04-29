import {HttpClient} from "@angular/common/http";
import {THIS_EXPR} from "@angular/compiler/src/output/output_ast";
import {Component, AfterViewInit} from "@angular/core";

import * as L from "leaflet";
import {Observable} from "rxjs";
import {ComplexOuterSubscriber} from "rxjs/internal/innerSubscribe";
import {timeout} from "rxjs/operators";
import {Instrument} from "../../core/models/instrument";
import {CountryService} from "../../core/services/http/country.service";
import {InstrumentService} from "../../core/services/http/instrument.service";
import {PopupService} from "../../core/services/http/popup.service";
import {ShapeService} from "../../core/services/map/shape.service";

@Component({selector: "app-map", templateUrl: "./map.component.html", styleUrls: ["./map.component.scss"]})
export class MapComponent implements AfterViewInit {
  public COLORS = {
    background: "#d2d3a7",
    "background-clicked": "#b1b266",
    txt: "#222222"
  };
  public STYLES = {
    weight: 1,
    opacity: 1,
    color: this.COLORS.txt,
    fillOpacity: 1,
    fillColor: this.COLORS.background
  };

  public STYLES_CLICKED = {
    weight: 2,
    opacity: 1.0,
    color: this.COLORS.txt,
    fillOpacity: 1,
    fillColor: this.COLORS["background-clicked"]
  };

  private map: any;
  private shapes: any;
  private instruments$?: Observable<Instrument[]>;
  private instruments: Instrument[] = [];

  constructor(private shapeService : ShapeService, private popupService : PopupService, private instrumentService : InstrumentService, private http : HttpClient, private countryService : CountryService) {}

  ngAfterViewInit(): void {
    this.initMap();

    this.shapeService.get().subscribe((shapes) => {
      this.shapes = shapes;
      this.initLayer();
    });
  }

  private initMap(): void {
    this.map = L.map("map", {
      center: [
        46.22, 2.2
      ],
      zoom: 3
    });

    const tiles = L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png", {
      maxZoom: 18,
      minZoom: 1
    });

    tiles.addTo(this.map);
  }

  //SHAPES
  private initLayer() {
    var instruments: Observable<Instrument[]>;
    var tradu: string;
    var title: string;
    const Layer = L.geoJSON(this.shapes, {
      style: (feature) => this.STYLES,

      onEachFeature: (feature, layer) => (layer.bindPopup("", {className: "popupCustom"}), layer.on({
        mouseover: (e : any) => this.highlightFeature(e),
        mouseout: (e : any) => this.resetFeature(e),
        mousedown: (e) => {
          /*   this.countryService.getTraduction(feature.properties.ADMIN).subscribe((trad) => {
            if (!trad.hasOwnProperty("error")) {
              tradu = trad[0].translations.fr;
            } else {
              tradu = feature.properties.ADMIN;
            }
          });*/

          this.instrumentService.getByOrigin(feature.properties.ADMIN).subscribe((instruments) => (this.instruments = instruments)),
          setTimeout(() => {
            layer.setPopupContent(this.popupService.makePopup(feature.properties.ADMIN, this.instruments));
          }, 400);
        }
      }))
    });
    this.map.addLayer(Layer);
  }

  private highlightFeature(e : any) {
    const layer = e.target;
    layer.setStyle(this.STYLES_CLICKED);
  }

  private resetFeature(e : any) {
    const layer = e.target;
    layer.setStyle(this.STYLES);
  }

  private onEachFeature(feature : any, layer : any) {
    // does this feature have a property named popupContent?
    var instruments = [];

    //  layer.bindPopup(this.popupService.makePopup(feature.properties.ADMIN));
  }
}
