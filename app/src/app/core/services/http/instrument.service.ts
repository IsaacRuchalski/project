import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import { Observable } from "rxjs";
import { Famille } from "../../models/famille";
import {Instrument} from "../../models/instrument";

@Injectable()
export class InstrumentService {
  constructor(private http : HttpClient) {}

  /**
   * Récupère tous les instruments
   * @returns une Observable d'instruments
   */
  get() {
    return this.http.get<Instrument[]>("https://evening-brushlands-19063.herokuapp.com/instruments");
  }
/**
 * Récupère les instruments correspondant à l'origine cible
 * @param origin Le pays d'origine
 * @returns Une observable d'instruments
 */
  getByOrigin(origin : string) {
    return this.http.get<Instrument[]>("https://evening-brushlands-19063.herokuapp.com/instruments?origin=" + encodeURIComponent(origin));
  }

  /**
   * récupère un instrument grâce à son nom
   * @param name le nom de l'instrument
   * @returns une observable avec l'instrument
   */
  getInstrument(name : string) {
    return this.http.get<Instrument>("https://evening-brushlands-19063.herokuapp.com/instruments?name=" + encodeURIComponent(name));
  }

  /**
   * Modifie l'instrument
   * @param instrument l'instrument mis à jour
   * @returns une Observable de l'instrument mis à jour
   */
  modifyInstrument(instrument: Instrument){


    var body = instrument;
    
    
    return this.http.put<Instrument>("https://evening-brushlands-19063.herokuapp.com/instruments/"+instrument.id, body)

  }

  /**
   * Va enlever un instrument
   * @param id l'id de linstrument à enlever
   * @returns une observable
   */
  deleteInstrument(id: number): Observable<any> {

    return this.http.delete("https://evening-brushlands-19063.herokuapp.com/instruments/"+id);

  }

  /**
   * fait un post sur l'API pour ajouter un instrument
   * @param instrument un Instrument sans id
   * @returns Une observable contenant l'instrument
   */
  addInstrument(instrument: Object): Observable<Object>{


    return this.http.post("https://evening-brushlands-19063.herokuapp.com/instruments/",instrument);

  }

/**
 * Récupère toutes les familles
 * @returns une observable de familles
 */
  getFamilles(): Observable<Famille[]> {
    return this.http.get<Famille[]>("https://evening-brushlands-19063.herokuapp.com/familles/");
  }
}
