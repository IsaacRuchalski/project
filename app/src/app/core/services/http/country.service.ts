import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Country} from "../../models/country";

@Injectable({providedIn: "root"})
export class CountryService {
  constructor(private http : HttpClient) {}

  getFlag(name : string): Observable<Country> {
    //  console.log("https://restcountries.eu/rest/v2/name/" + encodeURIComponent(name) + "?fields=flag");
    return this.http.get<Country>("https://restcountries.eu/rest/v2/name/" + encodeURIComponent(name) + "?fields=flag");
  }
}
