import {Pipe, PipeTransform} from "@angular/core";
import {Instrument} from "../../core/models/instrument";
@Pipe({name: "filter"})
export class FilterPipe implements PipeTransform {
  transform(items : any[], searchText : string): any[]{
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter((it : Instrument) => {
      return it.name.toLowerCase().includes(searchText);
    });
  }
}
