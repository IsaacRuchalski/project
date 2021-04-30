import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable({providedIn: "root"})
export class WikipediaService {
  constructor(private http : HttpClient) {}
/**
 * Cette fonction sert à effectuer une recherche sur Wiki grâce à l'API MediaWiki. 
 * Cela va effectuer une recherche, récupérer le premier résultat de recherche, aller sur l'article de ce résultat et récupérer le premier paragraphe.
 * ça permet de récupérer facilement un paragraphe Wikipedia ! Seul bémol : On perd le formattage des paragraphes
 * @param lang Le language (FR de base)
 * @param name ce que je dois chercher sur Wikipedia
 * @returns Une observable avec une l'article Wikipedia
 */
  getArticle(lang : string, name : string): Observable<any> {
    name = name.replace(" ", "_");

    return this.http.get("https://" + lang + ".wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=" + name + "&origin=*&formatversion=2");
  }
}
