import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {delay} from "rxjs/operators";

@Injectable({providedIn: "root"})
export class ShapeService {
  constructor(private http : HttpClient) {}

  get() {
    return this.http.get("/assets/map/countries.geojson");
  }
}
