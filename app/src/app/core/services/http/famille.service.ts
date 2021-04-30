import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Famille} from "../../models/famille";

@Injectable({providedIn: "root"})
export class FamilleService {
  constructor(private http : HttpClient) {}

  /**
   * Récupère les familles d'intruments
   * @returns une Observable de familles
   */
  get() {
    return this.http.get<Famille[]>("https://evening-brushlands-19063.herokuapp.com/familles");
  }

  /**
   * Récupère une famille précise
   * @param famille l'id de la famille cible
   * @returns la famille
   */
  getById(famille : number) {
    return this.http.get<Famille>("https://evening-brushlands-19063.herokuapp.com/familles/" + famille);
  }
}
