import {Pipe, PipeTransform} from "@angular/core";
import {CountryService} from "src/app/core/services/http/country.service";

@Pipe({name: "countryTrad", pure: true})
export class CountryTradPipe implements PipeTransform {
  value: string;
  constructor(private countryService : CountryService) {}
  transform(value : string, country : string, trad : string): string {
    if (country == "South Korea") {
      country = "Korea (Republic of)";
    }
    this.countryService.getTraduction(country).toPromise().then((trad) => (country = trad[0].translations.fr));

    return country;
  }
}
