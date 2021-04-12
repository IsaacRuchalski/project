import { Injectable } from '@angular/core';
import { Instrument } from '../../models/instrument';
import { InstrumentService } from './instrument.service';

@Injectable({
  providedIn: 'root'
})


export class PopupService {



  private instruments?: Instrument[];

  constructor(private instrumentService: InstrumentService) { 

    


  }


  makePopup(name:any): string {

   var country = name.properties.ADMIN
    

   
    return(this.formatPopup(country))

   }

   formatPopup(name: string):string{

    var html = "<h2>"+name+"</h2>";

    this.instrumentService.getByOrigin(name).subscribe(instrument => this.instruments = instrument);
    if(this.instruments != null){
    this.instruments.forEach(instrument => {
      
      html += "<h2>"+instrument.name+"</h2>"
      
      
    });

   

    }

    return(html)

   }
}
