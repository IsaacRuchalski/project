import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {InstrumentService} from "../../core/services/http/instrument.service";
import {Instrument} from "../../core/models/instrument";
import {Observable} from "rxjs";
import {WikipediaService} from "../../core/services/http/wikipedia.service";
import {CountryService} from "../../core/services/http/country.service";
import {map} from "rxjs/operators";
import {AuthServiceService} from "../../core/services/firebase/auth-service.service";


@Component({selector: "app-instrument-details", templateUrl: "./instrument-details.component.html", styleUrls: ["./instrument-details.component.scss"]})
export class InstrumentDetailsComponent implements OnInit {
	public instrument: Instrument;
	public name = "abc";
	public instrument$: Observable < Instrument > ;
	public descWiki: boolean = true;
	public isInEditMode: boolean = false;
	public verification: boolean = !this.authService.isLoggedIn() && (!this.authService.isUserAnonymousLoggedIn || !this.authService.isVerified());

	public nom
	public desc;
	public origine;
	public familleId;
	public descriptionWiki
	public id;
	public img;
	constructor(private route: ActivatedRoute, private location: Location, private instrumentService: InstrumentService, private wikipedia: WikipediaService, public countryService: CountryService, public authService: AuthServiceService, private router: Router) {}

	wikipediaDescription;
	ngOnInit(): void {

		this.getInstrument();
	}

	getInstrument(): void {
		const id = this.route.snapshot.paramMap.get("id");

		this.instrumentService.getInstrument(id).subscribe((instrument) => {

			this.img = instrument[0].img;
			this.instrument = instrument[0];
			this.nom = this.instrument.name;
			this.desc = this.instrument.description;
			this.origine = this.instrument.origin;
			this.descriptionWiki = this.instrument.wikiSearch;
			this.familleId = this.formattedFamilleToTxt(this.instrument.familleId);

		});

		this.wikipedia.getArticle("fr", id);
	}

	formatWiki(desc: string) {
	//	console.log("DESC : " + desc.length)
		if (desc === "Pas de description wikipedia" || desc.length == 0) {
			this.descWiki = false;
		}
	}

	toggleEditMode() {
		var val: boolean;
		if (!this.isInEditMode) {

			val = true;


		} else {

			val = false;

		}

		this.isInEditMode = val;
		//console.log(val)

		return val;

	}

	modifyInstrument(id) {
		this.id = id;
		var instr: Instrument = {
			id: id,
			name: this.nom,
			description: this.desc,
			img: this.img,
			origin: this.origine.charAt(0).toUpperCase() + this.origine.slice(1),
			familleId: this.formattedFamille(this.familleId),
			wikiSearch: this.descriptionWiki



		}


		this.instrumentService.modifyInstrument(instr).subscribe((instrument: Instrument) => {

			this.img = instrument[0].img;
			this.instrument = instrument[0];
			this.nom = instrument.name;
			this.desc = instrument.description;
			this.origine = instrument.origin;
			this.descriptionWiki = instrument.wikiSearch;
			this.familleId = this.formattedFamilleToTxt(instrument.familleId);




		});

		this.router.navigate(["/instruments/" + this.nom]);

		setTimeout(() => {
			location.reload();
		}, 500);



	}

	deleteInstrument(id) {


		this.instrumentService.deleteInstrument(id).subscribe(() => {



			this.router.navigateByUrl('/', {
				skipLocationChange: true
			}).then(() => {
					this.router.navigate(['/instruments']).then(() => window.location.reload())


				}



			);


		});


	}

	formattedFamille(val) {

		var value;
		switch (val) {
			case "cordes frottées":
				value = 1
				break;
			case "cordes pincées":
				value = 2;
				break;
			case "cordes frappées":
				value = 3;
				break;
			case "à anche simple":
				value = 4;
				break;
			case "à anche double":
				value = 5;
				break;
			case "à anche libre":
				value = 6;
				break;
			case "à biseau":
				value = 7;
				break;
			case "à embouchure":
				value = 8;
				break;
			case "à anches multiples":
				value = 9;
				break;
			case "percussion":
				value = 10;
				break;
		}

		return value;
	}

	formattedFamilleToTxt(value) {
		var val;
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
			case 9:
				val = "à anches multiples";
				break;
			case 10:
				val = "percussion";
				break;
			default:
				val = "Instrument de musique";
				break;
		}
		return val;
	}

}