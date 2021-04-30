import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Country} from "../../models/country";

@Injectable({providedIn: "root"})
export class CountryService {
  constructor(private http : HttpClient) {}
  /**
   * Récupère un objet JSON qui va contenir un lien vers le drapeau.
   * Pourquoi utiliser une API pour ça ? Réponse simple : Imaginons que j'utilise un lien fixe.
   * Comment le stocker ? Où ? Et si l'image n'est plus disponible ?
   * Utiliser une API pour obtenir une image garantit que ce que j'interroge ne disparaîtra pas et va toujours me rediriger vers une image fonctionnelle.
   * @param name le nom du pays
   * 
   * @returns une Observable de pays
   */
  getFlag(name : string): Observable<Country> {
    
    return this.http.get<Country>("https://restcountries.eu/rest/v2/name/" + encodeURIComponent(name) + "?fields=flag");
  }

  /**
   * Récupère les traductions du nom d'un pays
   * @param country un pays à traduire
   * @returns une observable avec toutes les traductions
   */
  getTraduction(country : string): Observable<Object> {
    return this.http.get<Country>("https://restcountries.eu/rest/v2/name/" + encodeURIComponent(country) + "?fields=translations");
  }
}
