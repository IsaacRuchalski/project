import {Pipe, PipeTransform} from "@angular/core";
import {Famille} from "src/app/core/models/famille";
import {FamilleService} from "src/app/core/services/http/famille.service";
import {InstrumentService} from "src/app/core/services/http/instrument.service";

@Pipe({name: "famille"})
export class FamillePipe implements PipeTransform {
  private pip !: Famille;
  private familles: string[];
  private familles$ !: Famille[];
  constructor(private familleService : FamilleService) {}
  transform(value : number, ...args : unknown[]): string {
    //this.familleService.getById(value).subscribe((pipe : Famille) => (this.pip = pipe));
    var val: string = "";
    switch (value) {
      case 1:
        val = "cordes frottées";
        break;
      case 2:
        val = "cordes pincées";
        break;
      case 3:
        val = "cordes frappées";
        break;
      case 4:
        val = "à anche simple";
        break;
      case 5:
        val = "à anche double";
        break;
      case 6:
        val = "à anche libre";
        break;
      case 7:
        val = "à biseau";
        break;
      case 8:
        val = "à embouchure";
        break;
      default:
        val = "Instrument de musique";
        break;
    }
    return val;
  }
}
