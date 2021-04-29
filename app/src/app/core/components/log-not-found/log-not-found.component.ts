import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthPageComponent } from 'src/app/pages/auth-page/auth-page.component';

@Component({
  selector: 'app-log-not-found',
  templateUrl: './log-not-found.component.html',
  styleUrls: ['./log-not-found.component.scss']
})
export class LogNotFoundComponent implements OnInit {

  constructor(public dialog : MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AuthPageComponent, {restoreFocus: false});
  }

  refresh(){

    location.reload();

  }
}
