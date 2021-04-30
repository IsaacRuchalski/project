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

  /**
   * Cette page est générée quand un utilisateur essaie d'accéder à une page à laquelle il ne peut pas accéder. Le bouton Se Connecter ouvre la boîte de dialog
   */
  openDialog() {
    const dialogRef = this.dialog.open(AuthPageComponent, {restoreFocus: false});
  }

  refresh(){

    location.reload();

  }
}
