import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Instrument } from '../../models/instrument';

@Injectable()
export class InstrumentService {


  constructor(private http: HttpClient) { }


  get(){


    return this.http.get<Instrument[]>("https://evening-brushlands-19063.herokuapp.com/instruments");
  }
}

