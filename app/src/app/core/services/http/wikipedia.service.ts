import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable({providedIn: "root"})
export class WikipediaService {
  constructor(private http : HttpClient) {}

  getArticle(lang : string, name : string): Observable<any> {
    name = name.replace(" ", "_");

    return this.http.get("https://" + lang + ".wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=" + name + "&origin=*&formatversion=2");
  }
}
