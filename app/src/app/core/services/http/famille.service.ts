import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Famille} from "../../models/famille";

@Injectable({providedIn: "root"})
export class FamilleService {
  constructor(private http : HttpClient) {}

  get() {
    return this.http.get<Famille[]>("https://evening-brushlands-19063.herokuapp.com/familles");
  }

  getById(famille : number) {
    return this.http.get<Famille>("https://evening-brushlands-19063.herokuapp.com/familles/" + famille);
  }
}
