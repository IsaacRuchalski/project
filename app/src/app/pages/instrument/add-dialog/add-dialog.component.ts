import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Famille } from 'src/app/core/models/famille';
import { Instrument } from 'src/app/core/models/instrument';
import { InstrumentService } from 'src/app/core/services/http/instrument.service';
@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {

	checkoutForm = this.formBuilder.group({
		name: '',
		description: '',
		img: '',
		familleId: '',
		origin: '',
		wikiSearch: ''

	});

	public familles$: Observable < Famille[] > ;

	constructor(private formBuilder: FormBuilder, private instrumentService: InstrumentService, private dialog: MatDialog) {}

	ngOnInit(): void {

		this.familles$ = this.instrumentService.getFamilles()
	}


	onSubmit() {

		this.instrumentService.addInstrument(this.checkoutForm.value).subscribe((instrument: Instrument) => {


			if (instrument !== undefined) {

				console.log(instrument)
				console.log(instrument.name + " ajouté avec succès !")

			}


		});
	}
}