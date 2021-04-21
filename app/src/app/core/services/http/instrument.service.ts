import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Instrument} from "../../models/instrument";

@Injectable()
export class InstrumentService {
  constructor(private http : HttpClient) {}

  get() {
    return this.http.get<Instrument[]>("https://evening-brushlands-19063.herokuapp.com/instruments");
  }

  getByOrigin(origin : string) {
    return this.http.get<Instrument[]>("https://evening-brushlands-19063.herokuapp.com/instruments?origin=" + encodeURIComponent(origin));
  }

  getInstrument(name : string) {
    return this.http.get<Instrument>("https://evening-brushlands-19063.herokuapp.com/instruments?name=" + encodeURIComponent(name));
  }
}
