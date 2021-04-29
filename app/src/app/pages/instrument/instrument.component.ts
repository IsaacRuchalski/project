import {Component, OnChanges, OnInit, ViewChild} from "@angular/core";
import {Instrument} from "../../core/models/instrument";
import {Observable, of} from "rxjs";
import {InstrumentService} from "../../core/services/http/instrument.service";
import {map} from "rxjs/operators";
import {CountryComponent} from "../../core/components/country/country.component";
import {MatPaginator, MatPaginatorModule, PageEvent} from "@angular/material/paginator";
import {AuthServiceService} from "../../core/services/firebase/auth-service.service";
import { MatDialog } from "@angular/material/dialog";
import { AddDialogComponent } from "./add-dialog/add-dialog.component";
import { Router } from "@angular/router";

@Component({selector: "app-instrument", templateUrl: "./instrument.component.html", styleUrls: ["./instrument.component.scss"]})
export class InstrumentComponent implements OnInit,OnChanges {
  @ViewChild(MatPaginator)paginator: MatPaginator;
  public search: string = "";
  instruments: Instrument[] = [];
  instruments$: Observable<Instrument[]> = this.InstrumentService.get();

  constructor(private InstrumentService : InstrumentService, public authService : AuthServiceService, private dialog: MatDialog, private router: Router) {
    if(this.authService!== null){ 
    console.log(this.authService.isVerified())}

  }

  public lowValue = 0;
  public highValue = 12;
  ngOnInit(): void {
    this.InstrumentService.get().subscribe((instruments) => (this.instruments = instruments));
  }

  public getPaginatorData(event : PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }

  public onKey(event : any) {
    console.log(event.target.value);
    this.paginator.pageIndex = 0;
    this.lowValue = 0;
    this.highValue = 12;
  }

  addInstrument(){

    const dialogRef = this.dialog.open(AddDialogComponent)
    .afterClosed().subscribe(

      () => {
        window.location.reload()
       }
       );
 
  }

  ngOnChanges(){

    this.InstrumentService.get().subscribe((instruments) => (this.instruments = instruments));
    location.reload();

  }
  //public getSearchData(search)
}
