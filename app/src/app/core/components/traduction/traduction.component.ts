import {Component, OnInit, Input} from "@angular/core";
import {CountryService} from "../../services/http/country.service";

@Component({selector: "app-traduction", templateUrl: "./traduction.component.html", styleUrls: ["./traduction.component.scss"]})
export class TraductionComponent implements OnInit {
  constructor(public countryService : CountryService) {}

  public isFound: boolean = false;
  public pays: string;
  @Input()country: string;

  /**
   * Ce composant sert uniquement à la traduction. Puisque qu'une Observable dans un pipe est une mauvaise idée, j'utilise un composant.
   * Ce composant va récupérer la traduction française des noms de pays anglais sur l'API RestCountries.
   * Quelques soucis: Certains pays ont une traduction approximative. Par exemple , "India" est traduit "Territoire britannique de l'océan indien" et non Inde.
   * Mais cela n'est pas de mon ressort, mais du ressort des devs de l'API.
   */
  ngOnInit(): void {
    if (this.country !== undefined) {
      if (this.country == "South Korea") 
        this.country = "Korea (Republic of)"; //cas spécial Corée du sud avec API
      this.countryService.getTraduction(this.country).toPromise().then((trad) => {
        this.country = trad[0].translations.fr;
        this.pays = this.country;

        if (this.pays !== undefined) {
          this.isFound = true;
        }
      });
    }
  }
}
