import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {delay} from "rxjs/operators";

@Injectable({providedIn: "root"})
export class ShapeService {
  constructor(private http : HttpClient) {}

  /**
   * Cette méthode va récupérer les Shapes et formes du format geojson dans les assets
   * @returns une Observable de Shapes
   */
  get() {
    return this.http.get("/assets/map/countries.geojson");
  }
}
