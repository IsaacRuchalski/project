import {HttpClient} from "@angular/common/http";
import {Component, AfterViewInit} from "@angular/core";

import * as L from "leaflet";
import {Observable} from "rxjs";
import {timeout} from "rxjs/operators";
import {Instrument} from "../core/models/instrument";
import {InstrumentService} from "../core/services/http/instrument.service";
import {PopupService} from "../core/services/http/popup.service";
import {ShapeService} from "../core/services/map/shape.service";

@Component({selector: "app-map", templateUrl: "./map.component.html", styleUrls: ["./map.component.scss"]})
export class MapComponent implements AfterViewInit {
  public STYLES = {
    weight: 2,
    opacity: 0.9,
    color: "#C2185B",
    fillOpacity: 0.8,
    fillColor: "#1a1a1a"
  };

  public STYLES_CLICKED = {
    weight: 2,
    opacity: 1.0,
    color: "#9f144b",
    fillOpacity: 0.8,
    fillColor: "#C2185B"
  };

  private map: any;
  private shapes: any;
  private instruments$?: Observable<Instrument[]>;
  private instruments: Instrument[] = [];

  constructor(private shapeService : ShapeService, private popupService : PopupService, private instrumentService : InstrumentService, private http : HttpClient) {}

  ngAfterViewInit(): void {
    this.initMap();

    this.shapeService.get().subscribe((shapes) => {
      this.shapes = shapes;
      console.log(this.shapes);
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

    const tiles = L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      maxZoom: 18,
      minZoom: 1
    });

    tiles.addTo(this.map);
  }

  //SHAPES
  private initLayer() {
    var instruments: Observable<Instrument[]>;
    const Layer = L.geoJSON(this.shapes, {
      style: (feature) => this.STYLES,

      onEachFeature: (feature, layer) => (layer.bindPopup("", {className: "popupCustom"}), layer.on({
        mouseover: (e : any) => this.highlightFeature(e),
        mouseout: (e : any) => this.resetFeature(e),
        mousedown: (e) => {
          this.instrumentService.getByOrigin(feature.properties.ADMIN).subscribe((instruments) => (this.instruments = instruments)),
          setTimeout(() => {
            layer.setPopupContent(this.popupService.makePopup(feature.properties.ADMIN, this.instruments));
          }, 350);
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
